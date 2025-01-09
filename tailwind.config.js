/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        secondary: '#ffffff'
      },
    },
  },
  plugins: [],
}

