ss'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: process.env.NODE_ENV == 'production' ? 'source-map' : 'eval',
  entry: {
    app: __dirname + '/src/app.js',
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: process.env.NODE_ENV == 'production' ? 'https://dn-kdjz.qbox.me/m_kdjz_js/common/' : '/js/activity/build/',
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
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      exclude: /(node_modules)/,
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff',
      exclude: /(node_modules)/,
    }, {
      test: /\.(ttf|eot|svg|TTF)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      exclude: /(node_modules)/,
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=10240', //小于10k的自动处理为base64图片
      exclude: /(node_modules)/,
    }, {
      test: /\.(gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
      exclude: /(node_modules)/,
    }, ],
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
  ],
  externals: {
    moment: true,
    echarts: true,
    jquery: true,
    Spinner: true,
  },
  resolve: {
    root: __dirname + '/',
    extensions: ['', '.js', '.jsx'],
    alias: {
      'CommonUtils': 'src/lib/CommonUtils',
      'PopBox': 'src/lib/PopBox'
    },
  },
  node: {
    __dirname: true,
  },
  watch: true,
};
