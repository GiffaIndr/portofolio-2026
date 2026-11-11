"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  lang: "EN" | "ID";
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll parallax values
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 px-6 sm:px-10 md:px-14 overflow-hidden"
    >
      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-ink/10 dark:border-cream/10"
      >
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-ink/70 dark:text-cream/70">
          <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <span>{lang === "EN" ? "Front-end & Web Systems" : "Pengembang Web & Front-end"}</span>
        </div>
        <div className="text-xs font-medium text-ink/50 dark:text-cream/50">
          IPB University · D4 TRPL · Semester 6
        </div>
      </motion.div>

      {/* Main Hero Spread */}
      <div className="max-w-7xl mx-auto w-full my-auto py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bold Editorial Typography */}
        <motion.div
          style={{ y: titleY, opacity }}
          className="lg:col-span-7 space-y-6 sm:space-y-8"
        >
          <div className="space-y-1">
            <span className="font-script-note text-2xl sm:text-3xl text-ochre block -rotate-2">
              {lang === "EN" ? "Hello there, I'm" : "Halo semua, saya"}
            </span>
            <h1 className="font-display-hero text-[13vw] sm:text-[9vw] lg:text-[6.5rem] leading-[0.88] text-ink dark:text-cream">
              SYAIKHANI <br />
              <span className="text-emerald dark:text-[#52B788]">GIFFA.</span>
            </h1>
          </div>

          <p className="max-w-xl text-lg sm:text-xl text-ink/80 dark:text-cream/80 leading-relaxed font-sans font-normal">
            {lang === "EN"
              ? "Undergraduate engineer crafting high-fidelity web experiences, geospatial visualizations, and IoT systems where clean aesthetic meets rigorous architecture."
              : "Mahasiswa rekayasa perangkat lunak IPB University yang merancang website berkinerja tinggi, visualisasi WebGIS, dan sistem IoT dengan estetika bersih dan presisi."}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink font-bold text-xs uppercase tracking-wider hover:bg-ochre dark:hover:bg-butter transition-colors duration-300 shadow-luxe"
              data-cursor="EXPLORE"
            >
              <span>{lang === "EN" ? "Explore Selected Work" : "Jelajahi Karya"}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-ink/20 dark:border-cream/20 hover:border-ink dark:hover:border-cream font-semibold text-xs tracking-wide uppercase transition-colors"
            >
              <span>{lang === "EN" ? "Read Biography" : "Tentang Saya"}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Editorial Portrait Cutout with Taped Paper Accent (Daniel Gallego & Tyler style) */}
        <motion.div
          style={{ y: portraitY }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Taped photo card */}
            <div className="relative p-4 sm:p-5 pb-8 sm:pb-10 rounded-3xl bg-card border border-ink/10 dark:border-cream/10 shadow-polaroid rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Green washi tape top-center */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 washi-tape-green z-20" />

              {/* Portrait image container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-ink/5">
                <Image
                  src="/profile/portrait-main.webp"
                  alt="Syaikhani Giffa Indrawan portrait in creative studio"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Handwritten note caption */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <span className="font-script-note text-xl sm:text-2xl text-ink font-bold block">
                    Syaikhani Giffa
                  </span>
                  <span className="text-[11px] text-ink/60 font-medium">
                    Software Engineering Tech · Bogor
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-butter text-ink flex items-center justify-center font-bold text-xs shadow-sm rotate-6">
                  2026
                </div>
              </div>
            </div>

            {/* Floating yellow pill sticker */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2 bg-butter text-ink rounded-full font-display font-extrabold text-xs shadow-luxe -rotate-3 border border-ink/20 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-ochre" />
              <span>FRONT-END CRAFT</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Quiet Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-ink/10 dark:border-cream/10 text-xs text-ink/50 dark:text-cream/50">
        <div>SCROLL TO DISCOVER</div>
        <div className="flex items-center gap-2">
          <span>6.59° S, 106.80° E</span>
          <span>·</span>
          <span>BOGOR HIGHLANDS</span>
        </div>
      </div>
    </section>
  );
}
