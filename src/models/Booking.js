const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: String, required: true },
  seatsBooked: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Booking', BookingSchema)
