const express = require('express')

const router = express.Router()

const trainerController = require('../Controllers/trainerController');

router.route('/')
    .get(trainerController.Trainer)
    .post(trainerController.addTrainer)

router.route('/:id')
    .delete(trainerController.deleteTrainer)
    .put(trainerController.editTrainer)


module.exports = router