"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SwirlDoodle } from "@/components/ui/PaperCutDoodles";
import { CardTilt3D } from "@/components/ui/CardTilt3D";

interface HeroProps {
  lang: "EN" | "ID";
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [1.5, -4]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-4 sm:px-8 md:px-12 overflow-hidden bg-paper dark:bg-paper-dark text-ink dark:text-ink-light"
    >
      {/* Editorial Folio Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-ink/75 dark:text-ink-light">
          <span className="text-[#2563EB] dark:text-[#60A5FA] font-extrabold">✦</span>
          <span>{lang === "EN" ? "FRONT-END & SOFTWARE ENGINEERING" : "REKAYASA PERANGKAT LUNAK"}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-ink/60 dark:text-ink-lightDim">
          <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 font-bold text-ink dark:text-white">
            IPB University
          </span>
          <span>· D4 TRPL · Bogor, ID</span>
        </div>
      </div>

      {/* Main Hero Spread (Greta Mae & Daniel Gallego inspired) */}
      <div className="max-w-7xl mx-auto w-full my-auto py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Bold Cutout Typography */}
        <motion.div
          style={{ y: titleY, opacity }}
          className="lg:col-span-7 space-y-5 sm:space-y-6"
        >
          {/* Solid Bespoke Ticket Badge with UIMaven Saffron Accent */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-xs uppercase tracking-wider shadow-[2px_2px_0px_#F59E0B] dark:shadow-[2px_2px_0px_#FBBF24]">
              <span className="text-[#F59E0B]">★</span>
              <span>{lang === "EN" ? "PORTFOLIO ARCHIVE // 2026" : "PORTOFOLIO DIGITAL // 2026"}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#2563EB] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[1.5px_1.5px_0px_#141412]">
              <span>✦ D4 TRPL</span>
            </div>
          </div>

          {/* Giant Cutout Title */}
          <div className="space-y-1">
            <h1 className="font-cutout text-[13vw] sm:text-[9vw] lg:text-[5.5rem] leading-[0.96] text-ink dark:text-ink-light tracking-tight">
              HELLO, <br />
              I'M <span className="text-[#2563EB] dark:text-[#60A5FA]">GIFFA.</span>
            </h1>
          </div>

          <p className="max-w-xl text-base sm:text-lg text-ink/80 dark:text-ink-lightMuted leading-relaxed font-sans">
            {lang === "EN"
              ? "Undergraduate software engineer at IPB University with 6-month industry internship experience at PT Hexaon. Dedicated to building tactile, responsive interfaces, WebGIS geospatial tools, and industrial IoT systems."
              : "Mahasiswa rekayasa perangkat lunak IPB University dengan pengalaman magang industri 6 bulan di PT Hexaon. Merancang antarmuka web tactile, visualisasi WebGIS, dan arsitektur IoT terverifikasi."}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-bold text-xs uppercase tracking-wider hover:bg-[#2563EB] dark:hover:bg-[#38BDF8] dark:hover:text-[#141412] transition-colors shadow-paper"
              data-cursor="DISCOVER"
              data-cursor-color="#2563EB"
            >
              <span>{lang === "EN" ? "Explore Selected Work" : "Jelajahi Karya"}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full border-2 border-black/20 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white font-bold text-xs uppercase tracking-wider transition-colors bg-white dark:bg-[#1E1E1B]"
            >
              <span>{lang === "EN" ? "About Me" : "Tentang Saya"}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Taped Polaroid & Cutout Portrait of Giffa with 3D Tilt */}
        <motion.div
          style={{ y: photoY, rotate: photoRotate }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            {/* Yellow swirl doodle floating on top right */}
            <div className="absolute -top-8 -right-4 hidden sm:block z-30">
              <SwirlDoodle className="w-16 h-14" color="#FACC15" />
            </div>

            {/* Taped photo card with 3D tilt */}
            <CardTilt3D maxTilt={7} scaleHover={1.02}>
              <div className="relative p-3.5 sm:p-5 pb-7 sm:pb-8 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-polaroid dark:shadow-polaroidDark transition-transform duration-500">
                {/* Cobalt washi tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 sm:h-7 bg-[#2563EB] rounded-xs shadow-xs z-20" />

                {/* Real Giffa portrait image */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
                  <Image
                    src="/profile/giffa-selfie-cool.jpg"
                    alt="Syaikhani Giffa Indrawan authentic portrait with glasses"
                    fill
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 85vw, 400px"
                  />
                </div>

                {/* Caption */}
                <div className="mt-3.5 sm:mt-4 flex items-center justify-between px-1">
                  <div>
                    <span className="font-script-brush text-xl sm:text-2xl text-ink dark:text-ink-light block">
                      Syaikhani Giffa
                    </span>
                    <span className="text-[11px] sm:text-xs text-ink/70 dark:text-ink-lightDim font-medium">
                      Bogor, West Java · TRPL
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#2563EB] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                    <span>Active 2026</span>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
