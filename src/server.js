require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


const cors = require('cors');

app.use(express.json())
app.use(cors()); 


mongoose.connect("mongodb+srv://vivekrakhunde001:<Px1R42OFGwFDQJn3>@cluster0.gc2kl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))


app.get('/', (req, res) => {
  res.send('Event Booking System API')
})

const eventRoutes = require('./routes/eventRoutes')
const bookingRoutes = require('./routes/bookingRoutes')

app.use('/api', eventRoutes)
app.use('/api', bookingRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
