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
    <footer id="contact" className="relative bg-[#11110F] text-[#FAF7F2] pt-20 sm:pt-28 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Top Grand Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-16">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-sans font-semibold tracking-wider text-[#EBD59B] uppercase block">
              {lang === "EN" ? "Open for Opportunities" : "Terbuka untuk Kolaborasi"}
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.98] text-white font-normal">
              Let's build <br />
              something <span className="italic text-[#EBD59B]">enduring.</span>
            </h2>
            <p className="text-[#D5D1C5] text-base sm:text-lg max-w-lg leading-relaxed font-sans font-normal">
              {lang === "EN"
                ? "Available for front-end engineering roles, software developer internships, and collaborative web platforms. Reach out directly."
                : "Terbuka untuk peluang magang, posisi front-end developer, dan proyek rekayasa perangkat lunak. Hubungi langsung melalui email atau WhatsApp."}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FAF7F2] text-[#141412] hover:bg-[#EBD59B] transition-colors text-xs font-sans font-semibold uppercase tracking-wider"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-sans text-xs font-semibold uppercase tracking-wider hover:border-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Social Channels & Location */}
          <div className="w-full lg:w-auto flex flex-col justify-between space-y-8 min-w-[280px]">
            <div>
              <span className="text-xs font-sans font-semibold tracking-wider text-white/50 uppercase block mb-3">
                Verified Channels
              </span>
              <ul className="space-y-2 text-sm font-sans">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-2 border-b border-white/10 hover:border-white transition-colors"
                    >
                      <span className="text-[#FAF7F2] group-hover:text-[#EBD59B] transition-colors">
                        {s.label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#EBD59B] transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#1A1A17] border border-white/10 space-y-1 text-xs text-[#D5D1C5]">
              <div className="text-white/50 uppercase tracking-wider text-[10px] font-sans font-semibold">Location &amp; Institution</div>
              <div className="text-white font-medium text-sm font-sans">Bogor, West Java, Indonesia</div>
              <div className="text-[#EBD59B] text-xs pt-0.5 font-sans font-medium">IPB University · D4 TRPL (Semester 6)</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <div>
            © {new Date().getFullYear()} Syaikhani Giffa Indrawan. All rights reserved.
          </div>
          <div>
            Crafted with Next.js &amp; Framer Motion · Bogor, ID
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
