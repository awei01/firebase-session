var libraryName = 'index';
var outputFile;

var path = require('path')

var plugins = [];

if (process.env.WEBPACK_ENV === 'build') {
  var webpack = require('webpack')
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
}

module.exports = {
  entry: resolve('src/index.js'),
  devtool: 'sourcemap',
  output: {
    path: resolve('dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('tests')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('tests')]
      }
    ]
  },
  plugins: plugins
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
