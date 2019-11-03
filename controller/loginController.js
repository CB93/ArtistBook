const Artist = require("../model/Artist")

module.exports = {

	index: (req, res) => {
		return res.render('login', { pageTitle: 'People App', heading: 'Welcome to People App', loginCSS: true });
	},

	login: (req, res) => {
		Artist.getUser(req, data => {
			if (data) return res.redirect('/artist')
			return res.render('login', { pageTitle: 'People App', heading: 'Welcome to People App', validation: 'incorrect validation', loginCSS: true })
		})
	},

}