const { default: mongoose, Schema } = require("mongoose")

// create new schema
const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: String,
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
})

module.exports = mongoose.model('Place', placeSchema)