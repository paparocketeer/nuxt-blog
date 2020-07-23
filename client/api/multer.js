const multer = require('multer')
const path = require('path')
const fs = require('fs')

const imageMimeTypes = ['image/jpeg', 'image/png']

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // console.log(file.mimetype)
    cb(null, imageMimeTypes.includes(file.mimetype))
};

exports.upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  fileFilter: fileFilter
});