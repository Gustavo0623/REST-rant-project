require('dotenv').config()

const mongoose = require('mongoose')

// connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, // to remove warning messages on terminal (articlle on it https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1)
  useUnifiedTopology: true // to remove warning messages on terminal
})

module.exports.Place = require('./places')