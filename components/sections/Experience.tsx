"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { GraduationCap, Briefcase, MapPin, Award, CheckCircle2 } from "lucide-react";
import { CardTilt3D } from "@/components/ui/CardTilt3D";

interface ExperienceProps {
  lang: "EN" | "ID";
}

export function Experience({ lang }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoParallax = useTransform(scrollYProgress, [0, 1], [-25, 30]);

  const certColors = [
    { badge: "bg-[#2563EB] text-white", border: "border-l-4 border-l-[#2563EB]" },
    { badge: "bg-[#EA580C] text-white", border: "border-l-4 border-l-[#EA580C]" },
    { badge: "bg-[#059669] text-white", border: "border-l-4 border-l-[#059669]" },
  ];

  const expColors = [
    { badge: "bg-[#0284C7] text-white", border: "border-t-4 border-t-[#0284C7]" },
    { badge: "bg-[#F59E0B] text-[#141412]", border: "border-t-4 border-t-[#F59E0B]" },
    { badge: "bg-[#EA580C] text-white", border: "border-t-4 border-t-[#EA580C]" },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 bg-surface dark:bg-[#1A1A17] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#F59E0B] dark:shadow-[2px_2px_0px_#FBBF24]">
              <span>[ 03 // TRAJECTORY ]</span>
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              EDUCATION &amp; <span className="text-[#059669] dark:text-[#34D399]">TRAJECTORY.</span>
            </h2>
          </div>
          <div className="text-xs font-mono font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
            2021 — 2026 Present · Bogor &amp; Jakarta
          </div>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-6 sm:pt-10 items-start">
          {/* Left Column: Academic Foundation + Certifications + Polaroid */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {/* 1. Academic Foundation */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] dark:text-[#34D399]">
                <GraduationCap className="w-4 h-4" />
                <span>{lang === "EN" ? "Academic Foundation" : "Pendidikan Formal"}</span>
              </div>

              <div className="space-y-4">
                {profile.education.map((edu, idx) => (
                  <CardTilt3D key={idx} maxTilt={5} scaleHover={1.015}>
                    <div className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-2.5 transition-transform">
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
                  </CardTilt3D>
                ))}
              </div>
            </div>

            {/* 2. Professional Certifications (UIMaven Colored Badges) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                <Award className="w-4 h-4" />
                <span>{lang === "EN" ? "Certifications & Credentials" : "Sertifikasi & Kredensial Resmi"}</span>
              </div>

              <div className="space-y-3">
                {profile.certifications.map((cert, ci) => {
                  const cTheme = certColors[ci % certColors.length];
                  return (
                    <CardTilt3D key={ci} maxTilt={4} scaleHover={1.01}>
                      <div
                        className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] ${cTheme.border} shadow-[2px_2px_0px_#141412] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.1)] space-y-1.5 transition-transform`}
                      >
                        <div className="flex justify-between items-center text-[11px] font-bold">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${cTheme.badge}`}>
                            {cert.date}
                          </span>
                          <span className="text-ink/60 dark:text-ink-lightDim uppercase text-[10px] tracking-wider font-mono">
                            Pearson / VUE
                          </span>
                        </div>
                        <h4 className="font-cutout text-sm sm:text-base text-ink dark:text-white">
                          {cert.title}
                        </h4>
                        <div className="flex justify-between text-xs text-ink/70 dark:text-ink-lightMuted font-mono">
                          <span>{cert.issuer}</span>
                          <span className="text-[#059669] dark:text-[#34D399] font-bold">Verified ✓</span>
                        </div>
                      </div>
                    </CardTilt3D>
                  );
                })}
              </div>
            </div>

            {/* 3. Authentic Laboratory Polaroid of Giffa */}
            <motion.div
              style={{ y: photoParallax }}
              className="p-4 pb-6 rounded-3xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-white/20 shadow-polaroid dark:shadow-polaroidDark w-full max-w-sm mx-auto transition-transform"
            >
              <div className="w-24 h-5 bg-[#F59E0B] -mt-6 mx-auto rounded-sm shadow-sm rotate-1" />
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mt-3 bg-black/5 dark:bg-white/5">
                <Image
                  src="/profile/giffa-lab-coding.jpg"
                  alt="Syaikhani Giffa Indrawan coding in software engineering computer laboratory"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-script-brush text-lg text-ink dark:text-white block">
                  Software Engineering Laboratory · IPB TRPL
                </span>
                <span className="text-[11px] font-mono text-ink/60 dark:text-ink-lightDim uppercase tracking-wider block mt-0.5">
                  Giffa Indrawan // Hands-on Engineering
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Work Experience with UIMaven Color Tops */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#FB923C]">
              <Briefcase className="w-4 h-4" />
              <span>{lang === "EN" ? "Industry Experience" : "Pengalaman Kerja & Magang"}</span>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, idx) => {
                const eTheme = expColors[idx % expColors.length];
                return (
                  <CardTilt3D key={idx} maxTilt={5} scaleHover={1.015}>
                    <div
                      className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] ${eTheme.border} shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-3.5 transition-transform`}
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-bold">
                        <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${eTheme.badge}`}>
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-ink/70 dark:text-ink-lightDim font-medium font-mono text-[11px]">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Bogor &amp; Jakarta</span>
                        </span>
                      </div>

                      <div>
                        <h3 className="font-cutout text-xl sm:text-2xl text-ink dark:text-white leading-snug">
                          {exp.role}
                        </h3>
                        <p className="font-mono text-xs text-ink/75 dark:text-ink-lightMuted font-bold mt-1">
                          @ {exp.org}
                        </p>
                      </div>

                      <p className="text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                        {exp.summary}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink/60 dark:text-ink-lightDim block">
                          Key Deliverables:
                        </span>
                        {exp.deliverables.map((h, hi) => (
                          <div key={hi} className="flex items-start gap-2 text-xs sm:text-sm text-ink/80 dark:text-[#FAF7F2]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] dark:text-[#34D399] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardTilt3D>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
