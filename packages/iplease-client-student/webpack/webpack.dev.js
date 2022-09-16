const path = require('path');

const { merge } = require('webpack-merge');

// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
  },
});
