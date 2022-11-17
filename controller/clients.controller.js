const Client = require('../models/Client.model')
const Medicine = require('../models/Medicine.model')
const ClientController = {
  addNewClient: async function (req, res) {
    const result = await Client.create({
      name: req.body.name,
      money: req.body.money,
      recipe: req.body.recipe,
      basket: req.body.basket,
      bought: req.body.bought,
    })
    return res.json(result)
  },
  getAllClients: async function (req, res) {
    const result = await Client.find()
    return res.json(result)
  },
  getOneClient: async function (req, res) {
    const result = await Client.findById(req.params.id)
      .populate('basket')
      .populate('bought')
    return res.json(result)
  },
  deleteClient: async function (req, res) {
    const result = await Client.findByIdAndRemove(req.params.id)
    return res.json(result)
  },
  changeClient: async function (req, res) {
    const client = await Client.findById(req.params.id)
    const medicine = await Medicine.findById(req.body.basket)

    if (!client.recipe && medicine.recipe) {
      return res.json('у вас нет рецепта!')
    }
    let summa = client.sumBasket + medicine.cost
    const result = await Client.findByIdAndUpdate(
      req.params.id,
      {
        $push: { basket: req.body.basket },
        $set: { sumBasket: summa },
      },
      { new: true }
    )
    return res.json(result)
  },

  payMedicine: async function (req, res) {
    const client = await Client.findById(req.params.id)

    if (client.money < client.sumBasket) {
      return res.json('У вас недостаточно средств')
    }
    let summa = client.money - client.sumBasket
    try {
      await Client.findByIdAndUpdate(req.params.id, {
        $set: {
          sumBasket: 0,
          basket: [],
          money: summa
        },
      })
      res.json('Лекарства куплены')
    } catch (err) {
      res.json(err)
    }
  },
}
module.exports = ClientController
