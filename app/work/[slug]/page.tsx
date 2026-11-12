import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { RfidSignalArchitectureFlow } from "@/components/work/RfidSignalArchitectureFlow";
import { BrushStrokeDivider } from "@/components/ui/BrushStrokeDivider";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} — Case Study · Syaikhani Giffa Indrawan`,
      description: project.tagline,
    };
  });
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper dark:bg-paper-dark text-ink dark:text-ink-light">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 bg-paper dark:bg-paper-dark border-b border-black/15 dark:border-white/15 py-5 px-6 sm:px-10 md:px-14">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/75 dark:text-ink-light hover:text-[#65A30D] dark:hover:text-[#A3E635] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Works</span>
          </Link>
          <div className="text-xs font-semibold text-ink/70 dark:text-ink-lightDim uppercase tracking-wider">
            Case Study · {project.category}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-16 space-y-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-[#84CC16]/25 text-[#4D7C0F] dark:text-[#A3E635] font-bold uppercase tracking-wider text-[11px]">
              {project.category}
            </span>
            <span className="text-ink/70 dark:text-ink-lightDim font-semibold">{project.year}</span>
          </div>

          <h1 className="font-cutout text-4xl sm:text-6xl md:text-7xl leading-tight text-ink dark:text-white">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-terracotta dark:text-[#FDE047] font-sans italic max-w-3xl">
            "{project.tagline}"
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-xs font-bold uppercase tracking-wider hover:bg-grass dark:hover:bg-butter transition-colors shadow-paper"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-black/25 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>
        </div>

        {/* Cover Mockup */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-black/15 dark:border-white/20 shadow-float bg-surface dark:bg-[#22221E]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Engineering Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-surface/70 dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta dark:text-[#FB923C] block">
              The Engineering Challenge
            </span>
            <h2 className="font-cutout text-2xl text-ink dark:text-white">
              Problem Context
            </h2>
            <p className="text-base text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface/70 dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper dark:shadow-[3px_3px_0px_rgba(255,255,255,0.1)] space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D7C0F] dark:text-[#A3E635] block">
              The Technical Architecture
            </span>
            <h2 className="font-cutout text-2xl text-ink dark:text-white">
              Engineered Solution
            </h2>
            <p className="text-base text-ink/80 dark:text-[#E2DEC9] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Section 6, Idea 8: Live Signal Architecture Flow for RFID */}
        {project.slug === "rfid-absence-system" && (
          <div className="space-y-4">
            <RfidSignalArchitectureFlow />
            <BrushStrokeDivider variant="terracotta" />
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-6">
          <h2 className="font-cutout text-2xl sm:text-3xl text-ink dark:text-white">
            Key Technical Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-surface/50 dark:bg-[#1E1E1B] border border-black/10 dark:border-white/15"
              >
                <CheckCircle2 className="w-5 h-5 text-[#84CC16] dark:text-[#A3E635] shrink-0 mt-0.5" />
                <span className="text-sm text-ink/85 dark:text-[#E2DEC9] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/15 dark:border-[#3E3D36] shadow-paper space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-ink/70 dark:text-ink-lightDim">
            Verified Stack &amp; Libraries
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full bg-surface dark:bg-[#2C2C27] border border-black/10 dark:border-white/15 text-xs font-semibold text-ink dark:text-[#FAF7F2]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-20 py-10 border-t border-black/15 dark:border-white/15 text-center text-xs text-ink/65 dark:text-ink-lightDim">
        Syaikhani Giffa Indrawan · D4 TRPL IPB University · 2026
      </footer>
    </div>
  );
}
