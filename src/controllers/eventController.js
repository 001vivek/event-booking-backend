const Event = require('../models/Event')

const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body)
    await event.save()
    res.status(201).json(event)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
    res.json(events)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = { createEvent, getEvents }
