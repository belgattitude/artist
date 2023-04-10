module.exports = {
  plugins: {
    'postcss-import': {},
    // Will enable spec compatible css nesting
    // https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#readme
    // https://tailwindcss.com/docs/using-with-preprocessors#nesting
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
};
