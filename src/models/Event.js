const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  availableSeats: { type: Number, required: true },
})

module.exports = mongoose.model('Event', EventSchema)
