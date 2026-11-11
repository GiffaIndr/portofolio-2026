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

  const photoParallax = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-surface dark:bg-[#181816] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/10 dark:border-white/10 gap-3">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider text-ink/60 dark:text-ink-lightDim uppercase block mb-2">
              [ 03 // TRAJECTORY ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
              Education &amp; <span className="italic text-[#2D4A34] dark:text-[#A3E635]">Trajectory.</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-ink/60 dark:text-ink-lightDim">
            2021 — 2026 Present · Bogor &amp; Jakarta
          </div>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-10 sm:pt-14 items-start">
          {/* Left Column: Academic Foundation + Certifications + Polaroid */}
          <div className="lg:col-span-6 space-y-10">
            {/* 1. Academic Foundation */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-ink/60 dark:text-ink-lightDim">
                <GraduationCap className="w-4 h-4 text-[#2D4A34] dark:text-[#A3E635]" />
                <span>{lang === "EN" ? "Academic Foundation" : "Pendidikan Formal"}</span>
              </div>

              <div className="space-y-4">
                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm space-y-2.5 transition-all"
                  >
                    <div className="flex justify-between items-center text-xs text-ink/60 dark:text-ink-lightDim font-mono">
                      <span>{edu.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-ink dark:text-white font-normal leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans">
                      {edu.program}
                    </p>
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 rounded bg-black/5 dark:bg-white/5 text-xs font-mono text-ink/75 dark:text-ink-light">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Professional Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-ink/60 dark:text-ink-lightDim">
                <Award className="w-4 h-4 text-[#2D4A34] dark:text-[#A3E635]" />
                <span>{lang === "EN" ? "Certifications & Credentials" : "Sertifikasi & Kredensial Resmi"}</span>
              </div>

              <div className="space-y-3">
                {profile.certifications.map((cert, ci) => (
                  <div
                    key={ci}
                    className="p-5 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm space-y-1.5 transition-all"
                  >
                    <div className="flex justify-between items-center text-xs font-mono text-ink/60 dark:text-ink-lightDim">
                      <span>{cert.date}</span>
                      <span className="uppercase text-[11px] tracking-wider">Pearson / VUE</span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg text-ink dark:text-white font-normal">
                      {cert.title}
                    </h4>
                    <div className="flex justify-between text-xs text-ink/60 dark:text-ink-lightDim font-mono">
                      <span>{cert.issuer}</span>
                      <span className="text-[#2D4A34] dark:text-[#A3E635] font-medium">Verified ✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Authentic Laboratory Photo */}
            <motion.div
              style={{ y: photoParallax }}
              className="p-4 pb-5 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm w-full max-w-sm mx-auto"
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
                <Image
                  src="/profile/giffa-lab-coding.jpg"
                  alt="Syaikhani Giffa Indrawan coding in laboratory"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-serif text-base text-ink dark:text-white block font-normal">
                  Software Engineering Laboratory · IPB TRPL
                </span>
                <span className="text-[11px] font-mono text-ink/50 dark:text-ink-lightDim uppercase tracking-wider block mt-0.5">
                  Giffa Indrawan // Hands-on Engineering
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Work Experience */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-ink/60 dark:text-ink-lightDim">
              <Briefcase className="w-4 h-4 text-[#2D4A34] dark:text-[#A3E635]" />
              <span>{lang === "EN" ? "Industry Experience" : "Pengalaman Kerja & Magang"}</span>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm space-y-4 transition-all"
                >
                  <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-mono text-ink/60 dark:text-ink-lightDim">
                    <span>{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>Bogor &amp; Jakarta</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink dark:text-white font-normal leading-snug">
                      {exp.role}
                    </h3>
                    <p className="font-sans text-xs text-ink/60 dark:text-ink-lightDim font-medium mt-1">
                      @ {exp.org}
                    </p>
                  </div>

                  <p className="text-sm text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-black/10 dark:border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-ink/50 dark:text-ink-lightDim block">
                      Key Deliverables:
                    </span>
                    {exp.deliverables.map((h, hi) => (
                      <div key={hi} className="flex items-start gap-2 text-xs sm:text-sm text-ink/75 dark:text-[#FAF7F2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A34] dark:text-[#A3E635] shrink-0 mt-0.5" />
                        <span>{h}</span>
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
