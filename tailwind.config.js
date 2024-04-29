/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"	#FF0000",
        secondary:"#7A7A7A",
        common:"#ebebeb",
      },
    },
    fontFamily: {
      'primary': ['Nunito Sans', 'sans-serifi'],
      'secondary': ['Inter', 'sans-serifi'],
    },
    container:{
      center:true,
    }
  },
  plugins: [],
}