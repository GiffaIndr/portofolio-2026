// lib/motion.ts
// Official Motion Tokens from PARALLAX SCROLL DESIGN specification

export const EASE = {
  luxe: "expo.out", // Masuk: cepat di awal, mendarat sangat lembut
  soft: "power3.out",
  inOut: "power3.inOut", // Transisi halaman, tirai
  scrub: "none", // Untuk animasi yang dikendalikan scroll
};

export const DUR = {
  xs: 0.4,
  sm: 0.7,
  md: 1.0,
  lg: 1.4,
};

export const STAGGER = {
  text: 0.06,
  list: 0.08,
  grid: 0.05,
};

export const SCRUB = {
  tight: 0.6,
  soft: 1.0,
  dreamy: 1.4, // Angka = detik "ekor" smoothing
};
