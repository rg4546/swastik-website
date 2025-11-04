/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#00e5c0",
        base: "#0f172a",
        textlight: "#f1f5f9",
        card: "#1e293b",
      },
    },
  },
  plugins: [],
}
