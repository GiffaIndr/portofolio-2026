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

  // Smooth scroll parallax for the inner project image
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={cardRef}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-10 md:p-12 rounded-3xl bg-card border border-ink/10 dark:border-cream/10 shadow-luxe hover:border-ink/20 dark:hover:border-cream/20 transition-all duration-500"
    >
      {/* Left Column: Editorial Info */}
      <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
        <div className="flex items-center justify-between">
          <span className="font-display text-xs font-extrabold text-ochre tracking-wider uppercase">
            Project 0{index + 1}
          </span>
          <div className="flex items-center gap-2">
            {project.status === "live" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald/15 text-emerald dark:text-[#52B788] text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                Live Demo
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full bg-ink/5 dark:bg-cream/10 text-[11px] font-medium text-ink/70 dark:text-cream/70">
              {project.category}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink dark:text-cream leading-tight group-hover:text-ochre transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-base sm:text-lg text-ink/70 dark:text-cream/70 font-sans italic">
            "{project.tagline}"
          </p>
        </div>

        <p className="text-sm sm:text-base text-ink/75 dark:text-cream/75 leading-relaxed">
          {project.problem}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-ink/5 dark:bg-cream/5 border border-ink/10 dark:border-cream/10 font-medium text-ink/80 dark:text-cream/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink hover:bg-ochre dark:hover:bg-butter transition-colors text-xs font-bold uppercase tracking-wider"
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/20 dark:border-cream/20 hover:border-ochre hover:text-ochre transition-colors text-xs font-bold"
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
            className="p-3 rounded-full border border-ink/20 dark:border-cream/20 hover:border-ink dark:hover:border-cream text-ink dark:text-cream transition-colors"
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
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-ink/10 dark:border-cream/10 shadow-polaroid bg-ink/5">
          <motion.div
            style={{ y: imgY, scale: 1.12 }}
            className="relative w-full h-full"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <div className="absolute bottom-4 right-4 bg-cream/90 dark:bg-ink/90 backdrop-blur-md px-4 py-2 rounded-full border border-ink/15 dark:border-cream/15 text-xs font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles className="w-3.5 h-3.5 text-ochre" />
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
    <section id="work" className="relative w-full py-28 sm:py-36 bg-cream text-ink dark:text-cream transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-ink/10 dark:border-cream/10 gap-6">
          <div>
            <span className="font-script-note text-2xl text-ochre block -rotate-1">
              {lang === "EN" ? "Portfolio Showcase" : "Eksibisi Proyek"}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
              SELECTED <span className="text-emerald dark:text-[#52B788]">WORKS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-ink/70 dark:text-cream/70 leading-relaxed">
            {lang === "EN"
              ? "Engineered applications spanning IoT card verification, municipal accessibility mapping, and spatial WebGIS."
              : "Koleksi proyek rekayasa perangkat lunak meliputi sistem IoT, pemetaan aksesibilitas kota, dan analisis WebGIS."}
          </p>
        </div>

        {/* Project List with Continuous Scroll Parallax */}
        <div className="pt-16 space-y-16 sm:space-y-24">
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
