
require('../models/connectDB')
const User = require("../models/Users");
const useUpload = require('../upload/uploadPhoto')

module.exports = {
  uploadPhoto: useUpload.upload.single('photo'),
  createUser: async (req, res) => {       // POST
    const user = new User(req.body);
    await user.save();
    res.send(user);
  },

  findUser: async (req, res) => {        // GET 
    try {
      const user = await User.findById(req.params.id)
      res.send(user);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

  findEmail: async (req, res) => {        // GET 
    try {
      const user = await User.find({email: req.query.email})
      res.send(user);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

  updateUser: async (req, res) => {     // Patch 
    try {
      const updateuser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        country: req.body.country,
        photo: req.body.photo,
        userType: req.body.userType,
      });
      const user = await User.findOneAndUpdate({email: req.query.email}, updateuser);
      user.save();
      res.send(user);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

//  updateUser: async (req, res) => {
//     const userId = req.params.id;
//     const newUser = {
//      
//     };
//     try {
//       const updateUser = await User.find({ email: req.query.email }, newUser);
//       res.json(updateUser);
//     } catch (error) {
//       res.status(400).json({ message: error })
//     }
//   },

  //  updateUser: async (req, res) => {
  //   const user = await User.findByIdAndUpdate(req.params.id);
  
  //   if (user) {
  //     user.fname = req.body.fname || user.fname;
  //     user.lname = req.body.lname || user.lname;
  //     user.age = req.body.age || user.age;
  //     user.country = req.body.country || user.country;
  //     user.phone = req.body.phone || user.phone;
  //     user.email = req.body.email || user.email;
  //     if (req.body.password) {
  //       user.password = req.body.password;
  //     }
  //     const updatedUser = await user.save();
  //     res.json({
  //       fname: updatedUser.fname,
  //       lname: updatedUser.lname,
  //       age: updatedUser.age,
  //       country: updatedUser.country,
  //       phone: updatedUser.phone,
  //       email: updatedUser.email,
  //       password: updatedUser.password,
  //       userType: updatedUser.userType
  //     });
  //   } else {
  //     res.status(404);
  //     throw new Error("User Not Found");
  //   }
  // },

  profilePic: async (req, res) => {     // Patch 
    try {
      const url = req.protocol + '://' + req.get('host')
      const newProfilePic = url + '/public/' + req.file.filename
      const user = await User.findByIdAndUpdate({_id: req.params.id, photo: newProfilePic});
      res.send(user);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

  //NOT REQUIRED
  deleteUser: async (req, res) => {     // Delete
    try {
      const user = await User.findById(req.params.id);
      await user.remove();
      res.send(true);
    } catch {
      res.status(404).send({ error: "user is not found!" });
    }
  },

};

