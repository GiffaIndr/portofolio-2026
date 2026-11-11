"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollParallaxCanvas() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 90,
    mass: 0.2,
  });

  const lineHeight = useTransform(smooth, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
    >
      {/* Minimalist Editorial Left-Rail Trajectory Guide */}
      <div className="hidden 2xl:flex flex-col items-center absolute top-32 left-8 bottom-32 w-3 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <div className="w-[1.5px] h-full bg-black/10 dark:bg-white/10 relative rounded-full overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-[#2D4A34] dark:bg-[#A3E635] origin-top"
          />
        </div>
        <span className="font-mono text-[9px] text-ink/50 dark:text-ink-lightDim uppercase tracking-widest rotate-90 mt-5 block">
          TRAJECTORY
        </span>
      </div>
    </div>
  );
}
