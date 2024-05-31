/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        nav: "#525AA0",
        pro: "#EDEFFF",
        peach: "#ecd1c3",
      },
    },
  },
  plugins: [],
};
