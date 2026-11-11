import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        ink: "var(--ink)",
        sky: {
          DEFAULT: "var(--sky)",
          deep: "var(--sky-deep)",
        },
        meadow: {
          DEFAULT: "var(--meadow)",
          deep: "var(--meadow-deep)",
        },
        butter: "var(--butter)",
        terracotta: "var(--terracotta)",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "Playfair Display", "serif"],
        serif: ["var(--font-instrument)", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        hud: "0.14em",
      },
      boxShadow: {
        paper: "0 10px 30px var(--paper-shadow)",
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        float: "0 20px 40px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
