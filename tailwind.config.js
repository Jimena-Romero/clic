/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clic-lila": "#7C3AED",
        "clic-lilaSoft": "#E9D5FF",
        "clic-dark": "#1F2937",
        "clic-amarillo": "#FFF7CC",
      },
    },
  },
  plugins: [],
};
