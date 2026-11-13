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

  const photoParallax = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  const photoRot = useTransform(scrollYProgress, [0.1, 0.6], [-3.5, 0]);
  const spineScaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#F5EBE0] dark:bg-[#1D1714] text-[#292524] dark:text-[#FAF7F2] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header (No kicker/eyebrow) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#292524]/15 dark:border-white/15 gap-4">
          <h2 className="font-serif text-4xl sm:text-6xl text-[#292524] dark:text-white font-normal tracking-tight">
            {lang === "EN" ? "Education & " : "Pendidikan & "}
            <span className="italic text-[#C2410C] dark:text-[#FB923C]">
              {lang === "EN" ? "Trajectory." : "Rekam Jejak."}
            </span>
          </h2>
          <div className="text-xs font-sans text-[#292524]/70 dark:text-[#FAF7F2]/70">
            2021 — 2026 {lang === "EN" ? "Present" : "Sekarang"} · Bogor &amp; Jakarta
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">
          {/* Left Column: Scroll-driven Timeline Spine + Academic + Certs + Lab Photo */}
          <div className="lg:col-span-6 space-y-12">
            {/* Academic Foundation with Vertical Scroll Spine */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#C2410C] dark:text-[#FB923C]">
                <GraduationCap className="w-4 h-4" />
                <span>{lang === "EN" ? "Academic Foundation" : "Pendidikan Formal"}</span>
              </div>

              <div className="relative pl-6 space-y-6">
                {/* Static track + Animated Scroll Spine */}
                <div className="absolute left-1.5 top-2 bottom-2 w-px bg-[#292524]/15 dark:bg-white/15" />
                <motion.div
                  style={{ scaleY: spineScaleY, originY: 0 }}
                  className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-[#C2410C] dark:bg-[#FB923C] will-change-transform"
                />

                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] dark:bg-[#26201C] border border-[#292524]/10 dark:border-white/10 shadow-[0_12px_30px_-14px_rgba(41,37,36,0.12)] space-y-2.5"
                  >
                    <span className="absolute -left-[22px] top-8 w-2.5 h-2.5 rounded-full bg-[#C2410C] dark:bg-[#FB923C] ring-4 ring-[#F5EBE0] dark:ring-[#1D1714]" />
                    <div className="flex justify-between items-center text-xs text-[#292524]/65 dark:text-white/60 font-sans font-medium">
                      <span>{edu.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#292524] dark:text-white font-normal leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-[#292524]/80 dark:text-[#E2DEC9] leading-relaxed font-sans">
                      {lang === "ID" && edu.programId ? edu.programId : edu.program}
                    </p>
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#C2410C]/10 text-[#C2410C] dark:text-[#FB923C] text-xs font-sans font-medium">
                        {lang === "ID" && edu.statusId ? edu.statusId : edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (Clean minimal rows without colored border stripes) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#292524]/80 dark:text-white/80">
                <Award className="w-4 h-4 text-[#C2410C] dark:text-[#FB923C]" />
                <span>
                  {lang === "EN"
                    ? "Certifications & Credentials"
                    : "Sertifikasi & Kredensial Resmi"}
                </span>
              </div>

              <div className="divide-y divide-[#292524]/10 dark:divide-white/10 rounded-2xl bg-[#FFFDF9] dark:bg-[#26201C] border border-[#292524]/10 dark:border-white/10 px-6 shadow-[0_12px_30px_-14px_rgba(41,37,36,0.1)]">
                {profile.certifications.map((cert, ci) => (
                  <div key={ci} className="py-4 space-y-1">
                    <div className="flex justify-between items-center text-xs font-sans">
                      <span className="font-semibold text-[#C2410C] dark:text-[#FB923C]">
                        {cert.date}
                      </span>
                      <span className="text-[#292524]/50 dark:text-white/50">
                        Pearson / VUE
                      </span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg text-[#292524] dark:text-white font-normal">
                      {cert.title}
                    </h4>
                    <div className="flex justify-between text-xs text-[#292524]/65 dark:text-white/60 font-sans">
                      <span>{cert.issuer}</span>
                      <span className="text-[#059669] dark:text-[#34D399] font-medium">
                        {lang === "EN" ? "Verified" : "Terverifikasi"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic Laboratory Photo with Straightening Scroll Parallax */}
            <motion.div
              style={{ y: photoParallax, rotate: photoRot }}
              className="p-3.5 pb-5 rounded-3xl bg-[#FFFDF9] dark:bg-[#26201C] border border-[#292524]/10 dark:border-white/10 shadow-[0_20px_40px_-14px_rgba(41,37,36,0.18)] w-full max-w-sm mx-auto will-change-transform"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/5">
                <Image
                  src="/profile/giffa-lab-coding.jpg"
                  alt="Syaikhani Giffa Indrawan coding in laboratory"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-serif text-base text-[#292524] dark:text-white block font-normal">
                  {lang === "EN"
                    ? "Software Engineering Laboratory · IPB TRPL"
                    : "Laboratorium Rekayasa Perangkat Lunak · IPB TRPL"}
                </span>
                <span className="text-xs font-sans text-[#292524]/60 dark:text-white/60 block mt-0.5">
                  {lang === "EN"
                    ? "Giffa Indrawan · Hands-on Engineering"
                    : "Giffa Indrawan · Eksplorasi Rekayasa"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Industry Experience with Opposing Scroll Drift */}
          <motion.div
            style={{ y: rightColY }}
            className="lg:col-span-6 space-y-5 will-change-transform"
          >
            <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#C2410C] dark:text-[#FB923C]">
              <Briefcase className="w-4 h-4" />
              <span>
                {lang === "EN" ? "Industry Experience" : "Pengalaman Kerja & Magang"}
              </span>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, idx) => {
                const deliverables =
                  lang === "ID" && exp.deliverablesId
                    ? exp.deliverablesId
                    : exp.deliverables;

                return (
                  <div
                    key={idx}
                    className="p-7 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-[#26201C] border border-[#292524]/10 dark:border-white/10 shadow-[0_14px_34px_-14px_rgba(41,37,36,0.12)] space-y-4 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-sans font-medium">
                      <span className="px-3 py-1 rounded-full bg-[#292524] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#292524] text-xs font-semibold">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-[#292524]/60 dark:text-white/60">
                        <MapPin className="w-3 h-3" />
                        <span>Bogor &amp; Jakarta</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#292524] dark:text-white font-normal leading-snug">
                        {lang === "ID" && exp.roleId ? exp.roleId : exp.role}
                      </h3>
                      <p className="font-sans text-xs text-[#C2410C] dark:text-[#FB923C] font-semibold mt-1">
                        @ {exp.org}
                      </p>
                    </div>

                    <p className="text-sm text-[#292524]/80 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
                      {lang === "ID" && exp.summaryId ? exp.summaryId : exp.summary}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#292524]/10 dark:border-white/10">
                      <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#292524]/55 dark:text-white/55 block">
                        {lang === "EN" ? "Key Deliverables:" : "Pencapaian Utama:"}
                      </span>
                      {deliverables.map((h, hi) => (
                        <div key={hi} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292524]/85 dark:text-[#FAF7F2]">
                          <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#FB923C] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
