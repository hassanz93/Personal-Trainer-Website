const router = require("express").Router();
const User = require("../models/Users.js");
const useUpload = require('../upload/uploadPhoto')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../../validation"); // to validate information

router.post("/register", async (req, res) => {
  //Lets validate the data before we input user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ message: error.message });

  // Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send({ message: "Email already exists" });

  //Hash passwords | encrypts password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const url = req.protocol + '://' + req.get('host')
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    photo: url + '/public/avatar.png',
    age: req.body.age,
    password: hashedPassword,
    phone: req.body.phone,
    country: req.body.country,
    userType: req.body.userType
  });

  try {
    const savedUser = await user.save();

    // sign the token

    const token = jwt.sign(
      {
        _id: savedUser._id,
      },
      process.env.TOKEN_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  //Lets validate the data before we input user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  // Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ message: "Invalid email" });

  // Checking if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send({ message: "Invalid password" });

  // Create and assign a token
  const token = jwt.sign({ user: user._id }, process.env.TOKEN_SECRET);

  // send the token in a HTTP-only cookie

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send();
});

//logout
router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

//stay loggedin with token
router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.TOKEN_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});



const userController = require("../controllers/usercontroller.js");

// CRUD for users
router.route("/").post(userController.createUser);
router.route("/profilepic").patch(userController.uploadPhoto, userController.updateUser)
router
  .route("/:id")
  .get(userController.findUser)
  // .patch(userController.updateUser)
  .delete(userController.deleteUser);

  router.route("/").get(userController.findEmail)
  router.route("/:id").put(userController.updateUser)

module.exports = router;
