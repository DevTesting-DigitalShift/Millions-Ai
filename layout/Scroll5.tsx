"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Network animation component
function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create nodes with labels
    const nodes = [
      {
        x: 100,
        y: 80,
        vx: 0.3,
        vy: 0.2,
        size: 12,
        label: "Client Alerts",
        color: "#60A5FA",
      },
      {
        x: 250,
        y: 120,
        vx: -0.2,
        vy: 0.3,
        size: 10,
        label: "Reporting Module",
        color: "#34D399",
      },
      {
        x: 400,
        y: 90,
        vx: 0.2,
        vy: -0.2,
        size: 8,
        label: "2023 R&D",
        color: "#A78BFA",
      },
      {
        x: 150,
        y: 200,
        vx: -0.3,
        vy: -0.2,
        size: 14,
        label: "Legal Agreements",
        color: "#F472B6",
      },
      {
        x: 320,
        y: 180,
        vx: 0.2,
        vy: 0.3,
        size: 9,
        label: "Workflow Logs",
        color: "#FBBF24",
      },
      {
        x: 450,
        y: 220,
        vx: -0.2,
        vy: 0.2,
        size: 11,
        label: "Form 8-K",
        color: "#60A5FA",
      },
      {
        x: 80,
        y: 300,
        vx: 0.3,
        vy: -0.3,
        size: 10,
        label: "",
        color: "#34D399",
      },
      {
        x: 200,
        y: 320,
        vx: -0.2,
        vy: 0.2,
        size: 13,
        label: "Expert Witness",
        color: "#A78BFA",
      },
      {
        x: 350,
        y: 280,
        vx: 0.2,
        vy: -0.2,
        size: 8,
        label: "Legal Assistant",
        color: "#F472B6",
      },
      {
        x: 480,
        y: 340,
        vx: -0.3,
        vy: 0.3,
        size: 12,
        label: "Relationship",
        color: "#FBBF24",
      },
      {
        x: 120,
        y: 420,
        vx: 0.2,
        vy: -0.2,
        size: 9,
        label: "",
        color: "#60A5FA",
      },
      {
        x: 280,
        y: 400,
        vx: -0.3,
        vy: 0.2,
        size: 11,
        label: "",
        color: "#34D399",
      },
      {
        x: 420,
        y: 450,
        vx: 0.3,
        vy: -0.3,
        size: 10,
        label: "",
        color: "#A78BFA",
      },
    ];

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Clear canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.globalAlpha = 1 - distance / 150;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Draw label
        if (node.label) {
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "12px sans-serif";
          ctx.fillText(node.label, node.x + node.size + 5, node.y + 4);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-2xl"
      style={{ width: "100%", height: "600px" }}
    />
  );
}

export function ProductShowcase2() {
  return (
    <section className="py-36">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                MAIGent™{" "}
                <span className="text-muted-foreground text-3xl">
                  Skip Guesswork, discover the best
                </span>
              </h2>

              <p className="text-base text-muted-foreground font-semibold leading-relaxed mb-6">
                MAIGent™ synthesises hundreds of real-world signals per agent—to
                separate hype from fit and surface top-rated, function-aligned
                picks
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-foreground font-semibold shrink-0">
                    •
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">
                      Curate:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      Enterprise-grade curation across functions and use
                      cases—signal, not sprawl; only credible, deployable
                      agents.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-semibold shrink-0">
                    •
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">Rate:</span>{" "}
                    <span className="text-muted-foreground">
                      Proprietary 120-point diligence—fit, readiness, and risk
                      synthesised into a governance-ready ranking.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-semibold shrink-0">
                    •
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">
                      Compare:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      Compare vendors across 5 key parameters, enabling a
                      data-driven eulation
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-[#E8E0D5] rounded-xl p-6">
              <p className="text-sm text-foreground mb-4">
                &quot;MAIGent not only helped us to find the right agent for our
                marketing needs, but we achieved in few clicks which would have
                taken us months of evaluation effoteus shortlist &quot;
              </p>

              <div className="flex justify-end items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">
                    Lin Xiao
                  </p>
                  <p className="text-xs text-muted-foreground">
                    CMO, Emirates Airlines
                  </p>
                </div>
                <Image
                  src="/avatar.jpg"
                  alt="Lin Xiao"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
              >
                Explore MAIGent →
              </Button>
            </div>
          </div>

          {/* Right Side - Network Animation */}
          <div className="relative">
            <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden">
              <NetworkAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
