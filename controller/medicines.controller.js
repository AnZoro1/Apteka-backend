const Medicine = require('../models/Medicine.model')
const MedicineController = {
  addNewMedicine: async function (req, res) {
    const result = await Medicine.create({
      name: req.body.name,
      recipe: req.body.recipe,
      cost: req.body.cost,
      category: req.body.category,
    })
    return res.json(result)
  },
  getAllMedicine: async function (req, res) {
    const result = await Medicine.find()
    return res.json(result)
  },
  getAllMedicineFromCategory: async function (req, res) {
    const result = await Medicine.find({ category: req.params.id })
    return res.json(result)
  },
  getOneMedicine: async function (req, res) {
    const result = await Medicine.findById(req.params.id)
    return res.json(result)
  },
  deleteMedicine: async function (req, res) {
    const result = await Medicine.findByIdAndRemove(req.params.id)
    return res.json(result)
  },
  changeMedicine: async function (req, res) {
    const result = await Medicine.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      recipe: req.body.recipe,
      cost: req.body.cost,
      category: req.body.category,
    })
    return res.json(result)
  },
}
module.exports = MedicineController
