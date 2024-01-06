/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      bodyBgColor : "#282c34",
      headerBg:"#181717",
      msgBodyBg:"rgb(40, 37, 53)",
      FormBg:"rgb(24, 23, 23)",
      btnBg:"rgb(56, 56, 143)"
    }
  },
  plugins: [],
}