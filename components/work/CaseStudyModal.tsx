"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Server, Layers } from "lucide-react";
import { Project } from "@/content/projects";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  lang: "EN" | "ID";
}

export function CaseStudyModal({ project, onClose, lang }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/70 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-cream dark:bg-[#151410] text-ink dark:text-cream rounded-3xl shadow-float border border-ink/20 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Sticky Modal Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-cream/90 dark:bg-[#151410]/90 backdrop-blur-md border-b border-ink/10">
            <div className="flex items-center gap-3 font-hud text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-terracotta text-cream font-bold">
                {project.category}
              </span>
              <span className="opacity-60">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full hover:bg-ink/10 transition-colors"
              data-cursor="CLOSE"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scroll Content */}
          <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10">
            {/* Case Study Header */}
            <div className="space-y-4">
              <h2 className="font-display-condensed text-4xl sm:text-6xl text-ink dark:text-cream leading-[0.95]">
                {project.title}
              </h2>
              <p className="text-xl sm:text-2xl font-editorial-italic text-terracotta">
                "{project.tagline}"
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap gap-4 pt-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-cream font-hud text-xs font-bold hover:bg-terracotta/90 transition-colors shadow-card"
                    data-cursor="LIVE"
                  >
                    <span>{lang === "EN" ? "LAUNCH LIVE DEMO" : "BUKA DEMO LIVE"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/30 dark:border-cream/30 hover:border-ink dark:hover:border-cream font-hud text-xs transition-colors"
                  data-cursor="REPO"
                >
                  <Github className="w-4 h-4" />
                  <span>{lang === "EN" ? "VIEW REPOSITORY" : "LIHAT REPOSITORI"}</span>
                </a>
              </div>
            </div>

            {/* Meta Attributes Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-ink/5 dark:bg-cream/5 border border-ink/10 font-hud text-xs">
              <div>
                <span className="block opacity-50 text-[10px]">ROLE:</span>
                <span className="font-bold">{project.role}</span>
              </div>
              <div>
                <span className="block opacity-50 text-[10px]">YEAR:</span>
                <span className="font-bold">{project.year}</span>
              </div>
              <div>
                <span className="block opacity-50 text-[10px]">STATUS:</span>
                <span className="font-bold uppercase">{project.status}</span>
              </div>
              <div>
                <span className="block opacity-50 text-[10px]">THEME:</span>
                <span className="font-bold uppercase text-terracotta">{project.accent}</span>
              </div>
            </div>

            {/* Problem & Solution Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-cream/70 dark:bg-[#1C1A14] border border-ink/10 space-y-3">
                <span className="font-hud text-xs text-terracotta font-bold block">
                  {lang === "EN" ? "01. THE PROBLEM" : "01. MASALAH"}
                </span>
                <p className="text-base leading-relaxed text-ink/80 dark:text-cream/80">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cream/70 dark:bg-[#1C1A14] border border-ink/10 space-y-3">
                <span className="font-hud text-xs text-meadow font-bold block">
                  {lang === "EN" ? "02. THE SOLUTION" : "02. SOLUSI"}
                </span>
                <p className="text-base leading-relaxed text-ink/80 dark:text-cream/80">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features Bullet Matrix */}
            <div className="space-y-4">
              <span className="font-hud text-xs text-ink/70 dark:text-cream/70 font-bold block">
                {lang === "EN" ? "KEY SYSTEM CAPABILITIES" : "FITUR & KAPABILITAS SISTEM"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-ink/5 dark:bg-cream/5 border border-ink/10 text-sm leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-meadow flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Section: RFID Architecture & Logic Pipeline (if RFID project) */}
            {project.architecture && (
              <div className="space-y-6 pt-4 border-t border-ink/10">
                <div>
                  <span className="font-hud text-xs text-terracotta font-bold block">
                    SPECIAL CASE STUDY // SYSTEM ARCHITECTURE
                  </span>
                  <h3 className="font-display-condensed text-3xl mt-1">
                    Telemetry &amp; Strict 70% Task Completion Gate
                  </h3>
                </div>

                <div className="rounded-2xl overflow-hidden border border-ink/15 shadow-card bg-cream">
                  <Image
                    src="/projects/rfid-absence-system/arch-diagram.svg"
                    alt="RFID Absence Architecture Diagram"
                    width={1200}
                    height={680}
                    className="w-full h-auto"
                  />
                </div>

                {/* Step by step execution flow */}
                <div className="p-6 rounded-2xl bg-ink/5 dark:bg-cream/5 border border-ink/10 space-y-4">
                  <span className="font-hud text-xs font-bold block">
                    {lang === "EN" ? "EXECUTION SEQUENCE:" : "ALUR KERJA URUTAN:"}
                  </span>
                  <ol className="space-y-3 font-sans text-sm">
                    {project.architecture.flow.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-terracotta text-cream">
                          0{idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* Gallery Screenshots */}
            {project.gallery.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-ink/10">
                <span className="font-hud text-xs opacity-70 block">
                  {lang === "EN" ? "VISUAL ARTIFACTS & INTERFACE SCREENS" : "DOKUMENTASI VISUAL & TAMPILAN"}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden border border-ink/15 bg-ink/5 shadow-card space-y-2 p-3"
                    >
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {img.caption && (
                        <p className="font-hud text-[11px] opacity-75 px-1 pt-1">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="pt-4 border-t border-ink/10">
              <span className="font-hud text-xs opacity-60 block mb-3">
                TECHNOLOGY ECOSYSTEM:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="font-hud text-xs px-3 py-1.5 rounded-lg bg-ink/5 dark:bg-cream/10 border border-ink/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
