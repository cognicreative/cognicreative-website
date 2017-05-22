const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader'
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    },
    {
      test: /\.s?css$/,
      loader: ExtractTextPlugin
        .extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader?name=img/img-[hash:6].[ext]',
      exclude: ['/favicon.png/', '/Logo_1024.png/']
    },
    {
      test: /\.html$/,
      loader: 'file-loader?name=[name].html'
    },
    {
      test: /favicon.png/,
      loader: 'file-loader?name=img/favicon.png'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['public'], {
      verbose: true
    }),
    new ExtractTextPlugin('css/styles.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
