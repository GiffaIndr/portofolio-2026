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

  const track1X = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const track2X = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);

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
      className="relative w-full py-20 sm:py-28 bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#D9622B] dark:shadow-[2px_2px_0px_#FB923C]">
              <span>[ 04 // CORE TOOLBOX ]</span>
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              CORE <span className="text-terracotta dark:text-[#FB923C]">TOOLBOX.</span>
            </h2>
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
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

      {/* Categorized Detailed Matrix (Solid Paper Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {profile.skills.map((group, gi) => (
            <div
              key={gi}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-3.5"
            >
              <h3 className="font-cutout text-sm sm:text-base text-ink dark:text-white uppercase tracking-wider pb-2 border-b border-black/10 dark:border-white/10">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((it, ii) => (
                  <span
                    key={ii}
                    className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-[#2C2C27] border border-black/15 dark:border-white/15 text-ink dark:text-[#FAF7F2] font-medium shadow-[1px_1px_0px_#141412] dark:shadow-[1px_1px_0px_rgba(255,255,255,0.1)]"
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
