"use client";

import React from "react";
import { Github, ArrowUpRight, Folder } from "lucide-react";
import { projects } from "@/content/projects";

interface MoreWorksProps {
  lang: "EN" | "ID";
}

export function MoreWorks({ lang }: MoreWorksProps) {
  const secondaryProjects = [
    ...projects.filter((p) => !p.featured),
    {
      slug: "hexaon-crm-portal",
      title: "Ticketing & CRM Web Portal",
      year: "2023",
      category: "Fullstack",
      tagline: "Customer record management and role-based ticket routing portal built during developer internship.",
      stack: ["Laravel", "Blade", "MySQL", "JavaScript"],
      repo: "https://github.com/GiffaIndr",
    },
    {
      slug: "ppdb-wikrama",
      title: "PPDB Online Admission System",
      year: "2022",
      category: "Web",
      tagline: "School admissions portal with document upload verification and administrative review dashboard.",
      stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      repo: "https://github.com/GiffaIndr/PPDB",
    },
    {
      slug: "spring-boot-crud",
      title: "SpringBoot REST API Service",
      year: "2023",
      category: "Fullstack",
      tagline: "Java Spring Boot REST API CRUD endpoints with MySQL persistence and automated Postman test collections.",
      stack: ["Java", "Spring Boot", "MySQL", "Postman"],
      repo: "https://github.com/GiffaIndr/SpringBootCRUD-Postman-RestAPI",
    },
    {
      slug: "storage-app",
      title: "StorageApp File Repository",
      year: "2023",
      category: "Web",
      tagline: "TypeScript local and cloud file repository manager with directory indexing.",
      stack: ["TypeScript", "React", "Node.js"],
      repo: "https://github.com/GiffaIndr/StorageApp",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-surface dark:bg-[#1A1A17] text-ink dark:text-ink-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/15 dark:border-white/15 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-[#84CC16]/20 dark:bg-[#84CC16]/30 text-[#4D7C0F] dark:text-[#A3E635] font-bold text-xs uppercase mb-2">
              {lang === "EN" ? "ARCHIVE" : "ARSIP REPOSITORI"}
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              MORE <span className="text-[#65A30D] dark:text-[#A3E635]">REPOSITORIES.</span>
            </h2>
          </div>
          <a
            href="https://github.com/GiffaIndr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/75 dark:text-ink-light hover:text-[#65A30D] dark:hover:text-[#A3E635] transition-colors"
          >
            <span>View All 69 Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {secondaryProjects.map((item, idx) => (
            <a
              key={idx}
              href={"links" in item ? item.links.repo : item.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] hover:border-[#65A30D] dark:hover:border-[#A3E635] transition-all duration-300 flex flex-col justify-between"
              data-cursor="REPO"
            >
              <div>
                <div className="flex justify-between items-center text-xs text-ink/70 dark:text-ink-lightDim mb-4">
                  <span className="flex items-center gap-1.5 text-[#65A30D] dark:text-[#A3E635] font-bold">
                    <Folder className="w-3.5 h-3.5" />
                    {item.category}
                  </span>
                  <span>{item.year}</span>
                </div>

                <h3 className="font-cutout text-xl text-ink dark:text-white group-hover:text-[#65A30D] dark:group-hover:text-[#A3E635] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.slice(0, 3).map((st) => (
                    <span
                      key={st}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface/70 dark:bg-[#2C2C27] border border-black/10 dark:border-white/15 text-ink dark:text-[#FAF7F2] font-medium"
                    >
                      {st}
                    </span>
                  ))}
                </div>
                <Github className="w-4 h-4 text-ink/40 dark:text-white/40 group-hover:text-[#65A30D] dark:group-hover:text-[#A3E635] transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
