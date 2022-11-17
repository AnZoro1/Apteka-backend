const Basket = require('../models/Basket.model')
const BasketController = {
  addNewBasket: async function (req, res) {
    const result = await Basket.create({
      selectedMedicines: req.body.selectedMedicines,
    })
    return res.json(result)
  },
  deleBasket: async function (req, res) {
    const result = await Basket.findByIdAndRemove(req.params.id)
    return res.json(result)
  },
  changeBasket: async function (req, res) {
    const result = await Basket.findByIdAndUpdate(
      req.params.id,

      { $push: { selectedMedicines: req.body.selectedMedicines } },
      { new: true }
    )
    return res.json(result)
  },
  getAllBaskets: async function (req, res) {
    const result = await Basket.find()
    return res.json(result)
  },
}
module.exports = BasketController