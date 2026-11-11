"use client";

import React from "react";

export function SwirlDoodle({ className = "", color = "#F2D13B" }: { className?: string; color?: string }) {
  return (
    <svg
      className={`overflow-visible pointer-events-none ${className}`}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 15 20 C 40 -5, 80 10, 70 45 C 60 80, 20 70, 25 40 C 30 10, 85 25, 90 60"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarburstCutout({ className = "", color = "#F2D13B" }: { className?: string; color?: string }) {
  return (
    <svg
      className={`overflow-visible pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="50,0 63,33 98,35 71,58 79,93 50,73 21,93 29,58 2,35 37,33" />
    </svg>
  );
}

export function FourPointStar({ className = "", color = "#1F75B8" }: { className?: string; color?: string }) {
  return (
    <svg
      className={`overflow-visible pointer-events-none ${className}`}
      viewBox="0 0 80 80"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 40 0 Q 40 40 0 40 Q 40 40 40 80 Q 40 40 80 40 Q 40 40 40 0 Z" />
    </svg>
  );
}
