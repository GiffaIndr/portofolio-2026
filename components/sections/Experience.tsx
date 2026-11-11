"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

interface ExperienceProps {
  lang: "EN" | "ID";
}

export function Experience({ lang }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoParallax = useTransform(scrollYProgress, [0, 1], [-30, 45]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 bg-card text-ink dark:text-cream transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-ink/10 dark:border-cream/10 gap-4">
          <div>
            <span className="font-script-note text-2xl text-ochre block -rotate-1">
              {lang === "EN" ? "Chronology" : "Riwayat & Rekam Jejak"}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
              ACADEMICS &amp; <span className="text-emerald dark:text-[#52B788]">EXPERIENCE.</span>
            </h2>
          </div>
          <div className="text-xs uppercase tracking-wider text-ink/60 dark:text-cream/60">
            2019 — Present
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Column: Education & Floating Polaroid */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-emerald dark:text-[#52B788]">
                <GraduationCap className="w-4 h-4" />
                <span>{lang === "EN" ? "Education Foundation" : "Pendidikan Formal"}</span>
              </div>

              <div className="space-y-6">
                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-cream dark:bg-[#121210] border border-ink/10 dark:border-cream/10 shadow-luxe space-y-3"
                  >
                    <div className="flex justify-between items-center text-xs text-ochre font-bold">
                      <span>{edu.period}</span>
                      <span className="flex items-center gap-1 text-ink/50 dark:text-cream/50">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-ink dark:text-cream leading-snug">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-ink/75 dark:text-cream/75 leading-relaxed">
                      {edu.program}
                    </p>
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-ink/5 dark:bg-cream/10 text-xs font-semibold text-ink/80 dark:text-cream/80">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parallax Taped Photo: Studio / Team Session */}
            <motion.div
              style={{ y: photoParallax }}
              className="relative hidden sm:block p-4 pb-8 rounded-3xl bg-cream dark:bg-[#121210] border border-ink/10 dark:border-cream/10 shadow-polaroid rotate-1"
            >
              <div className="absolute -top-3 right-8 w-24 h-6 washi-tape-green z-20" />
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-ink/5">
                <Image
                  src="/profile/portrait-working.webp"
                  alt="Team collaboration and coding workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 px-1 flex justify-between items-center text-xs">
                <span className="font-script-note text-lg font-bold text-ink dark:text-cream">
                  Software Engineering Session
                </span>
                <span className="text-[11px] text-ink/50 dark:text-cream/50">
                  Bogor, ID
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Roles & Engagements */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-emerald dark:text-[#52B788]">
              <Briefcase className="w-4 h-4" />
              <span>{lang === "EN" ? "Engagements & Initiatives" : "Pengalaman & Inisiatif"}</span>
            </div>

            <div className="space-y-6">
              {profile.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-3xl bg-cream dark:bg-[#121210] border border-ink/10 dark:border-cream/10 shadow-luxe space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-bold text-emerald dark:text-[#52B788] uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <span className="text-xs text-ink/50 dark:text-cream/50 font-medium">
                      {exp.role}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-ink dark:text-cream leading-tight">
                    {exp.org}
                  </h3>

                  <p className="text-base text-ink/75 dark:text-cream/75 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 pt-1 text-sm text-ink/80 dark:text-cream/80">
                    {exp.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-emerald font-bold">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  {!exp.verified && (
                    <div className="pt-2">
                      <span className="inline-block text-[11px] font-semibold text-ochre bg-ochre/10 px-3 py-1 rounded-full">
                        Pending LinkedIn Verification
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
