/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ["Edu AU VIC WA NT Pre", 'sans-serif'],
      },
    },
  },
  plugins: [],
}