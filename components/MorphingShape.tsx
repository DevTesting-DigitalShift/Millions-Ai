"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function MorphingShape() {
  const pathname = usePathname();
  const shapeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

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
        },
      });

      tl
        // Phase 1: Square → Diamond (rotate 45°, filled)
        .to(
          shape,
          { x: "15vw", y: "5vh", duration: 1.5, ease: "power2.inOut" },
          0
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
          0
        )

        // Phase 2: Diamond → Rhombus (scale stretch, outline)
        .to(
          shape,
          { x: "10vw", y: "25vh", duration: 1.5, ease: "power2.inOut" },
          1.5
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
          1.5
        )

        // Phase 3: Rhombus → Rectangle (rotate back, wider)
        .to(
          shape,
          { x: "35vw", y: "15vh", duration: 1.5, ease: "power2.inOut" },
          3
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
          3
        )

        // Phase 4: Rectangle → Small Square (shrink)
        .to(
          shape,
          { x: "50vw", y: "35vh", duration: 1.5, ease: "power2.inOut" },
          4.5
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
          4.5
        )

        // Phase 5: Small Square → Rotated Diamond (outline)
        .to(
          shape,
          { x: "20vw", y: "50vh", duration: 1.5, ease: "power2.inOut" },
          6
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
          6
        )

        // Phase 6: Diamond → Tall Rectangle (rotate, stretch vertical)
        .to(
          shape,
          { x: "8vw", y: "30vh", duration: 1.5, ease: "power2.inOut" },
          7.5
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
          7.5
        )

        // Phase 7: Tall Rectangle → Rounded Square
        .to(
          shape,
          { x: "40vw", y: "55vh", duration: 1.5, ease: "power2.inOut" },
          9
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
          9
        )

        // Phase 8: Rounded Square → Final Diamond (outline)
        .to(
          shape,
          { x: "25vw", y: "65vh", duration: 1.5, ease: "power2.inOut" },
          10.5
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
          10.5
        )

        // Phase 9: Final Diamond → Return to Square
        .to(
          shape,
          { x: "30vw", y: "75vh", duration: 1.5, ease: "power2.inOut" },
          12
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
          12
        );
    });

    return () => ctx.revert();
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <div
      ref={shapeRef}
      className="fixed left-8 top-[20vh] pointer-events-none"
      style={{
        willChange: "transform",
        perspective: "1000px",
        zIndex: 9999,
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
  );
}
