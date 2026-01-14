"use client";

import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function MorphingShape() {
  const pathname = usePathname();
  const shapeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [shapePosition, setShapePosition] = useState({ x: 0, y: 0 });

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, [pathname]);

  // GSAP transformations - smooth square-based morphing
  useLayoutEffect(() => {
    if (pathname !== "/") return;

    const shape = shapeRef.current;
    const inner = innerRef.current;

    if (!shape || !inner) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(inner, {
        backgroundColor: "#0a0a0a",
        borderWidth: "0px",
        borderColor: "#0a0a0a",
        scale: 1,
        rotation: 0,
      });

      // Main timeline - ultra smooth scrubbing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=10000",
          scrub: 2,
          onUpdate: (self) => {
            // Track position for spacing calculation
            if (shape) {
              const rect = shape.getBoundingClientRect();
              setShapePosition({ x: rect.left, y: rect.top });
            }
          },
        },
      });

      tl
        // Phase 1: Start from logo position (top-left)
        .to(
          shape,
          { x: "0vw", y: "0vh", duration: 0.5, ease: "power2.inOut" },
          0
        )
        .to(
          inner,
          {
            scale: 0.8,
            rotation: 0,
            borderRadius: "0%",
            duration: 0.5,
            ease: "power2.inOut",
          },
          0
        )

        // Phase 2: Square → Diamond (rotate 45°, filled)
        .to(
          shape,
          { x: "15vw", y: "8vh", duration: 1.5, ease: "power2.inOut" },
          0.5
        )
        .to(
          inner,
          {
            rotation: 45,
            scale: 1.1,
            borderRadius: "0%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          0.5
        )

        // Phase 3: Diamond → Rhombus (scale stretch, outline)
        .to(
          shape,
          { x: "10vw", y: "28vh", duration: 1.5, ease: "power2.inOut" },
          2
        )
        .to(
          inner,
          {
            scaleX: 1.4,
            scaleY: 0.7,
            backgroundColor: "rgba(10,10,10,0)",
            borderWidth: "3px",
            duration: 1.5,
            ease: "power2.inOut",
          },
          2
        )

        // Phase 4: Rhombus → Rectangle (rotate back, wider)
        .to(
          shape,
          { x: "35vw", y: "18vh", duration: 1.5, ease: "power2.inOut" },
          3.5
        )
        .to(
          inner,
          {
            rotation: 0,
            scaleX: 1.6,
            scaleY: 0.9,
            backgroundColor: "#0a0a0a",
            borderWidth: "0px",
            duration: 1.5,
            ease: "power2.inOut",
          },
          3.5
        )

        // Phase 5: Rectangle → Small Square (shrink)
        .to(
          shape,
          { x: "50vw", y: "38vh", duration: 1.5, ease: "power2.inOut" },
          5
        )
        .to(
          inner,
          {
            scaleX: 0.8,
            scaleY: 0.8,
            rotation: 0,
            borderRadius: "0%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          5
        )

        // Phase 6: Small Square → Rotated Diamond (outline)
        .to(
          shape,
          { x: "20vw", y: "52vh", duration: 1.5, ease: "power2.inOut" },
          6.5
        )
        .to(
          inner,
          {
            rotation: 45,
            scale: 1.2,
            backgroundColor: "rgba(10,10,10,0)",
            borderWidth: "3px",
            borderRadius: "0%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          6.5
        )

        // Phase 7: Diamond → Tall Rectangle (rotate, stretch vertical)
        .to(
          shape,
          { x: "8vw", y: "35vh", duration: 1.5, ease: "power2.inOut" },
          8
        )
        .to(
          inner,
          {
            rotation: 0,
            scaleX: 0.7,
            scaleY: 1.8,
            backgroundColor: "#0a0a0a",
            borderWidth: "0px",
            duration: 1.5,
            ease: "power2.inOut",
          },
          8
        )

        // Phase 8: Tall Rectangle → Rounded Square
        .to(
          shape,
          { x: "40vw", y: "58vh", duration: 1.5, ease: "power2.inOut" },
          9.5
        )
        .to(
          inner,
          {
            scaleX: 1,
            scaleY: 1,
            borderRadius: "20%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          9.5
        )

        // Phase 9: Rounded Square → Final Diamond (outline)
        .to(
          shape,
          { x: "25vw", y: "68vh", duration: 1.5, ease: "power2.inOut" },
          11
        )
        .to(
          inner,
          {
            rotation: 45,
            scale: 1.15,
            borderRadius: "0%",
            backgroundColor: "rgba(10,10,10,0)",
            borderWidth: "3px",
            duration: 1.5,
            ease: "power2.inOut",
          },
          11
        )

        // Phase 10: Final Diamond → Return to Square
        .to(
          shape,
          { x: "30vw", y: "78vh", duration: 1.5, ease: "power2.inOut" },
          12.5
        )
        .to(
          inner,
          {
            rotation: 0,
            scale: 1,
            backgroundColor: "#0a0a0a",
            borderWidth: "0px",
            borderRadius: "0%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          12.5
        );
    });

    return () => ctx.revert();
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <>
      {/* Morphing shape */}
      <div
        ref={shapeRef}
        className="fixed left-8 top-[6vh] pointer-events-none"
        style={{
          willChange: "transform",
          perspective: "1000px",
          zIndex: 40, // Below header (z-50) but above content
        }}
      >
        {/* Single morphing shape */}
        <div
          ref={innerRef}
          className="relative h-20 w-20"
          style={{
            willChange:
              "transform, background-color, border-radius, border-width",
            transformStyle: "preserve-3d",
            borderStyle: "solid",
            borderColor: "#0a0a0a",
            backgroundColor: "#0a0a0a",
          }}
        />
      </div>

      {/* Invisible spacer that pushes content when shape overlaps */}
      <div
        className="fixed pointer-events-none"
        style={{
          left: shapePosition.x,
          top: shapePosition.y,
          width: "120px",
          height: "120px",
          zIndex: 35,
        }}
      />
    </>
  );
}
