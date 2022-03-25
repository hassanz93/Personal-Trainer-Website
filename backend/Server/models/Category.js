const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true
    },
    
    banner: String,

    description: String
    
}, { timestamps: true })
module.exports = mongoose.model('Category', CategorySchema)