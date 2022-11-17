const { Router } = require('express')
const ClientController = require('../controller/clients.controller')
const router = Router()
router.post('/clients', ClientController.addNewClient)
router.patch('/clients/:id', ClientController.changeClient)
router.delete('/clients/:id', ClientController.deleteClient)
router.get('/clients', ClientController.getAllClients)
router.get('/clients/:id', ClientController.getOneClient)
router.patch('/clients/pay/:id', ClientController.payMedicine)

module.exports = router
