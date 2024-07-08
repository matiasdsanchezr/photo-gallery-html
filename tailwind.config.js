/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(2)" },
          "50%": { transform: "scale(1);" },
        },
        translate: {
          "0%, 100%": { objectPosition: "center top" },
          "50%": { objectPosition: "center center" },
        },
      },
      animation: {
        zoom: "zoom 10s ease-in-out infinite",
        translate: "translate 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
