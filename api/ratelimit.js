const rateLimit = require("express-rate-limit");

const setupRateLimit = (app, routes) => {
    routes.forEach(r => {
        if (r.rateLimit) {
            app.use(r.path, rateLimit(r.rateLimit));
        }
    })
}

exports.setupRateLimit = setupRateLimit