const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.php', './src/**/*.js'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    colors: {
      white: colors.white,
      black: 'rgb(33, 33, 33)',
      lightBlue: 'rgb(81, 116, 152)',
      darkBlue: 'rgb(7, 12, 30)',
      gray: 'rgb(162, 162, 162)',
      darkGray: 'rgb(96, 96, 96)',
      orange: 'rgb(252, 73, 36)',
      overlay: 'rgba(27, 33, 52, 0.5)',
    },
    fontFamily: {
      forum: ['Forum', 'cursive'],
      rubik: ['Rubik', 'sans-serif'],
    },
  },
}
