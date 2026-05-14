// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
        "surface-3": "var(--surface-3)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-focus": "var(--primary-focus)",
        "on-primary": "var(--on-primary)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "ink-subtle": "var(--ink-subtle)",
        "ink-tertiary": "var(--ink-tertiary)",
        hairline: "var(--hairline)",
        "hairline-strong": "var(--hairline-strong)",
        success: "var(--success)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "96px",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        pill: "9999px",
      },
      fontSize: {
        "display-xl": ["80px", { lineHeight: "1.05", letterSpacing: "-3px", fontWeight: "600" }],
        "display-lg": ["56px", { lineHeight: "1.10", letterSpacing: "-1.8px", fontWeight: "600" }],
        "display-md": ["40px", { lineHeight: "1.15", letterSpacing: "-1px", fontWeight: "600" }],
        headline: ["28px", { lineHeight: "1.20", letterSpacing: "-0.6px", fontWeight: "600" }],
        "card-title": ["22px", { lineHeight: "1.25", letterSpacing: "-0.4px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.50", letterSpacing: "-0.1px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.50", letterSpacing: "-0.05px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.50", letterSpacing: "0", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.40", letterSpacing: "0", fontWeight: "400" }],
        button: ["14px", { lineHeight: "1.20", letterSpacing: "0", fontWeight: "500" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        ticker: "ticker 28s linear infinite",
        blink: "blink 2s infinite",
        "slide-down": "slideDown 0.6s ease both",
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
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
