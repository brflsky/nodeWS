const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const app = express()

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getYear', () => new Date().getFullYear())
hbs.registerHelper('screamIt', (text) => text.toUpperCase())

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.use((req, res) => {
  res.render('maintaince', {
    pageTittle: 'Meintaince',
    welcomeMessage: 'Get out of here'
  })
})

app.get('/', (req, res) => {
  res.render('home', {
    pageTittle: 'Home',
    welcomeMessage: 'Welcome to majami'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/bad', (req, res) => {
  res.send({
    errMessage: 'Dupa'
  })
})

app.listen(port, () => {
  console.log('Server is up on port:.....' + port)
})