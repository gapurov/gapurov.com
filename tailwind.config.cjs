/** @type {import('tailwindcss').Config} */
const path = require('path')
const fromRoot = (p) => path.join(__dirname, p)
const defaultTheme = require('tailwindcss/defaultTheme')

console.log(defaultTheme)

module.exports = {
  content: [fromRoot('./src/**/*.+(astro|html|js|jsx|ts|tsx|mdx|md)')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
