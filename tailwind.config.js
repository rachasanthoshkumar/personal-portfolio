/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sauce One', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors:{
        "prim" : '-webkit-linear-gradient(360deg, hsla(154, 22%, 81%, 1) 40%, hsla(42, 79%, 80%, 1) 100%)'
      }
    },
  },
  plugins: [],
}

