"use client";

import React, { useRef, useEffect } from "react";
import { profile } from "@/content/profile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillsProps {
  lang: "EN" | "ID";
}

const DOMAIN_STYLES = [
  {
    badge: "bg-[#EA580C] text-white",
    borderTop: "border-t-4 border-t-[#EA580C]",
    tagHover: "hover:bg-[#EA580C] hover:text-white",
    numColor: "text-[#EA580C]",
  },
  {
    badge: "bg-[#2563EB] text-white",
    borderTop: "border-t-4 border-t-[#2563EB]",
    tagHover: "hover:bg-[#2563EB] hover:text-white",
    numColor: "text-[#2563EB]",
  },
  {
    badge: "bg-[#7C3AED] text-white",
    borderTop: "border-t-4 border-t-[#7C3AED]",
    tagHover: "hover:bg-[#7C3AED] hover:text-white",
    numColor: "text-[#7C3AED]",
  },
  {
    badge: "bg-[#059669] text-white",
    borderTop: "border-t-4 border-t-[#059669]",
    tagHover: "hover:bg-[#059669] hover:text-white",
    numColor: "text-[#059669]",
  },
];

const MARQUEE_ITEMS_1 = [
  "Next.js", "React 19", "TypeScript", "Laravel 10", "Tailwind CSS",
  "ESP8266 IoT", "RFID Hardware", "Spring Boot", "MySQL", "REST APIs",
];

const MARQUEE_ITEMS_2 = [
  "WebGIS Spatial", "Computer Vision OCR", "Figma Design", "Postman",
  "Git & GitHub", "Vercel Fluid", "Clean Architecture", "Responsive UI",
];

export function Skills({ lang }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!row1Ref.current || !row2Ref.current) return;

    let progress1 = 0;
    let progress2 = 0;
    let velocityMultiplier = 1;

    // Section 5.7: Velocity-linked marquee speed
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

      // Smooth decay back to base speed
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
      className="relative w-full py-20 sm:py-28 bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/10 dark:border-white/10 gap-3">
          <div>
            <span className="text-xs font-sans font-semibold tracking-wider text-[#EA580C] dark:text-[#FB923C] uppercase block mb-2">
              04. Technical Capabilities
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
              Technical <span className="italic text-[#EA580C] dark:text-[#FB923C]">Stack.</span>
            </h2>
          </div>
          <span className="text-xs font-sans text-ink/60 dark:text-ink-lightDim">
            Production-Verified Protocols &amp; Frameworks
          </span>
        </div>

        {/* 4-Column Colorful Editorial Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-14">
          {profile.skills.map((group, gi) => {
            const style = DOMAIN_STYLES[gi % DOMAIN_STYLES.length];
            return (
              <div
                key={gi}
                className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm ${style.borderTop} space-y-4 transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
                  <h3 className="font-serif text-lg text-ink dark:text-white font-normal">
                    {group.category}
                  </h3>
                  <span className={`text-xs font-sans font-bold ${style.numColor}`}>
                    0{gi + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((it, ii) => (
                    <span
                      key={ii}
                      className={`text-xs px-2.5 py-1 rounded bg-black/5 dark:bg-white/5 font-sans font-medium text-ink/80 dark:text-ink-light ${style.tagHover} transition-colors cursor-default`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 5.7: Velocity-Linked Dual Marquee Tape */}
      <div className="mt-14 sm:mt-18 pt-6 border-t border-black/5 dark:border-white/5 space-y-3 pointer-events-none select-none opacity-85">
        {/* Row 1 */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={row1Ref} className="inline-flex gap-4 will-change-transform">
            {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#1E1E1B]/70 text-xs font-sans font-semibold text-ink/75 dark:text-ink-light"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div ref={row2Ref} className="inline-flex gap-4 will-change-transform">
            {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#1E1E1B]/70 text-xs font-sans font-semibold text-ink/75 dark:text-ink-light"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

