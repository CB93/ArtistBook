const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool= mysql.createConnection({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password : process.env.DB_KEY,
    database : process.env.DB_NAME
  });

module.exports = pool.promise();

