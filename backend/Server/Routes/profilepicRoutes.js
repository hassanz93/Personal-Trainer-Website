const express = require('express')

const router = express.Router()

const userController = require('../Controllers/userController');

router.route('/')
    .put(userController.uploadPhoto, userController.updateUser)

module.exports = router