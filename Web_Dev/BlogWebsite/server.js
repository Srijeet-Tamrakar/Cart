const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const blogRouter = require('./routes/blogPost')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 300

app.use(express.json())
app.use('/blogs', blogRouter)
app.use(express.urlencoded({extended: false}))

const uri = process.env.MONGODB_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log("MONGODB Connected...")
})
app.listen(port, () => {
    console.log(`Connected to port ${port}...`)
})
