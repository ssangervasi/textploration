const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'txpn-core.js',
    library: 'TxpnCore',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'flow',
            ],
          }
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  // https://webpack.js.org/guides/author-libraries/#add-externals
  externals: [],
};