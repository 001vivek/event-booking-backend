const Booking = require('../models/Booking')
const Event = require('../models/Event')

const createBooking = async (req, res) => {
  try {
    const { event, user, seatsBooked } = req.body

   
    const eventDetails = await Event.findById(event)
    if (eventDetails.availableSeats < seatsBooked) {
      return res.status(400).json({ error: 'Not enough seats available' })
    }

   
    eventDetails.availableSeats -= seatsBooked
    await eventDetails.save()

   
    const booking = new Booking({ event, user, seatsBooked })
    await booking.save()

    res.status(201).json(booking)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.user }).populate('event')
    res.json(bookings)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { createBooking, getUserBookings }
