/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      bodyBgColor : "#0B0F29",
      headerBg:"#181717",
      msgBodyBg:"#080A1A",
      FormBg:"rgb(24, 23, 23)",
      btnBg:"#f20000"
    }
  },
  plugins: [],
}