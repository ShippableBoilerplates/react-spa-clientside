const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const babelConfig = require('../../.babelrc.js')

module.exports = env => ({
    entry: {
        App: [
            './src/client/js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../../public'),
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
            { from: './src/client/misc', to: './' }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/client/templates/index.pug',
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
                ecma: 6,
                mangle: true,
                compress: true,
                output: {
                    comments: false,
                    beautify: false
                }
            }
        })
    ]
})
