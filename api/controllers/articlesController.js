const mongoose = require('mongoose');
const Article = require('../models/Article')

// exports.list = async (req, res) => {
//   try {
//     let articles = await Article.find()
//     .sort({ created_date: -1 })
//     res.status(200).json(articles);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

exports.list = async (req, res) => {
  try {
    let articles = await Article.paginate({},
      {
        page: req.params.page,
        limit: req.params.limit,
      })
      res.status(200).json(articles);
  } catch (error) {
    res.status(500).json(error);
  }  
}

exports.create = async (req, res) => {
  let newArticle = new Article(
    {
      h1: req.body.h1,
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      content: req.body.content,
      image: req.file
    })
  try {
    await newArticle.save()
    res.status(200).json(newArticle);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.show = async (req, res) => {
  try {
    let article = await Article.findOne({ url: req.params.id })
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json(error);
  }
};



exports.update = async (req, res) => {
  try {
    await Article.updateOne(
      { url: req.params.id },  
      {
        $set: req.file ? {
          h1: req.body.h1,
          title: req.body.title,
          description: req.body.description,
          url: req.body.url,
          content: req.body.content,
          image: req.file
        } : {
          h1: req.body.h1,
          title: req.body.title,
          description: req.body.description,
          url: req.body.url,
          content: req.body.content
        }
      }
    )
    res.status(200).json({ message: 'Updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    await Article.deleteOne({ url: req.params.id })
    res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};
