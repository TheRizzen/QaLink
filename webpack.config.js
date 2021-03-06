var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './Client.jsx',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: __dirname + '/public/js/',
    publicPath: '/js/',
    filename: 'bundle.min.js'
  },
  plugins: [
  ]
};
