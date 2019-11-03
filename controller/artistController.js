const Artist = require("../model/Artist")

module.exports = {
    index: (req, res) => {
        res.render('home', { pageTitle: 'People App', heading: 'Welcome to People App' });
    },
    login: (req, res) => {
        Artist.getUser(req, data => {
            if (data) {
                res.redirect('/artist')
            } else {
                res.render('home', { pageTitle: 'People App', heading: 'Welcome to People App', validation: 'incorrect validation' })
            }
        })
    },
    artist: (req, res) => {
        res.render('artists', { pageTitle: 'People App', heading: 'artist' });
    }
}