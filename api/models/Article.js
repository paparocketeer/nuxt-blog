const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
  h1: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  intro: {
    type: String
  },
  level: {
    type: Number
  },
  url: {
    type: String,
    unique: true,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String
  },
  image: {
    type: Object
  },
  views: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Article', articleSchema)