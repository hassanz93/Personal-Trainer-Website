const express = require('express')

const router = express.Router()

const tutorialController = require('../Controllers/tutorialController');

router.route('/')
    .get(tutorialController.Tutorials)
    .post(tutorialController.uploadPhoto, tutorialController.addTutorial)

router.route('/latest')
    .get(tutorialController.latestTutorials)

router.route('/trainer')
    .get(tutorialController.trainerTutorials)

    router.route('/addDateTime/:id')
    .post(tutorialController.addDateTime)

router.route('/:id')
    .delete(tutorialController.deleteTutorial)
    .put(tutorialController.editTutorial)
    .get(tutorialController.Tutorial)


module.exports = router