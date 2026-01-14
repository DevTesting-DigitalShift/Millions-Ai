"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, type Transition } from "framer-motion";

type Phase =
  | "forming"
  | "stable"
  | "cracking"
  | "falling"
  | "shattering"
  | "vanishing"
  | "reset";

type EasingArray = [number, number, number, number];

interface Cube {
  id: string;
  x: number;
  y: number;
  letter: string;
  delay: number;
  row: number;
  col: number;
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

const LoadingScreen = () => {
  const [phase, setPhase] = useState<Phase>("forming");

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

  // Animation sequence controller
  useEffect(() => {
    const runSequence = async () => {
      setPhase("forming");
      await new Promise((r) => setTimeout(r, 1000));

      setPhase("stable");
      await new Promise((r) => setTimeout(r, 1000));

      setPhase("cracking");
      await new Promise((r) => setTimeout(r, 500));

      setPhase("falling");
      await new Promise((r) => setTimeout(r, 600));

      setPhase("shattering");
      await new Promise((r) => setTimeout(r, 400));

      setPhase("vanishing");
      await new Promise((r) => setTimeout(r, 1200));

      setPhase("reset");
      await new Promise((r) => setTimeout(r, 300));
    };

    runSequence();
    const interval = setInterval(runSequence, 5000);
    return () => clearInterval(interval);
  }, []);

  // Unified animation function for each cube
  const getCubeStyle = (cube: Cube) => {
    const baseDelay = cube.delay;
    const fallOffset = 150 + cube.row * 20 + Math.sin(cube.col) * 30;
    const disperseX = (Math.random() - 0.5) * 300;
    const disperseY = 200 + Math.random() * 100;
    const rotation = (Math.random() - 0.5) * 180;

    switch (phase) {
      case "forming":
        return {
          x: cube.x,
          y: cube.y - 40,
          opacity: 0,
          scale: 0.6,
          rotate: 0,
        };
      case "stable":
        return {
          x: cube.x,
          y: cube.y,
          opacity: 1,
          scale: 1,
          rotate: 0,
        };
      case "cracking":
        return {
          x: cube.x + (Math.random() - 0.5) * 2,
          y: cube.y + (Math.random() - 0.5) * 2,
          opacity: 1,
          scale: 1,
          rotate: (Math.random() - 0.5) * 3,
        };
      case "falling":
        return {
          x: cube.x + (Math.random() - 0.5) * 8,
          y: cube.y + fallOffset,
          opacity: 1,
          scale: 0.9,
          rotate: (Math.random() - 0.5) * 15,
        };
      case "shattering":
        return {
          x: cube.x + disperseX * 0.3,
          y: cube.y + fallOffset + 30,
          opacity: 1,
          scale: 0.7,
          rotate: rotation * 0.5,
        };
      case "vanishing":
        return {
          x: cube.x + disperseX,
          y: cube.y + disperseY + fallOffset,
          opacity: 0,
          scale: 0,
          rotate: rotation,
        };
      case "reset":
        return {
          x: cube.x,
          y: cube.y - 40,
          opacity: 0,
          scale: 0.6,
          rotate: 0,
        };
      default:
        return {
          x: cube.x,
          y: cube.y,
          opacity: 1,
          scale: 1,
          rotate: 0,
        };
    }
  };

  const getTransition = (cube: Cube): Transition => {
    const baseDelay = cube.delay;

    switch (phase) {
      case "forming":
        return {
          duration: 0.6,
          delay: baseDelay,
          ease: [0.34, 1.56, 0.64, 1] as EasingArray,
        };
      case "stable":
        return {
          duration: 0.5,
          delay: baseDelay * 0.5,
          ease: [0.25, 0.1, 0.25, 1] as EasingArray,
        };
      case "cracking":
        return {
          duration: 0.15,
          delay: 0,
          ease: "easeOut" as const,
        };
      case "falling":
        return {
          duration: 0.8,
          delay: baseDelay * 0.3,
          ease: [0.55, 0.055, 0.675, 0.19] as EasingArray,
        };
      case "shattering":
        return {
          duration: 0.4,
          delay: baseDelay * 0.2,
          ease: [0.25, 0.1, 0.25, 1] as EasingArray,
        };
      case "vanishing":
        return {
          duration: 1,
          delay: baseDelay * 0.3,
          ease: [0.25, 0.1, 0.25, 1] as EasingArray,
        };
      case "reset":
        return {
          duration: 0,
          delay: 0,
        };
      default:
        return {
          duration: 0.5,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1] as EasingArray,
        };
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
            <motion.div
              key={cube.id}
              className="absolute bg-foreground origin-center"
              style={{
                width: CUBE_SIZE,
                height: CUBE_SIZE,
                left: "50%",
                top: "50%",
                marginLeft: -CUBE_SIZE / 2,
                marginTop: -CUBE_SIZE / 2,
              }}
              animate={getCubeStyle(cube)}
              transition={getTransition(cube)}
            />
          ))}
        </div>
      </div>

      {/* Subtle loading dots */}
      <motion.div
        className="absolute bottom-16 flex gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 bg-muted-foreground"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
