const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const RatingSchema = new Schema({
    email: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: String
    }
})

module.exports = User = mongoose.model('rating', RatingSchema)