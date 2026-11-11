"use client";

import React from "react";
import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/content/projects";

interface MoreWorksProps {
  lang: "EN" | "ID";
}

export function MoreWorks({ lang }: MoreWorksProps) {
  const moreProjects = [
    ...projects.filter((p) => !p.featured),
    {
      slug: "spring-boot-crud",
      title: "SpringBootCRUD RestAPI",
      year: "2023",
      category: "Fullstack",
      tagline: "Java Spring Boot REST API with Postman test suites and MySQL persistence.",
      stack: ["Java", "Spring Boot", "MySQL", "Postman", "Maven"],
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
      stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      repo: "https://github.com/GiffaIndr/PPDB",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-cream text-ink transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-10 border-b border-ink/15 gap-4">
          <div>
            <span className="font-hud text-xs text-terracotta tracking-hud block mb-2">
              {lang === "EN" ? "05 // REPOSITORY ARCHIVES" : "05 // ARSIP REPOSITORI"}
            </span>
            <h2 className="font-display-condensed text-4xl sm:text-6xl leading-none">
              MORE <span className="font-editorial-italic lowercase text-terracotta">works.</span>
            </h2>
          </div>
          <a
            href="https://github.com/GiffaIndr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-hud text-xs text-ink/70 hover:text-terracotta transition-colors"
          >
            <span>VIEW ALL 69 REPOSITORIES ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {moreProjects.map((item, idx) => (
            <a
              key={idx}
              href={"links" in item ? item.links.repo : item.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#EFE7D8] dark:bg-[#1C1A14] border border-ink/15 shadow-card hover:border-terracotta hover:shadow-float transition-all duration-300 flex flex-col justify-between"
              data-cursor="REPO"
            >
              <div>
                <div className="flex justify-between items-start font-hud text-xs opacity-65 mb-4">
                  <span className="flex items-center gap-1.5 text-terracotta font-semibold">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {item.category}
                  </span>
                  <span>{item.year}</span>
                </div>

                <h3 className="font-display-condensed text-2xl text-ink dark:text-cream group-hover:text-terracotta transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-ink/75 dark:text-cream/75 leading-relaxed line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-ink/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.slice(0, 3).map((st) => (
                    <span
                      key={st}
                      className="font-hud text-[10px] px-2 py-0.5 rounded bg-ink/5 dark:bg-cream/10"
                    >
                      {st}
                    </span>
                  ))}
                </div>
                <Github className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-terracotta transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
