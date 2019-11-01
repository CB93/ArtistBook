const express = require('express')
const path = require('path')

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

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')));

// @TODO add auth middleware
// @TODO add registration page
// @TODO add logout route

app.use('/', require('./routes/login'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))