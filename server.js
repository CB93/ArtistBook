const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');
const playerRoutes = require('./route/artistRouter');
const con = require("./util/database.js")



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
app.use(playerRoutes);
app.use(express.static(path.join(__dirname,'public')));

const artistRouter = require("./route/artistRouter")

app.use("/artist", artistRouter)

app.listen(3000, () => console.log('Server ready'))







  
  
  