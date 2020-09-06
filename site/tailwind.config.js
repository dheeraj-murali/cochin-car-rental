const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
  },
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
