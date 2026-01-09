"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AnimatedLogo() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "200px start"],
  });

  const rTranslateY = useTransform(scrollYProgress, [0, 1], [35, 0]);

  return (
    <div ref={ref} className="flex items-start">
      <LogoBox letter="M" />

      <motion.div style={{ y: rTranslateY }}>
        <LogoBox letter="R" />
      </motion.div>

      <LogoBox letter="I" />
    </div>
  );
}

function LogoBox({ letter }: { letter: string }) {
  return (
    <div className="w-9 h-9 rounded-md text-foreground border-2 border-foreground flex items-center justify-center font-bold text-lg tracking-tight relative bottom-3">
      {letter}
    </div>
  );
}
