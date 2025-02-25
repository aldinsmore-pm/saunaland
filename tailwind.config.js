const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(20, 50%, 40%)", // Warm brown
          foreground: "hsl(60, 30%, 96%)",
        },
        secondary: {
          DEFAULT: "hsl(30, 40%, 50%)", // Muted orange
          foreground: "hsl(60, 30%, 96%)",
        },
        muted: {
          DEFAULT: "hsl(30, 20%, 96%)", // Warm light gray
          foreground: "hsl(20, 30%, 30%)",
        },
        accent: {
          DEFAULT: "hsl(20, 40%, 85%)",
          foreground: "hsl(20, 30%, 30%)",
        },
        destructive: {
          DEFAULT: "hsl(0 100% 50%)",
          foreground: "hsl(60, 30%, 96%)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "steam-right": {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.3" },
          "30%": { transform: "translateY(-50px) translateX(20px) scale(1.5)", opacity: "0.8" },
          "60%": { transform: "translateY(-100px) translateX(40px) scale(2)", opacity: "0.9" },
          "100%": { transform: "translateY(-200px) translateX(60px) scale(2.5)", opacity: "0" },
        },
        "steam-left": {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.3" },
          "30%": { transform: "translateY(-50px) translateX(-20px) scale(1.5)", opacity: "0.8" },
          "60%": { transform: "translateY(-100px) translateX(-40px) scale(2)", opacity: "0.9" },
          "100%": { transform: "translateY(-200px) translateX(-60px) scale(2.5)", opacity: "0" },
        },
        "steam-center": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.4" },
          "30%": { transform: "translateY(-60px) scale(1.5)", opacity: "0.85" },
          "60%": { transform: "translateY(-120px) scale(2.5)", opacity: "0.95" },
          "100%": { transform: "translateY(-220px) scale(3)", opacity: "0" },
        },
        "steam-swirl": {
          "0%": { transform: "translateY(0) rotate(0deg) scale(1)", opacity: "0.3" },
          "30%": { transform: "translateY(-60px) rotate(120deg) scale(1.5)", opacity: "0.8" },
          "60%": { transform: "translateY(-120px) rotate(240deg) scale(2)", opacity: "0.9" },
          "100%": { transform: "translateY(-180px) rotate(360deg) scale(2.5)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "steam-right": "steam-right 8s ease-in-out infinite",
        "steam-left": "steam-left 8s ease-in-out infinite",
        "steam-center": "steam-center 8s ease-in-out infinite",
        "steam-swirl": "steam-swirl 10s ease-in-out infinite",
        "fade-in": "fade-in 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

