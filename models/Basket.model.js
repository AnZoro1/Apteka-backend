const mongoose = require('mongoose')
const BasketSchema = mongoose.Schema({
  
  selectedMedicines: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Medicine'
  }],
})
const Basket = mongoose.model('Basket', BasketSchema)
module.exports = Basket
