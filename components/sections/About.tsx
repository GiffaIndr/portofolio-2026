"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";

interface AboutProps {
  lang: "EN" | "ID";
}

export function About({ lang }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Continuous parallax drift for imagery and badges
  const photoY = useTransform(scrollYProgress, [0, 1], [-40, 50]);
  const tapeRotate = useTransform(scrollYProgress, [0, 1], [-4, 6]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 bg-card text-ink dark:text-cream transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Clean section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-ink/10 dark:border-cream/10 gap-4">
          <div>
            <span className="font-script-note text-2xl text-ochre block -rotate-1">
              {lang === "EN" ? "Meet the Developer" : "Perkenalan Singkat"}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
              BACKGROUND &amp; <span className="text-emerald dark:text-[#52B788]">APPROACH.</span>
            </h2>
          </div>
          <div className="text-xs uppercase tracking-wider text-ink/60 dark:text-cream/60">
            IPB University · SMK Wikrama Bogor
          </div>
        </div>

        {/* Content Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Column: Parallax Taped Polaroid (Daniel Gallego & Kyoto style) */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="p-4 sm:p-5 pb-8 rounded-3xl bg-cream dark:bg-[#121210] border border-ink/10 dark:border-cream/10 shadow-polaroid">
                {/* Yellow washi tape top */}
                <motion.div
                  style={{ rotate: tapeRotate }}
                  className="absolute -top-3.5 left-12 w-24 h-6 washi-tape-yellow z-20"
                />

                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-ink/5">
                  <Image
                    src="/profile/portrait-casual.webp"
                    alt="Syaikhani Giffa Indrawan workspace overview"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="mt-4 px-1 flex justify-between items-center">
                  <div>
                    <span className="font-script-note text-xl text-ink dark:text-cream font-bold block">
                      Field Notes &amp; Engineering
                    </span>
                    <span className="text-xs text-ink/60 dark:text-cream/60">
                      Bogor, West Java, Indonesia
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald/15 text-emerald dark:text-[#52B788]">
                    D4 TRPL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Typography & Verified Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display text-3xl sm:text-5xl text-ink dark:text-cream leading-tight">
              Designing interfaces with emotional warmth and structural rigor.
            </h3>

            <div className="space-y-6 text-base sm:text-lg text-ink/75 dark:text-cream/75 leading-relaxed font-sans">
              <p className="font-medium text-ink dark:text-cream text-lg sm:text-xl leading-snug">
                {profile.about.lead}
              </p>
              {profile.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Verified Metrics Strip (Clean, Luxurious, Non-Robotic) */}
            <div className="grid grid-cols-3 gap-6 pt-6 pb-6 border-y border-ink/10 dark:border-cream/10">
              {profile.about.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-display text-3xl sm:text-5xl font-extrabold text-emerald dark:text-[#52B788]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink/60 dark:text-cream/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Clean CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink hover:bg-ochre dark:hover:bg-butter transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === "EN" ? "Download Curriculum Vitae" : "Unduh CV Resmi"}</span>
              </a>

              <a
                href="https://github.com/GiffaIndr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink/20 dark:border-cream/20 hover:border-ink dark:hover:border-cream transition-colors text-xs font-bold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>

              <a
                href="https://www.linkedin.com/in/syaikhanigiffa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink/20 dark:border-cream/20 hover:border-ink dark:hover:border-cream transition-colors text-xs font-bold"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
