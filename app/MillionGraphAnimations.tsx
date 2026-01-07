'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// CONFIG: Adjust colors to match your brand (GenWrite Blue)
const FLOW_COLOR = "#3b82f6" 
const FLOW_DURATION = 2.5

export default function MillionGraphAnimation() {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video">
      
      {/* ------------------------------------------------------- */}
      {/* LAYER 1: The Static Background (Labels, Boxes, Logos)   */}
      {/* ------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 bg-black">
         {/* IMPORTANT: Export your diagram from Figma WITHOUT the flow lines 
            and save it to public/milliongraph-static.svg (or .png)
         */}
         <Image 
            src="/graph.svg" 
            alt="MillionGraph Architecture"
            fill
            className="object-contain bg-blend-multiply p-2 border-2 border-black"
            priority={false} 
         />
      </div>

      {/* ------------------------------------------------------- */}
      {/* LAYER 2: The Animated Overlays (Framer Motion)          */}
      {/* ------------------------------------------------------- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg 
          viewBox="0 0 1200 675" 
          className="w-full h-full" 
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
             {/* Gradient for the "Pulse" effect */}
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={FLOW_COLOR} stopOpacity="0" />
              <stop offset="50%" stopColor={FLOW_COLOR} stopOpacity="1" />
              <stop offset="100%" stopColor={FLOW_COLOR} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* --- GROUP 1: INTAKE FLOW (Left -> Funnel) --- */}
          {/* Replace these 'd' paths with your exact SVG paths from Figma */}
          <FlowPath d="M100,250 C150,250 180,330 250,330" delay={0} />
          <FlowPath d="M100,330 C150,330 180,330 250,330" delay={0.3} />
          <FlowPath d="M100,410 C150,410 180,330 250,330" delay={0.6} />

          {/* --- GROUP 2: MAIN PROCESSING (Center -> Layers) --- */}
          <FlowPath d="M350,330 C450,330 480,200 650,200" delay={0.2} strokeWidth={3} />
          <FlowPath d="M350,330 C450,330 480,450 650,450" delay={0.4} strokeWidth={3} />
          
          {/* --- GROUP 3: OUTPUT (Layers -> Right) --- */}
          <FlowPath d="M750,200 C850,200 900,330 1050,330" delay={0.8} />
          <FlowPath d="M750,450 C850,450 900,330 1050,330" delay={1.0} />

        </svg>

        {/* --- OPTIONAL: ROTATING SPHERE (Center) --- */}
        {/* Position this absolutely to match where the sphere is in your static image */}
        <div className="absolute top-[42%] left-[26%] w-[10%] aspect-square flex items-center justify-center">
            <motion.div 
              className="w-full h-full border border-blue-500/30 rounded-full border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </div>
    </div>
  )
}

// -------------------------------------------------------
// Helper Component: Individual Flow Line
// -------------------------------------------------------
function FlowPath({ d, delay = 0, strokeWidth = 2 }: { d: string, delay?: number, strokeWidth?: number }) {
  return (
    <>
      {/* 1. The faint background track (always visible structure) */}
      <path 
        d={d} 
        fill="transparent" 
        stroke="#E5E7EB" // faint gray (Tailwind gray-200)
        strokeWidth={strokeWidth} 
        strokeOpacity={0.3}
      />
      
      {/* 2. The moving glowing pulse (animated) */}
      <motion.path
        d={d}
        fill="transparent"
        stroke="url(#flow-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: [0, 0.4, 0], // Grows to 40% length then shrinks
          opacity: [0, 1, 0],      // Fades in then out
          pathOffset: [0, 1]       // Moves from start to end
        }}
        transition={{ 
          duration: FLOW_DURATION, 
          delay: delay,
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 0.5
        }}
      />
    </>
  )
}