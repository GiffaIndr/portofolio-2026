"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { StarburstCutout, SwirlDoodle, FourPointStar } from "@/components/ui/PaperCutDoodles";

export function ScrollParallaxCanvas() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    damping: 26,
    stiffness: 95,
  });

  // Smooth continuous parallax transforms spanning the entire scroll height (0 to 1)
  const leftItem1Y = useTransform(smooth, [0, 1], [40, 680]);
  const leftItem1Rot = useTransform(smooth, [0, 1], [-6, 32]);

  const rightItem1Y = useTransform(smooth, [0, 1], [150, -420]);
  const rightItem1Rot = useTransform(smooth, [0, 1], [4, -28]);

  const leftItem2Y = useTransform(smooth, [0, 1], [300, -550]);
  const leftItem2Rot = useTransform(smooth, [0, 1], [-10, 18]);

  const rightItem2Y = useTransform(smooth, [0, 1], [-80, 520]);
  const rightItem2Rot = useTransform(smooth, [0, 1], [6, -15]);

  const starRot = useTransform(smooth, [0, 1], [0, 360]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
    >
      {/* 1. Left Margin: Rotating Starburst Sticker (drift + spin) */}
      <motion.div
        style={{ y: leftItem1Y, rotate: leftItem1Rot }}
        className="hidden xl:flex absolute top-[20%] left-5 items-center justify-center"
      >
        <div className="relative group cursor-pointer pointer-events-auto">
          <StarburstCutout className="w-16 h-16 drop-shadow-md" color="#FACC15" />
          <motion.div
            style={{ rotate: starRot }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="font-cutout text-[9px] text-[#141412] font-extrabold tracking-tighter">
              2026
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. Right Margin: Tactile Polaroid Snapshot Scrap with Car Mirror View (Drifting on scroll) */}
      <motion.div
        style={{ y: rightItem1Y, rotate: rightItem1Rot }}
        className="hidden lg:flex absolute top-[38%] right-6 flex-col items-center"
      >
        <div className="p-2 pb-3.5 bg-white dark:bg-[#22221E] rounded-xl shadow-polaroid border border-black/15 dark:border-white/20 w-28 rotate-3 transition-transform hover:scale-105 pointer-events-auto">
          <div className="w-14 h-4 bg-[#84CC16] -mt-3.5 mx-auto tape-green" />
          <div className="relative w-full aspect-square rounded-lg overflow-hidden mt-1 bg-black/10">
            <Image
              src="/assets/alpine-mirror.jpg"
              alt="Rearview mirror reflection"
              fill
              className="object-cover object-center"
              sizes="112px"
            />
          </div>
          <span className="font-script-brush text-xs text-[#141412] dark:text-[#FAF7F2] mt-1.5 block text-center">
            Bogor 6.59° S
          </span>
        </div>
      </motion.div>

      {/* 3. Left Margin: Hand-drawn Swirl Doodle (Opposite drift) */}
      <motion.div
        style={{ y: leftItem2Y, rotate: leftItem2Rot }}
        className="hidden xl:flex absolute top-[62%] left-6 items-center justify-center opacity-85"
      >
        <SwirlDoodle className="w-20 h-16" color="#84CC16" />
      </motion.div>

      {/* 4. Right Margin: Washi Tape Paper Stamp ("IPB TRPL") */}
      <motion.div
        style={{ y: rightItem2Y, rotate: rightItem2Rot }}
        className="hidden lg:flex absolute top-[75%] right-6 items-center justify-center pointer-events-auto"
      >
        <div className="px-3.5 py-1.5 bg-[#FACC15] text-[#141412] font-cutout text-[11px] font-bold rounded-sm shadow-paper border border-black/20 flex items-center gap-1.5">
          <FourPointStar className="w-3.5 h-3.5 text-[#141412]" />
          <span>IPB TRPL</span>
        </div>
      </motion.div>
    </div>
  );
}
