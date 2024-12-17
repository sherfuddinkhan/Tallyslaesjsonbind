const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/tally',  // The path that needs to be proxied
    createProxyMiddleware({
      target: 'http://localhost:9000',  // Tally Prime server
      changeOrigin: true,
      secure: false,
    })
  );
};