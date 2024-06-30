/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', //kyuki hmm class me use krenge 
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}  