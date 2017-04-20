ss 'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    app: __dirname + '/src/app.js',
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/build/',
    sourceMapFilename: "[name].js.map",
  },
  module: {
    loaders: [{
      test: /\.js?$|\.jsx?$/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-async-to-generator', 'transform-strict-mode', 'transform-object-assign', 'transform-decorators-legacy'],
        presets: ['es2015', 'react'],
      },
      exclude: /(node_modules)/,
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'global.GENTLY': false,
      __DEV__: true,
    }),
  ]
};
