const { home } = require('./controllers/home')
const { download } = require('./controllers/download')
const { echo } = require('./controllers/echo')

/*
* This is a security file to be used with middleware/
* These can contain routes or proxies.
*   Proxies send users to another website or endpoint.
*   Routes direct a user from an endpoint to an HTTP request object to process their request. These should not include a path here, only in the server.js file.
* This is in the same file to create an API gateway for internal and external requests. This configuration file includes things such as: rate-limiters, credits check, authentated-required pages and the routes/proxies.
*/
const routes = [
    { 
        path: '/',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        request: "GET",
        route: home
    },
    { 
        path: '/echo',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        request: "GET",
        route: echo
    },
    { 
        path: '/download',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        request: "GET",
        route: download
    },
    {
        path: '/premium',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.joshuaduma.ca",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: '',
            },
        }
    }
]

exports.routes = routes;
