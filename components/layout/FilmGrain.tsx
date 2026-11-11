"use client";

import React from "react";

export function FilmGrain() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.025] mix-blend-multiply dark:mix-blend-screen overflow-hidden"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="subtleFilmGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#subtleFilmGrain)" />
      </svg>
    </div>
  );
}
