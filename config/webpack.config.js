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
        filename: '[name][hash:5].bundle.js',
        publicPath: './'
    },
    devServer: {
        compress: true,
        port: 8000,
        open: true,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.(png|svg|jpe?g)$/i,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: '/assets/images/[name].[ext]',
                // outputPath: 'images/',
            }
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'static/*',
                to: '../dist/'
            }]
        })
    ]
};