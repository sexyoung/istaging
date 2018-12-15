const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      data: path.resolve(__dirname, 'src/data'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/assets/styles'),
      images: path.resolve(__dirname, 'src/assets/images'),
      components: path.resolve(__dirname, 'src/components'),
    }
  };
  return config;
}
