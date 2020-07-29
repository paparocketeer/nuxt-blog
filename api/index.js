const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
const db = require('./db')


// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
// app.use(cors());
app.use(morgan("dev")); // configire morgan

// Require & Import API routes
const music = require('./routes/music')
const articles = require('./routes/articles')

// Use API Routes
app.use(music)
app.use(articles)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}