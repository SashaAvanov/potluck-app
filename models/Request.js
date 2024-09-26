const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
    item: {
        type: String,
        required: false,
    },
    dietaryRestrictions: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
    }
})

module.exports = mongoose.model('Request', RequestSchema)