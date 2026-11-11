import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} — Case Study // Syaikhani Giffa Indrawan`,
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
    <div className="min-h-screen bg-cream text-ink">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur-md border-b border-ink/10 py-5 px-6 sm:px-10 md:px-14">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/75 hover:text-ochre transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Works</span>
          </Link>
          <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">
            Case Study // {project.category}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-16 space-y-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-emerald text-cream font-bold uppercase tracking-wider text-[11px]">
              {project.category}
            </span>
            <span className="text-ink/60 font-medium">{project.year}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.92] text-ink">
            {project.title}
          </h1>

          <p className="text-2xl sm:text-3xl text-ochre font-sans italic max-w-3xl">
            "{project.tagline}"
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald text-cream text-xs font-bold uppercase tracking-wider hover:bg-emerald/90 transition-colors shadow-luxe"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ink/20 hover:border-ink text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>
        </div>

        {/* Cover Mockup */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-ink/10 shadow-float bg-card">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Project Meta Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-7 rounded-3xl bg-card border border-ink/10 text-xs">
          <div>
            <span className="block text-ink/50 text-[11px] uppercase tracking-wider mb-1">Role</span>
            <span className="font-bold text-sm text-ink">{project.role}</span>
          </div>
          <div>
            <span className="block text-ink/50 text-[11px] uppercase tracking-wider mb-1">Year</span>
            <span className="font-bold text-sm text-ink">{project.year}</span>
          </div>
          <div>
            <span className="block text-ink/50 text-[11px] uppercase tracking-wider mb-1">Status</span>
            <span className="font-bold text-sm text-ink uppercase">{project.status}</span>
          </div>
          <div>
            <span className="block text-ink/50 text-[11px] uppercase tracking-wider mb-1">Location</span>
            <span className="font-bold text-sm text-ink">Bogor, ID</span>
          </div>
        </div>

        {/* Problem and Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-ink/10 space-y-3 shadow-luxe">
            <span className="text-xs font-bold uppercase tracking-wider text-ochre block">
              01 // The Challenge &amp; Context
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-ink/80 font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-ink/10 space-y-3 shadow-luxe">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald block">
              02 // The Architectural Solution
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-ink/80 font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Diagram if RFID */}
        {project.architecture && (
          <div className="space-y-6 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-ochre block">
              03 // Hardware &amp; Logic Topology
            </span>
            <div className="rounded-3xl overflow-hidden border border-ink/10 shadow-luxe bg-cream">
              <Image
                src="/projects/rfid-absence-system/arch-diagram.svg"
                alt="System Architecture Diagram"
                width={1200}
                height={680}
                className="w-full h-auto"
              />
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-ink/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider block">
                Execution Flow Protocols:
              </span>
              <ol className="space-y-3 font-sans text-sm sm:text-base">
                {project.architecture.flow.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald text-cream flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-ink/60 block">
            04 // System Deliverables &amp; Code Highlights
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 p-6 rounded-2xl bg-card border border-ink/10 shadow-luxe text-sm sm:text-base leading-snug"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-ink/60 block">
              05 // Screenshot Artifacts
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden border border-ink/10 bg-card shadow-polaroid space-y-3 p-4"
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <p className="text-xs text-ink/70 px-2 font-medium">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Ecosystem */}
        <div className="p-8 sm:p-10 rounded-3xl bg-card border border-ink/10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-ink/50 block">
            Core Technology Stack:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-xs px-4 py-2 rounded-full bg-cream border border-ink/10 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-ink/10 py-12 px-6 sm:px-10 md:px-14 bg-card text-center">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full bg-ink text-cream hover:bg-ochre transition-colors shadow-luxe"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </footer>
    </div>
  );
}
