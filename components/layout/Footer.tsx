"use client";

import React from "react";
import { ArrowUp, Mail, ArrowUpRight, Phone } from "lucide-react";
import { profile } from "@/content/profile";

interface FooterProps {
  lang: "EN" | "ID";
}

export function Footer({ lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#11110F] text-[#FAF7F2] pt-24 pb-14 overflow-hidden border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Top Grand Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-white/15">
          <div className="max-w-2xl space-y-6">
            <span className="font-script-brush text-3xl text-butter block -rotate-2">
              {lang === "EN" ? "Let's work together" : "Mari berkolaborasi"}
            </span>
            <h2 className="font-cutout text-4xl sm:text-6xl lg:text-7xl leading-[0.98] text-white">
              LET'S BUILD <br />
              SOMETHING{" "}
              <span className="text-[#FACC15]">
                GREAT.
              </span>
            </h2>
            <p className="text-[#E2DEC9] text-base sm:text-lg max-w-lg leading-relaxed">
              {lang === "EN"
                ? "Available for front-end engineering roles, software developer internships, and collaborative web platforms. Reach out directly."
                : "Terbuka untuk peluang magang, posisi front-end developer, dan proyek rekayasa perangkat lunak. Hubungi langsung melalui email atau WhatsApp."}
            </p>

            <div className="flex flex-wrap gap-4 pt-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FACC15] text-[#141412] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-paper"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/25 text-white font-bold text-xs uppercase tracking-wider hover:border-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Social Channels */}
          <div className="w-full lg:w-auto flex flex-col justify-between space-y-8 min-w-[260px]">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-white/60 block mb-4">
                Verified Channels
              </span>
              <ul className="space-y-3 text-sm">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2 border-b border-white/10 hover:border-[#FACC15] transition-colors"
                    >
                      <span className="text-[#FAF7F2] group-hover:text-[#FACC15] transition-colors font-medium">
                        {s.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#FACC15] transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E1E1B] border border-white/15 space-y-1.5 text-xs text-[#E2DEC9]">
              <div className="text-white/50 uppercase tracking-wider text-[10px] font-bold">Location &amp; Study</div>
              <div className="text-white font-bold text-sm">Bogor, West Java, Indonesia</div>
              <div className="text-[#FACC15] text-xs pt-1">IPB University · D4 TRPL (Semester 6)</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Syaikhani Giffa Indrawan. All rights reserved.
          </div>
          <div>
            Crafted with Next.js, Framer Motion &amp; Lenis · Bogor, ID
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-white/80 hover:text-[#FACC15] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
