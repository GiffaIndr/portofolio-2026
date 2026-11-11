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

  const photoParallax = useTransform(scrollYProgress, [0, 1], [-25, 35]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-surface dark:bg-[#1A1A17] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/15 dark:border-white/15 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-[#FACC15]/25 text-[#713F12] dark:text-[#FDE047] font-bold text-xs uppercase mb-2">
              {lang === "EN" ? "CHRONOLOGY" : "RIWAYAT KARIR & STUDI"}
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              EDUCATION &amp; <span className="text-[#65A30D] dark:text-[#A3E635]">TRAJECTORY.</span>
            </h2>
          </div>
          <div className="text-xs uppercase font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
            2021 — 2026 Present
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-14 items-start">
          {/* Left Column: Education & Authentic Lab Polaroid */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-[#4D7C0F] dark:text-[#A3E635]">
                <GraduationCap className="w-4 h-4" />
                <span>{lang === "EN" ? "Academic Foundation" : "Pendidikan Formal"}</span>
              </div>

              <div className="space-y-6">
                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-3"
                  >
                    <div className="flex justify-between items-center text-xs text-terracotta dark:text-[#FB923C] font-bold">
                      <span>{edu.period}</span>
                      <span className="flex items-center gap-1 text-ink/70 dark:text-ink-lightDim font-medium">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="font-cutout text-xl sm:text-2xl text-ink dark:text-white leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                      {edu.program}
                    </p>
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-semibold text-ink dark:text-ink-light">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parallax Taped Photo: Giffa in Computer Lab */}
            <motion.div
              style={{ y: photoParallax }}
              className="relative hidden sm:block p-4 pb-8 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-polaroid dark:shadow-polaroidDark rotate-1"
            >
              <div className="absolute -top-3 right-8 w-24 h-6 tape-green z-20" />
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5">
                <Image
                  src="/profile/giffa-lab-coding.jpg"
                  alt="Syaikhani Giffa Indrawan in IPB computer laboratory"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
              <div className="mt-3 px-1 flex justify-between items-center text-xs">
                <span className="font-script-brush text-xl text-ink dark:text-ink-light">
                  Software Engineering Session
                </span>
                <span className="text-ink/65 dark:text-ink-lightDim">IPB Lab · 2026</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Work Experience & Certifications */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-terracotta dark:text-[#FB923C]">
                <Briefcase className="w-4 h-4" />
                <span>{lang === "EN" ? "Industry & Practical Experience" : "Pengalaman Industri & Lapangan"}</span>
              </div>

              <div className="space-y-6">
                {profile.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#84CC16]/20 text-[#4D7C0F] dark:text-[#A3E635] font-bold text-[11px]">
                          {exp.type}
                        </span>
                        <span className="text-terracotta dark:text-[#FB923C] font-bold">{exp.period}</span>
                      </div>
                      <span className="text-ink/65 dark:text-ink-lightDim text-[11px] font-semibold">
                        {exp.verified ? "Verified Experience" : ""}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-cutout text-xl sm:text-2xl text-ink dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      <h4 className="text-base text-ink/80 dark:text-[#FDE047] font-semibold mt-0.5">
                        {exp.org}
                      </h4>
                    </div>

                    <p className="text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Key Deliverables Bullet Points */}
                    <div className="space-y-2 pt-1 border-t border-black/10 dark:border-white/10 mt-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink/75 dark:text-ink-lightMuted block mb-2">
                        Key Responsibilities &amp; Impact:
                      </span>
                      {exp.deliverables.map((deliv, di) => (
                        <div key={di} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 dark:text-[#E2DEC9]">
                          <CheckCircle2 className="w-4 h-4 text-[#84CC16] dark:text-[#A3E635] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-5 text-xs font-bold uppercase tracking-wider text-[#65A30D] dark:text-[#A3E635]">
                <Award className="w-4 h-4" />
                <span>{lang === "EN" ? "Certifications & Professional Credentials" : "Sertifikasi & Kredensial"}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.certifications.map((cert, ci) => (
                  <div
                    key={ci}
                    className="p-5 rounded-2xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-sm space-y-1.5"
                  >
                    <span className="text-[11px] font-bold text-terracotta dark:text-[#FB923C] block">
                      {cert.date}
                    </span>
                    <h4 className="font-cutout text-sm text-ink dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-ink/75 dark:text-ink-lightDim">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
