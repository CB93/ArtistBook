const Artist = require("../model/Artist")

module.exports = {

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
  },

  delete: (req, res) => {
    Artist.deleteArtist(req)
    Artist.getArtists(req, data => {
      return res.render('artists', { pageTitle: 'artist', heading: 'Artist Page', artist: data, artistCSS: true });
    })

  }
}