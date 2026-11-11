"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { ArrowUpRight, Award, Briefcase, GraduationCap, Sparkles, Terminal } from "lucide-react";
import { StarburstCutout } from "@/components/ui/PaperCutDoodles";

interface AboutProps {
  lang: "EN" | "ID";
}

export function About({ lang }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [-25, 35]);
  const tapeRotate = useTransform(scrollYProgress, [0, 1], [-4, 5]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-surface dark:bg-[#1A1A17] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/15 dark:border-white/15 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-[#84CC16]/20 dark:bg-[#84CC16]/30 text-[#4D7C0F] dark:text-[#A3E635] font-bold text-xs uppercase mb-2">
              {lang === "EN" ? "INTRODUCTION" : "PENGENALAN"}
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              ABOUT <span className="text-[#65A30D] dark:text-[#A3E635]">SYAIKHANI.</span>
            </h2>
          </div>
          <div className="text-xs uppercase font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
            IPB University · D4 TRPL · Bogor
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-14 items-start">
          {/* Left Column: Parallax Taped Polaroid of Giffa in Suit + Engineering Manifesto */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Starburst badge floating top-left */}
              <div className="absolute -top-7 -left-5 z-30">
                <StarburstCutout className="w-14 h-14" color="#FACC15" />
              </div>

              <div className="p-4 sm:p-5 pb-7 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-polaroid dark:shadow-polaroidDark">
                {/* Yellow washi tape */}
                <motion.div
                  style={{ rotate: tapeRotate }}
                  className="absolute -top-3.5 left-14 w-28 h-7 tape-yellow z-20"
                />

                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
                  <Image
                    src="/profile/giffa-suit-formal.jpg"
                    alt="Syaikhani Giffa Indrawan in formal suit"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 90vw, 420px"
                  />
                </div>

                <div className="mt-4 px-1 flex justify-between items-center">
                  <div>
                    <span className="font-script-brush text-2xl text-ink dark:text-ink-light block">
                      Formal &amp; Engineering
                    </span>
                    <span className="text-xs text-ink/70 dark:text-ink-lightDim font-medium">
                      Bogor, West Java, Indonesia
                    </span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#84CC16]/20 text-[#4D7C0F] dark:text-[#A3E635]">
                    D4 TRPL
                  </span>
                </div>
              </div>

              {/* Engineering Philosophy Sticky Note (Eliminates empty space, adds editorial depth) */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65A30D] dark:text-[#A3E635]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{lang === "EN" ? "Engineering Values" : "Prinsip Rekayasa"}</span>
                </div>
                <p className="text-xs sm:text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                  {lang === "EN"
                    ? "Prioritizing strict architectural modularity, real-time responsive performance, and empathetic human interfaces without framework bloat."
                    : "Mengutamakan modularitas arsitektur yang solid, performa waktu-nyata, dan antarmuka humanis tanpa beban kognitif berlebih."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Verified Metrics */}
          <div className="lg:col-span-7 space-y-7">
            <h3 className="font-cutout text-2xl sm:text-4xl text-ink dark:text-ink-light leading-snug">
              Building software that balances functional rigor with human character.
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-ink/80 dark:text-[#E2DEC9] leading-relaxed font-sans">
              <p className="font-medium text-ink dark:text-ink-light text-lg sm:text-xl leading-snug">
                {profile.about.lead}
              </p>
              {profile.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Verified Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-3">
              {profile.about.stats.map((st, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-white/20 shadow-sm"
                >
                  <span className="font-cutout text-2xl sm:text-4xl text-ink dark:text-ink-light block">
                    {st.value}
                  </span>
                  <span className="text-xs font-bold text-ink/75 dark:text-[#FAF7F2] uppercase tracking-wide block mt-1">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Verified Credentials Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#84CC16]/20 text-[#4D7C0F] dark:text-[#A3E635] text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                Certiport IT Specialist (HTML &amp; CSS)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FACC15]/20 text-ink dark:text-[#FDE047] text-xs font-bold">
                <Briefcase className="w-3.5 h-3.5" />
                PT Hexaon Business Mitrasindo Intern
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-ink dark:text-ink-light text-xs font-bold">
                <GraduationCap className="w-3.5 h-3.5" />
                SMK Wikrama Bogor Alum
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
