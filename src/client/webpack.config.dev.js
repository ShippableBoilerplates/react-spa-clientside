const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const babelConfig = require('../../.babelrc.js')

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        App: [
            './src/client/js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '/'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'pug-html-loader'
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            useEslintrc: true
                        },
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: babelConfig.presets,
                        plugins: babelConfig.dev.plugins
                    }
                }
            },
            {
                test: /\.(png|svg|jpe?g|gif|cur)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        hot: true,
        inline: true,
        port: 3000,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Somnolence',
            hash: true,
            filename: 'index.html',
            template: './src/client/templates/app.pug',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
