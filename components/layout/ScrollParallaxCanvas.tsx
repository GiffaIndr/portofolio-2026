"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollParallaxCanvas() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    damping: 26,
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
      {/* Minimalist Left-Rail Trajectory Guide (Desktop 2XL) */}
      <div className="hidden 2xl:flex flex-col items-center absolute top-28 left-7 bottom-28 w-4 pointer-events-none opacity-45">
        <div className="w-[2px] h-full bg-black/10 dark:bg-white/15 relative rounded-full overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-[#34D399] via-[#38BDF8] to-[#FB923C] origin-top"
          />
        </div>
        <span className="font-sans text-[10px] font-semibold text-ink/60 dark:text-ink-lightDim uppercase tracking-wider rotate-90 mt-5 block">
          TRAJECTORY
        </span>
      </div>
    </div>
  );
}
