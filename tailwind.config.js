const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Archivo', 'sans'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".kush-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }
      addUtilities(newUtilities)
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
}
