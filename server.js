const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');
const artistRouter = require('./route/artistRouter');
const con = require("./util/database.js")

const port = process.env.PORT || 8080;

// Using hbs template engine
app.engine('hbs',expressHbs ({
      defaultLayout: 'main-layout',
      layoutsDir: 'views/layouts/',
      partialsDir: 'views/partials',
      extname: 'hbs'
    })
  );
app.set('view engine', 'hbs');
app.set('views', 'views');

// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

app.use(bodyParser.urlencoded({ extended: false })) // middleware
app.use(bodyParser.json()) // middleware
app.use(artistRouter);
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => console.log('Server ready'))







  
  
  