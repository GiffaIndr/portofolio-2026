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
          ? "bg-paper/95 dark:bg-paper-dark/95 py-3.5 border-b border-black/10 dark:border-white/10 shadow-xs"
          : "bg-paper/90 dark:bg-paper-dark/90 py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
        {/* Clean Editorial Wordmark & Monogram (Anti-Slop Redesign) */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#141412] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#141412] transition-transform group-hover:scale-105 shadow-xs">
            <span className="font-serif italic text-base font-normal">G</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#059669] border border-white dark:border-[#141412]" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-tight text-ink dark:text-white font-normal group-hover:text-[#059669] dark:group-hover:text-[#34D399] transition-colors leading-tight">
              Syaikhani Giffa
            </span>
            <span className="text-[11px] font-sans text-ink/60 dark:text-ink-lightDim font-normal tracking-normal">
              Software Engineer · IPB University
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-medium uppercase tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink/65 hover:text-ink dark:text-ink-lightMuted dark:hover:text-white transition-colors py-1"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            aria-label="Toggle language"
            className="text-xs font-sans font-medium px-2.5 py-1.5 rounded-md border border-black/15 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-[#1E1E1B]"
          >
            {lang}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-md border border-black/15 dark:border-white/20 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-[#1E1E1B]"
          >
            {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>

          {/* Contact Button */}
          <a
            href="mailto:giffasyaikhani2005@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412] hover:bg-[#059669] dark:hover:bg-[#34D399] dark:hover:text-[#141412] transition-colors text-xs font-sans font-medium uppercase tracking-wider"
          >
            <span>{lang === "EN" ? "Contact" : "Kontak"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation menu"
            className="md:hidden p-1.5 rounded-md border border-black/15 dark:border-white/20 text-ink dark:text-ink-light"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper dark:bg-paper-dark border-b border-black/10 dark:border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-sans font-medium text-sm uppercase">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-ink/75 dark:text-ink-light hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-black/10 dark:border-white/10">
            <a
              href="mailto:giffasyaikhani2005@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#059669] dark:text-[#34D399]"
            >
              <span>giffasyaikhani2005@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
