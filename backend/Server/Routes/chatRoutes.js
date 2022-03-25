const express = require('express')

const router = express.Router()

const chatController = require('../Controllers/chatController');

router.route('/')
    .get(chatController.Chat)
    .post(chatController.addChat)

router.route('/:id')
    .delete(chatController.deleteChat)
    .put(chatController.editChat)


module.exports = router