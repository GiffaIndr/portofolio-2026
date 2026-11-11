"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/content/projects";
import { CaseStudyModal } from "@/components/work/CaseStudyModal";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

interface SelectedWorkProps {
  lang: "EN" | "ID";
}

export function SelectedWork({ lang }: SelectedWorkProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative w-full py-28 md:py-36 bg-[#ECE4D4] dark:bg-[#161511] text-ink transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-ink/15 gap-6">
          <div>
            <span className="font-hud text-xs text-terracotta tracking-hud block mb-3">
              {lang === "EN" ? "02 // SELECTED CODE & SYSTEMS" : "02 // PROYEK & KARYA TERPILIH"}
            </span>
            <h2 className="font-display-condensed text-5xl sm:text-7xl md:text-8xl leading-none">
              SELECTED <br />
              <span className="font-editorial-italic lowercase text-terracotta">
                works.
              </span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm sm:text-base text-ink/75 leading-relaxed">
            {lang === "EN"
              ? "A curated index of engineered platforms across IoT hardware, spatial WebGIS, accessibility maps, and assistive tools."
              : "Koleksi proyek rekayasa perangkat lunak meliputi hardware IoT, pemetaan aksesibilitas, WebGIS, dan teknologi asistif."}
          </div>
        </div>

        {/* Project Cards Exhibition */}
        <div className="pt-16 space-y-20 md:space-y-28">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-cream dark:bg-[#1E1C16] border border-ink/15 shadow-paper transition-all duration-500 hover:shadow-float"
            >
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                {/* Number & Meta Header */}
                <div className="flex items-center justify-between font-hud text-xs">
                  <span className="font-mono text-terracotta font-extrabold text-base">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.status === "live" && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-meadow/15 text-meadow font-semibold border border-meadow/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-meadow animate-pulse" />
                        LIVE DEMO
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-ink/5 dark:bg-cream/10 border border-ink/10 font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display-condensed text-3xl sm:text-4xl md:text-5xl text-ink dark:text-cream leading-[0.95] group-hover:text-terracotta transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg font-editorial-italic text-ink/80 dark:text-cream/80">
                    "{project.tagline}"
                  </p>
                </div>

                {/* Brief Summary */}
                <p className="text-sm sm:text-base text-ink/75 dark:text-cream/75 leading-relaxed line-clamp-3">
                  {project.problem}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="font-hud text-[11px] px-2.5 py-1 rounded-md bg-ink/5 dark:bg-cream/5 border border-ink/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="font-hud text-[11px] px-2 py-1 opacity-60">
                      +{project.stack.length - 5} more
                    </span>
                  )}
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-cream hover:bg-terracotta transition-colors font-hud text-xs font-semibold"
                    data-cursor="VIEW"
                  >
                    <span>{lang === "EN" ? "CASE STUDY" : "STUDI KASUS"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/30 dark:border-cream/30 hover:border-terracotta hover:text-terracotta transition-colors font-hud text-xs"
                      data-cursor="LIVE"
                    >
                      <span>VISIT LIVE</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}

                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-ink/20 dark:border-cream/20 hover:border-ink dark:hover:border-cream transition-colors text-ink dark:text-cream"
                    aria-label={`GitHub repo for ${project.title}`}
                    data-cursor="REPO"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup Plate with Hover Depth */}
              <div
                className="lg:col-span-7 order-1 lg:order-2 cursor-pointer"
                onClick={() => setActiveProject(project)}
                data-cursor="VIEW"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-ink/20 shadow-card bg-ink/5 group-hover:scale-[1.015] transition-transform duration-500">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Subtle editorial photo vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating click prompt pill */}
                  <div className="absolute bottom-4 right-4 bg-cream/90 dark:bg-ink/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-ink/20 font-hud text-[10px] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-3 h-3 text-terracotta" />
                    <span>CLICK TO OPEN CASE STUDY</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        lang={lang}
      />
    </section>
  );
}
