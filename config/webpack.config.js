/**
 * Created by Lester on 2020/12/19
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name][hash:5].bundle.js',
        publicPath: './'
    },
    devServer: {
        compress: true,
        port: 8000,
        open: true,
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    performance: {
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, {
                loader: 'css-loader',
                options: {
                    // url: false,
                }
            }]
        }, {
            test: /\.(png|svg|jpe?g)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'assets/images/[name].[ext]'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            }
        }, {
            test: /\.htm?l$/,
            loader: 'html-withimg-loader'
        }, {
            test: /\.less$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: {
                        localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
                    },
                },
            }, 'less-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'static/*',
                to: '../dist/'
            }]
        })
    ]
};
