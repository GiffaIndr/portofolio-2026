"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Scribble } from "@/components/ui/Scribble";
import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";

interface AboutProps {
  lang: "EN" | "ID";
}

export function About({ lang }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-28 md:py-36 bg-cream text-ink transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Field Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-ink/15 gap-4">
          <span className="font-hud text-xs text-terracotta tracking-hud">
            {lang === "EN" ? "01 // THE TRAILHEAD & BACKGROUND" : "01 // PROFIL & LATAR BELAKANG"}
          </span>
          <span className="font-hud text-xs opacity-60">
            TRPL IPB UNIVERSITY · CLASS OF 2026
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Column: Organic Rearview Mirror Mask & Polaroid Aesthetic (Reference #4 & #5) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] p-3 rounded-3xl bg-[#EFE4D2] dark:bg-[#1C1A14] border border-ink/15 shadow-paper">
              {/* Retro Car Rearview Mirror Oval Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden mask-rearview bg-ink/10">
                <Image
                  src="/experience/placeholder.webp"
                  alt="Syaikhani Giffa Indrawan workspace and field notes"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Warm painter studio sunlight glaze (Reference #5) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-terracotta/20 via-butter/10 to-transparent mix-blend-overlay pointer-events-none" />
              </div>

              {/* Handwritten Yellow Marker Note (Reference #2 & #3) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-butter text-ink px-4 py-2 rounded-xl shadow-card rotate-3 border border-ink/10 select-none">
                <span className="font-handwriting text-lg sm:text-xl font-bold">
                  IPB University x SMK Wikrama
                </span>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-10 font-hud text-[11px] opacity-70 space-y-1">
              <div>FIELD EXPEDITION: BOGOR HIGHLANDS</div>
              <div>SOFTWARE ENGINEERING TECHNOLOGY · D4 TRPL</div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Scannable Paragraphs */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display-condensed text-4xl sm:text-6xl md:text-7xl leading-[0.92] text-ink">
              BRIDGING SENSITIVE <br />
              <span className="font-editorial-italic lowercase text-terracotta">
                front-end craft
              </span>{" "}
              WITH ROBUST LOGIC.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-ink/80 leading-relaxed font-sans font-normal">
              <p className="font-medium text-ink text-lg sm:text-xl leading-snug">
                {profile.about.lead}
              </p>
              {profile.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Verified Fact Metrics (Anti-Slop: Zero fabricated numbers) */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 pb-8 border-y border-ink/15">
              {profile.about.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-terracotta">
                    {stat.value}
                  </div>
                  <div className="font-hud text-[10px] sm:text-xs text-ink/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs and Verified Social Profiles */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-cream hover:bg-terracotta transition-colors font-hud text-xs font-semibold"
                data-cursor="VIEW"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === "EN" ? "DOWNLOAD RESUME" : "UNDUH RESUME"}</span>
              </a>

              <a
                href="https://github.com/GiffaIndr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink/30 hover:border-ink transition-colors font-hud text-xs"
                data-cursor="GITHUB"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://www.linkedin.com/in/syaikhanigiffa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink/30 hover:border-ink transition-colors font-hud text-xs"
                data-cursor="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
