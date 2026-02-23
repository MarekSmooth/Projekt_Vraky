/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        grayish: {
          900: '#1a1a1a',
          800: '#2e2f33',
          700: '#3a3b3f',
          600: '#4a4b4f'
        }
      }
    }
  },
  plugins: [],
}
