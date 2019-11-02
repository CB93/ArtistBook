const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const expressHbs = require('express-handlebars');
const playerRoutes = require('./routes/peoples');

app.use(bodyParser.urlencoded({ extended: false })) // middleware
app.use(bodyParser.json()) // middleware
app.use(playerRoutes);
app.use(express.static(path.join(__dirname,'public')));

// Handlbars middleware
app.engine('hbs',expressHbs ({
      defaultLayout: 'main-layout',
      layoutsDir: 'views/layouts/',
      partialsDir: 'views/partials',
      extname: 'hbs'
    })
  );
app.set('view engine', 'hbs');
app.set('views', 'views');

// Connect to mySQL database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_KEY
});

db.connect((err) => {
if (err) throw err;
});

// Serves home.hbs
app.get('/', function (req,res) {
  res.render('home', { pageTitle: 'Artist App', heading: 'Welcome to Artist App'});
});

app.listen(3000, () => console.log('Server ready'))







  
  
  