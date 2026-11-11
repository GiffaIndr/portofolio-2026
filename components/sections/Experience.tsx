"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { GraduationCap, Briefcase, MapPin, Award, CheckCircle2 } from "lucide-react";

interface ExperienceProps {
  lang: "EN" | "ID";
}

export function Experience({ lang }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoParallax = useTransform(scrollYProgress, [0, 1], [-20, 25]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-surface dark:bg-[#1A1A17] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header (No generic hairline dividing lines) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#FACC15] dark:shadow-[2px_2px_0px_#FACC15]">
              <span>[ 03 // TRAJECTORY ]</span>
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              EDUCATION &amp; <span className="text-[#65A30D] dark:text-[#A3E635]">TRAJECTORY.</span>
            </h2>
          </div>
          <div className="text-xs font-mono font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
            2021 — 2026 Present · Bogor &amp; Jakarta
          </div>
        </div>

        {/* Balanced 2-Column Grid (Zero Empty Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-6 sm:pt-10 items-start">
          {/* Left Column: Academic Foundation + Certifications + Polaroid */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {/* 1. Academic Foundation */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4D7C0F] dark:text-[#A3E635]">
                <GraduationCap className="w-4 h-4" />
                <span>{lang === "EN" ? "Academic Foundation" : "Pendidikan Formal"}</span>
              </div>

              <div className="space-y-4">
                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-2.5 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex justify-between items-center text-xs text-terracotta dark:text-[#FB923C] font-bold">
                      <span>{edu.period}</span>
                      <span className="flex items-center gap-1 text-ink/70 dark:text-ink-lightDim font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="font-cutout text-lg sm:text-xl text-ink dark:text-white leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                      {edu.program}
                    </p>
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 rounded-md bg-surface/70 dark:bg-[#2C2C27] border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-ink-light">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Professional Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65A30D] dark:text-[#A3E635]">
                <Award className="w-4 h-4" />
                <span>{lang === "EN" ? "Certifications & Credentials" : "Sertifikasi & Kredensial Resmi"}</span>
              </div>

              <div className="space-y-3">
                {profile.certifications.map((cert, ci) => (
                  <div
                    key={ci}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-[2px_2px_0px_#141412] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.1)] space-y-1.5 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex justify-between items-center text-[11px] font-bold">
                      <span className="text-terracotta dark:text-[#FB923C]">{cert.date}</span>
                      <span className="text-ink/60 dark:text-ink-lightDim uppercase text-[10px] tracking-wider font-mono">Pearson / VUE</span>
                    </div>
                    <h4 className="font-cutout text-sm sm:text-base text-ink dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-ink/75 dark:text-ink-lightDim font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Parallax Taped Photo: Giffa in Lab */}
            <motion.div
              style={{ y: photoParallax }}
              className="relative p-3.5 sm:p-4 pb-6 sm:pb-7 rounded-3xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-polaroid dark:shadow-polaroidDark rotate-1"
            >
              <div className="absolute -top-3.5 right-8 sm:right-10 w-24 h-6 tape-green z-20" />
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
                <Image
                  src="/profile/giffa-lab-coding.jpg"
                  alt="Syaikhani Giffa Indrawan in IPB computer laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
              </div>
              <div className="mt-3 px-1 flex justify-between items-center text-xs">
                <span className="font-script-brush text-lg sm:text-xl text-ink dark:text-ink-light">
                  Software Engineering Session
                </span>
                <span className="text-ink/65 dark:text-ink-lightDim font-medium">IPB Lab · Bogor</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Work Experience & Initiatives */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-terracotta dark:text-[#FB923C]">
              <Briefcase className="w-4 h-4" />
              <span>{lang === "EN" ? "Industry & Practical Experience" : "Pengalaman Industri & Lapangan"}</span>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-4 transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#141412] text-[#84CC16] dark:bg-[#FAF7F2] dark:text-[#2B6E3F] font-bold text-[10px] uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <span className="text-terracotta dark:text-[#FB923C] font-bold font-mono">{exp.period}</span>
                    </div>
                    <span className="text-ink/65 dark:text-ink-lightDim text-[11px] font-semibold">
                      {exp.verified ? "Verified Industry Track" : ""}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-cutout text-xl sm:text-2xl text-ink dark:text-white leading-snug">
                      {exp.role}
                    </h3>
                    <h4 className="text-base text-ink/85 dark:text-[#FDE047] font-semibold mt-0.5">
                      {exp.org}
                    </h4>
                  </div>

                  <p className="text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10 mt-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink/75 dark:text-ink-lightMuted block mb-2">
                      Key Responsibilities &amp; Impact:
                    </span>
                    {exp.deliverables.map((deliv, di) => (
                      <div key={di} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 dark:text-[#E2DEC9]">
                        <CheckCircle2 className="w-4 h-4 text-[#84CC16] dark:text-[#A3E635] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
