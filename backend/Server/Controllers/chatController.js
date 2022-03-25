//CONNECT TO DATABASE
require('../models/connectDB')

const Chat = require('../models/Chat')

//GET CHATS BY USER
exports.Chat = async (req, res) => {
  try {
    const userId = req.body.userId
    // const Chats = await Chat.find({ sender: userId })
    const Chats = await Chat.find()
      .populate({ path: 'sender', model: 'Users' })
      .populate({ path: 'receiver', model: 'Users' })
    res.json(Chats);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

// ADD OR POST CHAT
exports.addChat = async (req, res) => {
  const newChat = new Chat({
    sender: req.body.sender,
    receiver: req.body.receiver,
    dateTime: req.body.dateTime,
    seen: req.body.seen,
    message: req.body.message
  });

  try {
    await newChat.save();
    res.json(newChat);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE CHAT
exports.deleteChat = async (req, res) => {
  const ChatId = req.params.id;
  try {
    const data = await Chat.deleteOne({ _id: ChatId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE CHAT NOT REQUIRED
exports.editChat = async (req, res) => {
  const ChatId = req.params.id;
  const newChat = {
    sender: req.body.sender,
    receiver: req.body.receiver,
    dateTime: req.body.dateTime,
    seen: req.body.seen,
    message: req.body.message
  };
  try {
    const updateChat = await Chat.findByIdAndUpdate({ _id: ChatId }, newChat);
    res.json(updateChat);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}