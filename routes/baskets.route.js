const { Router } = require('express')
const BasketController = require('../controller/baskets.controller')
const router = Router()
router.post('/baskets', BasketController.addNewBasket)
router.get('/baskets', BasketController.getAllBaskets)
router.patch('/baskets/:id', BasketController.changeBasket)
router.delete('/baskets/:id', BasketController.deleBasket)

module.exports = router
