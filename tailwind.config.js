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
      }
    },
  },
  plugins: [],
}

