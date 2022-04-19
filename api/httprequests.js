/*
* Gets the request types and groups the requests into HTTP request handlers.
*/
const httprequests = (app, routes) => {
    routes.forEach(r => {
        request = r.request
        if (request && r.route) {
            switch(request){
                case "GET":
                    app.route(r.path).get(r.route(app))
                    break
                case "POST":
                    app.route(r.path).post(r.route(app))
                    break
                case "PUT":
                    app.route(r.path).put(r.route(app))
                    break
                case "DELETE":
                    app.route(r.path).delete(r.route(app))
                    break
                default:
                    break
            }
        }
    })
}

exports.httprequests = httprequests