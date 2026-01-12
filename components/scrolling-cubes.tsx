"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CubeParticle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  color: string;
  velocityX: number;
  velocityY: number;
}

const ScrollingCubes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<CubeParticle[]>([]);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      particlesRef.current = Array.from({ length: numParticles }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 40 + 20,
          opacity: Math.random() * 0.3 + 0.1,
          color:
            Math.random() > 0.5 ? "rgba(139, 92, 246, " : "rgba(59, 130, 246, ",
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2,
        };
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Scroll animation
    let scrollProgress = 0;

    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self: { progress: number }) => {
        scrollProgress = self.progress;
      },
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Calculate spread based on scroll
        let spread = 1;
        let targetY = particle.baseY;
        let targetX = particle.baseX;

        if (scrollProgress < 0.5) {
          // First half: spread out and move upward
          spread = 1 + scrollProgress * 3;
          targetY = particle.baseY - scrollProgress * canvas.height * 0.3;
          targetX = particle.baseX + particle.velocityX * scrollProgress * 100;
        } else {
          // Second half: converge toward center line
          const secondHalf = (scrollProgress - 0.5) * 2;
          spread = 2 - secondHalf * 1.5;
          const centerY = canvas.height * 0.5;
          targetY =
            particle.baseY -
            0.5 * canvas.height * 0.3 +
            (centerY - particle.baseY) * secondHalf * 0.6;
          targetX =
            particle.baseX + particle.velocityX * 50 * (1 - secondHalf * 0.7);
        }

        // Smooth movement
        particle.x += (targetX - particle.x) * 0.1;
        particle.y += (targetY - particle.y) * 0.1;

        // Draw rectangle (no rotation)
        const currentSize = particle.size * spread;
        const currentOpacity = particle.opacity * (1 - scrollProgress * 0.2);

        // Draw cube with gradient (no rotation, just positioned)
        const gradient = ctx.createLinearGradient(
          particle.x - currentSize / 2,
          particle.y - currentSize / 2,
          particle.x + currentSize / 2,
          particle.y + currentSize / 2
        );
        gradient.addColorStop(0, particle.color + currentOpacity + ")");
        gradient.addColorStop(1, particle.color + currentOpacity * 0.6 + ")");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          particle.x - currentSize / 2,
          particle.y - currentSize / 2,
          currentSize,
          currentSize
        );

        // Border
        ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity * 0.2})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(
          particle.x - currentSize / 2,
          particle.y - currentSize / 2,
          currentSize,
          currentSize
        );
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) =>
        trigger.kill()
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ imageRendering: "crisp-edges" }}
      />
    </div>
  );
};

export default ScrollingCubes;
