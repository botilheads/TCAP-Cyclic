const express = require("express");
require("dotenv").config();
const path = require("path");
const connect = require("./configs/db");
const blogPostsController = require('./controllers/blogPostController')

const PORT = process.env.port || 8080;
const app = express();

app.use(express.json());

app.use('/blogPost',blogPostsController)

//to serve the frontend
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening at ${PORT}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = app;