"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCRUB } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroLandscapeScenery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // 1. Multi-depth scroll parallax
      const layers = gsap.utils.toArray<HTMLElement>("[data-depth]");
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || "0");
        if (depth === 0) return;

        gsap.to(layer, {
          yPercent: -depth * 35,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: SCRUB.soft,
          },
        });
      });

      // 2. Continuous horizontal cloud drift (60s-90s)
      gsap.to(".hero-cloud-1", {
        x: "15%",
        repeat: -1,
        yoyo: true,
        duration: 45,
        ease: "sine.inOut",
      });

      gsap.to(".hero-cloud-2", {
        x: "-20%",
        repeat: -1,
        yoyo: true,
        duration: 60,
        ease: "sine.inOut",
      });

      // 3. Subtle dolly-in zoom on scroll
      gsap.to(".hero-scenery-wrapper", {
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: SCRUB.dreamy,
        },
      });

      // 4. Mouse parallax (desktop only)
      if (window.matchMedia("(min-width: 1024px)").matches) {
        const quickLayers = layers.map((layer) => {
          const depth = parseFloat(layer.dataset.depth || "0");
          const qx = gsap.quickTo(layer, "x", { duration: 1.0, ease: "power3.out" });
          const qy = gsap.quickTo(layer, "y", { duration: 1.0, ease: "power3.out" });
          return { qx, qy, depth };
        });

        const onMouseMove = (e: MouseEvent) => {
          const normX = (e.clientX / window.innerWidth - 0.5) * 2;
          const normY = (e.clientY / window.innerHeight - 0.5) * 2;

          quickLayers.forEach(({ qx, qy, depth }) => {
            qx(normX * depth * 14);
            qy(normY * depth * 8);
          });
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-40 dark:opacity-25"
    >
      <div className="hero-scenery-wrapper relative w-full h-[120%] -top-[10%] will-change-transform">
        {/* Layer 0: Sky Gradient Base */}
        <div
          data-depth="0.00"
          className="absolute inset-0 bg-gradient-to-b from-[#EAE6DD]/40 via-transparent to-transparent dark:from-[#1E2522]/30"
        />

        {/* Layer 1: Distant Drifting Clouds */}
        <div
          data-depth="0.08"
          className="hero-cloud-1 absolute top-[12%] left-[8%] w-[420px] h-[120px] rounded-full blur-2xl bg-white/40 dark:bg-white/10"
        />
        <div
          data-depth="0.08"
          className="hero-cloud-2 absolute top-[18%] right-[12%] w-[380px] h-[90px] rounded-full blur-2xl bg-[#EBD59B]/25 dark:bg-[#34D399]/10"
        />

        {/* Layer 2: Distant Mountain Ridge Silhouette (Depth 0.18) */}
        <div
          data-depth="0.18"
          className="absolute bottom-[24%] left-0 right-0 h-48 w-full"
        >
          <svg
            viewBox="0 0 1440 280"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full text-[#A3B899]/35 dark:text-[#2A3F33]/40"
          >
            <path
              d="M0 280L120 180L280 230L440 140L620 220L780 120L960 210L1120 150L1300 240L1440 180V280H0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Layer 3: Rolling Mid Hills (Depth 0.40) */}
        <div
          data-depth="0.40"
          className="absolute bottom-[10%] left-0 right-0 h-56 w-full"
        >
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full text-[#5E8363]/25 dark:text-[#1F382B]/50"
          >
            <path
              d="M0 320C240 220 480 260 720 180C960 100 1200 240 1440 160V320H0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Layer 4: Organic Foreground Meadow Gradient (Depth 0.70) */}
        <div
          data-depth="0.70"
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper dark:from-paper-dark via-paper/60 to-transparent"
        />
      </div>
    </div>
  );
}
