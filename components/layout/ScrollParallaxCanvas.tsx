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
    stiffness: 85,
    mass: 0.22,
  });

  // Möbius multi-plane differential parallax transforms
  const leftItem1Y = useTransform(smooth, [0, 1], [40, 720]);
  const leftItem1Rot = useTransform(smooth, [0, 1], [-10, 32]);

  const rightPolaroidY = useTransform(smooth, [0, 1], [160, -560]);
  const rightPolaroidRot = useTransform(smooth, [0, 1], [4, -26]);

  const leftDoodleY = useTransform(smooth, [0, 1], [380, -620]);
  const leftDoodleRot = useTransform(smooth, [0, 1], [-14, 20]);

  const rightBadgeY = useTransform(smooth, [0, 1], [-80, 620]);
  const rightBadgeRot = useTransform(smooth, [0, 1], [6, -22]);

  const starRot = useTransform(smooth, [0, 1], [0, 360]);

  // Height of the signature trajectory indicator line
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
      {/* Möbius / John Bolster Style: Minimalist Elegant Left-Rail Trajectory Guide */}
      <div className="hidden 2xl:flex flex-col items-center absolute top-28 left-8 bottom-28 w-4 pointer-events-none opacity-45 hover:opacity-100 transition-opacity">
        <div className="w-[2px] h-full bg-black/10 dark:bg-white/10 relative rounded-full overflow-hidden">
          {/* Active progress indicator line with vibrant gradient */}
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-[#2563EB] via-[#84CC16] to-[#EA580C] origin-top"
          />
        </div>
        <span className="font-mono text-[9px] font-bold text-ink/60 dark:text-ink-lightDim uppercase tracking-widest rotate-90 mt-5 block">
          TRAJECTORY
        </span>
      </div>

      {/* 1. Left Margin: Rotating Tactile Starburst Sticker (UIMaven Saffron Yellow) */}
      <motion.div
        style={{ y: leftItem1Y, rotate: leftItem1Rot }}
        className="hidden xl:flex absolute top-[20%] left-6 items-center justify-center pointer-events-auto"
      >
        <div className="relative group cursor-pointer transition-transform hover:scale-110">
          <StarburstCutout className="w-16 h-16 drop-shadow-md" color="#FACC15" />
          <motion.div
            style={{ rotate: starRot }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="font-cutout text-[9px] text-[#141412] font-black tracking-tight">
              2026
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. Right Margin: Tactile Polaroid Scrap with Giffa's Real Photo (Drifting on scroll) */}
      <motion.div
        style={{ y: rightPolaroidY, rotate: rightPolaroidRot }}
        className="hidden lg:flex absolute top-[38%] right-6 flex-col items-center pointer-events-auto"
      >
        <div className="p-2 pb-3.5 bg-white dark:bg-[#22221E] rounded-xl shadow-polaroid dark:shadow-[3px_3px_0px_rgba(255,255,255,0.12)] border border-black/15 dark:border-white/20 w-28 rotate-2 transition-transform hover:scale-105">
          <div className="w-14 h-4 bg-[#059669] -mt-3.5 mx-auto rounded-xs shadow-xs" />
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

      {/* 3. Left Margin: Organic Hand-drawn Swirl Doodle (Electric Orchid) */}
      <motion.div
        style={{ y: leftDoodleY, rotate: leftDoodleRot }}
        className="hidden xl:flex absolute top-[62%] left-7 items-center justify-center opacity-85"
      >
        <SwirlDoodle className="w-20 h-16" color="#7C3AED" />
      </motion.div>

      {/* 4. Right Margin: Tactile Cobalt Star Stamp ("IPB D4 TRPL") */}
      <motion.div
        style={{ y: rightBadgeY, rotate: rightBadgeRot }}
        className="hidden lg:flex absolute top-[74%] right-7 items-center justify-center pointer-events-auto"
      >
        <div className="px-3.5 py-1.5 bg-[#2563EB] text-white font-mono text-[11px] font-bold rounded-sm shadow-[2px_2px_0px_#141412] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.2)] border border-black/20 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
          <FourPointStar className="w-3.5 h-3.5 text-white" />
          <span>IPB TRPL</span>
        </div>
      </motion.div>
    </div>
  );
}
