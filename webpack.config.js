const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const css = new ExtractTextPlugin('styles.css')

module.exports = {

  entry: {
    idom: path.join(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        loader: css.extract({
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path]__[local]'
          }
        }),
      }
    ]
  },

  plugins: [ css ],

  resolve: {
    extensions: [ '.js', '.json', '.jsx', '.css' ]
  }

}
