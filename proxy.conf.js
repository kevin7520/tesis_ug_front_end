const PROXY_HOST = "http://franklinparrales.es/"
const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: PROXY_HOST,
        secure: false,
    },
];

module.exports = PROXY_CONFIG;