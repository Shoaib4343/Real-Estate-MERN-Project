const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
  posts:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Post"
    }
  ],
  savedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SavedPost"
    }
  ],
  chats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  ],
  chatIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("User",userSchema)