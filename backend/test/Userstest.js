const mongoose=require('mongoose')

//connect to db for testing
const connectDB=require('../connectDB.js')

//import the branch module
const usersModel=require('../Server/models/Users.js')

const addUser=new usersModel({
    fname: "Hassan",
    lname: "Zahra",
    email: "hassanz93@hotmail.com",
    photo: "https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?k=20&m=1087531642&s=612x612&w=0&h=D6OBNUY7ZxQTAHNVtL9mm2wbHb_dP6ogIsCCWCqiYQg=",
    age: 28,
    password: "12345678",
    phone: 70809010,
    country: "Lebanon",
    userType: "trainee",
    dateTime: [
        {
            dateTime: new Date(),
            available: true
        }
    ]
})

addUser.save().then(result => {
    console.log('User is added!')
    mongoose.connection.close()
}).catch((error) => {
    //showErrors(error) // call function from ./showErrors.js
    console.log(error)
    mongoose.connection.close()
})