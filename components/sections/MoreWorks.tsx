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
      slug: "spring-boot-crud",
      title: "SpringBootCRUD RestAPI",
      year: "2023",
      category: "Fullstack",
      tagline: "Java Spring Boot REST API with Postman test suites and MySQL persistence.",
      stack: ["Java", "Spring Boot", "MySQL", "Postman"],
      repo: "https://github.com/GiffaIndr/SpringBootCRUD-Postman-RestAPI",
    },
    {
      slug: "storage-app",
      title: "StorageApp",
      year: "2023",
      category: "Web",
      tagline: "TypeScript local and cloud file repository manager.",
      stack: ["TypeScript", "React", "Node.js"],
      repo: "https://github.com/GiffaIndr/StorageApp",
    },
    {
      slug: "ppdb-wikrama",
      title: "PPDB Online System",
      year: "2022",
      category: "Web",
      tagline: "High school admissions and registrant verification portal.",
      stack: ["PHP", "Laravel", "MySQL"],
      repo: "https://github.com/GiffaIndr/PPDB",
    },
  ];

  return (
    <section className="relative w-full py-28 bg-card text-ink dark:text-cream transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-ink/10 dark:border-cream/10 gap-4">
          <div>
            <span className="font-script-note text-2xl text-ochre block -rotate-1">
              {lang === "EN" ? "Code Archive" : "Arsip Kode"}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
              MORE <span className="text-emerald dark:text-[#52B788]">WORKS.</span>
            </h2>
          </div>
          <a
            href="https://github.com/GiffaIndr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/70 dark:text-cream/70 hover:text-ochre transition-colors"
          >
            <span>View All 69 Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {secondaryProjects.map((item, idx) => (
            <a
              key={idx}
              href={"links" in item ? item.links.repo : item.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 rounded-3xl bg-cream dark:bg-[#121210] border border-ink/10 dark:border-cream/10 shadow-luxe hover:border-ochre hover:shadow-float transition-all duration-300 flex flex-col justify-between"
              data-cursor="REPO"
            >
              <div>
                <div className="flex justify-between items-center text-xs text-ink/50 dark:text-cream/50 mb-4">
                  <span className="flex items-center gap-1.5 text-ochre font-bold">
                    <Folder className="w-3.5 h-3.5" />
                    {item.category}
                  </span>
                  <span>{item.year}</span>
                </div>

                <h3 className="font-display text-2xl text-ink dark:text-cream group-hover:text-ochre transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink/70 dark:text-cream/70 leading-relaxed line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-ink/10 dark:border-cream/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.slice(0, 3).map((st) => (
                    <span
                      key={st}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-ink/5 dark:bg-cream/10 text-ink/80 dark:text-cream/80"
                    >
                      {st}
                    </span>
                  ))}
                </div>
                <Github className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-ochre transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
