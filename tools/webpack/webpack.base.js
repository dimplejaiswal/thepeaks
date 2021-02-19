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
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            minimize: true,
                        },
                    },
                    'sass-loader', // compiles Sass to CSS
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
        },
    },
};
