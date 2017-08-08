const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/txpn-core/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'txpn-core.js',
    library: 'TxpnCore',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|lib)/,
        use: {
          loader: 'babel-loader',
          options: {
            // Presets are applied in bottom-up order. Jeez.
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