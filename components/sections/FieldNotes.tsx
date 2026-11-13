"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface FieldNotesProps {
  lang: "EN" | "ID";
}

export function FieldNotes({ lang }: FieldNotesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const col1Y = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const tiltLeft = useTransform(scrollYProgress, [0.1, 0.55], [-2.5, 0]);
  const tiltRight = useTransform(scrollYProgress, [0.1, 0.55], [2.5, 0]);

  return (
    <section
      id="field-notes"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#EAE5DC] dark:bg-[#191815] text-[#1C1917] dark:text-[#FAF7F2] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header (No eyebrow/kicker) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/12 dark:border-white/12 gap-4">
          <h2 className="font-serif text-4xl sm:text-6xl text-[#1C1917] dark:text-white font-normal tracking-tight">
            {lang === "EN" ? "Field & " : "Dokumentasi "}
            <span className="italic text-[#4D7C0F] dark:text-[#A3E635]">
              {lang === "EN" ? "Community." : "Lapangan."}
            </span>
          </h2>
          <p className="max-w-md text-sm sm:text-base text-[#1C1917]/75 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
            {lang === "EN"
              ? "Real-world collaboration across industry internships, student community outreach, and client project handovers."
              : "Jejak kolaborasi nyata selama praktik kerja industri, pengabdian masyarakat di panti asuhan, hingga serah terima proyek klien."}
          </p>
        </div>

        {/* Asymmetric 3-Story Editorial Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-12 sm:pt-16 items-start">
          {/* Story 1: Industry Internship (PKL at PT Hexaon) - 5 cols */}
          <motion.div
            style={{ y: col1Y }}
            className="lg:col-span-5 space-y-5 will-change-transform"
          >
            <div className="grid grid-cols-12 gap-4 items-end">
              <motion.div
                style={{ rotate: tiltLeft }}
                className="col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 shadow-[0_18px_38px_-14px_rgba(0,0,0,0.2)] border border-black/10 dark:border-white/10"
              >
                <Image
                  src="/docs/pkl-office.jpg"
                  alt="PT Hexaon internship team in office batik"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 60vw, 320px"
                />
              </motion.div>

              <div className="col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 shadow-[0_18px_38px_-14px_rgba(0,0,0,0.2)] border border-black/10 dark:border-white/10">
                <Image
                  src="/docs/pkl-elevator.jpg"
                  alt="Internship peers mirror selfie in office elevator"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 40vw, 220px"
                />
              </div>
            </div>

            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                <span>{lang === "EN" ? "Industry Internship · PKL" : "Praktik Kerja Lapangan · PKL"}</span>
                <span className="text-[#1C1917]/50 dark:text-white/50">PT Hexaon</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C1917] dark:text-white font-normal">
                {lang === "EN"
                  ? "Six Months in Production Engineering"
                  : "Enam Bulan di Lingkungan Produksi"}
              </h3>
              <p className="text-sm text-[#1C1917]/75 dark:text-[#E2DEC9] leading-relaxed font-sans">
                {lang === "EN"
                  ? "Daily engineering collaboration alongside fellow interns and senior developers building web portals and internal tooling."
                  : "Kolaborasi harian bersama tim magang dan engineer senior dalam membangun portal web serta sistem internal perusahaan."}
              </p>
            </div>
          </motion.div>

          {/* Story 2: Social Outreach (Panti Asuhan) - 4 cols */}
          <motion.div
            style={{ y: col2Y }}
            className="lg:col-span-4 space-y-5 lg:mt-10 will-change-transform"
          >
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-7 relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 shadow-[0_18px_38px_-14px_rgba(0,0,0,0.2)] border border-black/10 dark:border-white/10">
                <Image
                  src="/docs/panti-community.jpg"
                  alt="Social outreach activity with children at Panti Asuhan"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 55vw, 260px"
                />
              </div>

              <motion.div
                style={{ rotate: tiltRight }}
                className="col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 shadow-[0_18px_38px_-14px_rgba(0,0,0,0.2)] border border-black/10 dark:border-white/10 mt-6"
              >
                <Image
                  src="/docs/panti-teaching.jpg"
                  alt="Mentoring children during orphanage social visit"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 45vw, 200px"
                />
              </motion.div>
            </div>

            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-[#4D7C0F] dark:text-[#A3E635]">
                <span>{lang === "EN" ? "Social Outreach" : "Pengabdian Masyarakat"}</span>
                <span className="text-[#1C1917]/50 dark:text-white/50">Bogor</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C1917] dark:text-white font-normal">
                {lang === "EN"
                  ? "Orphanage Visit & Learning Session"
                  : "Kunjungan & Pendampingan Panti Asuhan"}
              </h3>
              <p className="text-sm text-[#1C1917]/75 dark:text-[#E2DEC9] leading-relaxed font-sans">
                {lang === "EN"
                  ? "Guiding interactive learning exercises and sharing warmth with younger students during IPB TRPL community service."
                  : "Mendampingi sesi belajar interaktif dan berbagi kebersamaan bersama adik-adik panti asuhan dalam program pengabdian IPB TRPL."}
              </p>
            </div>
          </motion.div>

          {/* Story 3: RFID Client Collaboration - 3 cols */}
          <motion.div
            style={{ y: col3Y }}
            className="lg:col-span-3 space-y-5 will-change-transform"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black/5 shadow-[0_22px_45px_-14px_rgba(0,0,0,0.24)] border border-black/10 dark:border-white/10">
              <Image
                src="/docs/rfid-client.jpg"
                alt="Meeting with clients for the RFID Absence & Task KPI project"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            </div>

            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-[#C2410C] dark:text-[#FB923C]">
                <span>{lang === "EN" ? "Client Project" : "Proyek Klien"}</span>
                <span className="text-[#1C1917]/50 dark:text-white/50">RFID v2</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C1917] dark:text-white font-normal">
                {lang === "EN"
                  ? "RFID System Stakeholder Sync"
                  : "Diskusi Klien Sistem RFID"}
              </h3>
              <p className="text-sm text-[#1C1917]/75 dark:text-[#E2DEC9] leading-relaxed font-sans">
                {lang === "EN"
                  ? "Direct requirement alignment and deployment walkthrough with the client team for the RFID Absence & KPI platform."
                  : "Penyelarasan kebutuhan bisnis dan demonstrasi langsung bersama tim klien untuk sistem presensi RFID & KPI."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
