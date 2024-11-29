const userModel = require("../models/userModel");
const chatModel = require("../models/chatModel");


// Show all Chats

const getChats = async (req, res) => {
  const tokenUserId = req.userId; // Assuming this is set from middleware (e.g., JWT authentication)

  try {
    // Find chats where tokenUserId is in the userIDs array
    const chats = await chatModel.find({
      userIDs: { $in: [tokenUserId] },
    });

    // Add receiver information for each chat
    for (const chat of chats) {
      // Find the receiver's ID (user other than tokenUserId)
      const receiverId = chat.userIDs.find((id) => id.toString() !== tokenUserId);

      // Fetch receiver details from the user model
      const receiver = await userModel.findById(receiverId, {
        _id: 1,
        username: 1,
        avatar: 1,
      });

      // Attach receiver info to the chat object
      chat._doc.receiver = receiver;
    }

    res.status(200).json(chats);
  } catch (error) {
    console.error("Error fetching chats:", error);
    res.status(500).json({ message: "Failed to get chats" });
  }
};




// show single chat || get Chat

const getChat = async (req, res) => {
  const tokenUserId = req.userId; // Extract the user ID from the token
  const { id } = req.params;     // Extract the chat ID from the request parameters

  try {
    // Find the chat and populate messages, sorted by `createdAt`
    const chat = await chatModel.findOne({
      _id: id,                       // Match the chat ID
      userIDs: { $in: [tokenUserId] } // Ensure tokenUserId is in userIDs array
    }).populate({
      path: "messages",                // Populate the messages field
      options: { sort: { createdAt: 1 } }, // Sort messages by creation time in ascending order
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Update the `seenBy` field to add the tokenUserId
    if (!chat.seenBy.includes(tokenUserId)) {
      chat.seenBy.push(tokenUserId);
      await chat.save(); // Save the updated chat document
    }

    res.status(200).json(chat);
  } catch (error) {
    console.error("Error fetching chat:", error);
    res.status(500).json({ message: "Failed to get chat" });
  }
};









// addChat 

const addChat = async (req, res) => {
  const tokenUserId = req.userId;  // Get the current user's ID from the token
  const { receiverId } = req.body;  // Get the receiver's ID from the request body

  try {
    // Create a new chat with both userIDs
    const newChat = await chatModel.create({
      userIDs: [tokenUserId, receiverId],  // Store both user IDs in the userIDs array
    });

    // Send back the newly created chat
    res.status(200).json(newChat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add chat!" });
  }
};






// read Chats
// const readChat = async (req, res) => {
//   try {    
//     res.status(200).json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Failed to Read Chat" });
//   }
// };

const readChat = async (req, res) => {
  const tokenUserId = req.userId; // Extract user ID from the token
  const { id } = req.params; // Extract the chat ID from the request parameters

  try {
    // Find the chat where the chat ID matches and the user is part of the userIDs array
    const chat = await chatModel.findOne({
      _id: id,
      userIDs: { $in: [tokenUserId] }
    });

    // Check if the chat exists
    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Check if the user has already marked the chat as seen
    if (!chat.seenBy.includes(tokenUserId)) {
      // Add tokenUserId to the seenBy array if not already included
      chat.seenBy.push(tokenUserId);
      
      // Save the updated chat document
      await chat.save();
    }

    // Return the updated chat document as a response
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to read chat" });
  }
};



// Delete Chat
const deleteChat = async (req, res) => {
  const tokenUserId = req.userId; // Extract the user ID from the token
  const { id } = req.params; // Extract the chat ID from the request parameters

  try {
    // Find the chat by its ID and check if the user is part of the chat
    const chat = await chatModel.findOne({
      _id: id,
      userIDs: { $in: [tokenUserId] },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Delete the chat from the database
    await chatModel.deleteOne({ _id: id });

    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    console.error("Error deleting chat:", error);
    res.status(500).json({ message: "Failed to delete chat" });
  }
};






module.exports = { getChats,getChat,addChat,readChat,deleteChat };
