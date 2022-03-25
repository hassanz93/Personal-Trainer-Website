const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    pricePerLesson: Number,
    photo: String,
    trainerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    },
    subCategories: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "SubCategories"
    },
    dateTime: [
        {
            DateTime: String,
            available: Boolean
        }
    ]
}, { timestamps: true })


module.exports = mongoose.model('Tutorial', tutorialSchema)