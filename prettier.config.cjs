module.exports = {
  singleQuote: true,
  semi: false,
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-astro'),
  ],
}
