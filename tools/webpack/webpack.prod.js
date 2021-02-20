const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const OfflinePlugin = require('offline-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base');
const ServiceWorkerPlugin = require('./webpack.sw');

const BASE_PATH = '../../';
const APP_DIR = path.join(__dirname, BASE_PATH, '/src');

module.exports = merge(webpackBase, {
    mode: 'production',

    entry: {
        main: [require.resolve('react-app-polyfill/ie11'), `${APP_DIR}/index.js`],
    },

    output: {
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].lazy.js',
        path: path.resolve(__dirname, BASE_PATH, 'dist'),
        publicPath: '/',
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
        ],
        nodeEnv: 'production',
        sideEffects: true,
        concatenateModules: true,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 10,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                },
            },
        },
    },

    plugins: [
        // Minify and optimize the index.html
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),

        // // Put it in the end to capture all the HtmlWebpackPlugin's
        // // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
        // new OfflinePlugin({
        //     relativePaths: false,
        //     publicPath: '/',
        //     appShell: '/',

        //     // No need to cache .htaccess. See http://mxs.is/googmp,
        //     // this is applied before any match in `caches` section
        //     excludes: ['.htaccess'],

        //     caches: {
        //         main: [':rest:'],

        //         // All chunks marked as `additional`, loaded after main section
        //         // and do not prevent SW to install. Change to `optional` if
        //         // do not want them to be preloaded at all (cached only when first loaded)
        //         additional: ['*.chunk.js'],
        //     },

        //     // Removes warning for about `additional` section usage
        //     safeToUseOptionalCaches: true,
        // }),

        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        // new WebpackPwaManifest({
        //     name: 'React Boilerplate',
        //     short_name: 'React BP',
        //     description: 'My React Boilerplate-based project!',
        //     background_color: '#fafafa',
        //     theme_color: '#b1624d',
        //     inject: true,
        //     ios: true,
        //     icons: [
        //         {
        //             src: path.resolve('app/images/icon-512x512.png'),
        //             sizes: [72, 96, 128, 144, 192, 384, 512],
        //         },
        //         {
        //             src: path.resolve('app/images/icon-512x512.png'),
        //             sizes: [120, 152, 167, 180],
        //             ios: true,
        //         },
        //     ],
        // }),

        new webpack.ids.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
        }),

        ...ServiceWorkerPlugin,
    ],

    performance: {
        assetFilter: (assetFilename) =>
            !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
});
