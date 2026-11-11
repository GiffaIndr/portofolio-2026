"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface FooterProps {
  lang: "EN" | "ID";
}

export function Footer({ lang }: FooterProps) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " WIB"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-ink text-cream pt-24 pb-12 overflow-hidden">
      {/* Decorative background grid and field badge */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-20 border-b border-cream/15">
          <div className="max-w-2xl">
            <span className="font-hud text-butter text-xs tracking-hud block mb-4">
              {lang === "EN" ? "06 // DISPATCH & INQUIRY" : "06 // HUBUNGI & KOLABORASI"}
            </span>
            <h2 className="font-display-condensed text-5xl sm:text-7xl md:text-8xl leading-none text-cream">
              LET'S MAKE <br />
              SOMETHING{" "}
              <span className="font-editorial-italic lowercase text-butter">
                good.
              </span>
            </h2>
            <p className="mt-8 text-cream/70 text-base sm:text-lg max-w-lg leading-relaxed">
              {lang === "EN"
                ? "Open for internship opportunities, front-end roles, and challenging fullstack initiatives. Let's build something deliberate."
                : "Terbuka untuk peluang magang, peran front-end developer, dan kolaborasi rekayasa web. Mari diskusikan karya bermakna."}
            </p>

            {/* Direct Contact Button */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="mailto:syaikhanigiffa@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-butter text-ink font-hud text-xs font-bold hover:bg-terracotta hover:text-cream transition-all duration-300 shadow-float"
                data-cursor="EMAIL"
              >
                <Mail className="w-4 h-4" />
                <span>SYAIKHANIGIFFA@GMAIL.COM</span>
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-cream/30 text-cream font-hud text-xs hover:border-cream transition-colors"
              >
                <span>DOWNLOAD CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Links & Location Details */}
          <div className="flex flex-col justify-between h-full space-y-10">
            <div>
              <span className="font-hud text-xs tracking-hud text-cream/50 block mb-4">
                {lang === "EN" ? "OFFICIAL CHANNELS" : "KANAL RESMI"}
              </span>
              <ul className="space-y-3 font-hud text-xs">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-8 py-2 border-b border-cream/10 hover:border-butter transition-colors"
                      data-cursor="OPEN"
                    >
                      <span className="text-cream/80 group-hover:text-butter transition-colors">
                        {s.label}
                      </span>
                      <span className="text-cream/40 font-mono text-[10px]">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-cream/5 border border-cream/10 space-y-2 font-hud text-[11px] text-cream/70">
              <div className="flex justify-between">
                <span>STATION:</span>
                <span className="text-cream font-semibold">BOGOR, JAWA BARAT</span>
              </div>
              <div className="flex justify-between">
                <span>COORDINATES:</span>
                <span className="text-cream font-mono">{profile.coordinates}</span>
              </div>
              <div className="flex justify-between">
                <span>LOCAL TIME:</span>
                <span className="text-butter font-mono tabular-nums font-semibold">
                  {timeStr || "12:00:00 WIB"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-hud text-[11px] text-cream/50">
          <div>
            © {new Date().getFullYear()} Syaikhani Giffa Indrawan. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            <span>Crafted with Next.js, Lenis &amp; GSAP · Hand-coded in Bogor</span>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-cream/70 hover:text-butter transition-colors"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
