"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cubeData = [
  {
    image: "/solar-panel.jpg",
    label: "Reduction in excess inventory",
    metric: "20%",
    bgColor: "bg-lime-400",
  },
  {
    image: "/warehouse.jpg",
    label: "Improved delivery time",
    metric: "35%",
    bgColor: "bg-blue-400",
  },
  {
    image: "/factory.jpg",
    label: "Cost savings achieved",
    metric: "45%",
    bgColor: "bg-violet-400",
  },
];

export function FloatingCube() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % cubeData.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const current = cubeData[index];

  return (
    <div className="absolute bottom-8 right-8 hidden lg:block">
      {/* Perspective wrapper */}
      <div className="relative w-56" style={{ perspective: "1200px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateX: -12 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 12 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* TOP FACE */}
            <div
              className="relative h-32 overflow-hidden rounded-xl shadow-lg"
              style={{
                transform:
                  "rotateX(60deg) translateZ(40px) translateY(-12px)",
                transformOrigin: "bottom",
              }}
            >
              {/* <Image
                src={current.image}
                alt=""
                fill
                className="object-cover"
              /> */}
            </div>

            {/* FRONT FACE */}
            <div
              className={`relative mt-[-8px] rounded-xl p-5 shadow-xl ${current.bgColor}`}
              style={{
                transform: "translateZ(0px)",
              }}
            >
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-sm bg-black" />
                <p className="text-sm font-semibold leading-tight text-black">
                  {current.label}
                </p>
              </div>

              <p className="mt-6 text-6xl font-bold tracking-tight text-black">
                {current.metric}
              </p>

              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
