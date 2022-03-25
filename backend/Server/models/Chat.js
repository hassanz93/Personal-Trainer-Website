const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    sender: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    },
    receiver: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    },
    dateTime: Date,
    seen: Boolean,
    message: String
}, { timestamps: true })


module.exports = mongoose.model('Chat', chatSchema)