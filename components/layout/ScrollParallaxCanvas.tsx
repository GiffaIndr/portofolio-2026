"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function ScrollParallaxCanvas() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth springs for fluid, buttery responsiveness
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  // Parallax offsets that evolve from scroll top to bottom
  const y1 = useTransform(smoothProgress, [0, 1], [-20, 420]);
  const y2 = useTransform(smoothProgress, [0, 1], [60, -380]);
  const y3 = useTransform(smoothProgress, [0, 1], [150, -500]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [-6, 32]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [12, -45]);
  const scaleBadge = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.08, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
    >
      {/* Floating Sticker 1: Tyler-style flower sticker on left rail */}
      <motion.div
        style={{ y: y1, rotate: rotate1, scale: scaleBadge }}
        className="hidden xl:flex absolute top-[28%] left-8 items-center justify-center"
      >
        <div className="px-4 py-2 rounded-full bg-butter text-ink border-2 border-ink shadow-luxe font-display font-extrabold text-xs tracking-tight uppercase">
          ✦ CRAFT &amp; CODE ✦
        </div>
      </motion.div>

      {/* Floating Sticker 2: Washi Tape Badge on right rail */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="hidden lg:flex absolute top-[55%] right-8 items-center justify-center"
      >
        <div className="px-5 py-2 bg-[#8EC641] text-ink font-sans font-bold text-xs tracking-wide shadow-polaroid washi-tape-green border border-black/10">
          IPB TRPL · 2026
        </div>
      </motion.div>

      {/* Floating Sticker 3: Kyoto / Perrier style circular badge */}
      <motion.div
        style={{ y: y3 }}
        className="hidden xl:flex absolute top-[80%] left-10 items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-ochre text-cream flex items-center justify-center font-display text-center text-[10px] font-extrabold leading-tight shadow-luxe p-2 border-2 border-cream/30">
          BOGOR<br />ORIGINAL<br />STUDIO
        </div>
      </motion.div>
    </div>
  );
}
