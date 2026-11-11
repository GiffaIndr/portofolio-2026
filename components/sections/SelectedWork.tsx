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

// UIMaven-inspired chromatic signatures for each project
const PROJECT_THEMES: Record<
  string,
  {
    primary: string;
    tapeBg: string;
    categoryLabel: string;
    accentBadge: string;
    shadowColor: string;
  }
> = {
  "rfid-absence-system": {
    primary: "#2563EB", // Electric Cobalt
    tapeBg: "bg-[#2563EB]",
    categoryLabel: "IOT & RFID SECURITY GATE",
    accentBadge: "text-[#2563EB] dark:text-[#60A5FA]",
    shadowColor: "#2563EB",
  },
  "akseskota": {
    primary: "#059669", // Transit Emerald
    tapeBg: "bg-[#10B981]",
    categoryLabel: "WEBGIS & ACCESSIBILITY DIRECTORY",
    accentBadge: "text-[#059669] dark:text-[#34D399]",
    shadowColor: "#10B981",
  },
  "railuma": {
    primary: "#EA580C", // Locomotive Terracotta
    tapeBg: "bg-[#F97316]",
    categoryLabel: "AI COMPUTER VISION & BRAILLE OCR",
    accentBadge: "text-[#EA580C] dark:text-[#FB923C]",
    shadowColor: "#EA580C",
  },
  "sadar-edu": {
    primary: "#0891B2", // Digital Cyan
    tapeBg: "bg-[#06B6D4]",
    categoryLabel: "3D SPATIAL GEO-ANALYTICS",
    accentBadge: "text-[#0891B2] dark:text-[#38BDF8]",
    shadowColor: "#0891B2",
  },
  "one-percent-mobile": {
    primary: "#7C3AED", // Royal Orchid Violet
    tapeBg: "bg-[#A855F7]",
    categoryLabel: "NATIVE ANDROID HABIT SYSTEM",
    accentBadge: "text-[#7C3AED] dark:text-[#C084FC]",
    shadowColor: "#7C3AED",
  },
};

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

  // Deep internal image scroll parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const theme = PROJECT_THEMES[project.slug] || {
    primary: "#141412",
    tapeBg: "bg-[#2563EB]",
    categoryLabel: project.category,
    accentBadge: "text-[#2563EB]",
    shadowColor: "#2563EB",
  };

  return (
    <div
      ref={cardRef}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-8 sm:p-10 md:p-12 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm transition-all duration-300"
    >
      {/* Signature Colorful Washi Tape */}
      <div
        className={`absolute -top-3 left-8 sm:left-14 w-24 sm:w-28 h-5 sm:h-6 ${theme.tapeBg} z-20 pointer-events-none rounded-xs opacity-90 shadow-xs rotate-[-1deg]`}
      />

      {/* Left Column: Editorial Information */}
      <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
        <div className="flex items-center justify-between text-xs font-sans">
          <span className={`font-semibold tracking-wider ${theme.accentBadge}`}>
            0{index + 1}. {theme.categoryLabel}
          </span>
          <span className="text-ink/60 dark:text-ink-lightDim">{project.year}</span>
        </div>

        <div>
          <h3 className="font-serif text-3xl sm:text-4xl text-ink dark:text-white font-normal leading-snug group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-base font-serif italic text-ink/75 dark:text-ink-lightMuted">
            "{project.tagline}"
          </p>
        </div>

        <p className="text-sm sm:text-base text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
          {project.problem}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded bg-black/5 dark:bg-white/5 font-sans font-medium text-ink/80 dark:text-ink-light hover:border-black dark:hover:border-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <button
            onClick={() => onOpenModal(project)}
            style={{ backgroundColor: theme.primary }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-sans font-semibold uppercase tracking-wider hover:opacity-90 transition-all shadow-[2px_2px_0px_#141412] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            <span>{lang === "EN" ? "View Case Study" : "Buka Studi Kasus"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-sans font-semibold uppercase tracking-wider text-ink/80 dark:text-ink-light hover:text-black dark:hover:text-white transition-colors"
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

      {/* Right Column: Visual Frame with Deep Scroll Parallax */}
      <div
        className="lg:col-span-7 order-1 lg:order-2 cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shadow-sm">
          <motion.div
            style={{ y: imgY, scale: 1.12 }}
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
            <span className="text-xs font-sans font-semibold tracking-wider text-[#2563EB] dark:text-[#60A5FA] uppercase block mb-2">
              02. Selected Works
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
              Selected <span className="italic text-[#2563EB] dark:text-[#60A5FA]">Projects.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-ink/70 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
            {lang === "EN"
              ? "Verified production software systems spanning IoT RFID card verification, municipal WebGIS, and AI vision."
              : "Koleksi sistem perangkat lunak terverifikasi: integrasi IoT RFID, direktori WebGIS kota, dan computer vision."}
          </p>
        </div>

        {/* Category Filter Tabs */}
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
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] dark:bg-[#60A5FA]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Project List with Smooth Animations */}
        <motion.div layout className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
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
