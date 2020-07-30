const multer = require('../multer')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const musicController = require('../controllers/musicController')

router.get("/music",  musicController.getAllMusics);
router.get('/music/:id', musicController.show)
router.post("/music", multer.upload.single("music"), musicController.addNewMusic);
// Update
router.put("/music/:musicId", multer.upload.single("music"), musicController.update)
router.delete("/music/:musicId", musicController.deleteMusic);

module.exports = router;