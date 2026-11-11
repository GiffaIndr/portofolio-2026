"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroProps {
  lang: "EN" | "ID";
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-6 sm:px-10 md:px-16 overflow-hidden bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300"
    >
      {/* Editorial Header Line (Quiet & Authoritative) */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-ink/70 dark:text-ink-lightDim">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A34] dark:bg-[#A3E635]" />
          <span>{lang === "EN" ? "PORTFOLIO ARCHIVE // 2026" : "ARSIP PORTOFOLIO // 2026"}</span>
        </div>
        <div className="text-xs font-mono text-ink/60 dark:text-ink-lightDim">
          IPB University · D4 TRPL · Bogor, West Java, ID
        </div>
      </div>

      {/* Main Editorial Spread (Meadowell & Primal Pastures inspired) */}
      <div className="max-w-7xl mx-auto w-full my-auto py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Refined Editorial Typography */}
        <motion.div
          style={{ y: titleY, opacity }}
          className="lg:col-span-7 space-y-6 sm:space-y-8"
        >
          {/* Serif Headline with Italic Accent */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-normal leading-[1.04] tracking-tight text-ink dark:text-ink-light">
            Crafting tactile, <br />
            purposeful software, <br />
            <span className="italic text-[#2D4A34] dark:text-[#A3E635]">really.</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-ink/75 dark:text-ink-lightMuted leading-relaxed font-sans font-normal">
            {lang === "EN"
              ? "Software Engineering Technology undergraduate at IPB University with 6-month developer internship experience at PT Hexaon. Building verified industrial IoT gates, municipal WebGIS directories, and responsive front-end architecture."
              : "Mahasiswa Rekayasa Perangkat Lunak di IPB University dengan pengalaman magang industri 6 bulan di PT Hexaon. Merancang arsitektur IoT terverifikasi, direktori WebGIS kota, dan sistem web berkinerja tinggi."}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-medium text-xs uppercase tracking-wider hover:bg-[#2D4A34] dark:hover:bg-[#A3E635] dark:hover:text-[#141412] transition-colors shadow-sm"
            >
              <span>{lang === "EN" ? "Explore Selected Work" : "Lihat Karya Pilihan"}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-black/20 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <span>{lang === "EN" ? "About Syaikhani" : "Tentang Syaikhani"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Serene Editorial Portrait Frame */}
        <motion.div
          style={{ y: photoY }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            {/* Clean Editorial Card (Zero cartoon stickers, zero washi tape) */}
            <div className="p-3.5 sm:p-4 pb-6 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/15 shadow-sm transition-transform duration-500">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
                <Image
                  src="/profile/giffa-selfie-cool.jpg"
                  alt="Syaikhani Giffa Indrawan authentic portrait"
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 85vw, 400px"
                />
              </div>

              {/* Clean Caption */}
              <div className="mt-4 flex items-center justify-between px-1.5">
                <div>
                  <span className="font-serif text-lg text-ink dark:text-ink-light block">
                    Syaikhani Giffa Indrawan
                  </span>
                  <span className="text-xs text-ink/60 dark:text-ink-lightDim font-sans">
                    Software Engineer · Bogor, ID
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium text-ink/60 dark:text-ink-lightDim">
                  TRPL '26
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom note */}
      <div className="max-w-7xl mx-auto w-full pt-4 flex justify-between items-center text-xs font-mono text-ink/50 dark:text-ink-lightDim">
        <span>SCROLL TO DISCOVER</span>
        <span>6°35'S 106°47'E</span>
      </div>
    </section>
  );
}
