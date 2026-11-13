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

const PROJECT_THEMES: Record<
  string,
  {
    primary: string;
    softBg: string;
    categoryLabelEn: string;
    categoryLabelId: string;
    accentBadge: string;
  }
> = {
  "rfid-absence-system": {
    primary: "#2563EB",
    softBg: "bg-[#EFF6FF]/70 dark:bg-[#172033]/50",
    categoryLabelEn: "IoT & RFID Security Gate",
    categoryLabelId: "Gerbang IoT & Presensi RFID",
    accentBadge: "text-[#2563EB] dark:text-[#60A5FA]",
  },
  "akseskota": {
    primary: "#059669",
    softBg: "bg-[#ECFDF5]/70 dark:bg-[#12261F]/50",
    categoryLabelEn: "WebGIS & Accessibility Directory",
    categoryLabelId: "Direktori WebGIS & Aksesibilitas",
    accentBadge: "text-[#059669] dark:text-[#34D399]",
  },
  "railuma": {
    primary: "#EA580C",
    softBg: "bg-[#FFF7ED]/70 dark:bg-[#291811]/50",
    categoryLabelEn: "AI Computer Vision & Braille OCR",
    categoryLabelId: "AI Visi Komputer & OCR Braille",
    accentBadge: "text-[#EA580C] dark:text-[#FB923C]",
  },
  "sadar-edu": {
    primary: "#0891B2",
    softBg: "bg-[#ECFEFF]/70 dark:bg-[#11242B]/50",
    categoryLabelEn: "3D Spatial Geo-Analytics",
    categoryLabelId: "Geo-Analitik Spasial 3D",
    accentBadge: "text-[#0891B2] dark:text-[#38BDF8]",
  },
  "one-percent-mobile": {
    primary: "#7C3AED",
    softBg: "bg-[#F5F3FF]/70 dark:bg-[#211733]/50",
    categoryLabelEn: "Native Android Habit System",
    categoryLabelId: "Sistem Habit Android Native",
    accentBadge: "text-[#7C3AED] dark:text-[#C084FC]",
  },
};

function ProjectShowcaseRow({
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
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const theme = PROJECT_THEMES[project.slug] || {
    primary: "#141412",
    softBg: "bg-white dark:bg-[#1E1E1B]",
    categoryLabelEn: project.category,
    categoryLabelId: project.category,
    accentBadge: "text-[#2563EB]",
  };

  const categoryLabel =
    lang === "ID" ? theme.categoryLabelId : theme.categoryLabelEn;
  const tagline =
    lang === "ID" && project.taglineId ? project.taglineId : project.tagline;
  const problem =
    lang === "ID" && project.problemId ? project.problemId : project.problem;

  const isReversed = index % 2 === 1;

  return (
    <div
      ref={rowRef}
      className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-10 md:p-12 rounded-[2rem] ${theme.softBg} border border-black/8 dark:border-white/10 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden`}
    >
      {/* Editorial Details Column */}
      <motion.div
        style={{ y: textY }}
        className={`relative z-10 lg:col-span-5 space-y-5 will-change-transform ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="flex items-center justify-between text-xs font-sans">
          <span className={`font-semibold tracking-wider uppercase ${theme.accentBadge}`}>
            {categoryLabel}
          </span>
          <span className="text-ink/55 dark:text-ink-lightDim">{project.year}</span>
        </div>

        <div>
          <h3 className="font-serif text-3xl sm:text-4xl text-ink dark:text-white font-normal leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-base font-serif italic text-ink/75 dark:text-ink-lightMuted">
            "{tagline}"
          </p>
        </div>

        <p className="text-sm sm:text-base text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans font-normal">
          {problem}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 font-sans font-medium text-ink/80 dark:text-ink-light border border-black/5 dark:border-white/5"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-sans font-semibold uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_10px_24px_-6px_rgba(0,0,0,0.28)] hover:-translate-y-0.5"
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
              <span>{lang === "EN" ? "Visit Live" : "Kunjungi Situs"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          )}

          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repo for ${project.title}`}
            className="p-3 rounded-full border border-black/15 dark:border-white/15 text-ink/70 dark:text-ink-light hover:text-black dark:hover:text-white transition-colors bg-white/60 dark:bg-white/5"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Parallax Visual Stage */}
      <div
        className={`lg:col-span-7 cursor-pointer ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
        onClick={() => onOpenModal(project)}
      >
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.16)]">
          <motion.div
            style={{ y: imgY, scale: 1.14 }}
            className="relative w-full h-full will-change-transform"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
      className="relative w-full py-24 sm:py-32 bg-[#F3EFE6] dark:bg-[#141412] text-ink dark:text-ink-light transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header (No kicker/eyebrow) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-black/10 dark:border-white/10 gap-4">
          <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
            {lang === "EN" ? "Selected " : "Karya "}
            <span className="italic text-[#2563EB] dark:text-[#60A5FA]">
              {lang === "EN" ? "Projects." : "Unggulan."}
            </span>
          </h2>
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
                    layoutId="activeFilterUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] dark:bg-[#60A5FA]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Alternating Showcase Rows */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ProjectShowcaseRow
                  project={project}
                  index={idx}
                  lang={lang}
                  onOpenModal={setActiveProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
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
