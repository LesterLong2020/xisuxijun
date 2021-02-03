/**
 * Created by Lester on 2020/12/19
 */

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");

module.exports = function (env) {
    const isDev = env === 'development';

    return {
        entry: {
            main: path.resolve(__dirname, '../src/index.ts'),
            // 'pageTwo/': path.resolve(__dirname, '../src/index.ts')
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'js/[name][hash:5].bundle.js',
            publicPath: './'
        },
        mode: env,
        devServer: {
            hot: true,
            inline: true,
            compress: true,
            open: true,
            publicPath: '/',
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                    pathRewrite: { '^/api': '' },
                    changeOrigin: true
                }
            }
        },
        watchOptions: {
            poll: 1000,
            aggregateTimeout: 500,
            ignored: /node_modules/
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            alias: {
                '@': path.resolve(__dirname, '../src'),
                'src': path.resolve(__dirname, '../src'),
            }
        },
        performance: {
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        },
        devtool: 'inline-source-map',
        optimization: {
            splitChunks: {
                chunks: 'async',   // initial、async和all
                minSize: 30000,   // 形成一个新代码块最小的体积
                maxSize: 0, //拆分之前最大的数值，默认为0，即不做限制
                maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
                maxInitialRequests: 3,   // 最大初始化请求数
                automaticNameDelimiter: '-',   // 打包分割符
                name: 'name'
            },
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            }, {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: '/node_modules/',
            }, {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader']
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
            isDev && new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
            }),
            /* new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: "pageTwo.html",
                chunks: ['pageTwo/']
            }), */
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css'
            }),
            new CopyWebpackPlugin({
                patterns: [{
                    from: 'static/*',
                    to: '../dist/'
                }]
            }),
            new SimpleProgressWebpackPlugin(),
            // new BundleAnalyzerPlugin()
        ].filter(Boolean)
    }
};
