// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "background-card": "var(--background-card)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-dark": "var(--accent-dark)",
        "brand-blue": "var(--brand-blue)",
        "brand-blue-light": "var(--brand-blue-light)",
        "brand-blue-dark": "var(--brand-blue-dark)",
        "brand-gold": "var(--brand-gold)",
        "brand-gold-light": "var(--brand-gold-light)",
        "brand-gold-dark": "var(--brand-gold-dark)",
        "card-bg": "var(--card-bg)",
        "hover-bg": "var(--hover-bg)",
        "secondary-text": "var(--secondary-text)",
        "border-color": "var(--border-color)",
        "border-accent": "var(--border-accent)",
        "muted": "var(--secondary-text)",
        success: "var(--success)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-bricolage)", "sans-serif"],
        instrument: ["var(--font-instrument)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        shimmer: "shimmer 2s infinite",
        ticker: "ticker 28s linear infinite",
        blink: "blink 2s infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "200px 0" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
};
