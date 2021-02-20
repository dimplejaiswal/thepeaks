/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BASE_PATH = '../../';
const APP_DIR = path.join(__dirname, BASE_PATH);

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: APP_DIR,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnError: true,
                            failOnWarning: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.js?/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader', // compiles Sass to CSS
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/public/images/[name].[ext]',
                            publicPath: '/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.NODE_ENV || 'development',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            ui: path.resolve(__dirname, `${APP_DIR}/src/ui`),
            util: path.resolve(__dirname, `${APP_DIR}/src/util`),
        },
    },
};
