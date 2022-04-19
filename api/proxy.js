// A proxy is used to send requests to an external address or another endpoint.

const {
    createProxyMiddleware
} = require('http-proxy-middleware');

const setupProxies = (app, routes) => {
    routes.forEach(r => {
        if ("proxy" in r) {
            app.use(r.path, createProxyMiddleware(r.proxy));
        }
    })
}

exports.setupProxies = setupProxies