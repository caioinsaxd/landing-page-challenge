/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        green: '#B9FF66',
        dark: '#191A23',
        gray: '#F3F3F3',
      },
    },
  },
  plugins: [],
}
