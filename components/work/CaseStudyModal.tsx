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
        {/* Solid dark backdrop (NO glassmorphism for instant performance) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-white dark:bg-[#1C1C19] text-ink dark:text-ink-light rounded-3xl shadow-float border border-black/20 dark:border-white/20 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-white dark:bg-[#1C1C19] border-b border-black/10 dark:border-white/15">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3.5 py-1 rounded-full bg-[#84CC16]/25 text-[#4D7C0F] dark:text-[#A3E635] font-bold uppercase tracking-wider text-[11px]">
                {project.category}
              </span>
              <span className="text-ink/70 dark:text-ink-lightDim font-semibold">
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
              <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-white leading-snug">
                {project.title}
              </h2>
              <p className="text-xl sm:text-2xl text-terracotta dark:text-[#FDE047] font-sans italic">
                "{project.tagline}"
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-xs font-bold uppercase tracking-wider hover:bg-grass dark:hover:bg-butter transition-colors shadow-paper"
                  >
                    <span>{lang === "EN" ? "Open Live Demo" : "Buka Demo Live"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-black/25 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Main Cover Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-black/15 dark:border-white/20 shadow-sm bg-black/5 dark:bg-white/5">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-6 sm:p-8 rounded-2xl bg-surface/60 dark:bg-[#232320] border border-black/10 dark:border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta dark:text-[#FB923C] block">
                  The Engineering Challenge
                </span>
                <h3 className="font-cutout text-xl text-ink dark:text-white">
                  Problem Context
                </h3>
                <p className="text-sm sm:text-base text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface/60 dark:bg-[#232320] border border-black/10 dark:border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4D7C0F] dark:text-[#A3E635] block">
                  The Technical Architecture
                </span>
                <h3 className="font-cutout text-xl text-ink dark:text-white">
                  Engineered Solution
                </h3>
                <p className="text-sm sm:text-base text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-4 pt-4">
              <h3 className="font-cutout text-xl sm:text-2xl text-ink dark:text-white">
                Key Technical Deliverables &amp; Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface/50 dark:bg-[#232320] border border-black/5 dark:border-white/10 text-xs sm:text-sm text-ink/85 dark:text-[#E2DEC9]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#84CC16] dark:text-[#A3E635] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="space-y-3 pt-4 border-t border-black/10 dark:border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink/70 dark:text-ink-lightDim">
                Complete Technologies &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-surface/80 dark:bg-[#2C2C27] border border-black/10 dark:border-white/15 text-xs font-medium text-ink dark:text-[#FAF7F2]"
                  >
                    {tech}
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
