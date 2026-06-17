/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
        ],
        heading: ["var(--font-heading)", "sans-serif"],
        fancy: ["var(--font-fancy)", "cursive"],
        custom: ["var(--font-custom)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
