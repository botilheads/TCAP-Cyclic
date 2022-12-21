const express = require("express");
const BlogPost = require("../models/blogPosts");
const router = express.Router();

router.get('/', (req,res) => {
  BlogPost.find({ })
          .then((data) => {
            console.log('Data: ', data)
            res.json(data)
          })
          .catch((error) => {
            console.log('error:', error)
          })
})

router.post('/save', (req, res) => {
  const data = req.body;

  const newBlogPost = new BlogPost(data);

  newBlogPost.save((error) => {
      if (error) {
          res.status(500).json({ msg: 'Sorry, internal server errors' });
          return;
      }
      // BlogPost
      return res.json({
          msg: 'Your data has been saved!!!!!!'
      });
  });
});

module.exports = router;