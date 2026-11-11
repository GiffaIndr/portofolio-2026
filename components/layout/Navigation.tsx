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
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: lang === "EN" ? "Works" : "Karya", href: "#work" },
    { label: lang === "EN" ? "About" : "Tentang", href: "#about" },
    { label: lang === "EN" ? "Trajectory" : "Riwayat", href: "#experience" },
    { label: lang === "EN" ? "Toolbox" : "Keahlian", href: "#skills" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-paper dark:bg-paper-dark py-3.5 border-b border-black/10 dark:border-white/15 shadow-sm"
          : "bg-paper/90 dark:bg-paper-dark/95 py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 text-ink dark:text-ink-light"
        >
          <span className="w-10 h-10 rounded-xl bg-ink text-paper dark:bg-paper dark:text-ink flex items-center justify-center font-cutout text-base font-bold transition-transform group-hover:scale-105 shadow-sm">
            GI
          </span>
          <div className="flex flex-col">
            <span className="font-cutout text-sm tracking-tight leading-none text-ink dark:text-ink-light">
              SYAIKHANI GIFFA
            </span>
            <span className="text-[11px] text-ink-muted dark:text-ink-lightDim font-medium">
              Bogor, West Java · 2026
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-wide uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink/75 hover:text-ink dark:text-ink-lightMuted dark:hover:text-ink-light transition-colors relative py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            aria-label="Toggle language"
            className="text-xs font-bold px-3 py-1.5 rounded-full border border-black/15 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors bg-surface/50 dark:bg-surface-dark"
          >
            {lang}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full border border-black/15 dark:border-white/25 text-ink dark:text-ink-light hover:border-black dark:hover:border-white transition-colors bg-surface/50 dark:bg-surface-dark"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-ink" />
            ) : (
              <Sun className="w-4 h-4 text-butter" />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink hover:bg-grass dark:hover:bg-butter text-xs font-bold uppercase tracking-wider transition-colors ml-2 shadow-sm"
          >
            <span>{lang === "EN" ? "Let's Talk" : "Kontak"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-ink dark:text-ink-light border border-black/15 dark:border-white/25"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper dark:bg-paper-dark border-b border-black/10 dark:border-white/15 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink dark:text-ink-light py-1 border-b border-black/5 dark:border-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-bold text-xs uppercase"
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
