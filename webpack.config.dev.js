'use strict';

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: __dirname + '/static/js/src/app.js',
  },
  output: {
    path: __dirname + '/static/js/build',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/build/',
    sourceMapFilename: "[name].js.map",
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }],
            'react'
          ],
          plugins: ['syntax-dynamic-import']
        }
      }],
    }, ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}

// module.exports = {
//   devtool: 'eval',
//   entry: {
//     app: __dirname + '/js/src/app.js',
//   },
// output: {
//   path: __dirname + '/js/build',
//   filename: '[name].js',
//   chunkFilename: '[name].chunk.js',
//   publicPath: '/build/',
//   sourceMapFilename: "[name].js.map",
// },
//   module: {
//     loaders: [{
//       test: /\.js?$|\.jsx?$/,
//       loader: 'babel-loader',
//       query: {
//         plugins: ['transform-async-to-generator', 'transform-strict-mode', 'transform-object-assign', 'transform-decorators-legacy'],
//         presets: ['es2015', 'react'],
//       },
//       exclude: /(node_modules)/,
//     }],
//   },
//   plugins: [
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'common',
//       minChunks: 2
//     }),
//     new webpack.ProvidePlugin({
//       'Promise': 'es6-promise',
//     }),
//     new ExtractTextPlugin('styles.css'),
//     new webpack.DefinePlugin({
//       'global.GENTLY': false,
//       __DEV__: true,
//     }),
//   ]
// };
