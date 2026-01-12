"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CurtainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const curtainElement = curtainRef.current;
    if (!curtainElement) return;

    // Wait for the DOM to be fully loaded
    const initAnimation = () => {
      // Create the curtain lift effect
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: curtainElement,
            start: "bottom bottom", // Start when bottom of curtain hits bottom of viewport
            end: "+=100%", // Continue for the height of the viewport
            scrub: 0.5, // Smooth scrubbing with slight delay
            pin: false,
            markers: false, // Set to true for debugging
            invalidateOnRefresh: true,
          },
        });

        // Animate the curtain lifting up
        tl.to(curtainElement, {
          yPercent: -100,
          ease: "none",
        });
      });

      return () => ctx.revert();
    };

    // Small delay to ensure everything is mounted
    const timeout = setTimeout(initAnimation, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={curtainRef}
      className="curtain-content"
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
