/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
