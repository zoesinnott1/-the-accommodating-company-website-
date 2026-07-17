import type { Config } from "tailwindcss";

// Design tokens mirror design-system.md — that document is the source of truth.
// Update both together if the palette or type scale changes.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E8F5EC",
          100: "#C7E8D1",
          500: "#2F8F4E",
          600: "#247A41",
          700: "#1F6B39",
        },
        ink: {
          900: "#15170F",
          600: "#6E6D66",
          300: "#E6E3D9",
        },
        cream: {
          50: "#FBFAF6",
        },
        amber: {
          50: "#FCF1DC",
          600: "#B8790C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
