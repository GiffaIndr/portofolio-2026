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

  const frameY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const innerImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const doodleDraw = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

  const paragraphs =
    lang === "ID" && profile.about.paragraphsId
      ? profile.about.paragraphsId
      : profile.about.paragraphs;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#162E23] dark:bg-[#0E1F17] text-[#FAF7F2] transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle botanical ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[#34D399]/10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header (No kicker/eyebrow, heading speaks directly) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-white/15 gap-4">
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight">
            {lang === "EN" ? "About " : "Tentang "}
            <span className="italic text-[#A7F3D0]">Syaikhani.</span>
          </h2>
          <div className="text-xs font-sans text-[#A7F3D0]/80 tracking-wide">
            IPB University · D4 TRPL · Bogor
          </div>
        </div>

        {/* Asymmetric Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">
          {/* Left Column: Architectural Portrait Frame with Opposing Parallax */}
          <motion.div
            style={{ y: frameY }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start will-change-transform"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="p-3 sm:p-4 rounded-[2rem] bg-[#1F3E30] dark:bg-[#152B21] border border-white/15 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[3/4] w-full rounded-[1.4rem] overflow-hidden bg-black/20">
                  <motion.div
                    style={{ y: innerImageY, scale: 1.18 }}
                    className="relative w-full h-full will-change-transform"
                  >
                    <Image
                      src="/profile/giffa-suit-formal.jpg"
                      alt="Syaikhani Giffa Indrawan in formal attire"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 85vw, 400px"
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#162E23]/50 via-transparent to-transparent" />
                </div>

                <div className="mt-4 px-2 pb-1 flex justify-between items-center">
                  <div>
                    <span className="font-serif text-base text-white block">
                      {lang === "EN" ? "Formal & Academic" : "Formal & Akademis"}
                    </span>
                    <span className="text-xs text-[#A7F3D0]/75 font-sans">
                      Bogor, West Java, ID
                    </span>
                  </div>
                  <span className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-white/10 text-[#A7F3D0]">
                    D4 TRPL
                  </span>
                </div>
              </div>

              {/* Engineering Philosophy Statement (Clean typographic callout without card clutter) */}
              <div className="mt-8 pl-4 border-l border-[#FDE047]/40 space-y-2">
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#FDE047] block">
                  {lang === "EN" ? "Engineering Philosophy" : "Prinsip Rekayasa"}
                </span>
                <p className="text-sm text-[#FAF7F2]/80 leading-relaxed font-sans">
                  {lang === "EN"
                    ? "Prioritizing strict architectural modularity, real-time responsive performance, and empathetic human interfaces without unnecessary framework bloat."
                    : "Mengutamakan modularitas arsitektur yang solid, performa waktu-nyata, dan antarmuka humanis tanpa beban kognitif berlebih."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Typographic Metric Ledger */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-snug">
                {lang === "EN"
                  ? "Building software that balances functional rigor with human character."
                  : "Membangun perangkat lunak yang menyeimbangkan ketelitian fungsional dengan karakter humanis."}
              </h3>
              {/* Animated SVG Brush Stroke */}
              <svg
                className="w-48 h-4 mt-3 text-[#FDE047]"
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

            <div className="space-y-4 text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed font-sans font-normal max-w-[68ch]">
              <p className="font-medium text-white text-lg sm:text-xl leading-snug">
                {lang === "ID" && profile.about.leadId ? profile.about.leadId : profile.about.lead}
              </p>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Typographic Metric Ledger (Clean hairline separation instead of generic boxed cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
              {profile.about.stats.map((st, i) => (
                <div key={i} className="space-y-1">
                  <span className="font-serif text-4xl sm:text-5xl text-[#FDE047] font-normal block tabular-nums">
                    {st.value}
                  </span>
                  <span className="text-xs font-sans text-[#A7F3D0]/85 uppercase tracking-wider block">
                    {lang === "ID" && st.labelId ? st.labelId : st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Credentials */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs text-white font-sans">
                <Award className="w-3.5 h-3.5 text-[#FDE047]" />
                <span>
                  {lang === "EN"
                    ? "Certiport IT Specialist (HTML & CSS)"
                    : "Sertifikasi Certiport IT Specialist (HTML & CSS)"}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs text-white font-sans">
                <Briefcase className="w-3.5 h-3.5 text-[#A7F3D0]" />
                <span>
                  {lang === "EN"
                    ? "PT Hexaon Developer Intern"
                    : "Magang Developer PT Hexaon"}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs text-white font-sans">
                <GraduationCap className="w-3.5 h-3.5 text-[#A7F3D0]" />
                <span>
                  {lang === "EN"
                    ? "SMK Wikrama Bogor Alum"
                    : "Alumni SMK Wikrama Bogor"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
