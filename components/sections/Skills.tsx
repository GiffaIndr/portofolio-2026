"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { CardTilt3D } from "@/components/ui/CardTilt3D";

interface SkillsProps {
  lang: "EN" | "ID";
}

const DOMAIN_STYLES = [
  {
    color: "#EA580C", // Terracotta
    badge: "bg-[#EA580C] text-white",
    borderTop: "border-t-4 border-[#EA580C]",
    tagBg: "hover:bg-[#EA580C] hover:text-white",
  },
  {
    color: "#2563EB", // Cobalt
    badge: "bg-[#2563EB] text-white",
    borderTop: "border-t-4 border-[#2563EB]",
    tagBg: "hover:bg-[#2563EB] hover:text-white",
  },
  {
    color: "#7C3AED", // Orchid
    badge: "bg-[#7C3AED] text-white",
    borderTop: "border-t-4 border-[#7C3AED]",
    tagBg: "hover:bg-[#7C3AED] hover:text-white",
  },
  {
    color: "#059669", // Emerald
    badge: "bg-[#059669] text-white",
    borderTop: "border-t-4 border-[#059669]",
    tagBg: "hover:bg-[#059669] hover:text-white",
  },
];

export function Skills({ lang }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const track1X = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const track2X = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const skillsRow1 = [
    { name: "React 19", color: "text-[#2563EB]" },
    { name: "Next.js 15", color: "text-[#141412] dark:text-white" },
    { name: "Laravel 10", color: "text-[#EA580C]" },
    { name: "TypeScript", color: "text-[#0284C7]" },
    { name: "ESP8266 IoT", color: "text-[#059669]" },
    { name: "Tailwind CSS", color: "text-[#06B6D4]" },
    { name: "PHP 8.1+", color: "text-[#7C3AED]" },
    { name: "MySQL 8", color: "text-[#F59E0B]" },
  ];

  const skillsRow2 = [
    { name: "Spring Boot", color: "text-[#059669]" },
    { name: "Java SDK", color: "text-[#EA580C]" },
    { name: "Framer Motion", color: "text-[#7C3AED]" },
    { name: "Leaflet & GIS", color: "text-[#10B981]" },
    { name: "RESTful API", color: "text-[#2563EB]" },
    { name: "Postman Test", color: "text-[#F97316]" },
    { name: "Git Architecture", color: "text-[#E11D48]" },
    { name: "Vercel Deploy", color: "text-[#141412] dark:text-white" },
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#F59E0B] dark:shadow-[2px_2px_0px_#FBBF24]">
              <span>[ 04 // CORE TOOLBOX ]</span>
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              CORE <span className="text-[#F59E0B] dark:text-[#FBBF24]">TOOLBOX.</span>
            </h2>
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-ink/70 dark:text-ink-lightDim">
            Production-Verified Stack &amp; Protocols
          </span>
        </div>
      </div>

      {/* Möbius Kinetic Parallax Track 1 */}
      <motion.div
        style={{ x: track1X }}
        className="flex gap-10 whitespace-nowrap select-none py-2 will-change-transform"
      >
        {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-6 font-cutout text-2xl sm:text-4xl text-ink/85 dark:text-white hover:scale-105 transition-transform"
          >
            <span className={skill.color}>{skill.name}</span>
            <span className="font-mono text-xl text-[#F59E0B]">✦</span>
          </div>
        ))}
      </motion.div>

      {/* Möbius Kinetic Parallax Track 2 */}
      <motion.div
        style={{ x: track2X }}
        className="flex gap-10 whitespace-nowrap select-none py-2 mt-2 will-change-transform"
      >
        {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-6 font-cutout text-2xl sm:text-4xl text-ink/85 dark:text-white hover:scale-105 transition-transform"
          >
            <span className={skill.color}>{skill.name}</span>
            <span className="font-mono text-xl text-[#2563EB] dark:text-[#38BDF8]">✦</span>
          </div>
        ))}
      </motion.div>

      {/* Categorized Detailed Matrix with UIMaven Colorful Badges & 3D Tilt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-14 sm:pt-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {profile.skills.map((group, gi) => {
            const style = DOMAIN_STYLES[gi % DOMAIN_STYLES.length];
            return (
              <CardTilt3D key={gi} maxTilt={7} scaleHover={1.02}>
                <div
                  className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#383730] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.12)] space-y-4 ${style.borderTop} transition-all duration-300`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/10">
                    <h3 className="font-cutout text-sm sm:text-base text-ink dark:text-white uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${style.badge}`}
                    >
                      0{gi + 1}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.items.map((it, ii) => (
                      <span
                        key={ii}
                        className={`text-xs px-2.5 py-1 rounded-md bg-white dark:bg-[#2A2A25] border border-black/15 dark:border-white/15 text-ink dark:text-[#FAF7F2] font-medium shadow-[1px_1px_0px_#141412] dark:shadow-[1px_1px_0px_rgba(255,255,255,0.1)] transition-colors cursor-default ${style.tagBg}`}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </CardTilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
