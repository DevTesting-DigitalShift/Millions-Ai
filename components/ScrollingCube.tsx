"use client";

import { useEffect, useRef } from "react";

export default function ScrollingCube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate a random scrambled path across the page
    const generatePath = () => {
      const path: { x: number; y: number }[] = [];
      const viewportWidth = window.innerWidth;

      // Get the start position (TrustedInsights) and end position (Footer)
      const trustedInsights = document.querySelector(
        '[data-section="trusted-insights"]'
      );
      const footer = document.querySelector("footer");

      const startY = trustedInsights?.getBoundingClientRect().top || 0;
      const endY = footer
        ? document.documentElement.scrollHeight - footer.offsetHeight
        : document.documentElement.scrollHeight;

      const totalDistance = endY - startY;
      const numberOfPoints = 50; // Increased for smoother movement

      // Generate random waypoints across the page
      for (let i = 0; i <= numberOfPoints; i++) {
        const progress = i / numberOfPoints;
        const y = startY + totalDistance * progress;

        // Create random horizontal positions that move across the ENTIRE page
        // Use multiple sine and cosine waves for more organic, scrambled movement
        const wave1 = Math.sin(i * 0.5) * 0.25;
        const wave2 = Math.cos(i * 0.8) * 0.15;
        const wave3 = Math.sin(i * 1.2) * 0.1;
        const randomFactor = wave1 + wave2 + wave3;

        // Map to 10% - 90% of viewport width to ensure it goes to both sides
        const x = viewportWidth * (0.5 + randomFactor); // Center ± random movement

        path.push({ x, y });
      }

      pathRef.current = path;
    };

    generatePath();
    window.addEventListener("resize", generatePath);

    const handleScroll = () => {
      if (!cubeRef.current || pathRef.current.length === 0) return;

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Get the start and end positions
      const trustedInsights = document.querySelector(
        '[data-section="trusted-insights"]'
      );
      const footer = document.querySelector("footer");

      const startY = trustedInsights?.getBoundingClientRect().top || 0;
      const startScrollY = scrollTop + startY;
      const endY = footer
        ? document.documentElement.scrollHeight - footer.offsetHeight
        : document.documentElement.scrollHeight;

      // Calculate progress along the path
      const totalDistance = endY - startScrollY;
      const currentDistance = scrollTop - startScrollY;
      const progress = Math.max(
        0,
        Math.min(1, currentDistance / totalDistance)
      );

      // Hide cube if before start or after end
      if (scrollTop < startScrollY || scrollTop > endY) {
        cubeRef.current.style.opacity = "0";
        return;
      } else {
        cubeRef.current.style.opacity = "1";
      }

      // Find position along the path with smooth interpolation
      const pathIndex = progress * (pathRef.current.length - 1);
      const lowerIndex = Math.floor(pathIndex);
      const upperIndex = Math.ceil(pathIndex);
      const indexProgress = pathIndex - lowerIndex;

      // Interpolate between two path points for smooth movement
      const lowerPoint = pathRef.current[lowerIndex];
      const upperPoint = pathRef.current[upperIndex] || lowerPoint;

      const x = lowerPoint.x + (upperPoint.x - lowerPoint.x) * indexProgress;

      // Position cube at center of viewport (vertically)
      const cubeY = viewportHeight / 2;

      // Apply position with smooth transition
      cubeRef.current.style.left = `${x}px`;
      cubeRef.current.style.top = `${cubeY}px`;

      // Keep square shape without rotation
      cubeRef.current.style.transform = `translate(-50%, -50%)`;
    };

    // Initial position
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", generatePath);
    };
  }, []);

  return (
    <div
      ref={cubeRef}
      className="fixed pointer-events-none z-50 transition-all duration-100 ease-linear"
      style={{
        width: "30px",
        height: "30px",
        opacity: 0,
      }}
    >
      {/* 2D Square */}
      <div
        className="w-full h-full bg-black border border-gray-600"
        style={{
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
        }}
      />
    </div>
  );
}
