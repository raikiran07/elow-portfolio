import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      scale: {
        '101': '1.01',
      },
      backgroundImage: {
        foo: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        // dark: "linear-gradient(rgba(45, 52, 64, 0.5) 0px, transparent 0),linear-gradient(90deg, rgba(45, 52, 64, 0.5) 0px, #0b0d0f 0)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "scroll":{
          from:{
            transform:"translateX(0)",
          },
          to:{
            transform:"translateX(-100%)",
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeInDown": {
          from: {
            opacity: "0",
            transform: "translate3d(0, -20px, 0)",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translate3d(0, 20px, 0)",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: "1",
          },
        },
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        blur: {
          "0%": {
            opacity: "0",
            filter: "brightness(1) blur(20px)",
          },
          "100%": {
            opacity: "1",
            filter: "brightness(1) blur(0px)",
          },
        },
        gradientBlur: {
          "0%": {
            opacity: "0",
            filter: "brightness(1) blur(20px)",
            "background-position": "0% 50%",
          },
          "33%": {
            opacity: "1",
            filter: "brightness(1) blur(13px)",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "66%": {
            opacity: "1",
            filter: "brightness(1) blur(6px)",
          },
          "100%": {
            opacity: "1",
            filter: "brightness(1) blur(0px)",
            "background-position": "0% 50%",
          },
        },
        opacityzeroToOne:{
          from:{
            opacity:"0",
          },
          to:{
            opacity:"1"
          }
        },
        scrollHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInDown: "fadeInDown 1s ease",
        gradient: "gradient 7s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease",
        blur: "blur 1.2s ease",
        gradientBlur: "gradient 7s ease-in-out infinite, blur 1.6s ease",
        up:"accordian-up 3s ease-in-out",
        scrollInfinite:"scroll 30s linear infinite",
        animateTitle:"opcityzeroToOne 2s ease-in-out",
        scrollHorizontal: 'scrollHorizontal 5s linear infinite',
        pause:'none'
      },
      fontFamily:{
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config