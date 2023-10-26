const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://piaofang.maoyan.com',
      changeOrigin: true,
    })
  );
};