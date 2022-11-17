const mongoose = require('mongoose')
const MedicineSchema = mongoose.Schema({
  name: String,
  recipe: Boolean,
  cost: Number,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
  },
})
const Medicine = mongoose.model('Medicine', MedicineSchema)
module.exports = Medicine
