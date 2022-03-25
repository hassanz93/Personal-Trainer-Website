const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    banner: String

}, { timestamps: true })

module.exports = mongoose.model('SubCategory', SubCategorySchema)