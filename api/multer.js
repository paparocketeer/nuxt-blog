const multer = require('multer')
const path = require('path')
const fs = require('fs')

// const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './static/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

// const fileFilter = (req, file, cb) => {
//   // console.log(file.mimetype)
//     cb(null, imageMimeTypes.includes(file.mimetype))
// };

exports.upload = multer({storage});