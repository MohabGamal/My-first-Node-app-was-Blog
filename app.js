
const render = require('ejs')
const express = require('express')
const result  = require('lodash')
const mongoose = require('mongoose')
const morgan = require('morgan')

const blogRoutes = require('./routes/blogRoutes') // blogs routes (URLs)


const app = express()
// mongodb ODM
const dbURI = 'Db uri...'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) // listen to server if database connected
    .catch((err) => console.log(err))


//templae engine
app.set('view engine', 'ejs')
// a built-in middleware to handle static files
app.use(express.static('public'))
// an installed middleware shows the details of the request
//app.use(morgan('dev'))
// needed for post requests
app.use(express.urlencoded({extended: true}))


/*
//how to make a middleware
app.use((req, res, next) => {      
    console.log('host:', req.hostname)
    console.log('port:', req.port)
    console.log('pathname:', req.path)
    console.log('query:', req.query)
    console.log('cookie:', req.cookies)
    // next() to continue the process
    next()
})
*/

// home page
app.get('/', (req, res) => {
    //res.send('<p> home </p>')
    //res.sendFile('./views/index.html', {root: __dirname})
    res.redirect('/blogs')   // redirect to blogs
})   

// blog routes
app.use('/blogs', blogRoutes)

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'}) // about.ejs// about.ejs   
})

// must be at the end in case url is not found yet
app.use((req, res) => {
    //res.send('<p> home </p>')
    //res.status(404).sendFile('./views/404.html', {root: __dirname})
    res.status(404).render('404', {title: '404'}) // 404.ejs
})