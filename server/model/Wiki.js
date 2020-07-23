let mongoose = require("mongoose");
let wikiSchema = mongoose.Schema({
  h1: {
    type: String,
    required: true
  },
  title: {
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
  youtube: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String
  },
  // theme: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "Theme"
  // },
  views: {
    type: Number,
    default: 0
  }
});
let Wiki = mongoose.model("Wiki", wikiSchema);
module.exports = Wiki;

