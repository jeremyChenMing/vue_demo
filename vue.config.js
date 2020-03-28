module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://shuangchuang.dev.xz.sugonup.com',
                changeOrigin: true,
                // pathRewrite: { '^/api': '' },
            },
        }
    }
}