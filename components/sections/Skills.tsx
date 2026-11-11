"use client";

import React from "react";
import { profile } from "@/content/profile";

interface SkillsProps {
  lang: "EN" | "ID";
}

export function Skills({ lang }: SkillsProps) {
  const marqueeRow1 = [
    "React",
    "Next.js",
    "Laravel 10",
    "TypeScript",
    "Tailwind CSS",
    "ESP8266 IoT",
    "Deck.gl WebGIS",
    "Mapbox GL",
    "PHP 8.1+",
  ];

  const marqueeRow2 = [
    "Android SDK",
    "MySQL 8",
    "Java",
    "Vite",
    "Framer Motion",
    "RESTful API",
    "Spatie Permissions",
    "Vercel",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="relative w-full py-24 bg-[#EBE2D0] dark:bg-[#13120E] text-ink overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-ink/15 gap-4">
          <span className="font-hud text-xs text-terracotta tracking-hud">
            {lang === "EN" ? "04 // TOOLBOX & DISCIPLINES" : "04 // PERANGKAT & KOMPETENSI"}
          </span>
          <span className="font-hud text-xs opacity-60">
            PROVEN ENGINEERING STACK
          </span>
        </div>
      </div>

      {/* Dual Marquee Track 1 (Leftward Flow) */}
      <div className="relative w-full overflow-hidden py-3 select-none flex">
        <div className="flex gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((skill, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-6 font-display-condensed text-3xl sm:text-5xl text-ink/80 hover:text-terracotta transition-colors"
            >
              <span>{skill}</span>
              <span className="font-handwriting text-2xl text-butter lowercase">
                &amp;
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Marquee Track 2 (Rightward Flow) */}
      <div className="relative w-full overflow-hidden py-3 select-none flex mt-2">
        <div className="flex gap-8 whitespace-nowrap animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((skill, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-6 font-display-condensed text-3xl sm:text-5xl text-ink/80 hover:text-meadow transition-colors"
            >
              <span>{skill}</span>
              <span className="font-handwriting text-2xl text-terracotta lowercase">
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Matrix Breakdown */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-cream dark:bg-[#1C1A14] border border-ink/15 shadow-card space-y-4"
            >
              <h3 className="font-hud text-xs text-terracotta font-bold tracking-hud">
                {group.category}
              </h3>
              <ul className="space-y-2 font-sans text-sm text-ink/80 dark:text-cream/80">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-butter" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
