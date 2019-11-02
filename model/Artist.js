module.exports = {
    getUser: (con, callback) => {
        con.query("SELECT * FROM user", callback)
      },
}