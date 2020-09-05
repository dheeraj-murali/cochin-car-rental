const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        wineDark: "#C1113B",
        wine: "#EC1548",
      },
    },
  },
  variants: {},
  plugins: [],
}
