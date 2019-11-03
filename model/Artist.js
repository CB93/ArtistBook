module.exports = {

	getUser: (req, callback) => {
		const username = req.body.username
		const password = req.body.password

		req.con.query("SELECT * FROM user", (err, res) => {
			callback((res[0].username == username && res[0].password == password))
		})
	},

	getArtists: (req, callback) => {
		req.con.query("SELECT * FROM artist", (err, res) => {
			callback(res)
		})
	},

	addArtist: (req) => {
		const timestamp = new Date().getUTCMilliseconds();
		req.con.query("INSERT INTO `artist`.`artist` (`idartist`, `name`, `about`, `pic`) VALUES ('" + timestamp
			+ "', '" + req.body.name + "', '" + req.body.about + "', '" + req.body.pic + "');")
	},

	deleteArtist: (req) => {
		req.con.query("DELETE FROM artist WHERE idartist = '" + req.body.id + "'")
	}
}