module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production/'
        : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}