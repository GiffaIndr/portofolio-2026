"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";

interface SkillsProps {
  lang: "EN" | "ID";
}

export function Skills({ lang }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax horizontal shifts tied to scroll progress
  const track1X = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const track2X = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);

  const skillsRow1 = [
    "React",
    "Next.js",
    "Laravel 10",
    "TypeScript",
    "Tailwind CSS",
    "ESP8266 IoT",
    "Deck.gl WebGIS",
    "Mapbox GL",
    "PHP 8",
  ];

  const skillsRow2 = [
    "Android Java",
    "MySQL",
    "Vite",
    "Framer Motion",
    "RESTful API",
    "Git",
    "Vercel",
    "Postman",
    "Linux",
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full py-28 bg-cream text-ink dark:text-cream transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-ink/10 dark:border-cream/10 gap-4">
          <div>
            <span className="font-script-note text-2xl text-ochre block -rotate-1">
              {lang === "EN" ? "Tools & Languages" : "Alat & Bahasa"}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
              CORE <span className="text-emerald dark:text-[#52B788]">TOOLBOX.</span>
            </h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-ink/60 dark:text-cream/60">
            Validated Competencies
          </span>
        </div>
      </div>

      {/* Parallax Ribbon Row 1 */}
      <motion.div
        style={{ x: track1X }}
        className="flex gap-8 whitespace-nowrap select-none py-2"
      >
        {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-6 font-display text-3xl sm:text-5xl text-ink/80 dark:text-cream/80 hover:text-ochre transition-colors"
          >
            <span>{skill}</span>
            <span className="font-script-note text-3xl text-emerald dark:text-[#52B788]">
              ✦
            </span>
          </div>
        ))}
      </motion.div>

      {/* Parallax Ribbon Row 2 */}
      <motion.div
        style={{ x: track2X }}
        className="flex gap-8 whitespace-nowrap select-none py-2 mt-4"
      >
        {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-6 font-display text-3xl sm:text-5xl text-ink/80 dark:text-cream/80 hover:text-emerald transition-colors"
          >
            <span>{skill}</span>
            <span className="font-script-note text-3xl text-ochre">
              ✦
            </span>
          </div>
        ))}
      </motion.div>

      {/* Categorized Clean Matrix */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-card border border-ink/10 dark:border-cream/10 shadow-luxe space-y-4"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-ochre">
                {group.category}
              </h3>
              <ul className="space-y-2.5 text-sm text-ink/80 dark:text-cream/80">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
