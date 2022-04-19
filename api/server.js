const express = require('express')
const {setupLogging} = require("./logging")
const {routes} = require("./routes")
const {setupProxies} = require("./proxy")
const {setupAuth} = require("./auth")
const {setupRateLimit} = require("./ratelimit")
const {setupCreditCheck} = require("./creditcheck")
const {httprequests} = require("./httprequests")
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
const port = 2084

setupLogging(app)
setupRateLimit(app, routes)
setupAuth(app, routes)
setupCreditCheck(app, routes)
setupProxies(app, routes)
httprequests(app, routes)

// SwaggerUI for api documentation.
// swagger.setAppHandler(app)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})