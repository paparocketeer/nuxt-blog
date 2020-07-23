const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
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
  created_date: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String
  },
  image: {

  },
  views: {
    type: Number,
    default: 0
  }
});

blogShema.virtual('imagePath').get(function(){
  if(this.image != null) {
  return path.join('/uploads/', this.image)
}
})

module.exports = mongoose.model('Article', taskSchema)