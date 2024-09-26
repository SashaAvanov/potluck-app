const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    createdBy: {
        type: String,
        required: true,
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Event', EventSchema)