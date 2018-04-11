var path = require('path')
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin')

let plugins = [
  new HtmlwebpackPlugin({
    title: 'Vue-Qart',
    filename: 'index.html',
    template: 'demo/index.html',
    inject: true,
    hash: true,
    path: path.resolve(__dirname, 'assets'),
  }),
]

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ])
}
module.exports = {
  entry: path.resolve(__dirname, 'demo/index'),
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '/demo'),
    publicPath: '/',
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
    },
  },
  performance: {
    hints: false,
  },
  devtool: process.env.NODE_ENV === 'production' ? '' : '#eval-source-map',
  plugins,
}
