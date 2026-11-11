"use client";

import React from "react";
import { ArrowUp, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";

interface FooterProps {
  lang: "EN" | "ID";
}

export function Footer({ lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#121210] text-[#F6F2EB] pt-28 pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Top Grand Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-20 border-b border-white/10">
          <div className="max-w-2xl space-y-6">
            <span className="font-script-note text-2xl text-butter block -rotate-2">
              {lang === "EN" ? "Let's connect" : "Mari terhubung"}
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.92] text-white">
              LET'S BUILD <br />
              SOMETHING{" "}
              <span className="text-butter italic font-serif">
                meaningful.
              </span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-lg leading-relaxed">
              {lang === "EN"
                ? "Available for front-end roles, software engineering internships, and ambitious web initiatives. Reach out directly."
                : "Terbuka untuk peluang magang, peran front-end developer, dan proyek perangkat lunak berkualitas tinggi."}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:syaikhanigiffa@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-butter text-ink font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-luxe"
              >
                <Mail className="w-4 h-4" />
                <span>syaikhanigiffa@gmail.com</span>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-white transition-colors"
              >
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Channels */}
          <div className="w-full lg:w-auto flex flex-col justify-between space-y-8 min-w-[240px]">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-white/50 block mb-4">
                Verified Channels
              </span>
              <ul className="space-y-3 text-sm">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2 border-b border-white/10 hover:border-butter transition-colors"
                    >
                      <span className="text-white/80 group-hover:text-butter transition-colors">
                        {s.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-butter transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-white/70">
              <div className="text-white/40 uppercase tracking-wider text-[10px]">Location</div>
              <div className="text-white font-semibold">Bogor, West Java, Indonesia</div>
              <div className="text-white/50 text-[11px] pt-1">IPB University · D4 TRPL</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Syaikhani Giffa Indrawan. All rights reserved.
          </div>
          <div>
            Designed with restraint, craft &amp; performance.
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-white/70 hover:text-butter transition-colors uppercase font-bold tracking-wider text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
