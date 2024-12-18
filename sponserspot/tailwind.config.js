/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mainPage':'url(/homepage.svg)',
        'home':'url(/home.jpg)',
        'hero':'url(/person.svg)'
      }
    },
  },
  plugins: [],
}