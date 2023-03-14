/** @type {import('tailwindcss').Config} */

// Basic Theme for temporarily
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgba(2, 0, 36, 1)",
          dark: "rgba(2, 0, 36, 1)",
        },
        // secondary color
        secondary: {
          50: "#F9EBF5",
          100: "#EAC5EA",
          200: "#D69BDB",
          300: "#C16FD0",
          400: "#9b90a3",
          500: "#aa89c3",
          600: "#7B1FA2",
          700: "#6B1A99",
          800: "#4A1173",
          900: "#320B4C",
        },
      },
    },
  },
  plugins: [],
};
