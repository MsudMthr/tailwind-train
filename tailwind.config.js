/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        graphik: "Graphik Regular",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
