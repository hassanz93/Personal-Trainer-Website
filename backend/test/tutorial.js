const mongoose=require('mongoose')

//connect to db for testing
const connectDB=require('../connectDB.js')

//import the branch module
const tutorialModel=require('../Server/models/Tutorial.js')

const addTutorial=new tutorialModel({
    title: "Learn how to play on the Piano",
    price: 300,
    pricePerLesson: 30,
    photo: "https://aefirenze.it/images/classic-piano.jpg",
    // trainerId: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Users"
    // },
    // subCategories: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "SubCategories"
    // },
    dateTime: [
        {
            dateTime: new Date(),
            available: true
        }
    ]
})

addTutorial.save().then(result => {
    console.log('Tutorial is added!')
    mongoose.connection.close()
}).catch((error) => {
    //showErrors(error) // call function from ./showErrors.js
    console.log(error)
    mongoose.connection.close()
})