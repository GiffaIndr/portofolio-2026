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
        emerald: {
          DEFAULT: "var(--emerald)",
          deep: "var(--emerald-deep)",
        },
        ochre: "var(--ochre)",
        butter: "var(--butter)",
        sage: "var(--sage)",
        card: "var(--card-bg)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "var(--font-bodoni)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        luxe: "0 24px 60px -12px rgba(20, 20, 18, 0.08), 0 8px 24px -8px rgba(20, 20, 18, 0.04)",
        float: "0 32px 80px -16px rgba(20, 20, 18, 0.14)",
        polaroid: "0 16px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
