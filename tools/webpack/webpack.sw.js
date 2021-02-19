const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');
const BASE_PATH = '../../';
const APP_DIR = path.join(__dirname, `${BASE_PATH}public`);

const runTimeConfig = [];

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
