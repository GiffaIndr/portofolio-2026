"use client";

import React from "react";
import { Github, ArrowUpRight, Folder } from "lucide-react";
import { projects } from "@/content/projects";

interface MoreWorksProps {
  lang: "EN" | "ID";
}

const CATEGORY_STYLES: Record<string, { text: string; dot: string }> = {
  Fullstack: { text: "text-[#2563EB] dark:text-[#60A5FA]", dot: "bg-[#2563EB]" },
  Web: { text: "text-[#059669] dark:text-[#34D399]", dot: "bg-[#059669]" },
  Mobile: { text: "text-[#7C3AED] dark:text-[#C084FC]", dot: "bg-[#7C3AED]" },
  IoT: { text: "text-[#EA580C] dark:text-[#FB923C]", dot: "bg-[#EA580C]" },
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
    <section className="relative w-full py-20 sm:py-28 bg-surface dark:bg-[#181816] text-ink dark:text-ink-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/10 dark:border-white/10 gap-3">
          <div>
            <span className="text-xs font-mono font-medium tracking-wider text-ink/60 dark:text-ink-lightDim uppercase block mb-2">
              [ 05 // REPOSITORIES ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
              Selected <span className="italic text-[#2563EB] dark:text-[#60A5FA]">Archives.</span>
            </h2>
          </div>
          <a
            href="https://github.com/GiffaIndr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-ink/75 dark:text-ink-light hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
          >
            <span>View All 69 Repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {secondaryProjects.map((item, idx) => {
            const style = CATEGORY_STYLES[item.category] || {
              text: "text-[#2563EB]",
              dot: "bg-[#2563EB]",
            };
            return (
              <a
                key={idx}
                href={"links" in item ? item.links.repo : item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-7 rounded-2xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-ink/60 dark:text-ink-lightDim mb-4 font-mono">
                    <span className={`flex items-center gap-1.5 font-bold ${style.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {item.category}
                    </span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="font-serif text-xl text-ink dark:text-white font-normal group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/75 dark:text-[#E2DEC9] leading-relaxed font-sans line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.slice(0, 3).map((st) => (
                      <span
                        key={st}
                        className="text-xs px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 font-mono text-ink/70 dark:text-ink-light"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                  <Github className="w-4 h-4 text-ink/40 dark:text-white/40 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
