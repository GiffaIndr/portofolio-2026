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

  // Deep multi-plane continuous parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.99]);

  return (
    <section ref={containerRef} className="py-14 px-6 sm:px-10 md:px-14 overflow-hidden">
      <motion.div
        style={{ scale }}
        className="max-w-7xl mx-auto rounded-3xl relative overflow-hidden shadow-polaroid border border-black/15 dark:border-white/20 aspect-[16/8] sm:aspect-[21/9] min-h-[360px] flex items-center justify-center text-center bg-[#2B6E3F]"
      >
        {/* Parallax Landscape Background (Reference #3 Alpine Meadow) */}
        <motion.div
          style={{ y: imageY, scale: 1.18 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/assets/serendipity-landscape.jpg"
            alt="Lush green alpine hills and mountains landscape"
            fill
            priority
            className="object-cover object-center filter saturate-[1.08] contrast-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>

        {/* Tactile overlay for contrast (solid gradient, zero blur) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/35 pointer-events-none" />

        {/* Serendipity Bold Yellow Brush Marker Typography (Reference #3) */}
        <motion.div style={{ y: textY }} className="relative z-10 px-6 max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="text-[#FDE047] text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            [ {lang === "EN" ? "Our happiness has been destined" : "Sebuah takdir yang dirajut"} ]
          </div>

          <h2 className="font-script-brush text-[#FDE047] text-6xl sm:text-8xl md:text-9xl leading-[0.9] drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] select-none">
            Serendipity
          </h2>

          <p className="font-script-brush text-white text-xl sm:text-3xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            {lang === "EN" ? "All this is not a coincidence." : "Semua ini bukanlah suatu kebetulan."}
          </p>

          <div className="pt-3 text-[11px] sm:text-xs font-sans text-white/80 font-bold uppercase tracking-widest drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Syaikhani Giffa Indrawan · Portfolio Archive · 2026
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
