const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// TODO: Make this an actual plugin?
function modularEntries({
  root='',
  dirs=[],
  log=false,
}) {
  const logFn = log ? console.log : () => {};
  logFn(`Entries: ${[root].concat(dirs)}`);
  let entries = {
    [path.join(root, 'index')]: path.join(root, 'index.js'),
  };
  return dirs.reduce(
    (entries, entry) => {
      let entryIndex = path.join(root, entry, 'index');
      let entryPath = path.join(root, entry, 'index.js');
      entries[entryIndex] = entryPath;
      logFn(`${entryIndex}:\t\t${entryPath}`);
      return entries;
    }, entries);
}


module.exports = {
  context: path.resolve(__dirname, 'src'),
  // entry: 'txpn-core/index.js',
  entry: {
    'txpn-core': 'txpn-core/index.js',
    // 'lib': 'txpn-core/index.js',
    'dataModel/index': 'txpn-core/dataModel/index.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'index' // Specify the common bundle's name.
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    // filename: 'txpn-core.js',
    filename: '[name].js',
    // library: 'TxpnCore',
    // libraryTarget: 'umd',
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