/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT: "0rem",
          sm:"0rem",
          lg:"2rem",
          xl:"6rem",
          "2xl":"14rem"
        }
      }
    },
  },
  plugins: [],
}