
module.exports = {
  // parser: 'sugarss', // will need to add to loader options if using
  plugins: {
    // 'postcss-import': {}, //???
    // 'postcss-cssnext': {}, // X
    // 'rucksack-css': {}, // npm i rucksack-css -D
    'autoprefixer': {},
    'cssnano': {}
  }
}
