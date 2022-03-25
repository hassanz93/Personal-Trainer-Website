const express = require('express')
const router = express.Router()
const categoryController = require('../Controllers/categoryController');

router.route('/')
    .get(categoryController.Category)
    .post(categoryController.addCategory)

router.route('/:id')
    .delete(categoryController.deleteCategory)
    .put(categoryController.editCategory)

module.exports = router