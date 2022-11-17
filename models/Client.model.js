const mongoose = require('mongoose')
const ClientSchema = mongoose.Schema({
  name: String,
  money: Number,
  recipe: Boolean,
  sumBasket: {
    type: Number,
    default: 0
  },
  basket: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Medicine',
    },
  ],
  bought: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Medicine',
    },
  ],
})
const Client = mongoose.model('Client', ClientSchema)
module.exports = Client
