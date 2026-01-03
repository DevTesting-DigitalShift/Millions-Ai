"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 0,
    title: "Analyze",
    content:
      "Gain an objective view of how your processes truly run, and understand how to fix or prevent problems.",
    image: "/analyze-graph.png", // We'll assume these exist or just use divs for now
  },
  {
    id: 1,
    title: "Design",
    content:
      "Model and simulate process changes to predict outcomes before implementation.",
  },
  {
    id: 2,
    title: "Operate",
    content:
      "Monitor process performance in real-time and trigger automated actions.",
  },
  {
    id: 3,
    title: "Composable Solutions",
    content:
      "Build custom apps and workflows that perfectly fit your unique business needs.",
  },
];

export function TrustedInsights() {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 8000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Left Content */}
        <div className="mb-20 flex flex-col items-center space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Accelerate AI adoption with Trusted Insights
          </h2>

          <p className="text-xl text-muted-foreground  leading-relaxed">
            The all-in-one discovery intelligence platform for practitioners.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:opacity-90 rounded-lg px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all border-0"
            >
              Meet your AI →
            </Button>
          </div>
        </div>

        {/* Right - Horizontal 4-Step Accordion */}
        <div ref={containerRef} className="w-full">
          <div className="bg-[#0A0A0A] rounded-2xl p-4 shadow-2xl overflow-hidden w-full h-[600px] flex gap-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(index)}
                animate={{
                  width: activeFeature === index ? "60%" : "13.33%",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={cn(
                  "relative rounded-xl overflow-hidden cursor-pointer",
                  "bg-gradient-to-br from-gray-900 to-gray-950",
                  "border border-gray-800/50",
                  activeFeature === index && "border-gray-700"
                )}
              >
                {/* Closed State - Vertical Title + Number */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-between p-6",
                    "transition-opacity duration-300",
                    activeFeature === index ? "opacity-0" : "opacity-100"
                  )}
                >
                  <h3 className="text-white font-semibold text-2xl writing-mode-vertical transform absolute top-10 left-6">
                    {feature.title}
                  </h3>
                  <div className="absolute bottom-6 left-6 text-8xl font-semibold text-white/90">
                    {index + 1}
                  </div>
                </div>

                {/* Open State - Full Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeFeature === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: activeFeature === index ? 0.2 : 0,
                  }}
                  className="absolute inset-0 p-8 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {feature.content}
                      </p>
                      <div className="flex items-center text-sm text-gray-400 cursor-pointer hover:text-white transition-colors group pt-2">
                        Learn more
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>

                    {/* Visual Content Area */}
                    <div className="mt-8 relative h-64 w-full border border-gray-800 bg-gray-900/30 rounded-lg flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full p-6">
                        {/* Flow diagram */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-8 w-14 h-9 border border-gray-600 rounded flex items-center justify-center text-xs text-gray-500">
                          Start
                        </div>
                        <svg className="absolute top-1/2 -translate-y-1/2 left-[5.5rem] w-10 h-px">
                          <line
                            x1="0"
                            y1="0"
                            x2="100%"
                            y2="0"
                            stroke="#444"
                            strokeWidth="2"
                            strokeDasharray="3 2"
                          />
                        </svg>
                        <div className="absolute top-1/2 -translate-y-1/2 left-32 w-14 h-9 border border-gray-500 bg-gray-800 rounded flex items-center justify-center text-xs text-white">
                          AI
                        </div>
                        <svg className="absolute top-1/2 -translate-y-1/2 left-[10.5rem] w-10 h-px">
                          <line
                            x1="0"
                            y1="0"
                            x2="100%"
                            y2="0"
                            stroke="#444"
                            strokeWidth="2"
                          />
                        </svg>
                        <div className="absolute top-1/2 -translate-y-1/2 left-52 w-14 h-9 border border-blue-500/50 bg-blue-900/20 rounded flex items-center justify-center text-xs text-blue-200">
                          Result
                        </div>

                        {/* Animated pulse */}
                        <motion.div
                          animate={{
                            x: [20, 220],
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute top-1/2 -translate-y-1/2 left-8 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Large Step Number */}
                  <div className="text-8xl font-black text-white/5 self-end">
                    {index + 1}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto container w-full px-6 mt-60">
        <div className="mb-20 flex flex-col items-center space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Insights are powered by MAI’s revolutionary tech, MillionGraph™
          </h2>

          <p className="text-xl text-muted-foreground  leading-relaxed">
            MillionGraph™ is the engine that connects AI agents, datasets, and
            protocols into one living decision intelligence.
          </p>
        </div>
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          className="w-full rounded-xl bg-black shadow-lg"
        />
      </div>
    </section>
  );
}
