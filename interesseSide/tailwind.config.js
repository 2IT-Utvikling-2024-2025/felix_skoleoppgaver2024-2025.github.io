/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e9e3f3',
        'background': '#120c1c',
        'primary': '#b3a0d7',
        'secondary': '#6d2e5f',
        'accent': '#b85785',
      },
    },
  },
  plugins: [],
}

