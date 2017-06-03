const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    './src/imports'
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
      loader: 'style-loader!css-loader!sass-loader'
    },
    // Use this loader to create a seperate style.css file
    // {
    //   test: /\.s?css$/,
    //   loader: ExtractTextPlugin
    //       .extract({
    //         fallback: 'style-loader',
    //         use: 'css-loader!sass-loader'
    //       })
    // },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader?name=img/[name].[ext]'
      // exclude: ['/favicon.png/', '/Logo_1024.png/']
    },
    {
      test: /\.html$/,
      loader: 'file-loader?name=[name].html'
    }
    // {
    //   test: /favicon.png/,
    //   loader: 'file-loader?name=img/favicon.png'
    // }
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      fullPage: 'fullpage.js'
    }),
    new CleanWebpackPlugin(['public'], {
      verbose: true
    }),
    new ExtractTextPlugin('css/style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
