const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    tutorial: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Tutorial"
    },
    title: String,
    description: String,
    trainee: [{
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Users"
        },
        chosenDate: String,
        done: Boolean
    }],
}, { timestamps: true })


module.exports = mongoose.model('Lesson', lessonSchema)