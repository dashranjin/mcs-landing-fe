/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        theme: "#143D8C",
        darkBlue: "#070B60",
        system: "#F1F1F1",
      },
      textColor: {
        theme: "#070B60",
      },
    },
  },
  plugins: [],
};
