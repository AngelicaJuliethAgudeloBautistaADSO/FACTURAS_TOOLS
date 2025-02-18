/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:"#FF0000",
        azul:"#FF0000",
        body:"#232020",
        letras:"white",
        input:"#353535",
        button:"#1c1c1c",
        navbar:"#464445",
        buttonhover:"#c23030"
      }
    },
  },
  plugins: [],
}