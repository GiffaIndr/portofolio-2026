"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, Project } from "@/content/projects";
import { CaseStudyModal } from "@/components/work/CaseStudyModal";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

interface SelectedWorkProps {
  lang: "EN" | "ID";
}

function ProjectCard({
  project,
  index,
  lang,
  onOpenModal,
}: {
  project: Project;
  index: number;
  lang: "EN" | "ID";
  onOpenModal: (p: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Inner image scroll parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const tapeColors = ["tape-green", "tape-yellow", "tape-orange", "tape-green"];
  const tapeClass = tapeColors[index % tapeColors.length];

  return (
    <div
      ref={cardRef}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-10 md:p-12 rounded-3xl bg-white dark:bg-[#22221E] border border-black/15 dark:border-[#3E3D36] shadow-polaroid dark:shadow-[4px_4px_0px_rgba(255,255,255,0.1)] transition-all duration-300"
    >
      {/* Decorative Washi Tape on Top Edge (Daniel Gallego reference) */}
      <div className={`absolute -top-3.5 left-10 sm:left-14 w-28 h-6 ${tapeClass} z-20 pointer-events-none`} />

      {/* Left Column: Editorial Information */}
      <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
        <div className="flex items-center justify-between">
          <span className="font-cutout text-xs font-bold text-terracotta dark:text-[#FB923C] tracking-wider uppercase">
            Project 0{index + 1} · {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.status === "live" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16]/20 text-[#4D7C0F] dark:text-[#A3E635] text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] dark:bg-[#A3E635] animate-pulse" />
                Live Demo
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-[11px] font-medium text-ink dark:text-ink-light">
              {project.year}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-cutout text-2xl sm:text-3xl lg:text-4xl text-ink dark:text-white leading-snug group-hover:text-terracotta dark:group-hover:text-[#FDE047] transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-ink/85 dark:text-[#FDE047] font-sans italic">
            "{project.tagline}"
          </p>
        </div>

        <p className="text-sm sm:text-base text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
          {project.problem}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-surface/70 dark:bg-[#2C2C27] border border-black/10 dark:border-white/15 font-medium text-ink dark:text-[#FAF7F2]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink hover:bg-terracotta dark:hover:bg-butter transition-colors text-xs font-bold uppercase tracking-wider shadow-paper"
            data-cursor="CASE STUDY"
          >
            <span>{lang === "EN" ? "View Case Study" : "Buka Studi Kasus"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/20 dark:border-white/25 text-ink dark:text-ink-light hover:border-terracotta hover:text-terracotta transition-colors text-xs font-bold"
            >
              <span>Visit Live</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          )}

          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repo for ${project.title}`}
            className="p-3 rounded-full border border-black/20 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Column: Visual Frame with Inner Scroll Parallax */}
      <div
        className="lg:col-span-7 order-1 lg:order-2 cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/15 dark:border-white/20 shadow-polaroid dark:shadow-polaroidDark bg-black/5 dark:bg-white/5">
          <motion.div
            style={{ y: imgY, scale: 1.12 }}
            className="relative w-full h-full"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </motion.div>

          <div className="absolute bottom-4 right-4 bg-white dark:bg-[#1E1E1B] px-4 py-2 rounded-full border border-black/15 dark:border-white/25 text-xs font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ink dark:text-ink-light shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Open Case Study</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectedWork({ lang }: SelectedWorkProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-black/15 dark:border-white/15 gap-6">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-[#1F75B8]/20 dark:bg-[#1F75B8]/30 text-[#1F75B8] dark:text-[#38BDF8] font-bold text-xs uppercase mb-2">
              {lang === "EN" ? "CURATED WORK" : "KARYA PILIHAN"}
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              SELECTED <span className="text-[#1F75B8] dark:text-[#38BDF8]">PROJECTS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-ink/75 dark:text-[#E2DEC9] leading-relaxed">
            {lang === "EN"
              ? "Verified software systems across IoT card architecture, municipal accessibility mapping, and WebGIS."
              : "Koleksi proyek rekayasa perangkat lunak meliputi sistem IoT, direktori aksesibilitas kota, dan analisis WebGIS."}
          </p>
        </div>

        {/* Project List */}
        <div className="pt-14 space-y-16 sm:space-y-20">
          {featured.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              lang={lang}
              onOpenModal={setActiveProject}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        lang={lang}
      />
    </section>
  );
}
