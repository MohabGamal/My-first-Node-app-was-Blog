const express = require('express')

// blog Controller file
const blogController = require('../controllers/blogController')
const router = express.Router()

           

// //dummy
// router.get('/single-blog', (req, res) => { 
//     //find all query
//     Blog.findById('62cd516f8cda95731325b25e')
//     .then ((result) => res.send(result))
//     .catch((err) => console.log(err))
//     })




// // dummy
// router.get('/add-blog', (req, res) => {
//     // instance of the exported model 
//         const blog = new Blog({
//             title: 'new blog 2',
//             snippet: 'new blog snippet',
//             body: 'Lorem ipsum dolor sit amet consectetur'
//         })
//         blog.save()
//         .then ((result) => res.send(result))
//         .catch((err) => console.log(err))
//     })


router.get('/', blogController.blog_index)
router.post('/', blogController.blog_create_post)
router.get('/create', blogController.blog_create_get)
// must be at the end because of ':id' 
router.get('/:id', blogController.blog_details)
router.delete('/:id', blogController.blog_delete)



module.exports = router