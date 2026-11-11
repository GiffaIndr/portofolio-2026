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
        paper: {
          DEFAULT: "#F7F4EE",
          dark: "#141412",
        },
        surface: {
          DEFAULT: "#EDE7DA",
          dark: "#1E1E1A",
          cardDark: "#22221E",
        },
        ink: {
          DEFAULT: "#141412",
          muted: "#4A4843",
          light: "#FAF7F2",
          lightMuted: "#DCD7C9",
          lightDim: "#B8B3A4",
        },
        butter: {
          DEFAULT: "#F2D13B",
          hover: "#E5C42B",
          light: "#FDE047",
        },
        grass: {
          DEFAULT: "#2B6E3F",
          light: "#84CC16",
          lime: "#A3E635",
        },
        terracotta: {
          DEFAULT: "#D9622B",
          light: "#FB923C",
        },
        sky: {
          DEFAULT: "#1F75B8",
          light: "#38BDF8",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        cutout: ["var(--font-dela)", "var(--font-syne)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        paper: "3px 3px 0px rgba(20, 20, 18, 0.9)",
        paperDark: "3px 3px 0px rgba(250, 247, 242, 0.2)",
        polaroid: "4px 4px 0px rgba(20, 20, 18, 0.85)",
        polaroidDark: "4px 4px 0px rgba(250, 247, 242, 0.25)",
        float: "0 20px 40px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
