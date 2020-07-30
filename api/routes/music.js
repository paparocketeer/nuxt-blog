const multer = require('../multer')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const musicController = require('../controllers/musicController')

router.get("/music",  musicController.getAllMusics);
router.post("/music", multer.upload.single("music"), musicController.addNewMusic);
// Update
router.put('/music/:id', multer.upload.single('music'), musicController.update)
router.delete("/music/:musicId", musicController.deleteMusic);

module.exports = router;