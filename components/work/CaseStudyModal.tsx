"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
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
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/75 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-cream dark:bg-[#151410] text-ink dark:text-cream rounded-3xl shadow-float border border-ink/15 dark:border-cream/15 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-cream/95 dark:bg-[#151410]/95 backdrop-blur-md border-b border-ink/10 dark:border-cream/10">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald text-cream font-bold uppercase tracking-wider text-[11px]">
                {project.category}
              </span>
              <span className="text-ink/60 dark:text-cream/60 font-medium">
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full hover:bg-ink/10 dark:hover:bg-cream/10 transition-colors text-ink dark:text-cream"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scroll Content */}
          <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-10">
            {/* Case Study Header */}
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-6xl text-ink dark:text-cream leading-tight">
                {project.title}
              </h2>
              <p className="text-xl sm:text-2xl text-ochre font-sans italic">
                "{project.tagline}"
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald text-cream text-xs font-bold uppercase tracking-wider hover:bg-emerald/90 transition-colors shadow-luxe"
                  >
                    <span>{lang === "EN" ? "Open Live Demo" : "Buka Demo Live"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink/20 dark:border-cream/20 hover:border-ink dark:hover:border-cream text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{lang === "EN" ? "View Code Repository" : "Lihat Repositori"}</span>
                </a>
              </div>
            </div>

            {/* Meta Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-card border border-ink/10 dark:border-cream/10 text-xs">
              <div>
                <span className="block text-ink/50 dark:text-cream/50 text-[11px] uppercase tracking-wider">Role</span>
                <span className="font-bold text-sm text-ink dark:text-cream">{project.role}</span>
              </div>
              <div>
                <span className="block text-ink/50 dark:text-cream/50 text-[11px] uppercase tracking-wider">Year</span>
                <span className="font-bold text-sm text-ink dark:text-cream">{project.year}</span>
              </div>
              <div>
                <span className="block text-ink/50 dark:text-cream/50 text-[11px] uppercase tracking-wider">Status</span>
                <span className="font-bold text-sm text-ink dark:text-cream uppercase">{project.status}</span>
              </div>
              <div>
                <span className="block text-ink/50 dark:text-cream/50 text-[11px] uppercase tracking-wider">Location</span>
                <span className="font-bold text-sm text-ink dark:text-cream">Bogor, ID</span>
              </div>
            </div>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-card border border-ink/10 dark:border-cream/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-ochre block">
                  {lang === "EN" ? "The Challenge" : "Tantangan Masalah"}
                </span>
                <p className="text-base text-ink/80 dark:text-cream/80 leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-card border border-ink/10 dark:border-cream/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald dark:text-[#52B788] block">
                  {lang === "EN" ? "The Engineered Solution" : "Solusi Rekayasa"}
                </span>
                <p className="text-base text-ink/80 dark:text-cream/80 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-ink/60 dark:text-cream/60 block">
                {lang === "EN" ? "Key System Capabilities" : "Fitur & Kapabilitas Sistem"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-ink/10 dark:border-cream/10 text-sm leading-snug"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald dark:text-[#52B788] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Section if RFID */}
            {project.architecture && (
              <div className="space-y-6 pt-4 border-t border-ink/10 dark:border-cream/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ochre block">
                    Architecture &amp; Flow
                  </span>
                  <h3 className="font-display text-3xl mt-1 text-ink dark:text-cream">
                    Strict 70% Daily Task Gate Pipeline
                  </h3>
                </div>

                <div className="rounded-3xl overflow-hidden border border-ink/10 dark:border-cream/10 shadow-luxe bg-cream">
                  <Image
                    src="/projects/rfid-absence-system/arch-diagram.svg"
                    alt="RFID Architecture Diagram"
                    width={1200}
                    height={680}
                    className="w-full h-auto"
                  />
                </div>

                <div className="p-8 rounded-3xl bg-card border border-ink/10 dark:border-cream/10 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider block">
                    Execution Sequence:
                  </span>
                  <ol className="space-y-3 font-sans text-sm">
                    {project.architecture.flow.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3.5">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald text-cream">
                          0{idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* Gallery Screenshots */}
            {project.gallery.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-ink/10 dark:border-cream/10">
                <span className="text-xs font-bold uppercase tracking-wider text-ink/60 dark:text-cream/60 block">
                  Screenshots &amp; Artifacts
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-3xl overflow-hidden border border-ink/10 dark:border-cream/10 bg-card shadow-polaroid space-y-2 p-3"
                    >
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {img.caption && (
                        <p className="text-xs text-ink/70 dark:text-cream/70 px-2 pt-1 font-medium">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stack Tags */}
            <div className="pt-4 border-t border-ink/10 dark:border-cream/10">
              <span className="text-xs font-bold uppercase tracking-wider text-ink/50 dark:text-cream/50 block mb-3">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-card border border-ink/10 dark:border-cream/10 font-medium"
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
