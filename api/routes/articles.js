const multer = require('../multer')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')

// Get page
router.get('/articles/p/:page', articlesController.list)

// Get page
// router.get('/articles/p/:page', articlesController.listPage)

// Get One
router.get('/articles/:id', articlesController.show)

// Create
router.post('/articles', multer.upload.single('image'), articlesController.create)

// Update
router.put('/articles/:id', multer.upload.single('image'), articlesController.update)

// Delete
router.delete('/articles/:id', articlesController.delete)

module.exports = router