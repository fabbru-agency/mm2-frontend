/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      beige: "#DDD6D0",
      gray: "#333333",
      blue: "#75D3D1",
      black: {
        700: "#070807",
        600: "#070807B2",
        500: "#07080780",
        300: "#07080733"
      },
      white: "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}
