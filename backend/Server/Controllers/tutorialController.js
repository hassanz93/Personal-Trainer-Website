//CONNECT TO DATABASE
require('../models/connectDB')
const useUpload = require('../upload/uploadPhoto')
const Tutorial = require('../models/Tutorial')

//GET TUTORIALS
exports.Tutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find()
      .populate({ path: 'trainerId', model: 'Users' })
      .populate({ path: 'subCategories', model: 'SubCategory' })
    res.json(tutorials);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

exports.latestTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find().limit(3)
      .populate({ path: 'trainerId', model: 'Users' })
      .populate({ path: 'subCategories', model: 'SubCategory' })
    res.json(tutorials);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

exports.trainerTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find({trainerId: "6235b68298b3e635c04fff34"})
      .populate({ path: 'trainerId', model: 'Users' })
      .populate({ path: 'subCategories', model: 'SubCategory' })
    res.json(tutorials);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

//GET TUTORIALS BY SUBCATEGORY
exports.Tutorial = async (req, res) => {
  try {
    const id = req.params.id
    const tutorials = await Tutorial.find({subCategories: id})
      .populate({ path: 'trainerId', model: 'Users' })
      .populate({ path: 'subCategories', model: 'SubCategory' })
    res.json(tutorials);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

//ADD NEW DATETIME
exports.addDateTime = async (req, res) => {
  const dateTime = req.body.datetime
  const id = req.params.id
  console.log(' the date time', dateTime)
  console.log(id);
  const tutorial = await Tutorial.find({_id: id})
  console.log(tutorial)
  tutorial[0].dateTime.push(dateTime)
  console.log(tutorial)
  try {
    const updateTutorial = await Tutorial.findByIdAndUpdate({ _id: id }, tutorial[0]);
    res.json(updateTutorial);
  } catch (error) {
    res.status(400).json({ message: error })
  }

  }

//ADD OR POST TUTORIAL
exports.uploadPhoto = useUpload.upload.single('photo')
exports.addTutorial = async (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  const newTutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    pricePerLesson: req.body.pricePerLesson,
    photo: url + '/public/' + req.file.filename,
    trainerId: req.body.trainerId,
    subCategories: req.body.subCategories,
    dateTime: req.body.dateTime
  });

  try {
    await newTutorial.save();
    res.json(newTutorial);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE TUTORIAL
exports.deleteTutorial = async (req, res) => {
  const tutorialId = req.params.id;
  try {
    const data = await Tutorial.deleteOne({ _id: tutorialId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE TUTORIAL
//PHOTO
exports.editTutorial = async (req, res) => {
  const tutorialId = req.params.id;
  const newTutorial = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    pricePerLesson: req.body.pricePerLesson,
    photo: req.body.photo,
    trainerId: req.body.trainerId,
    subCategories: req.body.subCategories,
    dateTime: req.body.dateTimen
  };
  try {
    const updateTutorial = await Tutorial.findByIdAndUpdate({ _id: tutorialId }, newTutorial);
    res.json(updateTutorial);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}