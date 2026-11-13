"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillsProps {
  lang: "EN" | "ID";
}

const DOMAIN_ACCENTS = [
  { text: "text-[#38BDF8]", pill: "hover:bg-[#38BDF8] hover:text-[#0F172A]" },
  { text: "text-[#34D399]", pill: "hover:bg-[#34D399] hover:text-[#0F172A]" },
  { text: "text-[#FBBF24]", pill: "hover:bg-[#FBBF24] hover:text-[#0F172A]" },
  { text: "text-[#FB7185]", pill: "hover:bg-[#FB7185] hover:text-[#0F172A]" },
];

const MARQUEE_ITEMS_1 = [
  { text: "Next.js 15", isItalic: true },
  { text: "REACT 19", isItalic: false },
  { text: "TypeScript", isItalic: true },
  { text: "LARAVEL 10", isItalic: false },
  { text: "Tailwind CSS", isItalic: true },
  { text: "ESP8266 IOT", isItalic: false },
  { text: "Hardware RFID", isItalic: true },
  { text: "SPRING BOOT", isItalic: false },
  { text: "MySQL Database", isItalic: true },
  { text: "REST APIS", isItalic: false },
];

const MARQUEE_ITEMS_2 = [
  { text: "WebGIS Spatial", isItalic: true },
  { text: "COMPUTER VISION", isItalic: false },
  { text: "Braille OCR", isItalic: true },
  { text: "FIGMA SYSTEMS", isItalic: false },
  { text: "Clean Architecture", isItalic: true },
  { text: "POSTMAN SUITE", isItalic: false },
  { text: "Responsive UI", isItalic: true },
  { text: "GIT & GITHUB", isItalic: false },
  { text: "Vercel Edge", isItalic: true },
  { text: "HIGH PERFORMANCE", isItalic: false },
];

export function Skills({ lang }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!row1Ref.current || !row2Ref.current) return;

    let progress1 = 0;
    let progress2 = 0;
    let velocityMultiplier = 1;

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const vel = Math.abs(self.getVelocity() / 350);
        velocityMultiplier = 1 + Math.min(vel, 3.5);
      },
    });

    let rafId: number;
    const animate = () => {
      progress1 -= 0.04 * velocityMultiplier;
      progress2 += 0.04 * velocityMultiplier;

      if (velocityMultiplier > 1.01) {
        velocityMultiplier += (1 - velocityMultiplier) * 0.06;
      }

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translate3d(${progress1 % 50}%, 0, 0)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translate3d(${-progress2 % 50}%, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      st.kill();
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#0F172A] dark:bg-[#090D16] text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle electric sky atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 w-[560px] h-[360px] rounded-full bg-[#38BDF8]/10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header (No kicker/eyebrow) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-white/15 gap-4">
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight">
            {lang === "EN" ? "Technical " : "Keahlian "}
            <span className="italic text-[#38BDF8]">
              {lang === "EN" ? "Stack." : "Teknologi."}
            </span>
          </h2>
          <span className="text-xs font-sans text-slate-300">
            {lang === "EN"
              ? "Production-Verified Protocols & Frameworks"
              : "Protokol & Framework Teruji Produksi"}
          </span>
        </div>

        {/* 4-Column Midnight Studio Matrix */}
        <motion.div
          style={{ y: gridY }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-16 will-change-transform"
        >
          {profile.skills.map((group, gi) => {
            const accent = DOMAIN_ACCENTS[gi % DOMAIN_ACCENTS.length];
            return (
              <div
                key={gi}
                className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/10 space-y-5 transition-colors hover:bg-white/[0.07]"
              >
                <div className="pb-3 border-b border-white/10">
                  <h3 className={`font-serif text-xl font-normal ${accent.text}`}>
                    {lang === "ID" && group.categoryId ? group.categoryId : group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((it, ii) => (
                    <span
                      key={ii}
                      className={`text-xs px-3 py-1.5 rounded-full bg-white/[0.06] font-sans font-medium text-slate-200 ${accent.pill} transition-colors cursor-default`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Velocity-Linked Editorial Typographic Ribbon */}
      <div className="mt-20 py-7 sm:py-9 border-y border-white/10 bg-white/[0.02] space-y-4 sm:space-y-5 pointer-events-none select-none overflow-hidden">
        {/* Row 1 */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={row1Ref} className="inline-flex items-center gap-8 sm:gap-12 will-change-transform">
            {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-8 sm:gap-12">
                <span
                  className={
                    item.isItalic
                      ? "font-serif text-2xl sm:text-4xl italic text-[#38BDF8] font-normal tracking-tight"
                      : "font-sans text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-white"
                  }
                >
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={row2Ref} className="inline-flex items-center gap-8 sm:gap-12 will-change-transform">
            {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-8 sm:gap-12">
                <span
                  className={
                    item.isItalic
                      ? "font-serif text-2xl sm:text-4xl italic text-[#FBBF24] font-normal tracking-tight"
                      : "font-sans text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-300"
                  }
                >
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
