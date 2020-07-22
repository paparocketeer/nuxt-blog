const config = require('../config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')

// Get All
router.get('/api/articles', articlesController.list)

// Get One
router.get('/api/articles/:id', articlesController.show)

// Create
// router.post('/articles', config.isAuthenticated, articlesController.create)
router.post('/api/articles', articlesController.create)

// Update
// router.put('/articles/:id', config.isAuthenticated, articlesController.update)
router.put('/api/articles/:id', articlesController.update)

// Delete
// router.delete('/articles/:id', config.isAuthenticated, articlesController.delete)
router.delete('/api/articles/:id', articlesController.delete)

module.exports = router