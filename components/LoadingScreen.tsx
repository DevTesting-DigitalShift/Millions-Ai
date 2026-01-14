"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

type Phase = "forming" | "stable" | "breaking" | "vanishing" | "reset";

interface Cube {
  id: string;
  x: number;
  y: number;
  letter: string;
  delay: number;
  row: number;
  col: number;
  element?: HTMLDivElement;
}

// Define MRI letters using a grid pattern
const letterPatterns: Record<string, number[][]> = {
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  R: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
};

const CUBE_SIZE = 12;
const GAP = 2;
const LETTER_GAP = 20;

// Seeded random for consistent values
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const LoadingScreen = () => {
  const [phase, setPhase] = useState<Phase>("forming");
  const cubeRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Generate cubes for MRI letters
  const cubes = useMemo(() => {
    const result: Cube[] = [];
    const letters = ["M", "R", "I"];
    let offsetX = 0;

    letters.forEach((letter, letterIndex) => {
      const pattern = letterPatterns[letter];
      const letterWidth = pattern[0].length * (CUBE_SIZE + GAP);

      pattern.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell === 1) {
            result.push({
              id: `${letter}-${rowIndex}-${colIndex}`,
              x: offsetX + colIndex * (CUBE_SIZE + GAP),
              y: rowIndex * (CUBE_SIZE + GAP),
              letter,
              delay: letterIndex * 0.08 + rowIndex * 0.02 + colIndex * 0.01,
              row: rowIndex,
              col: colIndex,
            });
          }
        });
      });

      offsetX += letterWidth + LETTER_GAP;
    });

    // Center the cubes
    const totalWidth = offsetX - LETTER_GAP;
    return result.map((cube) => ({
      ...cube,
      x: cube.x - totalWidth / 2,
      y: cube.y - (5 * (CUBE_SIZE + GAP)) / 2,
    }));
  }, []);

  // Pre-compute stable random values for horizontal dispersion
  const randomValues = useMemo(() => {
    const values: Record<
      string,
      {
        disperseX: number;
        fallDistance: number;
        rotation: number;
      }
    > = {};

    cubes.forEach((cube, index) => {
      const seed = index * 7 + cube.row * 13 + cube.col * 17;
      values[cube.id] = {
        disperseX: (seededRandom(seed) - 0.5) * 60, // Small horizontal spread
        fallDistance: 400 + seededRandom(seed + 1) * 200, // Fall downward 400-600px
        rotation: (seededRandom(seed + 2) - 0.5) * 180,
      };
    });

    return values;
  }, [cubes]);

  // GSAP animation sequence
  useEffect(() => {
    const runAnimation = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      // Phase 1: Forming - cubes drop in from top
      setPhase("forming");
      cubes.forEach((cube) => {
        const element = cubeRefs.current.get(cube.id);
        if (element) {
          tl.fromTo(
            element,
            {
              x: cube.x,
              y: cube.y - 60,
              opacity: 0,
              scale: 0.3,
              rotation: 0,
            },
            {
              x: cube.x,
              y: cube.y,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              delay: cube.delay,
            },
            0
          );
        }
      });

      // Phase 2: Stable hold
      tl.call(() => setPhase("stable"));
      tl.to({}, { duration: 1.0 });

      // Phase 3: Breaking - particles fall down and sideways
      tl.call(() => setPhase("breaking"));
      cubes.forEach((cube) => {
        const element = cubeRefs.current.get(cube.id);
        if (element) {
          const random = randomValues[cube.id];

          // Break apart and fall downward with gravity
          tl.to(
            element,
            {
              x: cube.x + random.disperseX,
              y: cube.y + random.fallDistance, // Fall downward
              rotation: random.rotation,
              scale: 0.3,
              opacity: 0,
              duration: 1.4,
              ease: "power1.in", // Gravity acceleration
              delay: cube.delay * 0.3,
            },
            2
          );
        }
      });

      // Phase 4: Reset
      tl.call(() => setPhase("reset"));
      tl.to({}, { duration: 0.4 });

      timelineRef.current = tl;
    };

    runAnimation();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [cubes, randomValues]);

  const setCubeRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      cubeRefs.current.set(id, el);
    }
  };

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden">
      <div className="relative" style={{ width: 200, height: 100 }}>
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {cubes.map((cube) => (
            <div
              key={cube.id}
              ref={setCubeRef(cube.id)}
              className="absolute bg-foreground origin-center will-change-transform"
              style={{
                width: CUBE_SIZE,
                height: CUBE_SIZE,
                left: "50%",
                top: "50%",
                marginLeft: -CUBE_SIZE / 2,
                marginTop: -CUBE_SIZE / 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle loading dots */}
      <div className="absolute bottom-16 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-pulse"
            style={{
              animationDelay: `${i * 200}ms`,
              animationDuration: "1200ms",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
