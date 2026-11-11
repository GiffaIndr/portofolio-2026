"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Scribble } from "@/components/ui/Scribble";
import { profile } from "@/content/profile";

interface HeroProps {
  lang: "EN" | "ID";
}

export function Hero({ lang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [distanceKm, setDistanceKm] = useState("0.0");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Convert scroll pixels to simulated journey kilometers (0.0 to 12.4 km)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const km = (scrollY / maxScroll) * 12.4;
        setDistanceKm(km.toFixed(1));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[700px] max-h-[1100px] overflow-hidden flex flex-col justify-between pt-24 pb-8 select-none bg-[#3484C8]"
    >
      {/* ================= PARALLAX BACKGROUND LAYERS ================= */}

      {/* Layer 1: Sky & Atmosphere */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 4}px, ${mousePos.y * 2}px, 0)`,
        }}
      >
        <Image
          src="/illustrations/layer-sky.svg"
          alt="Sky Horizon"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Layer 2: Mountain Peaks */}
      <div
        className="absolute bottom-[22%] sm:bottom-[24%] left-0 w-full h-[45%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 4}px, 0)`,
        }}
      >
        <Image
          src="/illustrations/layer-mountains.svg"
          alt="Distant Mountains"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* ================= LAYER 2.5: GIANT EDITORIAL DISPLAY TITLE (Sandwiched) ================= */}
      <div className="absolute top-[18%] sm:top-[16%] left-0 w-full z-10 pointer-events-none text-center px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h1 className="font-display-condensed text-cream text-[13vw] sm:text-[11vw] md:text-[9.5rem] leading-[0.82] tracking-[-0.03em] drop-shadow-[0_4px_24px_rgba(27,26,23,0.3)]">
            SYAIKHANI
          </h1>
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap mt-[-1vw] sm:mt-[-1.5vw]">
            <span className="font-editorial-italic text-butter text-[7vw] sm:text-[5.5vw] md:text-[5rem] leading-none drop-shadow-md">
              crafting
            </span>
            <span className="font-display-condensed text-cream text-[11vw] sm:text-[9.5vw] md:text-[8rem] leading-[0.82] tracking-[-0.03em] drop-shadow-[0_4px_24px_rgba(27,26,23,0.3)]">
              FOR THE WEB
            </span>
          </div>

          {/* Yellow handwriting annotation with animated scribble */}
          <div className="relative mt-2 sm:mt-4 inline-block">
            <span className="font-handwriting text-butter text-xl sm:text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {lang === "EN"
                ? "front-end developer from Bogor, Indonesia"
                : "pengembang front-end asal Bogor, Indonesia"}
            </span>
            <div className="absolute -bottom-2 left-0 w-full">
              <Scribble type="underline" color="#F2D13B" className="w-full h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Rolling Green Hills (Back) */}
      <div
        className="absolute bottom-[16%] sm:bottom-[18%] left-0 w-full h-[38%] pointer-events-none will-change-transform z-10"
        style={{
          transform: `translate3d(${mousePos.x * -6}px, ${mousePos.y * 3}px, 0)`,
        }}
      >
        <Image
          src="/illustrations/layer-hills-back.svg"
          alt="Rolling Back Hills"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Layer 4: Traditional Windmill & Country Homes */}
      <div
        className="absolute bottom-[10%] sm:bottom-[12%] left-0 w-full h-[42%] pointer-events-none will-change-transform z-15"
        style={{
          transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * 5}px, 0)`,
        }}
      >
        <Image
          src="/illustrations/layer-windmill.svg"
          alt="Windmill & Village"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Layer 5: Layered Flower Bands */}
      <div
        className="absolute bottom-[3%] sm:bottom-[4%] left-0 w-full h-[32%] pointer-events-none will-change-transform z-20"
        style={{
          transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * 6}px, 0)`,
        }}
      >
        <Image
          src="/illustrations/layer-flowers.svg"
          alt="Wildflower Tulip Fields"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Layer 6: Foreground Road & Traveling Cyclist with HUD */}
      <div
        className="absolute bottom-0 left-0 w-full h-[24%] pointer-events-none will-change-transform z-25"
        style={{
          transform: `translate3d(${mousePos.x * -26}px, ${mousePos.y * 8}px, 0)`,
        }}
      >
        <Image
          src="/illustrations/layer-foreground.svg"
          alt="Foreground Path & Cyclist"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* ================= HUD MICROTEXT & TELEMETRY (Reference #1) ================= */}

      {/* Top Left HUD */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-start font-hud text-[11px] text-cream drop-shadow-md">
        <div className="space-y-1">
          <div className="opacity-75">COORDINATES</div>
          <div className="font-mono font-bold tracking-widest">{profile.coordinates}</div>
          <div className="opacity-60 pt-1">WEATHER · 24°C SUNNY</div>
        </div>

        {/* Top Right HUD */}
        <div className="text-right space-y-1">
          <div className="opacity-75">STATION LOG // BOGOR</div>
          <div className="font-semibold text-butter">SEMESTER 6 · IPB UNIVERSITY</div>
          <div className="opacity-60 pt-1">BIOME: HIGHLAND URBAN</div>
        </div>
      </div>

      {/* Bottom HUD: Trip Progress & Scroll Invitation */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-between items-end font-hud text-[11px] text-cream drop-shadow-md">
        <div className="flex items-center gap-4">
          <span className="w-2.5 h-2.5 rounded-full bg-butter animate-pulse" />
          <div>
            <div className="text-butter font-bold">FIELD NOTES 2026</div>
            <div className="opacity-75 text-[10px]">SCROLL TO EXPLORE WORK</div>
          </div>
        </div>

        <div className="text-right">
          <div className="opacity-75">EXPEDITION DISTANCE</div>
          <div className="font-mono font-bold text-sm tracking-widest text-butter">
            {distanceKm} KM
          </div>
        </div>
      </div>
    </section>
  );
}
