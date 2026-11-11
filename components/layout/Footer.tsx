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
    <footer id="contact" className="relative bg-[#11110F] text-[#FAF7F2] pt-20 sm:pt-28 pb-12 overflow-hidden border-t-2 border-[#1E1E1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Top Grand Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-16">
          <div className="max-w-2xl space-y-5">
            <span className="font-script-brush text-2xl sm:text-3xl text-[#FACC15] block -rotate-2">
              {lang === "EN" ? "Let's work together" : "Mari berkolaborasi"}
            </span>
            <h2 className="font-cutout text-4xl sm:text-6xl lg:text-7xl leading-[0.96] text-white">
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

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#FACC15] text-[#141412] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-paper"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border-2 border-white/25 text-white font-bold text-xs uppercase tracking-wider hover:border-white transition-colors bg-[#1E1E1B]"
              >
                <Phone className="w-4 h-4" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Social Channels */}
          <div className="w-full lg:w-auto flex flex-col justify-between space-y-7 min-w-[260px]">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 block mb-3">
                Verified Channels
              </span>
              <ul className="space-y-2.5 text-sm">
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

            <div className="p-5 rounded-2xl bg-[#1E1E1B] border border-white/15 space-y-1 text-xs text-[#E2DEC9] shadow-sm">
              <div className="text-white/50 uppercase tracking-wider text-[10px] font-bold font-mono">Location &amp; Study</div>
              <div className="text-white font-bold text-sm">Bogor, West Java, Indonesia</div>
              <div className="text-[#FACC15] text-xs pt-0.5">IPB University · D4 TRPL (Semester 6)</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div>
            © {new Date().getFullYear()} Syaikhani Giffa Indrawan.
          </div>
          <div>
            Crafted with Next.js &amp; Framer Motion · Bogor, ID
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
