import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2DBE73",
        "bg-soft": "#F7FDF9",
        accent: "#FFCC66",
        text: "#111111",
        border: "#E6F5EC",
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "var(--font-nunito)",
          "system-ui",
          "sans-serif",
        ],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(45, 190, 115, 0.1)",
        card: "0 2px 12px -2px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
