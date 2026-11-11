"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Calendar, MapPin, GraduationCap, Briefcase, HeartHandshake, Eye, X } from "lucide-react";

interface ExperienceProps {
  lang: "EN" | "ID";
}

export function Experience({ lang }: ExperienceProps) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="experience" className="relative w-full py-28 md:py-36 bg-cream text-ink transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-ink/15 gap-4">
          <div>
            <span className="font-hud text-xs text-meadow tracking-hud block mb-3">
              {lang === "EN" ? "03 // EXPEDITION MILESTONES" : "03 // JALUR & PENGALAMAN"}
            </span>
            <h2 className="font-display-condensed text-5xl sm:text-7xl md:text-8xl leading-none">
              EXPERIENCE &amp; <br />
              <span className="font-editorial-italic lowercase text-meadow">
                education.
              </span>
            </h2>
          </div>
          <span className="font-hud text-xs opacity-60">
            CHRONOLOGY · 2019 - PRESENT
          </span>
        </div>

        {/* ================= 1. EDUCATION ROSTER ================= */}
        <div className="pt-16 pb-12">
          <div className="flex items-center gap-2 mb-8 font-hud text-xs text-ink/70">
            <GraduationCap className="w-4 h-4 text-terracotta" />
            <span className="font-bold tracking-hud">
              {lang === "EN" ? "ACADEMIC FOUNDATION" : "LATAR BELAKANG PENDIDIKAN"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#EFE7D8] dark:bg-[#1C1A14] border border-ink/15 shadow-paper space-y-4"
              >
                <div className="flex justify-between items-start font-hud text-xs opacity-75">
                  <span className="text-terracotta font-semibold">{edu.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
                <h3 className="font-display-condensed text-2xl sm:text-3xl leading-tight">
                  {edu.school}
                </h3>
                <p className="text-base font-sans opacity-85 leading-relaxed">
                  {edu.program}
                </p>
                <div className="pt-2 font-hud text-[11px] inline-block px-3 py-1 rounded-full bg-ink/5 dark:bg-cream/10 border border-ink/10">
                  {edu.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 2. ORGANIZATIONS & VOLUNTEERING ================= */}
        <div className="pt-8">
          <div className="flex items-center gap-2 mb-8 font-hud text-xs text-ink/70">
            <Briefcase className="w-4 h-4 text-meadow" />
            <span className="font-bold tracking-hud">
              {lang === "EN" ? "ENGAGEMENT & COMMUNITY" : "PENGALAMAN & KOMUNITAS"}
            </span>
          </div>

          <div className="space-y-8">
            {profile.experience.map((exp, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 rounded-3xl bg-cream dark:bg-[#1E1C16] border border-ink/15 shadow-card items-start"
              >
                <div className="lg:col-span-4 space-y-2">
                  <span className="font-hud text-xs text-meadow font-bold">
                    {exp.period}
                  </span>
                  <h4 className="font-display-condensed text-2xl sm:text-3xl leading-snug">
                    {exp.org}
                  </h4>
                  <div className="font-hud text-xs opacity-70">
                    {exp.role}
                  </div>
                  {!exp.verified && (
                    <span className="inline-block mt-2 font-hud text-[10px] text-terracotta bg-terracotta/10 px-2 py-0.5 rounded border border-terracotta/20">
                      PENDING LINKEDIN VERIFICATION
                    </span>
                  )}
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-base text-ink/80 dark:text-cream/80 leading-relaxed font-sans">
                    {exp.summary}
                  </p>
                  <ul className="space-y-2 font-sans text-sm opacity-85">
                    {exp.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-meadow font-bold">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Polaroid Lightbox View */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-[10000] bg-ink/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightboxImg(null)}
          >
            <div className="relative max-w-2xl w-full p-4 bg-cream rounded-2xl shadow-float space-y-3">
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-ink/10 hover:bg-ink/20"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <Image src={lightboxImg} alt="Certificate view" fill className="object-contain" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
