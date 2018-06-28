const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: devMode ? '[name].js' : '[hash].[name].js',
        path: path.resolve(__dirname, 'static'),
        publicPath: devMode ? '/' : '/static'
    },
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'inline-source-map' : false,
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.jpg$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'static'),
        publicPath: '/',
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new CleanWebpackPlugin(['static']),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: path.resolve(__dirname, 'static/index.html'),
            template: path.resolve(__dirname, 'src/index.html'),
        })
    ],
};