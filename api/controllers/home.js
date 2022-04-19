const home = (app) => (req, res) => {
        res.json({    
            home: "You found me!"
        })
}
exports.home = home