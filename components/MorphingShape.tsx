"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function MorphingShape() {
  const shapeRef = useRef<SVGSVGElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Only run on home page
    if (pathname !== "/") return;

    const shape = shapeRef.current;
    if (!shape) return;

    const polygon = shape.querySelector("polygon");
    if (!polygon) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Define shape morphing journey with winding path (left/right positions)
    const shapeStages = [
      {
        // Square - center
        points: "50,10 90,50 50,90 10,50",
        xOffset: 0, // center
        rotation: 0,
        scale: 1,
        fill: true,
      },
      {
        // Rectangle - right side
        points: "30,15 70,15 70,85 30,85",
        xOffset: 200, // move right
        rotation: 45,
        scale: 1.1,
        fill: false,
      },
      {
        // Rhombus - left side
        points: "50,10 85,50 50,90 15,50",
        xOffset: -250, // move left
        rotation: 90,
        scale: 0.95,
        fill: true,
      },
      {
        // Parallelogram - far right
        points: "20,20 70,20 80,80 30,80",
        xOffset: 280, // far right
        rotation: 135,
        scale: 1.15,
        fill: false,
      },
      {
        // Trapezium - center
        points: "30,20 70,20 85,80 15,80",
        xOffset: 0, // back to center
        rotation: 180,
        scale: 1,
        fill: true,
      },
      {
        // Kite - left side
        points: "50,5 70,50 50,95 30,50",
        xOffset: -200, // left
        rotation: 225,
        scale: 0.9,
        fill: false,
      },
      {
        // Diamond - far left
        points: "50,15 75,50 50,85 25,50",
        xOffset: -300, // far left
        rotation: 270,
        scale: 1.2,
        fill: true,
      },
      {
        // Back to Square - right
        points: "50,10 90,50 50,90 10,50",
        xOffset: 150, // right
        rotation: 360,
        scale: 1,
        fill: false,
      },
    ];

    // Initial position - centered on screen
    gsap.set(shape, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      rotation: shapeStages[0].rotation,
      scale: shapeStages[0].scale,
    });

    gsap.set(polygon, {
      attr: { points: shapeStages[0].points },
      fill: shapeStages[0].fill ? "#000000" : "transparent",
      stroke: shapeStages[0].fill ? "none" : "#000000",
      strokeWidth: shapeStages[0].fill ? 0 : 2.5,
    });

    // Create timeline that morphs the shape and moves it left/right based on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    // Animate through each stage
    shapeStages.forEach((stage, index) => {
      if (index === 0) return; // Skip first as it's already set

      const duration = 1;
      const position = index * duration;

      // Calculate x position - center of screen + offset for winding path
      const xPosition = window.innerWidth / 2 + stage.xOffset;

      // Move left/right, rotate and scale the shape
      tl.to(
        shape,
        {
          x: xPosition,
          rotation: stage.rotation,
          scale: stage.scale,
          duration: duration,
          ease: "power1.inOut",
        },
        position
      );

      // Morph the shape
      tl.to(
        polygon,
        {
          attr: { points: stage.points },
          duration: duration,
          ease: "power2.inOut",
        },
        position
      );

      // Toggle fill/stroke
      tl.to(
        polygon,
        {
          fill: stage.fill ? "#000000" : "transparent",
          stroke: stage.fill ? "none" : "#000000",
          strokeWidth: stage.fill ? 0 : 2.5,
          duration: duration * 0.4,
          ease: "power1.inOut",
        },
        position
      );
    });

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [pathname]);

  // Don't render on non-home pages
  if (pathname !== "/") return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 100 }}
    >
      <svg
        ref={shapeRef}
        className="absolute pointer-events-none will-change-transform"
        style={{
          width: "100px",
          height: "100px",
          left: "-50px", // Center the SVG on x position
          top: "-50px", // Center the SVG on y position
        }}
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,10 90,50 50,90 10,50"
          fill="#000000"
          stroke="none"
          strokeWidth="0"
        />
      </svg>
    </div>
  );
}
