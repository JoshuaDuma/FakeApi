const echo = (app) => (req, res) => {
    res.json(req.query)
}
exports.echo = echo