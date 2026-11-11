"use client";

import React from "react";
import { Github, ArrowUpRight, Folder } from "lucide-react";
import { projects } from "@/content/projects";
import { CardTilt3D } from "@/components/ui/CardTilt3D";

interface MoreWorksProps {
  lang: "EN" | "ID";
}

const CATEGORY_COLORS: Record<string, { text: string; bg: string }> = {
  Fullstack: { text: "text-[#2563EB] dark:text-[#60A5FA]", bg: "bg-[#2563EB]" },
  Web: { text: "text-[#059669] dark:text-[#34D399]", bg: "bg-[#059669]" },
  Mobile: { text: "text-[#7C3AED] dark:text-[#C084FC]", bg: "bg-[#7C3AED]" },
  IoT: { text: "text-[#EA580C] dark:text-[#FB923C]", bg: "bg-[#EA580C]" },
};

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
    <section className="relative w-full py-20 sm:py-28 bg-surface dark:bg-[#1A1A17] text-ink dark:text-ink-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] font-mono text-[11px] font-bold uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#2563EB] dark:shadow-[2px_2px_0px_#60A5FA]">
              <span>[ 05 // REPOSITORIES ]</span>
            </div>
            <h2 className="font-cutout text-3xl sm:text-5xl text-ink dark:text-ink-light tracking-tight">
              MORE <span className="text-[#2563EB] dark:text-[#60A5FA]">REPOSITORIES.</span>
            </h2>
          </div>
          <a
            href="https://github.com/GiffaIndr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-ink/75 dark:text-ink-light hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
          >
            <span>View All 69 Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Grid with Möbius 3D Card Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-4 sm:pt-6">
          {secondaryProjects.map((item, idx) => {
            const cat = CATEGORY_COLORS[item.category] || {
              text: "text-[#2563EB]",
              bg: "bg-[#2563EB]",
            };
            return (
              <CardTilt3D key={idx} maxTilt={6} scaleHover={1.015}>
                <a
                  href={"links" in item ? item.links.repo : item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col justify-between h-full"
                  data-cursor="REPO"
                  data-cursor-color="#2563EB"
                >
                  <div>
                    <div className="flex justify-between items-center text-xs text-ink/70 dark:text-ink-lightDim mb-4">
                      <span className={`flex items-center gap-1.5 font-bold font-mono ${cat.text}`}>
                        <Folder className="w-3.5 h-3.5" />
                        {item.category}
                      </span>
                      <span className="font-mono">{item.year}</span>
                    </div>

                    <h3 className="font-cutout text-lg sm:text-xl text-ink dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink/80 dark:text-[#E2DEC9] leading-relaxed line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.slice(0, 3).map((st) => (
                        <span
                          key={st}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-surface/70 dark:bg-[#2C2C27] border border-black/10 dark:border-white/15 text-ink dark:text-[#FAF7F2] font-medium"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                    <Github className="w-4 h-4 text-ink/40 dark:text-white/40 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors" />
                  </div>
                </a>
              </CardTilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
