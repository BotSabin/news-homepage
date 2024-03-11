/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        softorange: 'hsl(35, 77%, 62%)',
        softred: 'hsl(5, 85%, 63%)',
        offwhite: 'hsl(36, 100%, 99%)',
        grayish: 'hsl(233, 8%, 79%)',
        darkgrayish: 'hsl(236, 13%, 42%)',
        verydark: 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
}