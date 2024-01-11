/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica','Arial','sans-serif'],
        montserrat: ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}

