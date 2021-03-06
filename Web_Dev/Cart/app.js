const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/store', (req, res) =>{
    res.render('store')
})

app.get('/about', (req, res) =>{
    res.render('about')
})

app.listen(300)
console.log('Port 300 running....')