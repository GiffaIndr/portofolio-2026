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

  const track1X = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const track2X = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const skillsRow1 = [
    "Angular",
    "React",
    "Next.js",
    "Laravel 10",
    "PHP 8",
    "TypeScript",
    "Tailwind CSS",
    "ESP8266 IoT",
    "MySQL",
  ];

  const skillsRow2 = [
    "Spring Boot",
    "Java",
    "Flutter",
    "RESTful API",
    "Git & GitHub",
    "Postman",
    "Figma",
    "Vercel",
    "Bootstrap",
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/15 dark:border-white/15 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-[#D9622B]/20 dark:bg-[#D9622B]/30 text-terracotta dark:text-[#FB923C] font-bold text-xs uppercase mb-2">
              {lang === "EN" ? "CAPABILITIES" : "KEAHLIAN TEKNIS"}
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              CORE <span className="text-terracotta dark:text-[#FB923C]">TOOLBOX.</span>
            </h2>
          </div>
          <span className="text-xs uppercase font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
            Verified Stack &amp; Frameworks
          </span>
        </div>
      </div>

      {/* Parallax Ribbon Row 1 */}
      <motion.div
        style={{ x: track1X }}
        className="flex gap-8 whitespace-nowrap select-none py-3"
      >
        {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-6 font-cutout text-2xl sm:text-4xl text-ink/85 dark:text-white hover:text-[#65A30D] dark:hover:text-[#A3E635] transition-colors"
          >
            <span>{skill}</span>
            <span className="font-script-brush text-3xl text-butter">
              ✦
            </span>
          </div>
        ))}
      </motion.div>

      {/* Parallax Ribbon Row 2 */}
      <motion.div
        style={{ x: track2X }}
        className="flex gap-8 whitespace-nowrap select-none py-3 mt-3"
      >
        {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-6 font-cutout text-2xl sm:text-4xl text-ink/85 dark:text-white hover:text-terracotta dark:hover:text-[#FB923C] transition-colors"
          >
            <span>{skill}</span>
            <span className="font-script-brush text-3xl text-sky dark:text-[#38BDF8]">
              ✦
            </span>
          </div>
        ))}
      </motion.div>

      {/* Categorized Detailed Matrix */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.skills.map((group, gi) => (
            <div
              key={gi}
              className="p-6 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-4"
            >
              <h3 className="font-cutout text-base text-ink dark:text-white uppercase tracking-wider pb-2 border-b border-black/10 dark:border-white/10">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((it, ii) => (
                  <span
                    key={ii}
                    className="text-xs px-3 py-1 rounded-full bg-surface/70 dark:bg-[#2C2C27] border border-black/10 dark:border-white/15 text-ink dark:text-[#FAF7F2] font-medium"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
