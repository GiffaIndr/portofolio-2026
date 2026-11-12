"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { Award, Briefcase, GraduationCap } from "lucide-react";

interface AboutProps {
  lang: "EN" | "ID";
}

export function About({ lang }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Section 5.3: Organic frame parallax + inner image parallax
  const frameY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const innerImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const doodleDraw = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-surface dark:bg-[#181816] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-black/10 dark:border-white/10 gap-3">
          <div>
            <span className="text-xs font-sans font-semibold tracking-wider text-[#2D4A34] dark:text-[#A3E635] uppercase block mb-2">
              01. Introduction
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
              About <span className="italic text-[#2D4A34] dark:text-[#A3E635]">Syaikhani.</span>
            </h2>
          </div>
          <div className="text-xs font-sans text-ink/60 dark:text-ink-lightDim">
            IPB University · D4 TRPL · Bogor
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-10 sm:pt-14 items-start">
          {/* Left Column: Rearview Mirror Portal with Internal Parallax (Idea 5, Ref 4) */}
          <motion.div
            style={{ y: frameY }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="p-4 sm:p-5 pb-7 rounded-[2.5rem] bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-lg">
                {/* Rearview Mirror Portal Mask (Section 6, Idea 5) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden [clip-path:ellipse(47%_49%_at_50%_50%)] ring-1 ring-black/20 dark:ring-white/20 bg-black/10 shadow-inner">
                  <motion.div
                    style={{ y: innerImageY, scale: 1.25 }}
                    className="relative w-full h-full will-change-transform"
                  >
                    <Image
                      src="/profile/giffa-suit-formal.jpg"
                      alt="Syaikhani Giffa Indrawan in formal suit seen through rearview mirror portal"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                      sizes="(max-width: 640px) 85vw, 400px"
                    />
                  </motion.div>
                  {/* Subtle analog vignette sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                </div>

                <div className="mt-4 px-2 flex justify-between items-center">
                  <div>
                    <span className="font-serif text-base text-ink dark:text-ink-light block">
                      Formal &amp; Academic
                    </span>
                    <span className="text-xs text-ink/60 dark:text-ink-lightDim font-sans">
                      Bogor, West Java, ID
                    </span>
                  </div>
                  <span className="text-xs font-sans font-medium px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-ink dark:text-ink-light">
                    D4 TRPL
                  </span>
                </div>
              </div>

              {/* Engineering Values Statement */}
              <div className="mt-5 p-5 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#2D4A34] dark:text-[#A3E635] block">
                  {lang === "EN" ? "Engineering Philosophy" : "Prinsip Rekayasa"}
                </span>
                <p className="text-xs sm:text-sm text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans">
                  {lang === "EN"
                    ? "Prioritizing strict architectural modularity, real-time responsive performance, and empathetic human interfaces without unnecessary framework bloat."
                    : "Mengutamakan modularitas arsitektur yang solid, performa waktu-nyata, dan antarmuka humanis tanpa beban kognitif berlebih."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-7">
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink dark:text-ink-light font-normal leading-snug">
                Building software that balances functional rigor with human character.
              </h3>
              {/* Organic Hand-drawn SVG Accent */}
              <svg
                className="w-48 h-4 mt-2 text-[#059669] dark:text-[#34D399]"
                viewBox="0 0 200 16"
                fill="none"
              >
                <motion.path
                  d="M 5 10 Q 50 3, 100 8 T 195 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength: doodleDraw }}
                />
              </svg>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
              <p className="font-medium text-ink dark:text-ink-light text-lg sm:text-xl leading-snug">
                {profile.about.lead}
              </p>
              {profile.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Verified Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {profile.about.stats.map((st, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm"
                >
                  <span className="font-serif text-3xl sm:text-4xl text-ink dark:text-white font-normal block">
                    {st.value}
                  </span>
                  <span className="text-xs font-sans text-ink/60 dark:text-ink-lightDim uppercase tracking-wide block mt-1">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Verified Credentials */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 text-xs text-ink dark:text-white shadow-sm">
                <Award className="w-3.5 h-3.5 text-[#2D4A34] dark:text-[#A3E635]" />
                <span>Certiport IT Specialist (HTML &amp; CSS)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 text-xs text-ink dark:text-white shadow-sm">
                <Briefcase className="w-3.5 h-3.5 text-[#2D4A34] dark:text-[#A3E635]" />
                <span>PT Hexaon Developer Intern</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 text-xs text-ink dark:text-white shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 text-[#2D4A34] dark:text-[#A3E635]" />
                <span>SMK Wikrama Bogor Alum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

