var path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'demo/index'),
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'demo'),
      publicPath: '/'
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
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}