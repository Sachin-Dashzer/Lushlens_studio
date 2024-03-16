/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.html"],
  theme: {
    extend: {

      fontFamily :{

        heading : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      },

      colors: {
        primary: "#222223",
        secondary: "#ffffff",
        third: "#fae94d",
        fourth: "#2a2a2a",
      },
    },
  },
  plugins: [],
}

