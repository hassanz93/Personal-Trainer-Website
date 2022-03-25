const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Users schema 
const UsersSchema = new Schema({
    fname: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },
    lname: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },
    email: {
        type: String,
        required: true,
        trim: false,
        unique: true,
        min: 6,
        max: 45,
    },
    photo: {
        type: String,
        required: false,
        trim: false,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minimum: 6,
        max: 255      // max 255 because we may later decide to encrypt the password
    },
    phone: {
        type: String,
        required: true,
        minimum: 8,
        max: 45
    },
    country: {
        type: String,
        required: true,
        minimum: 3,
        max: 45
    },
    userType: {
        type: String,
        enum:["Trainer", "Trainee"]
    },
    myLessons: [{
        lessonId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Lesson" },
    chosenDateTime: String
}
]
}, { timestamps: true });

module.exports = mongoose.model("Users", UsersSchema);