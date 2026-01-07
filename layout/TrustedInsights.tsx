"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 0,
    title: "Align",
    content:
      "Gain an objective view of how your processes truly run, and understand how to fix or prevent problems.",
  },
  {
    id: 1,
    title: "Discover",
    content:
      "Model and simulate process changes to predict outcomes before implementation.",
  },
  {
    id: 2,
    title: "Evaluate",
    content:
      "Monitor process performance in real-time and trigger automated actions.",
  },
];

// Align Animation Component
const AlignAnimation = () => {
  const listItems = [
    "Market Research & Planning",
    "Brand Management",
    "Content Creation",
    "Campaign Management",
    "Lead Management",
    "Channel Marketing",
    "PR & Comms",
    "Customer Engagement",
    "Marketing Analytics",
    "Marketing Operations",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const chartVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
    },
  };

  const arrowPathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex items-start gap-4 scale-100 origin-top-left">
      {/* Left side - List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-1"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-2"
        >
          <span className="text-sm font-medium text-gray-400">L1</span>
          <div className="w-16 h-5 bg-gray-700 rounded-full" />
        </motion.div>
        {listItems.map((item, index) => (
          <motion.div
            key={item}
            variants={itemVariants}
            className="text-sm text-gray-300 py-1"
            style={{ paddingLeft: index === 0 ? 0 : 12 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      {/* Arrows SVG */}
      <motion.svg
        width="60"
        height="180"
        viewBox="0 0 60 200"
        className="mt-8"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M 0 40 Q 30 40 45 25"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          variants={arrowPathVariants}
        />
        <motion.path
          d="M 42 22 L 48 25 L 44 30"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          variants={arrowPathVariants}
        />
        <motion.path
          d="M 0 120 Q 30 120 45 175"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          variants={arrowPathVariants}
        />
        <motion.path
          d="M 42 172 L 48 178 L 52 174"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          variants={arrowPathVariants}
        />
      </motion.svg>

      {/* Right side - Charts */}
      <div className="flex flex-col gap-4">
        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="w-44 h-28 bg-gray-800 border border-gray-700 rounded-lg shadow-sm overflow-hidden"
        >
          <div className="h-4 bg-gray-700 flex gap-1 px-2 py-1">
            <div className="w-8 h-2 bg-purple-500/30 rounded text-[7px]" />
            <div className="w-8 h-2 bg-blue-500/30 rounded text-[7px]" />
            <div className="w-8 h-2 bg-green-500/30 rounded text-[7px]" />
          </div>
          <div className="p-2 relative h-20">
            {[
              { x: 20, y: 30, delay: 1.0 },
              { x: 35, y: 25, delay: 1.1 },
              { x: 50, y: 15, delay: 1.2 },
              { x: 70, y: 35, delay: 1.3 },
              { x: 85, y: 20, delay: 1.4 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-500"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: dot.delay,
                  type: "spring",
                  stiffness: 200,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          className="w-44 h-28 bg-purple-900/10 border border-purple-700/20 rounded-lg overflow-hidden"
        >
          <div className="p-2 h-full relative">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <motion.path
                d="M 0 45 Q 25 40 50 30 Q 75 20 100 25 L 100 50 L 0 50 Z"
                fill="rgba(168, 85, 247, 0.3)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
              <motion.path
                d="M 0 45 Q 25 40 50 30 Q 75 20 100 25"
                fill="none"
                stroke="rgb(168, 85, 247)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </svg>
            <span className="absolute bottom-1 right-2 text-[8px] text-gray-400">
              Domain Coverage
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Discover Animation Component
const DiscoverAnimation = () => {
  const logos = [
    { name: "glean", x: -80, y: -40, delay: 0.3 },
    { name: "Hebbia", x: -50, y: 10, delay: 0.4 },
    { name: "Typeface", x: -60, y: 50, delay: 0.5 },
    { name: "Harvey.", x: -40, y: 80, delay: 0.6 },
    { name: "copy.ai", x: 0, y: 70, delay: 0.7 },
    { name: "kore.ai", x: 15, y: 90, delay: 0.8 },
    { name: "Hebbia", x: 80, y: 30, delay: 0.9 },
    { name: "kore.ai", x: 90, y: 50, delay: 1.0 },
    { name: "copy.ai", x: 100, y: 20, delay: 1.1 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 12 },
    },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Stable particle configurations (defined once, not during render)
  const particleConfigs = [
    { x: 25, y: 25, duration: 2.3 },
    { x: 35, y: 30, duration: 2.7 },
    { x: 45, y: 28, duration: 2.1 },
    { x: 30, y: 35, duration: 2.5 },
    { x: 40, y: 32, duration: 2.4 },
    { x: 50, y: 27, duration: 2.6 },
    { x: 33, y: 29, duration: 2.2 },
    { x: 42, y: 31, duration: 2.8 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center scale-125">
      {/* Central 3D Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="relative"
        style={{ perspective: "600px" }}
      >
        <div
          className="w-28 h-32 border-2 border-gray-400 relative"
          style={{ transform: "rotateY(-10deg) rotateX(5deg)" }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gray-500/40"
              style={{ top: `${(i + 1) * 14.28}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gray-500/40"
              style={{ left: `${(i + 1) * 20}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Logos */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            variants={logoVariants}
            className="absolute left-1/2 top-1/2"
            style={{
              marginLeft: logo.x,
              marginTop: logo.y,
            }}
          >
            <span className="text-sm font-medium whitespace-nowrap text-gray-300">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating particles */}
      {particleConfigs.map((config, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
          style={{
            left: `calc(50% + ${(i - 4) * 12}px)`,
            top: "50%",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0.5],
            x: [(i % 2 === 0 ? 1 : -1) * config.x, 0],
            y: [-config.y, 0],
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

// Evaluate Animation Component
const EvaluateAnimation = () => {
  const dataPoints = [
    { name: "Typeface", x: 75, y: 15, color: "blue" },
    { name: "copy.ai", x: 85, y: 20, color: "blue" },
    { name: "glean", x: 60, y: 35, color: "green" },
    { name: "Sara", x: 55, y: 45, color: "green" },
    { name: "Harvey", x: 65, y: 40, color: "green" },
    { name: "Hebbia", x: 35, y: 60, color: "purple" },
    { name: "kore.ai", x: 45, y: 55, color: "purple" },
  ];

  const tableData = [
    { metric: "Domain Coverage", scores: [4.5, 4.3, 4.0, 4.5, 3.8] },
    { metric: "Security", scores: [4.0, 3.8, 3.8, 4.3, 4.5] },
    { metric: "AI Capability", scores: [4.0, 4.2, 4.2, 4.5, 3.8] },
    { metric: "Localization", scores: [3.0, 3.4, 3.4, 4.0, 1.9] },
    { metric: "Pricing", scores: [3.5, 4.0, 4.0, 3.0, 4.5] },
  ];

  const axisVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pointVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8 + delay * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    }),
  };

  const tableRowVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 1.2 + delay * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className="flex gap-4 scale-100 origin-top-left">
      {/* Main Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 h-44 relative bg-gray-800 border border-gray-700 rounded-lg p-3"
      >
        <svg className="w-full h-full" viewBox="0 0 200 150">
          <motion.line
            x1="20"
            y1="130"
            x2="190"
            y2="130"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            variants={axisVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.polygon
            points="190,126 190,134 198,130"
            fill="#9CA3AF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
          <motion.line
            x1="20"
            y1="130"
            x2="20"
            y2="10"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            variants={axisVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.polygon
            points="16,10 24,10 20,2"
            fill="#9CA3AF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />

          {dataPoints.map((point, i) => (
            <motion.g
              key={point.name}
              custom={i}
              variants={pointVariants}
              initial="hidden"
              animate="visible"
            >
              <circle
                cx={20 + (point.x / 100) * 170}
                cy={130 - (point.y / 70) * 110}
                r="5"
                className={
                  point.color === "blue"
                    ? "fill-blue-500"
                    : point.color === "green"
                    ? "fill-emerald-500"
                    : "fill-purple-500"
                }
              />
              <text
                x={20 + (point.x / 100) * 170 + 8}
                y={130 - (point.y / 70) * 110 + 3}
                className="text-[7px] fill-gray-400"
              >
                {point.name}
              </text>
            </motion.g>
          ))}
        </svg>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"
      >
        <div className="bg-gray-700 px-2 py-1">
          <span className="text-[9px] font-medium text-white">
            Top 5 GenAI Solutions
          </span>
        </div>
        <div className="p-2">
          <div className="flex gap-1 mb-1 px-1">
            <div className="w-24" />
            {["Jasper", "Typeface", "Writesonic", "copy.ai", "Other"].map(
              (name, i) => (
                <motion.div
                  key={name}
                  className="w-7 text-[7px] text-center text-gray-400 truncate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                >
                  {name}
                </motion.div>
              )
            )}
          </div>
          {tableData.map((row, i) => (
            <motion.div
              key={row.metric}
              custom={i}
              variants={tableRowVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-1 px-1 py-1"
            >
              <div className="w-24 text-[8px] text-gray-300 truncate">
                {row.metric}
              </div>
              {row.scores.map((score, j) => (
                <motion.div
                  key={j}
                  className={`w-7 h-5 text-[8px] text-center rounded flex items-center justify-center font-medium ${
                    score >= 4.0
                      ? "bg-yellow-400/80 text-yellow-900"
                      : score >= 3.0
                      ? "bg-gray-600 text-gray-300"
                      : score > 0
                      ? "bg-gray-700 text-gray-400"
                      : "bg-transparent"
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.4 + i * 0.05 + j * 0.02,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {score > 0 ? score.toFixed(1) : ""}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export function TrustedInsights() {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section className="pt-36 pb-0 overflow-hidden">
      <div className="container-section px-6">
        <div className="mb-20 flex flex-col items-center space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            From business context mapping to AI vendor shortlist - the ARC
            framework
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
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

        <div ref={containerRef} className="w-full">
          <div className="bg-[#0A0A0A] rounded-2xl p-4 shadow-2xl overflow-hidden w-full h-[600px] flex gap-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(index)}
                animate={{
                  width: activeFeature === index ? "60%" : "20%",
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

                    <div className="mt relative h-full w-full border border-gray-800 bg-gray-900/30 rounded-lg flex items-center justify-center overflow-hidden">
                      {index === 0 && activeFeature === 0 && (
                        <AlignAnimation key="align-anim" />
                      )}
                      {index === 1 && activeFeature === 1 && (
                        <DiscoverAnimation key="discover-anim" />
                      )}
                      {index === 2 && activeFeature === 2 && (
                        <EvaluateAnimation key="evaluate-anim" />
                      )}
                    </div>
                  </div>

                  <div className="text-8xl font-black text-white/5 self-end">
                    {index + 1}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 mt-60">
        <div className="mb-20 flex flex-col items-center space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Insights are powered by MAI&apos;s revolutionary tech, MillionGraph™
          </h2>

          <p className="text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed">
            MillionGraph™ is the engine that powers the MillionAI platform. It
            seamlessly connects and analyses over 120+ datapoints across GenAI
            vendors, Analyst views & AI Adoption signals and converts them into
            one living decision intelligence.
          </p>
        </div>
        <div className="w-full mt-40 h overflow-hidden rounded-xl">
          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover relative bottom-65"
          />
        </div>
      </div>
    </section>
  );
}
