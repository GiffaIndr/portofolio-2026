"use client";

import React from "react";

export function FilmGrain() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.045] mix-blend-multiply dark:mix-blend-screen overflow-hidden"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="filmGrainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#filmGrainFilter)" />
      </svg>
      {/* Subtle vignette border gradient */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(27,26,23,0.14)] dark:shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
    </div>
  );
}
