//CONNECT TO DATABASE
require('../models/connectDB')
const { ObjectId } = require('mongodb')
const Lesson = require('../models/Lesson')
const Tutorial = require('../models/Tutorial')
const Users = require('../models/Users')

//GET LESSONS FOR TUTORIAL
exports.Lesson = async (req, res) => {
  try {
    const id = req.params.id
    const Lessons = await Lesson.find({ tutorial: id })
      .populate({ path: 'tutorial', model: 'Tutorial' })
      .populate({ path: 'trainee.userId', model: 'Users' })
    res.json(Lessons);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

//GET ID FOR Trainee Profile
exports.LessonID = async (req, res) => {
  try {
    const queryLessonId = req.query.id;

    const Lessons = await Lesson.find({'trainee.userId':queryLessonId})
    res.json(Lessons);
  } catch (error) {
    res.status(404).json({ message: "error1" })
  }
}

// ADD OR POST LESSON
exports.addLesson = async (req, res) => {
  const newLesson = new Lesson({
    tutorial: req.body.tutorial,
    title: req.body.title,
    description: req.body.description,
    trainee: req.body.trainee
  });

  try {
    await newLesson.save();
    res.json(newLesson);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE LESSON
exports.deleteLesson = async (req, res) => {
  const LessonId = req.params.id;
  try {
    const data = await Lesson.deleteOne({ _id: LessonId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE LESSON
exports.editLesson = async (req, res) => {
  const LessonId = req.params.id;
  const newLesson = {
    tutorial: req.body.tutorial,
    title: req.body.title,
    description: req.body.description,
    trainee: req.body.trainee
  };
  try {
    const updateLesson = await Lesson.findByIdAndUpdate({ _id: LessonId }, newLesson);
    res.json(updateLesson);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

exports.saveDate = async (req, res) => {
  try {
    const id = req.params.id
    const tutorialId = req.body.tutorialId
    // const token = req.cookies.token;
    // console.log(req.cookies)
    // if (!token) return res.json(false);
    // let userId = jwt.verify(token, process.env.TOKEN_SECRET);
    // let userId = req.body.username

    // console.log("USER EMAIL", userId)
    let userId = '621790ee6afd8fc5bf7c11f6'

    console.log(userId)

    //DATETIME NOT AVAILABLE ANYMORE
    const Tutorials = await Tutorial.find({ _id: tutorialId })
    let dateTimeTutorial = Tutorials[0].dateTime
    for (let i = 0; i < dateTimeTutorial.length; i++) {
      if (dateTimeTutorial[i].DateTime === req.body.dateTime){
        dateTimeTutorial[i].available = false
      }
    }
    Tutorials[0].dateTime = dateTimeTutorial
    const newTutorial = await Tutorial.findByIdAndUpdate({ _id: tutorialId }, Tutorials[0])


    //ADD LESSON TO PROFILE
    const TheUser = await Users.find({ _id: userId })
    

    //CHOOSE A DATETIME FOR THE LESSON
    const Lessons = await Lesson.find({ _id: id })
      .populate({ path: 'tutorial', model: 'Tutorial' })
      .populate({ path: 'trainee.userId', model: 'Users' })

      let NewLesson = TheUser[0]
      NewLesson.myLessons.push({"lessonId": ObjectId(id), "chosenDateTime": req.body.dateTime})

      const newUserLesson = await Users.findByIdAndUpdate({ _id: userId }, NewLesson)
      console.log("THE USERS", newUserLesson)

    


    let traineeDate = { "userId": ObjectId(userId), "chosenDate": req.body.dateTime, "done": false }
    Lessons[0].trainee.push(traineeDate)
    const newLesson = await Lesson.findByIdAndUpdate({ _id: id }, Lessons[0])
    res.json(Lessons);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}