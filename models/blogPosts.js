const mongoose = require('mongoose')

// Schema
const BlogPostSchema = mongoose.Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: Date.now()
  }
})

module.exports = new mongoose.model("BlogPost", BlogPostSchema);