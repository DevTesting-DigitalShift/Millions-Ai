"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CubesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cubesContainerRef = useRef<HTMLDivElement>(null);

  // Generate cubes data with useMemo to avoid re-generation on re-render
  const cubes = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: 30 + ((i * 7) % 40), // Deterministic size 30-70px
        color: i % 3 === 0 ? "#000000" : i % 3 === 1 ? "#333333" : "#666666",
      })),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const container = cubesContainerRef.current;

    if (!section || !container) return;

    // Create random cubes
    const cubeElements = container.querySelectorAll(".cube-item");

    // Animate cubes on scroll with different effects
    cubeElements.forEach((cube, index) => {
      // Random initial positions
      const randomRotation = (index * 37) % 360; // Deterministic rotation
      const randomX = ((index * 17) % 100) - 50; // Deterministic -50 to 50
      const randomY = ((index * 23) % 100) - 50; // Deterministic -50 to 50

      // Set initial state
      gsap.set(cube, {
        opacity: 0,
        scale: 0,
        rotation: randomRotation,
        x: randomX,
        y: randomY,
      });

      // Scroll-triggered animation
      gsap.to(cube, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          onUpdate: (self) => {
            // Add parallax effect based on scroll progress
            const progress = self.progress;
            const parallaxY = (index % 2 === 0 ? -50 : 50) * (1 - progress);
            gsap.set(cube, { y: parallaxY });
          },
        },
      });

      // Hover effect
      const cubeElement = cube as HTMLElement;
      cubeElement.addEventListener("mouseenter", () => {
        gsap.to(cube, {
          scale: 1.2,
          rotation: 180,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      cubeElement.addEventListener("mouseleave", () => {
        gsap.to(cube, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-linear-to-b from-accent-foreground to-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-foreground">
          Powered by Intelligence
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Watch our AI building blocks come together
        </p>

        <div
          ref={cubesContainerRef}
          className="relative grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-8 items-center justify-items-center min-h-[600px]"
        >
          {cubes.map((cube) => (
            <div
              key={cube.id}
              className="cube-item relative cursor-pointer"
              style={{
                width: `${cube.size}px`,
                height: `${cube.size}px`,
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
              >
                <polygon
                  points="50,10 90,50 50,90 10,50"
                  fill={cube.color}
                  stroke="none"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
