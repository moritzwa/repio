const mongoose = require("mongoose")

const ItemSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  doneNum: {
    type: Number
  },
  interval: {
    type: String
  },
  category: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date
  },
  intervalRef: {
    type: mongoose.Schema.ObjectId,
    ref: "Interval"
  }
})

module.exports = mongoose.model("item", ItemSchema)
