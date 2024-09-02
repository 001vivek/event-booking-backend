const express = require('express')
const { createBooking, getUserBookings } = require('../controllers/bookingController')
const router = express.Router()

router.post('/bookings', createBooking)
router.get('/bookings/:user', getUserBookings)

module.exports = router
