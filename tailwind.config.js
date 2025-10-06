/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,ts,tsx,tsx,mdx}",
    "./pages/**/*.{ts,ts,tsx,tsx,mdx}",
    "./components/**/*.{ts,ts,tsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{ts,ts,tsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}