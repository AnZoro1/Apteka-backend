const Category = require('../models/Category.model')
const CategoryController = {
  addNewCategory: async function (req, res) {
    const result = await Category.create({
      name: req.body.name,
    })
    res.json(result)
  },
  getAllCategory: async function (req, res) {
    const result = await Category.find()
    return res.json(result)
  },
  changeCategory: async function (req, res) {
    const result = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    })
    return res.json(result)
  },
  deleteCategory: async function (req, res) {
    const result = await Category.findByIdAndRemove(req.params.id)
    return res.json(result)
  },
}

module.exports = CategoryController
