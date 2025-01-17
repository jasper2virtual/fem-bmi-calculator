/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'app-tablet': '768px',
        'app-desktop': '1440px',
      },
      colors: {
        'app-blue': '#345FF6',
        'app-gunmetal': '#253347',
        'app-darkElectricBlue': '#5E6E85',
      },
    },
  },
  plugins: [],
}