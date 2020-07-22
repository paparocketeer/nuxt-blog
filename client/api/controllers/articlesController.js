const mongoose = require('mongoose');
const Article = require('../models/Article')
// const Article = mongoose.model('Article');

exports.list = (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) res.send(err);
    res.json(articles);
  });
};

exports.create = (req, res) => {
  const newArticle = new Article(req.body);
  newArticle.save((err, article) => {
    if (err) res.send(err);
    res.json(article);
  });
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