"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

interface HeroProps {
  lang: "EN" | "ID";
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // 1. Scroll-driven vertical parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const badgeLayer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const badgeLayer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const badgeLayer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  // 2. Mouse-driven interactive 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 140, mass: 0.3 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const titleTiltX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const titleTiltY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  const float1X = useTransform(smoothMouseX, [-0.5, 0.5], [-28, 28]);
  const float1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-22, 22]);

  const float2X = useTransform(smoothMouseX, [-0.5, 0.5], [32, -32]);
  const float2Y = useTransform(smoothMouseY, [-0.5, 0.5], [26, -26]);

  const float3X = useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40]);
  const float3Y = useTransform(smoothMouseY, [-0.5, 0.5], [35, -35]);

  const float4X = useTransform(smoothMouseX, [-0.5, 0.5], [24, -24]);
  const float4Y = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isTouch) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[94vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 px-6 sm:px-10 md:px-16 overflow-hidden bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300 select-none"
    >
      {/* Top Editorial Metaline */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-2.5 text-xs font-mono font-medium tracking-wider text-ink/70 dark:text-ink-lightDim">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#60A5FA]" />
          <span>{lang === "EN" ? "PORTFOLIO ARCHIVE // 2026" : "ARSIP PORTOFOLIO // 2026"}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-ink/60 dark:text-ink-lightDim">
          <MapPin className="w-3.5 h-3.5 text-[#059669] dark:text-[#34D399]" />
          <span>IPB University · D4 TRPL · Bogor, West Java, ID</span>
        </div>
      </div>

      {/* Main Centered Parallax Stage */}
      <div className="relative max-w-5xl mx-auto w-full my-auto py-12 sm:py-20 text-center flex flex-col items-center justify-center">
        {/* Floating Interactive Parallax Badges (Multi-plane Depth Layers) */}
        {/* Badge 1: Top Left - Cobalt IoT Tag */}
        <motion.div
          style={{ x: float1X, y: float1Y, translateY: badgeLayer1Y }}
          className="hidden md:flex absolute -top-4 left-0 lg:-left-12 items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-[2px_2px_0px_#2563EB] dark:shadow-[2px_2px_0px_#60A5FA] pointer-events-none z-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <span className="font-mono text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            IoT &amp; RFID Gates
          </span>
        </motion.div>

        {/* Badge 2: Top Right - Emerald WebGIS Tag */}
        <motion.div
          style={{ x: float2X, y: float2Y, translateY: badgeLayer2Y }}
          className="hidden md:flex absolute top-2 right-0 lg:-right-8 items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-[2px_2px_0px_#059669] dark:shadow-[2px_2px_0px_#34D399] pointer-events-none z-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="font-mono text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            WebGIS Spatial
          </span>
        </motion.div>

        {/* Badge 3: Bottom Left - Terracotta 6-Mo Intern */}
        <motion.div
          style={{ x: float3X, y: float3Y, translateY: badgeLayer3Y }}
          className="hidden lg:flex absolute bottom-8 -left-16 items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-[2px_2px_0px_#EA580C] dark:shadow-[2px_2px_0px_#FB923C] pointer-events-none z-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
          <span className="font-mono text-xs font-bold text-ink dark:text-white uppercase tracking-wider">
            PT Hexaon Intern
          </span>
        </motion.div>

        {/* Badge 4: Bottom Right - Saffron Coordinates */}
        <motion.div
          style={{ x: float4X, y: float4Y, translateY: badgeLayer1Y }}
          className="hidden lg:flex absolute bottom-12 -right-12 items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-white/20 shadow-[2px_2px_0px_#F59E0B] dark:shadow-[2px_2px_0px_#FBBF24] pointer-events-none z-10"
        >
          <span className="font-mono text-xs font-bold text-ink dark:text-white tracking-wider">
            6°35'S 106°47'E
          </span>
        </motion.div>

        {/* Centered Typography with Mouse Tilt & Scroll Parallax */}
        <motion.div
          style={{
            y: titleY,
            opacity,
            rotateX: isTouch ? 0 : titleTiltX,
            rotateY: isTouch ? 0 : titleTiltY,
            transformStyle: "preserve-3d",
          }}
          className="space-y-6 sm:space-y-8 max-w-4xl will-change-transform"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#60A5FA]">
            <span>✦ FRONT-END ARCHITECTURE &amp; SOFTWARE ENGINEERING</span>
          </div>

          {/* Grand Centered Serif Headline with Italic Accent */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.2rem] font-normal leading-[1.02] tracking-tight text-ink dark:text-ink-light">
            Crafting tactile, <br />
            purposeful software, <br />
            <span className="italic text-[#059669] dark:text-[#34D399]">really.</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ink/75 dark:text-ink-lightMuted leading-relaxed font-sans font-normal">
            {lang === "EN"
              ? "Software Engineering Technology undergraduate at IPB University with 6-month industry developer experience at PT Hexaon. Merging hardware-verified IoT attendance gates, municipal accessibility WebGIS directories, and responsive web architecture."
              : "Mahasiswa Rekayasa Perangkat Lunak di IPB University dengan pengalaman magang industri 6 bulan di PT Hexaon. Merancang arsitektur gerbang IoT RFID terverifikasi, direktori WebGIS aksesibilitas kota, dan sistem antarmuka web berkinerja tinggi."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-medium text-xs uppercase tracking-wider hover:bg-[#2563EB] dark:hover:bg-[#60A5FA] dark:hover:text-[#141412] transition-all shadow-[2.5px_2.5px_0px_#2563EB] dark:shadow-[2.5px_2.5px_0px_#60A5FA] hover:-translate-y-0.5"
            >
              <span>{lang === "EN" ? "Explore Selected Work" : "Jelajahi Karya Pilihan"}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-black/20 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white font-medium text-xs uppercase tracking-wider transition-colors bg-white dark:bg-[#1E1E1B]"
            >
              <span>{lang === "EN" ? "About Syaikhani" : "Tentang Syaikhani"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Parallax Scroll Prompt */}
      <div className="max-w-7xl mx-auto w-full pt-6 flex justify-between items-center text-xs font-mono text-ink/50 dark:text-ink-lightDim">
        <span className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-bounce" />
          <span>SCROLL FOR CONTINUOUS PARALLAX</span>
        </span>
        <span>SYAIKHANI GIFFA INDRAWAN // 2026</span>
      </div>
    </section>
  );
}
