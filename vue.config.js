module.exports = {
  devServer: {
    port: 1044,
    host: 'localhost',
    compress: true,
    disableHostCheck: true,
    proxy: {
      '/fqh-store': {
        target: 'http://127.0.0.1:8082',
        ws: true,
        pathRewrite: {
          '^/fqh-store/api': 'http://127.0.0.1:8082'
        }
      }
    }
  }

}
