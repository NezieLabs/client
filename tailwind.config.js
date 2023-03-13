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
      },
    },
  },
  plugins: [],
};
