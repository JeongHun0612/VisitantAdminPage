var path = require('path');

module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    outputDir: path.resolve("../backend/public"),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}