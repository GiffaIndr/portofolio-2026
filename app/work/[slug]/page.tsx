import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, Project } from "@/content/projects";
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
      <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur-md border-b border-ink/10 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-hud text-xs text-ink/80 hover:text-terracotta transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO WORKS</span>
          </Link>
          <div className="font-hud text-xs opacity-60">
            CASE STUDY // {project.category}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-hud text-xs">
            <span className="px-3 py-1 rounded-full bg-terracotta text-cream font-bold">
              {project.category}
            </span>
            <span className="opacity-60">{project.year}</span>
          </div>

          <h1 className="font-display-condensed text-5xl sm:text-7xl md:text-8xl leading-[0.92]">
            {project.title}
          </h1>

          <p className="text-2xl sm:text-3xl font-editorial-italic text-terracotta max-w-3xl">
            "{project.tagline}"
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-terracotta text-cream font-hud text-xs font-bold hover:bg-terracotta/90 transition-colors shadow-card"
              >
                <span>OPEN LIVE DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ink/30 hover:border-ink font-hud text-xs transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE REPOSITORY</span>
            </a>
          </div>
        </div>

        {/* Cover Mockup */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-ink/20 shadow-float bg-ink/5">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Project Meta Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#EFE5D5] border border-ink/15 font-hud text-xs">
          <div>
            <span className="block opacity-50 text-[10px]">ROLE:</span>
            <span className="font-bold text-sm">{project.role}</span>
          </div>
          <div>
            <span className="block opacity-50 text-[10px]">YEAR:</span>
            <span className="font-bold text-sm">{project.year}</span>
          </div>
          <div>
            <span className="block opacity-50 text-[10px]">STATUS:</span>
            <span className="font-bold text-sm uppercase">{project.status}</span>
          </div>
          <div>
            <span className="block opacity-50 text-[10px]">LOCATION:</span>
            <span className="font-bold text-sm">BOGOR, ID</span>
          </div>
        </div>

        {/* Problem and Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-cream border border-ink/15 space-y-4 shadow-paper">
            <span className="font-hud text-xs text-terracotta font-bold block">
              01 // THE CHALLENGE &amp; CONTEXT
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-ink/80">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-cream border border-ink/15 space-y-4 shadow-paper">
            <span className="font-hud text-xs text-meadow font-bold block">
              02 // THE ARCHITECTURAL SOLUTION
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-ink/80">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Diagram if RFID */}
        {project.architecture && (
          <div className="space-y-6 pt-6">
            <span className="font-hud text-xs text-terracotta font-bold block">
              03 // HARDWARE &amp; LOGIC TOPOLOGY
            </span>
            <div className="rounded-3xl overflow-hidden border border-ink/15 shadow-float bg-cream">
              <Image
                src="/projects/rfid-absence-system/arch-diagram.svg"
                alt="System Architecture Diagram"
                width={1200}
                height={680}
                className="w-full h-auto"
              />
            </div>

            <div className="p-8 rounded-3xl bg-[#EFE5D5] border border-ink/15 space-y-4">
              <span className="font-hud text-xs font-bold block">
                EXECUTION FLOW &amp; PROTOCOLS:
              </span>
              <ol className="space-y-3 font-sans text-base">
                {project.architecture.flow.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-terracotta text-cream">
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
          <span className="font-hud text-xs opacity-75 font-bold block">
            04 // SYSTEM DELIVERABLES &amp; CODE HIGHLIGHTS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-2xl bg-cream border border-ink/15 shadow-card text-base leading-snug"
              >
                <CheckCircle2 className="w-5 h-5 text-meadow flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <div className="space-y-6">
            <span className="font-hud text-xs opacity-75 font-bold block">
              05 // SCREENSHOT ARTIFACTS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden border border-ink/15 bg-cream shadow-paper space-y-3 p-4"
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
                    <p className="font-hud text-xs opacity-75 px-2">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Ecosystem */}
        <div className="p-8 rounded-3xl bg-[#EFE5D5] border border-ink/15 space-y-4">
          <span className="font-hud text-xs opacity-60 block">
            CORE TECHNOLOGIES:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-hud text-xs px-4 py-2 rounded-xl bg-cream border border-ink/15 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-ink/15 py-12 px-6 md:px-12 bg-cream text-center">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-hud text-xs px-8 py-4 rounded-full bg-ink text-cream hover:bg-terracotta transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO PORTFOLIO REPERTOIRE</span>
        </Link>
      </footer>
    </div>
  );
}
