"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/content/projects";
import { CaseStudyModal } from "@/components/work/CaseStudyModal";
import { ArrowUpRight, ArrowRight, Github } from "lucide-react";

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

  // Calm internal image scroll parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={cardRef}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-8 sm:p-10 md:p-12 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300"
    >
      {/* Left Column: Editorial Information */}
      <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
        <div className="flex items-center justify-between text-xs font-mono text-ink/60 dark:text-ink-lightDim">
          <span>0{index + 1} // {project.category.toUpperCase()}</span>
          <span>{project.year}</span>
        </div>

        <div>
          <h3 className="font-serif text-3xl sm:text-4xl text-ink dark:text-white font-normal leading-snug group-hover:text-[#2D4A34] dark:group-hover:text-[#A3E635] transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-[#2D4A34] dark:text-[#A3E635] font-serif italic">
            "{project.tagline}"
          </p>
        </div>

        <p className="text-sm sm:text-base text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
          {project.problem}
        </p>

        {/* Tech Stack (Quiet Monospace Tags) */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded bg-black/5 dark:bg-white/5 font-mono text-ink/80 dark:text-ink-light"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] hover:bg-[#2D4A34] dark:hover:bg-[#A3E635] dark:hover:text-[#141412] transition-colors text-xs font-medium uppercase tracking-wider"
          >
            <span>{lang === "EN" ? "View Case Study" : "Buka Studi Kasus"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium uppercase tracking-wider text-ink/80 dark:text-ink-light hover:text-black dark:hover:text-white transition-colors"
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
            className="p-3 rounded-full border border-black/15 dark:border-white/15 text-ink/70 dark:text-ink-light hover:text-black dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Column: Visual Frame with Subtle Parallax */}
      <div
        className="lg:col-span-7 order-1 lg:order-2 cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shadow-sm">
          <motion.div
            style={{ y: imgY, scale: 1.08 }}
            className="relative w-full h-full will-change-transform"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function SelectedWork({ lang }: SelectedWorkProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const featured = projects.filter((p) => p.featured);

  const filters = [
    { id: "ALL", labelEn: "All Works", labelId: "Semua Karya" },
    { id: "IoT", labelEn: "IoT & Hardware", labelId: "IoT & Perangkat Keras" },
    { id: "Web", labelEn: "Web & Spatial", labelId: "Web & Spasial" },
    { id: "Mobile", labelEn: "Mobile Systems", labelId: "Sistem Mobile" },
  ];

  const filteredProjects =
    selectedFilter === "ALL"
      ? featured
      : featured.filter((p) => p.category === selectedFilter);

  return (
    <section
      id="work"
      className="relative w-full py-20 sm:py-28 bg-paper dark:bg-paper-dark text-ink dark:text-ink-light transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/10 dark:border-white/10 gap-4">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider text-ink/60 dark:text-ink-lightDim uppercase block mb-2">
              [ 02 // SELECTED WORKS ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
              Selected <span className="italic text-[#2D4A34] dark:text-[#A3E635]">Projects.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-ink/70 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
            {lang === "EN"
              ? "Verified production software systems spanning IoT RFID card verification, municipal WebGIS, and AI vision."
              : "Koleksi sistem perangkat lunak terverifikasi: integrasi IoT RFID, direktori WebGIS kota, dan computer vision."}
          </p>
        </div>

        {/* Quiet Editorial Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-6 pt-6 pb-12 text-sm font-medium">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-ink dark:text-white font-semibold"
                    : "text-ink/50 dark:text-ink-lightDim hover:text-ink dark:hover:text-white"
                }`}
              >
                <span>{lang === "EN" ? filter.labelEn : filter.labelId}</span>
                {isActive && (
                  <motion.div
                    layoutId="editorialTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2D4A34] dark:bg-[#A3E635]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Project List */}
        <motion.div layout className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  lang={lang}
                  onOpenModal={setActiveProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        lang={lang}
      />
    </section>
  );
}
