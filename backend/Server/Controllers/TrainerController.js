//CONNECT TO DATABASE
require('../models/connectDB')
const Trainer = require('../models/Trainer')

//GET TRAINERS  //NOT REUQUIRED
exports.Trainer = async (req, res) => {
  try {
    const Trainers = await Trainer.find({userType: "Trainer"}).populate({path:"userId", model:"Users"})
    res.json(Trainers);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

// ADD OR POST TRAINER
exports.addTrainer = async (req, res) => {
  const newTrainer = new Trainer({
    userId: req.body.userId,
    certificate: req.body.certificate,
    speciality: req.body.speciality,
    meetingUrl: req.body.meetingUrl
  });

  try {
    await newTrainer.save();
    res.json(newTrainer);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE TRAINER //NOT REUQUIRED
exports.deleteTrainer = async (req, res) => {
  const TrainerId = req.params.id;
  try {
    const data = await Trainer.deleteOne({ _id: TrainerId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE TRAINER
exports.editTrainer = async (req, res) => {
  const TrainerId = req.params.id;
  const newTrainer = {
    userId: req.body.userId,
    certificate: req.body.certificate,
    speciality: req.body.speciality,
    meetingUrl: req.body.meetingUrl
  };
  try {
    const updateTrainer = await Trainer.findByIdAndUpdate({ _id: TrainerId }, newTrainer);
    res.json(updateTrainer);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}