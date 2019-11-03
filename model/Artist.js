module.exports = {
  getUser: (req, callback) => {
    const username = req.body.username
    const password = req.body.password

    req.con.query("SELECT * FROM user", (err, res) => {
      callback((res[0].username == username && res[0].password == password))
    })
  },
  getArtists: (req,callback) => {
    req.con.query("SELECT * FROM artist", (err, res) => {
      callback(res[0])
    })
  }
}