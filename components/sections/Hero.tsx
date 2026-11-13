"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroProps {
  lang: "EN" | "ID";
}

interface MemoryPhoto {
  src: string;
  alt: string;
  ratio: string;
  cropClass?: string;
}

// 15 curated unique photos across 5 lightweight parallax columns (includes all 6 new uploads)
const COLUMN_1: MemoryPhoto[] = [
  { src: "/memories/sunset-skyline.jpg", alt: "Jakarta sunset skyline", ratio: "aspect-[3/4]" },
  { src: "/memories/graduation-suit.jpg", alt: "Graduation ceremony", ratio: "aspect-[4/3]" },
  { src: "/docs/pkl-elevator.jpg", alt: "Internship team elevator moment", ratio: "aspect-[3/4]" },
];

const COLUMN_2: MemoryPhoto[] = [
  { src: "/memories/ipb-gww-ceremony.jpg", alt: "IPB University flag ceremony", ratio: "aspect-[3/4]" },
  { src: "/memories/ipb-vokasi-diseminasi.jpg", alt: "IPB Vocational School dissemination", ratio: "aspect-[4/3]" },
  { src: "/memories/young-entrepreneur.jpg", alt: "Young Entrepreneur graduation", ratio: "aspect-[4/3]" },
];

const COLUMN_3: MemoryPhoto[] = [
  { src: "/memories/ipb-omp-auditorium.jpg", alt: "IPB auditorium orientation", ratio: "aspect-[3/4]" },
  { src: "/memories/ipb-vokasi-presentasi.jpg", alt: "IPB Vocational School presentation", ratio: "aspect-[4/3]" },
  { src: "/docs/rfid-client.jpg", alt: "RFID project client collaboration", ratio: "aspect-[4/3]" },
];

const COLUMN_4: MemoryPhoto[] = [
  { src: "/memories/ipb-tpl-akreditasi.jpg", alt: "TPL IPB accreditation student team", ratio: "aspect-[3/4]", cropClass: "scale-[1.32] object-center" },
  { src: "/memories/vokasi-stadium-night.jpg", alt: "IPB Vocational stadium night", ratio: "aspect-[3/4]" },
  { src: "/docs/pkl-office.jpg", alt: "PT Hexaon internship office", ratio: "aspect-[4/3]" },
];

const COLUMN_5: MemoryPhoto[] = [
  { src: "/memories/mirror-duo.jpg", alt: "Campus duo mirror snapshot", ratio: "aspect-[3/4]" },
  { src: "/memories/ipb-team-mentor.jpg", alt: "IPB team with mentor", ratio: "aspect-[4/3]" },
  { src: "/docs/panti-teaching.jpg", alt: "Orphanage social outreach", ratio: "aspect-[4/3]" },
];

function MemoryFrame({
  src,
  alt,
  ratio,
  cropClass = "",
  priority = false,
}: MemoryPhoto & { priority?: boolean }) {
  return (
    <div
      className={`relative w-full ${ratio} rounded-xl sm:rounded-2xl overflow-hidden bg-[#EAE6DF] ring-1 ring-black/5`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={55}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        className={`object-cover object-center ${cropClass}`}
        sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 18vw"
        priority={priority}
      />
    </div>
  );
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Only 2 shared GPU-only transforms for maximum scroll smoothness
  const downY = useTransform(scrollYProgress, [0, 1], [-16, 64]);
  const upY = useTransform(scrollYProgress, [0, 1], [16, -84]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 overflow-hidden bg-[#F4F1EA] dark:bg-[#11110F] text-[#141412] dark:text-[#FAF7F2] select-none transition-colors duration-300"
    >
      {/* BACKGROUND LAYER: 5-Column Parallax Memory Wall (15 unique photos, 0 captions) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -top-12 -bottom-12 px-3 sm:px-5 overflow-hidden"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-[1680px] mx-auto h-full items-start">
          {/* Column 1 */}
          <motion.div style={{ y: downY }} className="flex flex-col gap-3 sm:gap-4 pt-4">
            {COLUMN_1.map((item, idx) => (
              <MemoryFrame key={`c1-${idx}`} {...item} priority={idx === 0} />
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: upY }} className="flex flex-col gap-3 sm:gap-4 -mt-8 sm:-mt-12">
            {COLUMN_2.map((item, idx) => (
              <MemoryFrame key={`c2-${idx}`} {...item} priority={idx === 0} />
            ))}
          </motion.div>

          {/* Column 3 (Tablet & Desktop) */}
          <motion.div style={{ y: downY }} className="hidden sm:flex flex-col gap-4 pt-8">
            {COLUMN_3.map((item, idx) => (
              <MemoryFrame key={`c3-${idx}`} {...item} />
            ))}
          </motion.div>

          {/* Column 4 (Desktop) */}
          <motion.div style={{ y: upY }} className="hidden lg:flex flex-col gap-4 -mt-10">
            {COLUMN_4.map((item, idx) => (
              <MemoryFrame key={`c4-${idx}`} {...item} />
            ))}
          </motion.div>

          {/* Column 5 (Desktop) */}
          <motion.div style={{ y: downY }} className="hidden lg:flex flex-col gap-4 pt-2">
            {COLUMN_5.map((item, idx) => (
              <MemoryFrame key={`c5-${idx}`} {...item} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* UNIFORM LOW-OPACITY TINT: Even color veil across the entire hero (no center spotlight) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#F4F1EA]/75 dark:bg-[#11110F]/75 transition-colors duration-300"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F4F1EA] dark:from-[#11110F] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F4F1EA] dark:from-[#11110F] to-transparent"
      />

      {/* FOREGROUND STAGE: Clean, Static, High-Contrast Typography */}
      <div className="relative z-10 max-w-4xl mx-auto w-full py-20 text-center flex flex-col items-center justify-center">
        <div className="space-y-6 max-w-2xl">
          <h1
            style={{ textWrap: "balance" }}
            className="font-serif text-5xl sm:text-7xl lg:text-[6.2rem] font-normal leading-[0.98] tracking-[-0.035em] text-[#141412] dark:text-[#FAF7F2]"
          >
            Syaikhani Giffa <br className="hidden sm:inline" />
            <span className="text-[#059669] dark:text-[#34D399]">Indrawan.</span>
          </h1>

          <p
            style={{ textWrap: "pretty" }}
            className="max-w-xl mx-auto text-base sm:text-lg text-[#1F1E1B] dark:text-[#FAF7F2]/85 leading-relaxed font-sans font-normal"
          >
            {lang === "EN"
              ? "Software Engineering student at IPB University. After six months interning as a developer at PT Hexaon, I now build IoT attendance tools, city accessibility maps, and fast web apps."
              : "Mahasiswa Teknologi Rekayasa Perangkat Lunak di IPB University yang pernah magang 6 bulan sebagai developer di PT Hexaon. Sehari-hari membangun sistem absensi IoT, peta aksesibilitas kota, dan aplikasi web yang rapi."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#141412] text-[#FAF7F2] hover:bg-[#059669] dark:bg-[#FAF7F2] dark:text-[#11110F] dark:hover:bg-[#34D399] font-sans font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>{lang === "EN" ? "See My Projects" : "Lihat Proyek"}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#141412]/20 text-[#141412] hover:border-[#141412]/60 bg-[#FAF7F2]/90 dark:border-white/25 dark:text-[#FAF7F2] dark:hover:border-white/60 dark:bg-white/10 font-sans font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <span>{lang === "EN" ? "About Me" : "Tentang Saya"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>
        </div>
      </div>

      {/* Quiet Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#141412]/60 dark:text-[#FAF7F2]/60">
        <span>{lang === "EN" ? "Scroll" : "Gulir"}</span>
        <div className="w-px h-6 bg-gradient-to-b from-[#141412]/50 dark:from-white/50 to-transparent" />
      </div>
    </section>
  );
}
