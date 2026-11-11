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

  // Calm, cinematic parallax depth
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section ref={containerRef} className="py-12 sm:py-20 px-6 sm:px-10 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-3xl relative overflow-hidden border border-black/10 dark:border-white/10 aspect-[16/8] sm:aspect-[21/9] min-h-[360px] sm:min-h-[440px] flex items-center justify-center text-center bg-[#1E3A2F] shadow-sm">
        {/* Parallax Landscape Background */}
        <motion.div
          style={{ y: imageY, scale: 1.15 }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src="/assets/bogor-landscape.jpg"
            alt="Misty green mountain ridge landscape in Bogor"
            fill
            priority
            className="object-cover object-center filter saturate-[1.08] contrast-[1.04]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>

        {/* Soft natural vignette for calm editorial readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/35 pointer-events-none" />

        {/* Serendipity Editorial Typography (Meadowell inspired) */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 px-6 max-w-2xl mx-auto space-y-3 sm:space-y-4"
        >
          <span className="text-[#FDE68A] text-xs font-sans font-semibold tracking-[0.2em] uppercase block">
            {lang === "EN" ? "Our destiny has been set" : "Sebuah takdir yang dirajut"}
          </span>

          <h2 className="font-serif italic text-white text-6xl sm:text-8xl md:text-9xl leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] select-none font-normal">
            Serendipity
          </h2>

          <p className="font-serif text-white/95 text-xl sm:text-2xl font-light italic tracking-wide">
            {lang === "EN" ? "All this is not a coincidence." : "Semua ini bukanlah suatu kebetulan."}
          </p>

          <div className="pt-2 text-xs font-sans font-medium text-white/80 uppercase tracking-wider">
            Syaikhani Giffa Indrawan · D4 TRPL · Bogor 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
