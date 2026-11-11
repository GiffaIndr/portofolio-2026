"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/content/projects";
import { CaseStudyModal } from "@/components/work/CaseStudyModal";
import { CardTilt3D } from "@/components/ui/CardTilt3D";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

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
  }
> = {
  "rfid-absence-system": {
    primary: "#2563EB", // Electric Cobalt
    tapeBg: "bg-[#2563EB]",
    categoryLabel: "IOT & RFID SECURITY GATE",
    accentBadge: "text-[#2563EB] dark:text-[#60A5FA]",
  },
  "akseskota": {
    primary: "#059669", // Transit Emerald
    tapeBg: "bg-[#10B981]",
    categoryLabel: "WEBGIS & ACCESSIBILITY DIRECTORY",
    accentBadge: "text-[#059669] dark:text-[#34D399]",
  },
  "railuma": {
    primary: "#EA580C", // Locomotive Terracotta
    tapeBg: "bg-[#F97316]",
    categoryLabel: "AI COMPUTER VISION & BRAILLE OCR",
    accentBadge: "text-[#EA580C] dark:text-[#FB923C]",
  },
  "sadar-edu": {
    primary: "#0891B2", // Digital Cyan
    tapeBg: "bg-[#06B6D4]",
    categoryLabel: "3D SPATIAL GEO-ANALYTICS",
    accentBadge: "text-[#0891B2] dark:text-[#38BDF8]",
  },
  "one-percent-mobile": {
    primary: "#7C3AED", // Royal Orchid Violet
    tapeBg: "bg-[#A855F7]",
    categoryLabel: "NATIVE ANDROID HABIT SYSTEM",
    accentBadge: "text-[#7C3AED] dark:text-[#C084FC]",
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

  // Möbius continuous internal image scroll parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const theme = PROJECT_THEMES[project.slug] || {
    primary: "#141412",
    tapeBg: "bg-[#84CC16]",
    categoryLabel: project.category,
    accentBadge: "text-[#84CC16]",
  };

  return (
    <CardTilt3D maxTilt={6} scaleHover={1.01}>
      <div
        ref={cardRef}
        data-cursor="CASE STUDY"
        data-cursor-color={theme.primary}
        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-9 md:p-12 rounded-3xl bg-white dark:bg-[#20201C] border border-black/15 dark:border-[#383730] shadow-polaroid dark:shadow-[4px_4px_0px_rgba(255,255,255,0.1)] transition-all duration-300"
      >
        {/* Dynamic Colorful Washi Tape (UIMaven inspired) */}
        <div
          className={`absolute -top-3.5 left-8 sm:left-14 w-24 sm:w-32 h-6 ${theme.tapeBg} z-20 pointer-events-none rounded-sm shadow-sm rotate-[-1.5deg] opacity-90`}
        />

        {/* Left Column: Editorial Information & Colorful Accents */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5 order-2 lg:order-1">
          <div className="flex items-center justify-between">
            <span
              className={`font-mono text-xs font-bold tracking-wider uppercase ${theme.accentBadge}`}
            >
              PROJECT 0{index + 1} // {theme.categoryLabel}
            </span>
            <div className="flex items-center gap-2">
              {project.status === "live" && (
                <span
                  style={{ backgroundColor: theme.primary }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              )}
              <span className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 text-[11px] font-mono font-medium text-ink dark:text-ink-light">
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

          {/* Tech Stack Chips (Solid Paper with Colorful Hover Feedback) */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-md bg-white dark:bg-[#1A1A17] border border-black/15 dark:border-[#3E3D36] font-medium text-ink dark:text-[#FAF7F2] shadow-[1px_1px_0px_#141412] dark:shadow-[1px_1px_0px_rgba(255,255,255,0.1)] hover:border-black dark:hover:border-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Controls */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenModal(project)}
              style={{ backgroundColor: theme.primary }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white hover:opacity-90 transition-all text-xs font-bold uppercase tracking-wider shadow-[2.5px_2.5px_0px_#141412] dark:shadow-[2.5px_2.5px_0px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:translate-y-0"
              data-cursor="READ CASE"
              data-cursor-color={theme.primary}
            >
              <span>{lang === "EN" ? "View Case Study" : "Buka Studi Kasus"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-black/20 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors text-xs font-bold bg-white dark:bg-[#1A1A17]"
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
              className="p-3 rounded-full border-2 border-black/20 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-[#1A1A17]"
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
              className="relative w-full h-full will-change-transform"
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
              <Sparkles className="w-3.5 h-3.5" style={{ color: theme.primary }} />
              <span>Open Case Study</span>
            </div>
          </div>
        </div>
      </div>
    </CardTilt3D>
  );
}

export function SelectedWork({ lang }: SelectedWorkProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const featured = projects.filter((p) => p.featured);

  const filters = [
    { id: "ALL", labelEn: "ALL WORKS", labelId: "SEMUA KARYA", color: "#141412" },
    { id: "IoT", labelEn: "IOT & HARDWARE", labelId: "IOT & HARDWARE", color: "#2563EB" },
    { id: "Web", labelEn: "WEB & SPATIAL", labelId: "WEB & SPASIAL", color: "#059669" },
    { id: "Mobile", labelEn: "MOBILE APPS", labelId: "APLIKASI MOBILE", color: "#7C3AED" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#2563EB] dark:shadow-[2px_2px_0px_#60A5FA]">
              <span>[ 02 // SELECTED WORKS ]</span>
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              FEATURED <span className="text-[#2563EB] dark:text-[#60A5FA]">ARCHIVES.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-ink/75 dark:text-[#E2DEC9] leading-relaxed">
            {lang === "EN"
              ? "Verified production software systems spanning IoT RFID gates, municipal WebGIS, and AI vision."
              : "Koleksi sistem perangkat lunak terverifikasi: integrasi IoT RFID, direktori WebGIS kota, dan computer vision."}
          </p>
        </div>

        {/* Möbius-Style Interactive Filter Tabs with Sliding Spring Pill */}
        <div className="flex flex-wrap items-center gap-2 pt-4 pb-10">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-colors uppercase ${
                  isActive
                    ? "text-white"
                    : "text-ink/70 dark:text-ink-lightMuted hover:text-ink dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="selectedWorkTabPill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    style={{ backgroundColor: filter.color }}
                    className="absolute inset-0 rounded-full shadow-[2px_2px_0px_#141412] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.2)]"
                  />
                )}
                <span className="relative z-10">
                  {lang === "EN" ? filter.labelEn : filter.labelId}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project List with AnimatePresence */}
        <motion.div layout className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
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
