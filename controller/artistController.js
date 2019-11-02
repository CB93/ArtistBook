const Artist = require("../model/Artist")

module.exports = {
    index: function(req, res) {
        res.render('home', { pageTitle: 'People App', heading: 'Welcome to People App'});
    },
    login: function(req, res) {
        Artist.getUser(req.con, function(err,rows) {
            console.log(rows)
            // res.render('home', {data:rows})
        })
        
    }
}