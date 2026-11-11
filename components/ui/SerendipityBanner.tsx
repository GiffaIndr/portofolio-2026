"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function SerendipityBanner({ lang }: { lang: "EN" | "ID" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Deep multi-plane continuous parallax (John Bolster style camera depth)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.98]);

  return (
    <section ref={containerRef} className="py-16 px-6 sm:px-10 md:px-14 overflow-hidden">
      <motion.div
        style={{ scale }}
        className="max-w-7xl mx-auto rounded-3xl relative overflow-hidden shadow-polaroid dark:shadow-[4px_4px_0px_rgba(255,255,255,0.1)] border border-black/15 dark:border-white/20 aspect-[16/8] sm:aspect-[21/9] min-h-[380px] flex items-center justify-center text-center bg-[#1E3A2F]"
      >
        {/* Parallax Landscape Background (Legitimate HD Royalty-Free Mist Mountain) */}
        <motion.div
          style={{ y: imageY, scale: 1.22 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/assets/bogor-landscape.jpg"
            alt="Misty green mountain ridge landscape"
            fill
            priority
            className="object-cover object-center filter saturate-[1.12] contrast-[1.05]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>

        {/* Solid gradient vignette overlay for cinematic readability (Zero backdrop-blur) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none" />

        {/* Serendipity Editorial Typography */}
        <motion.div style={{ y: textY }} className="relative z-10 px-6 max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="text-[#FDE047] text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            [ {lang === "EN" ? "Our destiny has been set" : "Sebuah takdir yang dirajut"} ]
          </div>

          <h2 className="font-script-brush text-[#FDE047] text-6xl sm:text-8xl md:text-9xl leading-[0.9] drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] select-none">
            Serendipity
          </h2>

          <p className="font-script-brush text-white text-xl sm:text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {lang === "EN" ? "All this is not a coincidence." : "Semua ini bukanlah suatu kebetulan."}
          </p>

          <div className="pt-3 text-[11px] sm:text-xs font-sans text-white/90 font-bold uppercase tracking-widest drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Syaikhani Giffa Indrawan · Software Engineering Tech · Bogor 2026
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
