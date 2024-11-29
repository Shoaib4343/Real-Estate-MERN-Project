
// const messageModel = require("../models/messageModel");


// // addChat 
// const addMessage = async (req, res) => {
//   try {    
//     res.status(200).json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Failed to add Message" });
//   }
// };






// module.exports = { addMessage};


// const chatModel = require("../models/chatModel");
// const messageModel = require("../models/messageModel");


// const addMessage = async (req, res) => {
//   const tokenUserId = req.userId; // Extract the user ID from the token
//   const chatId = req.params.chatId; // Extract the chat ID from the request parameters
//   const { text } = req.body; // Extract the message text from the request body

//   try {
//     // Check if the chat exists and the user is part of it
//     const chat = await chatModel.findOne({
//       _id: chatId,
//       userIDs: { $in: [tokenUserId] },
//     });

//     if (!chat) {
//       return res.status(404).json({ message: "Chat not found!" });
//     }

//     // Create a new message with the `chat` field properly referenced
//     const message = await messageModel.create({
//       text,
//       chat: chatId, // Pass the chatId as a reference
//       chatId, // Keep this if needed elsewhere in your logic
//       userId: tokenUserId,
//     });

//     // Update the chat with the new message details
//     chat.seenBy = [tokenUserId]; // Reset seenBy to only include the sender
//     chat.lastMessage = text; // Update the lastMessage field
//     await chat.save(); // Save the updated chat document

//     res.status(200).json(message);
//   } catch (error) {
//     console.error("Error adding message:", error);
//     res.status(500).json({ message: "Failed to add message!" });
//   }
// }; 

// module.exports = { addMessage };



const chatModel = require("../models/chatModel");
const messageModel = require("../models/messageModel");

const addMessage = async (req, res) => {
  const tokenUserId = req.userId; // Extract the user ID from the token
  const chatId = req.params.chatId; // Extract the chat ID from the request parameters
  const { text } = req.body; // Extract the message text from the request body

  try {
    // Check if the chat exists and the user is part of it
    const chat = await chatModel.findOne({
      _id: chatId,
      userIDs: { $in: [tokenUserId] },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    // Create a new message with both `chat` and `chatId` fields
    const message = await messageModel.create({
      text,
      chat: chatId, // Assign chatId to the `chat` field
      chatId, // Also assign it to the `chatId` field
      userId: tokenUserId,
    });

    // Update the chat with the new message details
    chat.seenBy = [tokenUserId]; // Reset seenBy to only include the sender
    chat.lastMessage = text; // Update the lastMessage field
    chat.messages.push(message._id); // Add the new message's ID to the messages array
    await chat.save(); // Save the updated chat document

    res.status(200).json(message);
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).json({ message: "Failed to add message!" });
  }
};

module.exports = { addMessage };
