const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');
const BASE_PATH = '../../';
const APP_DIR = path.join(__dirname, `${BASE_PATH}dist`);
const pageExpiry = 60 * 60 * 24 * 365;

const runTimeConfig = [
    {
        urlPattern: '/',
        handler: 'NetworkFirst',
        options: {
            expiration: {
                maxAgeSeconds: pageExpiry,
            },
            cacheableResponse: {
                statuses: [0, 200],
            },
            cacheName: 'pages',
        },
    },
];

module.exports = [
    new GenerateSW({
        cacheId: 'thepeaks-precache',
        swDest: path.join(APP_DIR, 'service-worker.js'),
        exclude: [/^manifest.*\.js(?:on)?$/, /service-worker.js/],
        runtimeCaching: runTimeConfig,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
    }),
];
