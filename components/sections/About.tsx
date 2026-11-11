"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { Award, Briefcase, GraduationCap, Terminal } from "lucide-react";
import { StarburstCutout } from "@/components/ui/PaperCutDoodles";
import { CardTilt3D } from "@/components/ui/CardTilt3D";

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
  const tapeRotate = useTransform(scrollYProgress, [0, 1], [-3, 4]);

  const statAccents = [
    { border: "border-b-4 border-b-[#2563EB]", text: "text-[#2563EB] dark:text-[#60A5FA]" },
    { border: "border-b-4 border-b-[#059669]", text: "text-[#059669] dark:text-[#34D399]" },
    { border: "border-b-4 border-b-[#F59E0B]", text: "text-[#F59E0B] dark:text-[#FBBF24]" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-surface dark:bg-[#1A1A17] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#2563EB] dark:shadow-[2px_2px_0px_#60A5FA]">
              <span>[ 01 // INTRODUCTION ]</span>
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              ABOUT <span className="text-[#2563EB] dark:text-[#60A5FA]">SYAIKHANI.</span>
            </h2>
          </div>
          <div className="text-xs font-mono font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
            IPB University · D4 TRPL · Bogor
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-8 sm:pt-12 items-start">
          {/* Left Column: Parallax Taped Polaroid of Giffa in Suit + Engineering Manifesto */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Starburst badge floating top-left */}
              <div className="absolute -top-6 -left-4 z-30">
                <StarburstCutout className="w-12 h-12 sm:w-14 sm:h-14" color="#FACC15" />
              </div>

              <div className="p-3.5 sm:p-5 pb-7 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-polaroid dark:shadow-polaroidDark">
                {/* Yellow washi tape */}
                <motion.div
                  style={{ rotate: tapeRotate }}
                  className="absolute -top-3 left-12 w-24 sm:w-28 h-6 sm:h-7 tape-yellow z-20"
                />

                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
                  <Image
                    src="/profile/giffa-suit-formal.jpg"
                    alt="Syaikhani Giffa Indrawan in formal suit"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 85vw, 400px"
                  />
                </div>

                <div className="mt-3.5 px-1 flex justify-between items-center">
                  <div>
                    <span className="font-script-brush text-xl sm:text-2xl text-ink dark:text-ink-light block">
                      Formal &amp; Engineering
                    </span>
                    <span className="text-[11px] sm:text-xs text-ink/70 dark:text-ink-lightDim font-medium">
                      Bogor, West Java, Indonesia
                    </span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono">
                    D4 TRPL
                  </span>
                </div>
              </div>

              {/* Engineering Philosophy Sticky Note */}
              <div className="mt-5 p-5 rounded-2xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-[2.5px_2.5px_0px_#2563EB] dark:shadow-[2.5px_2.5px_0px_#60A5FA] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
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
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <h3 className="font-cutout text-2xl sm:text-3xl lg:text-4xl text-ink dark:text-ink-light leading-snug">
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

            {/* Verified Metrics Cards with Möbius CardTilt & UIMaven Accents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              {profile.about.stats.map((st, i) => {
                const acc = statAccents[i % statAccents.length];
                return (
                  <CardTilt3D key={i} maxTilt={5} scaleHover={1.02}>
                    <div
                      className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] ${acc.border} shadow-[2px_2px_0px_#141412] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.1)]`}
                    >
                      <span className={`font-cutout text-2xl sm:text-3xl block ${acc.text}`}>
                        {st.value}
                      </span>
                      <span className="text-xs font-bold text-ink/75 dark:text-[#FAF7F2] uppercase tracking-wide block mt-1">
                        {st.label}
                      </span>
                    </div>
                  </CardTilt3D>
                );
              })}
            </div>

            {/* Key Verified Credentials (UIMaven Colorful Tickets) */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-[1.5px_1.5px_0px_#2563EB] text-xs font-bold text-ink dark:text-white">
                <Award className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                <span>Certiport IT Specialist (HTML &amp; CSS)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-[1.5px_1.5px_0px_#EA580C] text-xs font-bold text-ink dark:text-white">
                <Briefcase className="w-3.5 h-3.5 text-[#EA580C] dark:text-[#FB923C]" />
                <span>PT Hexaon Developer Intern</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-[1.5px_1.5px_0px_#059669] text-xs font-bold text-ink dark:text-white">
                <GraduationCap className="w-3.5 h-3.5 text-[#059669] dark:text-[#34D399]" />
                <span>SMK Wikrama Bogor Alum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
