/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orangecol': 'hsl(26, 100%, 55%)',
        'paleorange': 'hsl(25, 100%, 94%)',
        'Lightgrayishblue': 'hsl(223, 64%, 98%)',
        'Grayishblue': 'hsl(220, 14%, 75%)'
      },
      fontFamily: {
        kumbh: ['Kumbh Sans'],
      },
    },
  },
  plugins: [],
}
