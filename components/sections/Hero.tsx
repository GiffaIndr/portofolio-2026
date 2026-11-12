"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Compass } from "lucide-react";
import { HeroLandscapeScenery } from "@/components/ui/HeroLandscapeScenery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  lang: "EN" | "ID";
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const distRef = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [timeStr, setTimeStr] = useState("17:00 WIB");

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    // Live WIB clock for HUD expedition telemetry
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTimeStr(`${now.toLocaleTimeString("id-ID", options)} WIB`);
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);

    // Section 5.2: HUD Distance counter (0.0 km -> 12.4 km) tracking whole page scroll
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (distRef.current) {
          distRef.current.textContent = (self.progress * 12.4).toFixed(1);
        }
      },
    });

    return () => {
      clearInterval(timer);
      st.kill();
    };
  }, []);

  // 1. Scroll-driven vertical parallax transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  // Section 6, Idea 2: Split title counter-glide revealing scenery
  const titleLeftX = useTransform(scrollYProgress, [0, 0.7], ["0%", "-5%"]);
  const titleRightX = useTransform(scrollYProgress, [0, 0.7], ["0%", "5%"]);
  const italicX = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const cardLeftY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const cardCenterY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const cardRightY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // 2. Mouse-driven interactive 3D perspective tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 120, mass: 0.3 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const stageRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4, -4]);
  const stageRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

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
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 sm:pt-36 pb-14 px-6 sm:px-10 md:px-16 overflow-hidden bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300 select-none"
    >
      {/* Multi-depth landscape background scenery (Reference 1 & 2 inspired) */}
      <HeroLandscapeScenery />

      {/* Top Bar: Clean & Breathless (NO hairline divider line, NO robot font, NO // slashes) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
        <div className="flex items-center gap-2 text-xs font-sans font-medium text-ink/75 dark:text-ink-lightDim">
          <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <span>{lang === "EN" ? "Portfolio Archive 2026" : "Arsip Portofolio 2026"}</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-sans text-ink/65 dark:text-ink-lightDim">
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
            <span>{timeStr} · <span ref={distRef} className="font-semibold text-ink dark:text-white">0.0</span> km</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#059669] dark:text-[#34D399]" />
            <span>Bogor · 6.5971° S, 106.8060° E</span>
          </div>
        </div>
      </div>

      {/* Main Centered Typographic Stage */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-8 sm:py-12 text-center flex flex-col items-center justify-center">
        <motion.div
          style={{ y: titleY, opacity }}
          className="space-y-6 sm:space-y-7 max-w-4xl"
        >
          {/* Headline in Timeless Serif with Split Counter-Glide (Idea 2 & 3) */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[6.2rem] font-normal leading-[1.02] tracking-tight text-ink dark:text-ink-light">
            <motion.span style={{ x: titleLeftX, display: "inline-block" }} className="will-change-transform">
              Crafting tactile,
            </motion.span> <br />
            <motion.span style={{ x: titleRightX, display: "inline-block" }} className="will-change-transform">
              purposeful software,
            </motion.span> <br />
            <motion.span
              style={{ x: italicX, display: "inline-block" }}
              className="italic text-[#059669] dark:text-[#34D399] will-change-transform"
            >
              really.
            </motion.span>
          </h1>

          {/* Authentic Human Narrative */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ink/75 dark:text-ink-lightMuted leading-relaxed font-sans font-normal">
            {lang === "EN"
              ? "Software Engineering Technology undergraduate at IPB University with 6-month developer internship experience at PT Hexaon. Merging hardware-verified IoT attendance gates, municipal accessibility WebGIS directories, and responsive web architecture."
              : "Mahasiswa Rekayasa Perangkat Lunak di IPB University dengan pengalaman magang industri 6 bulan di PT Hexaon. Merancang arsitektur gerbang IoT RFID terverifikasi, direktori WebGIS aksesibilitas kota, dan sistem antarmuka web berkinerja tinggi."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-sans font-medium text-xs uppercase tracking-wider hover:bg-[#2563EB] dark:hover:bg-[#60A5FA] dark:hover:text-[#141412] transition-all shadow-[2.5px_2.5px_0px_#2563EB] dark:shadow-[2.5px_2.5px_0px_#60A5FA] hover:-translate-y-0.5"
            >
              <span>{lang === "EN" ? "Explore Selected Work" : "Jelajahi Karya Pilihan"}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-black/20 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white font-sans font-medium text-xs uppercase tracking-wider transition-colors bg-white dark:bg-[#1E1E1B]"
            >
              <span>{lang === "EN" ? "About Syaikhani" : "Tentang Syaikhani"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </motion.div>

        {/* Feature Parallax Deck: 3 Interactive Multi-Plane Project Cards (Integrated into Layout) */}
        <motion.div
          style={{
            y: cardsY,
            rotateX: isTouch ? 0 : stageRotateX,
            rotateY: isTouch ? 0 : stageRotateY,
            transformStyle: "preserve-3d",
          }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 sm:pt-16 items-start text-left"
        >
          {/* Parallax Card 1: RFID Absence System (Cobalt) */}
          <motion.div
            style={{ y: cardLeftY }}
            className="group p-5 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-black/5">
              <Image
                src="/projects/rfid-absence-system/cover.webp"
                alt="RFID Absence and Task KPI System interface"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#2563EB] text-white text-[11px] font-sans font-semibold">
                IoT &amp; RFID Gate
              </span>
            </div>
            <h3 className="font-serif text-lg text-ink dark:text-white font-normal group-hover:text-[#2563EB] transition-colors">
              RFID Absence &amp; Task KPI v2
            </h3>
            <p className="text-xs text-ink/70 dark:text-ink-lightDim mt-1 line-clamp-2 font-sans">
              Hardware RFID verification strictly gated behind a 70% daily task completion threshold with automated KPI scoring.
            </p>
          </motion.div>

          {/* Parallax Card 2: AksesKota WebGIS (Emerald) */}
          <motion.div
            style={{ y: cardCenterY }}
            className="group p-5 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-black/5">
              <Image
                src="/projects/akseskota/cover.webp"
                alt="AksesKota interactive map directory"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#059669] text-white text-[11px] font-sans font-semibold">
                WebGIS Spatial
              </span>
            </div>
            <h3 className="font-serif text-lg text-ink dark:text-white font-normal group-hover:text-[#059669] transition-colors">
              AksesKota Bogor Directory
            </h3>
            <p className="text-xs text-ink/70 dark:text-ink-lightDim mt-1 line-clamp-2 font-sans">
              Interactive accessibility visualizer detailing ramp availability, tactile paving, and wheelchair accessibility across Bogor.
            </p>
          </motion.div>

          {/* Parallax Card 3: RailUma Braille Workspace (Terracotta) */}
          <motion.div
            style={{ y: cardRightY }}
            className="group p-5 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-black/5">
              <Image
                src="/projects/railuma/cover.webp"
                alt="RailUma Braille computer vision workspace"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#EA580C] text-white text-[11px] font-sans font-semibold">
                AI Vision OCR
              </span>
            </div>
            <h3 className="font-serif text-lg text-ink dark:text-white font-normal group-hover:text-[#EA580C] transition-colors">
              RailUma Braille Workspace
            </h3>
            <p className="text-xs text-ink/70 dark:text-ink-lightDim mt-1 line-clamp-2 font-sans">
              YOLO object detection optical Braille scanner converting physical dots into validated Indonesian text with dictionary check.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar: Quiet & Human */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex justify-between items-center text-xs font-sans text-ink/50 dark:text-ink-lightDim">
        <span>Scroll for continuous parallax depth</span>
        <span>Syaikhani Giffa Indrawan · 2026</span>
      </div>
    </section>
  );
}

