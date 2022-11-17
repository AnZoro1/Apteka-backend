const { Router } = require('express')
const CategoryController = require('../controller/сategories.controller')
const router = Router()
router.post('/categories/admin', CategoryController.addNewCategory)
router.get('/categories/admin', CategoryController.getAllCategory)
router.patch('/categories/admin/:id', CategoryController.changeCategory)
router.delete('/categories/admin/:id', CategoryController.deleteCategory)

module.exports = router
