const mongoose = require('mongoose');
const Article = require('../models/Article')

exports.list = (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) res.send(err);
    res.json(articles);
  });
};

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
      // res.send(newArticle)
    } catch (error) {
      res.status(500).json({ error: err });
      // res.send(err)
    }
};

exports.show = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) res.send(err);
    res.json(article);
  });
};

exports.update = (req, res) => {
  Article.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, article) => {
      if (err) res.send(err);
      res.json(article);
    }
  );
};

exports.delete = (req, res) => {
  Article.deleteOne({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Article successfully deleted',
      _id: req.params.id
    });
  });
};