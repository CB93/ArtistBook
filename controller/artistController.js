const Artist = require("../model/Artist")

module.exports = {
    index: (req, res) => {
        return res.render('home', { pageTitle: 'People App', heading: 'Welcome to People App', homeCSS: true });
    },

    login: (req, res) => {
        Artist.getUser(req, data => {
            if (data) {
                return res.redirect('/artist')
            }
            return res.render('home', { pageTitle: 'People App', heading: 'Welcome to People App', validation: 'incorrect validation', homeCSS: true })
        })
    },

    artist: (req, res) => {
        Artist.getArtists(req, data => {
            return res.render('artists', { pageTitle: 'artist', heading: 'Artist Page', artist: data, artistCSS: true });
        })
    },

    upload: (req, res) => {
        Artist.addArtist(req)
        Artist.getArtists(req, data => {
            return res.render('artists', { pageTitle: 'artist', heading: 'Artist Page', artist: data, artistCSS: true });
        })

    }
}