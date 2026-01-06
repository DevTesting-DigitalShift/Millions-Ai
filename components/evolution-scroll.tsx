"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stages } from "./stage-icons";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * EvolutionScroll - GSAP-powered smooth scroll evolution
 *
 * Now a proper section component (not fixed/background)
 * Flows naturally with the page content
 */
export function EvolutionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      stagesRef.current.forEach((stage, index) => {
        if (!stage) return;

        /**
         * Each stage animates within the scroll container
         * No fixed positioning - just normal flow
         */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${(index / stages.length) * 100}% center`,
            end: `${((index + 1) / stages.length) * 100}% center`,
            scrub: 1,
            // markers: true, // Uncomment to debug
          },
        });

        // Set initial state
        gsap.set(stage, {
          x: "100%",
          opacity: 0,
        });

        // Animate in from right, then out to left
        tl.fromTo(
          stage,
          {
            x: "100%",
            opacity: 0,
          },
          {
            x: "0%",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        ).to(stage, {
          x: "-100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });

        // First stage starts visible
        if (index === 0) {
          gsap.set(stage, {
            x: "0%",
            opacity: 1,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative py-20">
      {/* Section header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-bold text-neutral-800 mb-4">
          The Evolution of Intelligence
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          From raw materials to artificial intelligence—witness the journey of
          human innovation
        </p>
      </div>

      {/* Scroll container for stages */}
      <div ref={containerRef} className="relative h-[400vh] w-full">
        {/* Sticky viewport that shows one stage at a time */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              ref={(el) => {
                stagesRef.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-6">
                {/* Stage icon */}
                <div className="w-64 h-64 max-w-[80vw]">{stage.icon}</div>

                {/* Stage label */}
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-neutral-800 mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-lg text-neutral-500">{stage.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  );
}
