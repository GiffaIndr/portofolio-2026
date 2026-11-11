"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { StarburstCutout, SwirlDoodle, FourPointStar } from "@/components/ui/PaperCutDoodles";

export function ScrollParallaxCanvas() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 90,
    mass: 0.2,
  });

  // John Bolster inspired continuous scroll depth transforms
  const leftItem1Y = useTransform(smooth, [0, 1], [30, 620]);
  const leftItem1Rot = useTransform(smooth, [0, 1], [-8, 28]);

  const rightPolaroidY = useTransform(smooth, [0, 1], [140, -480]);
  const rightPolaroidRot = useTransform(smooth, [0, 1], [5, -22]);

  const leftDoodleY = useTransform(smooth, [0, 1], [350, -520]);
  const leftDoodleRot = useTransform(smooth, [0, 1], [-12, 16]);

  const rightBadgeY = useTransform(smooth, [0, 1], [-60, 540]);
  const rightBadgeRot = useTransform(smooth, [0, 1], [4, -18]);

  const starRot = useTransform(smooth, [0, 1], [0, 360]);

  // Height of the signature trajectory indicator line (John Bolster signature element)
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
      {/* John Bolster Style: Minimalist Elegant Left-Rail Trajectory Guide */}
      <div className="hidden 2xl:flex flex-col items-center absolute top-28 left-8 bottom-28 w-4 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        {/* Subtle background track */}
        <div className="w-[1.5px] h-full bg-black/10 dark:bg-white/10 relative">
          {/* Active progress indicator line */}
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-[#84CC16] dark:bg-[#A3E635] origin-top"
          />
        </div>
        <span className="font-cutout text-[9px] text-ink/50 dark:text-ink-lightDim uppercase tracking-widest rotate-90 mt-4 block">
          TRAJECTORY
        </span>
      </div>

      {/* 1. Left Margin: Rotating Tactile Starburst Sticker */}
      <motion.div
        style={{ y: leftItem1Y, rotate: leftItem1Rot }}
        className="hidden xl:flex absolute top-[22%] left-6 items-center justify-center pointer-events-auto"
      >
        <div className="relative group cursor-pointer transition-transform hover:scale-110">
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

      {/* 2. Right Margin: Tactile Polaroid Scrap with Giffa's Real Photo (Drifting on scroll) */}
      <motion.div
        style={{ y: rightPolaroidY, rotate: rightPolaroidRot }}
        className="hidden lg:flex absolute top-[40%] right-6 flex-col items-center pointer-events-auto"
      >
        <div className="p-2 pb-3.5 bg-white dark:bg-[#22221E] rounded-xl shadow-polaroid dark:shadow-[3px_3px_0px_rgba(255,255,255,0.12)] border border-black/15 dark:border-white/20 w-28 rotate-2 transition-transform hover:scale-105">
          <div className="w-14 h-4 bg-[#84CC16] -mt-3.5 mx-auto tape-green" />
          <div className="relative w-full aspect-square rounded-lg overflow-hidden mt-1 bg-black/10">
            <Image
              src="/profile/giffa-casual-hangout.jpg"
              alt="Syaikhani Giffa Indrawan snapshot"
              fill
              className="object-cover object-top"
              sizes="112px"
            />
          </div>
          <span className="font-script-brush text-xs text-[#141412] dark:text-[#FAF7F2] mt-1.5 block text-center font-bold">
            Giffa · Bogor
          </span>
        </div>
      </motion.div>

      {/* 3. Left Margin: Organic Hand-drawn Swirl Doodle */}
      <motion.div
        style={{ y: leftDoodleY, rotate: leftDoodleRot }}
        className="hidden xl:flex absolute top-[65%] left-7 items-center justify-center opacity-80"
      >
        <SwirlDoodle className="w-20 h-16" color="#84CC16" />
      </motion.div>

      {/* 4. Right Margin: Washi Tape Paper Stamp ("IPB TRPL") */}
      <motion.div
        style={{ y: rightBadgeY, rotate: rightBadgeRot }}
        className="hidden lg:flex absolute top-[76%] right-7 items-center justify-center pointer-events-auto"
      >
        <div className="px-3.5 py-1.5 bg-[#FACC15] text-[#141412] font-cutout text-[11px] font-bold rounded-sm shadow-paper border border-black/20 flex items-center gap-1.5 hover:scale-105 transition-transform">
          <FourPointStar className="w-3.5 h-3.5 text-[#141412]" />
          <span>IPB TRPL</span>
        </div>
      </motion.div>
    </div>
  );
}
