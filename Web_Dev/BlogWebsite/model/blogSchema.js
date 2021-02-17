const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {type: String, required: true},
    blog: {type: String, required: true},
    author: {type: String, required: true}
})

const Blogs = mongoose.model('blogs', blogSchema)

module.exports = Blogs