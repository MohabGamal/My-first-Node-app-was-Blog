// blog Model file
const Blog = require('../models/blog')  


// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
    //find all query
    Blog.find().sort({createdAt: -1}) // sort descendingly from the newest to oldest
    .then (result => {
        res.render('index', {title: 'All Blogs', blogs: result}) 
    })                      // data of templae language
    .catch(err => { console.log(err)})
}


const blog_details = (req, res) => {

    const id = req.params.id
    Blog.findById(id)
    .then(result => {
        res.render('details', {title: 'blog details', blog: result})
    }) 
    .catch(err => {console.log(err)})
}


const blog_create_get = (req, res) => {
    res.render('create', {title: 'Create Blog'}) // create.ejs
}

const blog_create_post = (req, res) => {

    const blog = new Blog(req.body) // request body is loaded from html form of the same action url 
    blog.save()
    .then (result => res.redirect('/blogs'))
    .catch(err => console.log(err))
}



const blog_delete = (req, res) => {

    const id = req.params.id;    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
}


module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}