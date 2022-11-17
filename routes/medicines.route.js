const { Router } = require('express')
const MedicineController = require('../controller/medicines.controller')
const router = Router()
router.post('/medicines/admin', MedicineController.addNewMedicine)
router.patch('/medicines/admin/:id', MedicineController.changeMedicine)
router.delete('/medicines/admin/:id', MedicineController.deleteMedicine)
router.get('/medicines/admin', MedicineController.getAllMedicine)
router.get(
  '/medicines/admin/category/:id',
  MedicineController.getAllMedicineFromCategory
)
router.delete('/medicines/admin/:id', MedicineController.getOneMedicine)

module.exports = router
