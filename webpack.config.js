const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.s?css$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader?name=img/img-[hash:6].[ext]',
      exclude: /node_modules/
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/images/favicon.png'
    })
  ]
}
