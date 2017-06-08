const config = require('./webpack.config.js')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
)

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
)

config.plugins.push(
    new CleanWebpackPlugin(['public'], {
      verbose: true
    })
)

module.exports = config
