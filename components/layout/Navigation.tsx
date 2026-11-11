"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";
import { profile } from "@/content/profile";

interface NavProps {
  lang: "EN" | "ID";
  setLang: (lang: "EN" | "ID") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Navigation({ lang, setLang, theme, toggleTheme }: NavProps) {
  const [timeStr, setTimeStr] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format WIB (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(now.toLocaleTimeString("en-GB", options) + " WIB");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navItems = [
    { label: lang === "EN" ? "Explore" : "Eksplor", href: "#hero" },
    { label: lang === "EN" ? "About" : "Tentang", href: "#about" },
    { label: lang === "EN" ? "Works" : "Karya", href: "#work" },
    { label: lang === "EN" ? "Experience" : "Pengalaman", href: "#experience" },
    { label: lang === "EN" ? "Contact" : "Kontak", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/85 dark:bg-cream/90 backdrop-blur-md py-3 border-b border-ink/10 dark:border-ink/10 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 font-hud text-ink dark:text-ink tracking-widest"
        >
          <span className="w-8 h-8 rounded-full border border-ink/40 dark:border-ink/40 flex items-center justify-center font-display-condensed text-base font-bold transition-all group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta">
            GI
          </span>
          <span className="hidden sm:inline font-semibold text-xs tracking-hud">
            SYAIKHANI GIFFA
          </span>
        </Link>

        {/* Real-time Telemetry (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-hud text-[11px] opacity-75 text-ink dark:text-ink">
          <span>{profile.coordinates}</span>
          <span>·</span>
          <span>ELEV. {profile.elevation}</span>
          <span>·</span>
          <span className="font-mono tabular-nums">{timeStr || "12:00:00 WIB"}</span>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-hud text-xs">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink dark:text-ink opacity-80 hover:opacity-100 hover:text-terracotta transition-colors relative py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls: Language & Theme Toggles */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            aria-label="Toggle language"
            className="flex items-center gap-1 font-hud text-xs px-2.5 py-1 rounded-full border border-ink/20 dark:border-ink/20 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-full border border-ink/20 dark:border-ink/20 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-3.5 h-3.5" />
            ) : (
              <Sun className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="md:hidden p-1.5 text-ink dark:text-ink"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-cream dark:bg-cream z-40 p-8 flex flex-col justify-between border-t border-ink/10">
          <nav className="flex flex-col gap-6 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display-condensed text-4xl text-ink dark:text-ink hover:text-terracotta transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="font-hud text-xs space-y-2 opacity-70 border-t border-ink/10 pt-6">
            <div>BOGOR, ID · {profile.coordinates}</div>
            <div className="font-mono tabular-nums">{timeStr}</div>
          </div>
        </div>
      )}
    </header>
  );
}
