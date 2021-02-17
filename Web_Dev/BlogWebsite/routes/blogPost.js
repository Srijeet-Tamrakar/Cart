const express = require('express')
const router = express.Router()
const Blogs = require('../model/blogSchema')

router.get('/', (req, res) =>{
    Blogs.find()
        .then(blog => res.json(blog))
        .catch(err => res.json(`Error : ${err}`))
})

router.post('/add', (req, res) => {
    const newBlog = new Blogs({
        title: req.body.title,
        blog: req.body.blog,
        author: req.body.author
    })
    newBlog.save()
        .then(() => res.json('New data added successfully!'))
        .catch(err => res.json(`Error ${err}`))
})

router.get('/:id', (req, res) => {
    Blogs.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => res.json(`Error ${err}`))
})

router.put('/update/:id', (req, res) =>{
    Blogs.findByIdAndUpdate(req.params.id)
        .then(blog => {
            blog.title = req.body.title,
            blog.blog = req.body.blog,
            blog.author = req.body.author

            blog.save()
                .then(() => res.json("Blog updated successfully!!!"))
                .catch(err => res.json(`Error : ${err}`))
        })
        .catch(err => res.json(`Error : ${err}`))
})

router.delete('/:id', (req, res) =>{
    Blogs.findByIdAndDelete(req.params.id)
        .then(() => res.json('Blog deleted successfully!!!'))
        .catch(err => res.json(`Error : ${err}`))
})

module.exports = router