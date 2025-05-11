/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // <-- ADD THIS LINE
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'],
    },
      colors: {
        primary: '#1d4ed8',       // Tailwind blue-700
        secondary: '#f1f5f9',     // Slate-100
        dark: '#0f172a',          // Slate-900
      },
    },
  },
  plugins: [],
}
