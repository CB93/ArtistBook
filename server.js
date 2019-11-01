const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');


const app = express()

const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json()) // middleware

// @TODO add auth middleware
// @TODO add registration page
// @TODO add logout route


let login = require('./routes/login')

app.get('/', function (req,res) {
    res.render('home', { pageTitle: 'People App', heading: 'Welcome to People App'});
});

app.use(login)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))