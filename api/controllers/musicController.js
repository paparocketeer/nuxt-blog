// let mongoose = require("mongoose");
const Music = require("../models/Music");

exports.getAllMusics = async (req, res) => {
  try {
    let music = await Music.find();
    res.status(200).json(music);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.show = async (req, res) => {
  try {
    let music = await Music.findOne({ _id: req.params.id })
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addNewMusic = async (req, res) => {
  try {
    const music = new Music({
      title:req.body.title,
      artist:req.body.artist,
      music:req.file
    });
    let newMusic = await music.save();
   
    res.status(200).json({ data: newMusic });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.update = async (req, res) => {
  try {
    await Music.updateOne(
      { _id: req.params.musicId },  
      {
        $set: req.file ? {
          artist: req.body.artist,
          title: req.body.title,
          music: req.file
        } : {
          artist: req.body.artist,
          title: req.body.title,
        }
      }
    )
    res.status(200).json({ message: 'Updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteMusic = async (req, res) => {
  try {
    const id = req.params.musicId;
    let result = await Music.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};