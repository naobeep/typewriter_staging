module.exports = {
  plugins: [
    require('css-declaration-sorter')({ order: 'smacss' }),
    require('autoprefixer')({ grid: 'autoplace' }),
    require('cssnano')({
      autoprefixer: false,
      zindex: true,
    }),
  ],
};
