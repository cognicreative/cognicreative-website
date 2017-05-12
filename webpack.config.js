const webpack = require('webpack')
const path = require('path')

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
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader?name=img/img-[hash:6].[ext]',
      exclude: /favicon.png/
    },
    {
      test: /\.html$/,
      loader: 'file-loader?name=index.html'
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
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
