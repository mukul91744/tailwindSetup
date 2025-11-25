/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#212529",
        secondary: "",
      },
      container: {
        xl: "1280px",
      },
    },
  },
  plugins: [],
}
