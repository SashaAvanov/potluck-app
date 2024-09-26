const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  dietaryRestrictions: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  person: {
    type: String,
    required: false,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  }
})

module.exports = mongoose.model('Item', ItemSchema)
