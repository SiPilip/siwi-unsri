/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        unsri: "#FFB800",
        unsrihover: "#EAA901",
        unsrihover2: "#FFF0C8",
      },
    },
  },
  plugins: [],
};
