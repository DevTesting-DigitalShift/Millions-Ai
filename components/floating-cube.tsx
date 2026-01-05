"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
  {
    id: 1,
    title: "Reduction in excess inventory",
    metric: "20%",
    description: "Optimized supply chain management",
    bgColor: "bg-lime-400",
    accentColor: "bg-lime-600",
  },
  {
    id: 2,
    title: "Improved delivery time",
    metric: "35%",
    description: "Faster logistics and routing",
    bgColor: "bg-blue-400",
    accentColor: "bg-blue-600",
  },
  {
    id: 3,
    title: "Cost savings achieved",
    metric: "45%",
    description: "Reduced operational expenses",
    bgColor: "bg-violet-400",
    accentColor: "bg-violet-600",
  },
  {
    id: 4,
    title: "Process efficiency gain",
    metric: "50%",
    description: "Streamlined workflows",
    bgColor: "bg-amber-400",
    accentColor: "bg-amber-600",
  },
];

export function FloatingCube() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);


  const current = carouselData[index];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="absolute bottom-2 right-8 hidden lg:block pointer-events-auto z-50">
      <div className="relative w-80 h-64 rounded-2xl overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className={`absolute inset-0 ${current.bgColor} p-8 flex flex-col justify-between`}
          >
            {/* Top section */}
            <div>
              <div
                className={`w-16 h-1 ${current.accentColor} rounded-full mb-4`}
              />
              <h3 className="text-black text-lg font-semibold leading-tight">
                {current.title}
              </h3>
            </div>

            {/* Middle section - Metric */}
            <div className="flex-1 flex items-center justify-center">
              <p className="text-black text-8xl font-bold tracking-tight">
                {current.metric}
              </p>
            </div>

            {/* Bottom section */}
            <div>
              <p className="text-black/80 text-sm font-medium">
                {current.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
