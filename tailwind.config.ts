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
        paypal: {
          blue: "#0070e0",
          darkBlue: "#00457c",
          navy: "#001c3f",
          deepNavy: "#001435",
          lightBlue: "#f0f7fd",
          iceBlue: "#e5f2fc",
          cardBg: "#ffffff",
          softGray: "#f5f7fa",
          borderGray: "#e1e7ed",
          textNavy: "#0c2340",
          textMuted: "#596b82",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
      },
      boxShadow: {
        "card": "0 2px 12px -2px rgba(0, 28, 63, 0.06), 0 1px 3px 0 rgba(0, 28, 63, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(0, 28, 63, 0.12), 0 4px 10px -2px rgba(0, 28, 63, 0.04)",
        "pill": "0 2px 8px rgba(0, 112, 224, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
