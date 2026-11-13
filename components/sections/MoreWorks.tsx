"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";

interface MoreWorksProps {
  lang: "EN" | "ID";
}

const CATEGORY_TEXT: Record<string, string> = {
  Fullstack: "text-[#2563EB] dark:text-[#60A5FA]",
  Web: "text-[#059669] dark:text-[#34D399]",
  Mobile: "text-[#7C3AED] dark:text-[#C084FC]",
  IoT: "text-[#EA580C] dark:text-[#FB923C]",
};

export function MoreWorks({ lang }: MoreWorksProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const listY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const secondaryProjects = [
    ...projects.filter((p) => !p.featured),
    {
      slug: "hexaon-crm-portal",
      title: "Ticketing & CRM Web Portal",
      year: "2023",
      category: "Fullstack",
      tagline: "Customer record management and role-based ticket routing portal built during developer internship.",
      taglineId: "Portal manajemen data pelanggan dan alur tiket berbasis peran saat magang developer.",
      stack: ["Laravel", "Blade", "MySQL", "JavaScript"],
      repo: "https://github.com/GiffaIndr",
    },
    {
      slug: "ppdb-wikrama",
      title: "PPDB Online Admission System",
      year: "2022",
      category: "Web",
      tagline: "School admissions portal with document upload verification and administrative review dashboard.",
      taglineId: "Portal pendaftaran siswa baru dengan verifikasi unggah berkas dan dasbor evaluasi berkas.",
      stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      repo: "https://github.com/GiffaIndr/PPDB",
    },
    {
      slug: "spring-boot-crud",
      title: "SpringBoot REST API Service",
      year: "2023",
      category: "Fullstack",
      tagline: "Java Spring Boot REST API CRUD endpoints with MySQL persistence and automated Postman test collections.",
      taglineId: "REST API CRUD Java Spring Boot dengan persistensi MySQL dan koleksi pengujian Postman.",
      stack: ["Java", "Spring Boot", "MySQL", "Postman"],
      repo: "https://github.com/GiffaIndr/SpringBootCRUD-Postman-RestAPI",
    },
    {
      slug: "storage-app",
      title: "StorageApp File Repository",
      year: "2023",
      category: "Web",
      tagline: "TypeScript local and cloud file repository manager with directory indexing.",
      taglineId: "Manajer repositori berkas lokal dan cloud berbasis TypeScript dengan pengindeksan direktori.",
      stack: ["TypeScript", "React", "Node.js"],
      repo: "https://github.com/GiffaIndr/StorageApp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-white dark:bg-[#141412] text-ink dark:text-ink-light transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Section Header (No kicker/eyebrow) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-black/15 dark:border-white/15 gap-4">
          <h2 className="font-serif text-4xl sm:text-6xl text-ink dark:text-ink-light font-normal tracking-tight">
            {lang === "EN" ? "Selected " : "Arsip "}
            <span className="italic text-[#2563EB] dark:text-[#60A5FA]">
              {lang === "EN" ? "Archives." : "Terpilih."}
            </span>
          </h2>
          <a
            href="https://github.com/GiffaIndr?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-ink/75 dark:text-ink-light hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
          >
            <span>
              {lang === "EN"
                ? "View All 69 Repositories on GitHub"
                : "Lihat Semua 69 Repositori di GitHub"}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Swiss Editorial Index Ledger (No boxed card clutter) */}
        <motion.div
          style={{ y: listY }}
          className="divide-y divide-black/10 dark:divide-white/10 pt-4 will-change-transform"
        >
          {secondaryProjects.map((item, idx) => {
            const catClass = CATEGORY_TEXT[item.category] || "text-[#2563EB]";
            const tagline =
              lang === "ID" && "taglineId" in item && item.taglineId
                ? (item.taglineId as string)
                : item.tagline;

            return (
              <a
                key={idx}
                href={"links" in item ? item.links.repo : item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center py-6 sm:py-7 px-3 -mx-3 rounded-2xl hover:bg-black/[0.025] dark:hover:bg-white/[0.03] transition-colors"
              >
                <div className="md:col-span-4 flex flex-col gap-1">
                  <div className="flex items-center gap-3 text-xs font-sans font-semibold uppercase tracking-wider">
                    <span className={catClass}>{item.category}</span>
                    <span className="text-ink/40 dark:text-white/40">·</span>
                    <span className="text-ink/50 dark:text-white/50">{item.year}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink dark:text-white font-normal group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm text-ink/70 dark:text-[#E2DEC9] leading-relaxed font-sans line-clamp-2">
                    {tagline}
                  </p>
                </div>

                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.slice(0, 2).map((st) => (
                      <span
                        key={st}
                        className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 font-sans font-medium text-ink/75 dark:text-ink-light"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                  <Github className="w-4 h-4 text-ink/40 dark:text-white/40 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
