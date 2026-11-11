"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { SwirlDoodle } from "@/components/ui/PaperCutDoodles";

interface HeroProps {
  lang: "EN" | "ID";
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [1.5, -4]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-6 sm:px-10 md:px-14 overflow-hidden bg-paper dark:bg-paper-dark text-ink dark:text-ink-light"
    >
      {/* Top Editorial Field Bar (Beyond The Horizon style) */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/15 dark:border-white/15">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-grass dark:text-grass-lime">
          <span className="w-2.5 h-2.5 rounded-full bg-grass dark:bg-grass-lime animate-pulse" />
          <span>{lang === "EN" ? "Front-end & Software Engineering" : "Pengembang Front-end & Sistem"}</span>
        </div>
        <div className="text-xs text-ink/70 dark:text-ink-lightMuted font-semibold">
          IPB University · D4 TRPL · Bogor, West Java, ID
        </div>
      </div>

      {/* Main Hero Spread (Greta Mae & Daniel Gallego inspired) */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bold Cutout Typography */}
        <motion.div
          style={{ y: titleY, opacity }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Tagline / Subtitle Badge */}
          <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#84CC16]/20 dark:bg-[#84CC16]/25 text-[#4D7C0F] dark:text-[#A3E635] font-bold text-xs uppercase tracking-wide border border-[#84CC16]/40">
            {lang === "EN" ? "CREATIVE DEVELOPER PORTFOLIO" : "PORTOFOLIO PENGEMBANG KREATIF"}
          </div>

          {/* Giant Cutout Title */}
          <div className="space-y-1">
            <h1 className="font-cutout text-[12vw] sm:text-[8vw] lg:text-[5.4rem] leading-[0.98] text-ink dark:text-ink-light tracking-tight">
              HELLO, <br />
              I'M <span className="text-[#65A30D] dark:text-[#A3E635]">GIFFA.</span>
            </h1>
          </div>

          <p className="max-w-xl text-base sm:text-lg text-ink/80 dark:text-ink-lightMuted leading-relaxed font-sans">
            {lang === "EN"
              ? "Undergraduate software engineer at IPB University with 6-month industry internship experience at PT Hexaon. Dedicated to building tactile, responsive interfaces, WebGIS geospatial tools, and industrial IoT systems."
              : "Mahasiswa rekayasa perangkat lunak IPB University dengan pengalaman magang industri 6 bulan di PT Hexaon. Merancang antarmuka web tactile, visualisasi WebGIS, dan arsitektur IoT terverifikasi."}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-bold text-xs uppercase tracking-wider hover:bg-terracotta dark:hover:bg-butter transition-colors shadow-paper"
              data-cursor="DISCOVER"
            >
              <span>{lang === "EN" ? "Explore Selected Work" : "Jelajahi Karya"}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-black/20 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>{lang === "EN" ? "About Me" : "Tentang Saya"}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Taped Polaroid & Cutout Portrait of Giffa */}
        <motion.div
          style={{ y: photoY, rotate: photoRotate }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Yellow swirl doodle floating on top right */}
            <div className="absolute -top-10 -right-6 hidden sm:block z-30">
              <SwirlDoodle className="w-20 h-16" color="#FACC15" />
            </div>

            {/* Taped photo card (Solid paper, no glassmorphism) */}
            <div className="relative p-4 sm:p-5 pb-8 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-polaroid dark:shadow-polaroidDark transition-transform duration-500">
              {/* Green washi tape */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 tape-green z-20" />

              {/* Real Giffa portrait image */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
                <Image
                  src="/profile/giffa-selfie-cool.jpg"
                  alt="Syaikhani Giffa Indrawan authentic portrait with glasses"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 90vw, 420px"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <span className="font-script-brush text-2xl text-ink dark:text-ink-light block">
                    Syaikhani Giffa
                  </span>
                  <span className="text-xs text-ink/70 dark:text-ink-lightDim font-medium">
                    Software Engineering Tech · Bogor
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-butter text-ink flex items-center justify-center font-bold text-xs shadow-sm rotate-6">
                  2026
                </div>
              </div>
            </div>

            {/* Yellow pill sticker at bottom */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 px-4 py-2 bg-butter text-ink rounded-full font-cutout text-xs shadow-paper -rotate-2 border border-black/20 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span>CRAFT &amp; CODE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Masthead Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-black/15 dark:border-white/15 text-xs text-ink/65 dark:text-ink-lightDim font-medium">
        <div>COORDINATES: 6.5971° S, 106.8060° E</div>
        <div>BOGOR · ELEVATION 265 M · IPB TRPL</div>
      </div>
    </section>
  );
}
