"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, ArrowUpRight, Menu, X } from "lucide-react";

interface NavProps {
  lang: "EN" | "ID";
  setLang: (lang: "EN" | "ID") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Navigation({ lang, setLang, theme, toggleTheme }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: lang === "EN" ? "Works" : "Karya", href: "#work", num: "01" },
    { label: lang === "EN" ? "About" : "Tentang", href: "#about", num: "02" },
    { label: lang === "EN" ? "Trajectory" : "Riwayat", href: "#experience", num: "03" },
    { label: lang === "EN" ? "Toolbox" : "Keahlian", href: "#skills", num: "04" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-paper dark:bg-paper-dark py-3.5 border-b border-black/10 dark:border-white/10 shadow-sm"
          : "bg-paper/95 dark:bg-paper-dark/95 py-4 sm:py-5 border-b border-black/5 dark:border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Redesigned Brand Insignia (Bespoke Architectural Monogram) */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 select-none"
        >
          {/* Custom Faceted Monogram Emblem */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#141412] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#141412] border border-black/15 dark:border-white/20 shadow-[2px_2px_0px_#84CC16] dark:shadow-[2px_2px_0px_#A3E635] transition-transform group-hover:scale-105">
            <span className="font-cutout text-sm font-extrabold tracking-tight">G</span>
            <span className="text-[#84CC16] dark:text-[#65A30D] font-bold text-xs mx-0.5">·</span>
            <span className="font-cutout text-sm font-extrabold tracking-tight">I</span>
          </div>

          {/* Wordmark Hierarchy */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-cutout text-sm tracking-tight text-ink dark:text-white uppercase group-hover:text-[#65A30D] dark:group-hover:text-[#A3E635] transition-colors">
                SYAIKHANI GIFFA
              </span>
              <span className="hidden sm:inline-block text-[9px] font-sans font-bold px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-ink/75 dark:text-ink-lightDim uppercase tracking-wider">
                TRPL
              </span>
            </div>
            <span className="text-[11px] text-ink/65 dark:text-ink-lightDim font-medium tracking-wide">
              Software Engineer · Bogor
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold tracking-wider uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-1.5 text-ink/70 hover:text-ink dark:text-ink-lightMuted dark:hover:text-white transition-colors py-1"
            >
              <span className="text-[10px] text-ink/40 dark:text-white/40 group-hover:text-[#65A30D] dark:group-hover:text-[#A3E635] transition-colors font-mono">
                {item.num}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Toggle (Solid Crisp Ticket) */}
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            aria-label="Toggle language"
            className="text-xs font-bold px-3 py-1.5 rounded-lg border border-black/15 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-[#1E1E1B] shadow-[1.5px_1.5px_0px_#141412] dark:shadow-[1.5px_1.5px_0px_rgba(255,255,255,0.15)]"
          >
            {lang}
          </button>

          {/* Theme Toggle (Solid Crisp Ticket) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg border border-black/15 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-[#1E1E1B] shadow-[1.5px_1.5px_0px_#141412] dark:shadow-[1.5px_1.5px_0px_rgba(255,255,255,0.15)]"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-ink" />
            ) : (
              <Sun className="w-4 h-4 text-[#FACC15]" />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-ink text-paper dark:bg-white dark:text-ink hover:bg-[#65A30D] dark:hover:bg-[#FACC15] text-xs font-bold uppercase tracking-wider transition-colors shadow-paper"
          >
            <span>{lang === "EN" ? "Let's Talk" : "Kontak"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-ink dark:text-ink-light border border-black/15 dark:border-white/20 bg-white dark:bg-[#1E1E1B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper dark:bg-[#1C1C19] border-b border-black/15 dark:border-white/15 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-ink dark:text-white py-2 border-b border-black/5 dark:border-white/5"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-ink/40 dark:text-white/40">{item.num}</span>
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-white dark:text-ink font-bold text-xs uppercase tracking-wider shadow-paper"
            >
              <span>{lang === "EN" ? "Let's Talk" : "Kontak"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
