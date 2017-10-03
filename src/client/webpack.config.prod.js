const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const babelConfig = require('./.babelrc.js')

module.exports = {
    entry: {
        App: [
            './js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../server/public'),
        publicPath: '/',
        filename: '[name].[hash].bundle.js'
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
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: babelConfig.presets,
                        plugins: babelConfig.prod.plugins
                    }
                }
            },
            {
                test: /\.(png|svg|jpe?g|gif|cur)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'img/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            optipng: {
                                optimizationLevel: 7,
                                interlaced: false
                            },
                            mozjpeg: {
                                quality: 60,
                                progressive: true
                            },
                            gifsicle: {
                                optimizationLevel: 7,
                                interlaced: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './misc', to: './' }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './templates/index.pug',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                ecma: 8,
                mangle: true,
                compress: {
                    dead_code: true,
                    passes: 3
                },
                output: {
                    comments: false,
                    beautify: false
                }
            }
        })
    ],
    stats: 'errors-only'
}
