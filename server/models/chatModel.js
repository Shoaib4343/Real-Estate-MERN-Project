const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  userIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  seenBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  lastMessage: {
    type: String,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
