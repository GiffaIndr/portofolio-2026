"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Project } from "@/content/projects";
import { RfidSignalArchitectureFlow } from "./RfidSignalArchitectureFlow";

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
        {/* Solid dark backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-white dark:bg-[#1E1E1B] text-ink dark:text-ink-light rounded-3xl border border-black/15 dark:border-white/15 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col shadow-2xl"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-white dark:bg-[#1E1E1B] border-b border-black/10 dark:border-white/10">
            <div className="flex items-center gap-3 text-xs font-sans font-medium">
              <span className="px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-ink dark:text-white uppercase">
                {project.category}
              </span>
              <span className="text-ink/60 dark:text-ink-lightDim">
                {project.year} · Verified Project
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-ink dark:text-ink-light"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scroll Content */}
          <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-10">
            {/* Case Study Header */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-5xl text-ink dark:text-white font-normal leading-snug">
                {project.title}
              </h2>
              <p className="text-xl sm:text-2xl text-[#2D4A34] dark:text-[#A3E635] font-serif italic">
                "{project.tagline}"
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#141412] text-white dark:bg-white dark:text-[#141412] text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#2D4A34] dark:hover:bg-[#A3E635] transition-colors"
                  >
                    <span>{lang === "EN" ? "Open Live Demo" : "Buka Demo Live"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-black/20 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white text-xs font-sans font-semibold uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Hero Cover Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-7 rounded-2xl bg-black/5 dark:bg-white/5 space-y-3">
                <span className="font-sans font-semibold text-xs uppercase tracking-wider text-ink/60 dark:text-ink-lightDim block">
                  01. The Problem
                </span>
                <p className="text-sm sm:text-base text-ink/80 dark:text-[#E2DEC9] leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/5 dark:bg-white/5 space-y-3">
                <span className="font-sans font-semibold text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] block">
                  02. Engineering Solution
                </span>
                <p className="text-sm sm:text-base text-ink/80 dark:text-[#E2DEC9] leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Live Interactive Signal Architecture Flow for RFID (Section 6, Idea 8) */}
            {project.slug === "rfid-absence-system" && (
              <RfidSignalArchitectureFlow />
            )}

            {/* Key Features */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-2xl text-ink dark:text-white font-normal">
                Key Technical Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1E1E1B]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2D4A34] dark:text-[#A3E635] shrink-0 mt-0.5" />
                    <span className="text-sm text-ink/80 dark:text-[#E2DEC9] font-sans">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="space-y-3 pt-4">
              <h3 className="font-serif text-xl text-ink dark:text-white font-normal">
                Verified Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded bg-black/5 dark:bg-white/10 font-sans font-medium text-ink dark:text-ink-light"
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
