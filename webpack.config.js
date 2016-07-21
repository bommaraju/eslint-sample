/**
 * Created by bhargavib on 17-06-2016.
 */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  root   : [
    path.resolve(__dirname, './js'),
  ],
  resolve: {
    extensions: ['', '.js', '.html'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test.html',
      filename: 'test.html',
    }),
  ],
  module : {
    loaders: [
      {
        test   : /\.js$/,
        exclude: /(node_modules)/,
        loader : 'babel',
        query  : {
          presets: ['es2015', 'stage-2'],
        },
      },
      {
        test   : /\.html$/,
        include: path.resolve(__dirname, 'js'),
        loader : 'html',
      },
      {
        test   : /\.css$/,
        loader : 'style!css',
        include: path.resolve(__dirname, 'js/css'),
      },
    ],
  },
  entry  : './js/index.js',
  output : {
    path    : __dirname,
    filename: './js/bundle/bundle.js',
  },
};
