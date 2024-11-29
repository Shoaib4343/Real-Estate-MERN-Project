
const userModel = require("../models/userModel");
const SavedPost = require("../models/savedPostSchema");
const Post = require("../models/postModel");
const bcrypt = require("bcrypt");
const chatModel = require("../models/chatModel");

// show all users
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get Users" });
  }
};
// get one user by id
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findOne({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get User" });
  }
};

// update user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId; //  this comes from your authentication middleware
  const { password, avatar, ...inputs } = req.body;

  // Check if the user is authorized to update
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  try {
    let updatedData = { ...inputs }; // Start with the inputs

    // If a new password is provided, hash it
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    // Include avatar if provided
    if (avatar) {
      updatedData.avatar = avatar;
    }

    // Update the user in the database
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: id },
      updatedData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run schema validation
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Exclude the password before sending the response
    const { password: userPassword, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update User" });
  }
};

// del post
const deleteUser = async (req, res) => {
  try {
    console.log("working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete User" });
  }
};

// savePost
const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId; // This comes from your authentication middleware
  // console.log("post id",postId)
  // console.log("token user id",tokenUserId)
  // console.log("body:",req.body)


  try {
    // Check if the post is already saved by the user
    const savedPost = await SavedPost.findOne({
      user: tokenUserId,   // Use `user` as defined in your schema
      post: postId,         // Use `post` as defined in your schema
    });

    if (savedPost) {
      // If post is already saved, remove it
      await SavedPost.deleteOne({
        user: tokenUserId,  // Use `user` as defined in your schema
        post: postId,       // Use `post` as defined in your schema
      });
      res.status(200).json({ message: "Post removed from saved list" });
    } else {
      // If post is not saved, add it to saved posts
      const newSavedPost = new SavedPost({
        user: tokenUserId,  // Reference to the user
        post: postId,       // Reference to the post
      });

      await newSavedPost.save();
      res.status(200).json({ message: "Post saved" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to save or remove post" });
  }
};




const profilePosts = async (req, res) => {
  const tokenUserId = req.userId; // This comes from your authentication middleware

  try {
    // Fetch posts created by the user (find posts where the userId matches)
    const userPosts = await Post.find({ user: tokenUserId });

    // Fetch saved posts by the user
    const saved = await SavedPost.find({ user: tokenUserId }).populate("post"); // Populate the 'post' field with post details

    // Extract the saved posts from the populated data
    const savedPosts = saved.map((item) => item.post);

    // Send the response with both user posts and saved posts
    res.status(200).json({ userPosts, savedPosts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get profile posts!" });
  }
};






// const getNotificationNumber = async (req, res) => {
//   const tokenUserId = req.userId; // Get user ID from the token

//   try {
//     // Count the number of chats where the user is part of it and has not seen it
//     const number = await chatModel.countDocuments({
//       userIDs: { $in: [tokenUserId] }, // Check if the user is involved in the chat
//       seenBy: { $nin: [tokenUserId] }, // Check if the user hasn't seen it
//     });

//     res.status(200).json(number); // Return the count of unread notifications
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to get notification count!" });
//   }
// };


const getNotificationNumber = async (req, res) => {
  const tokenUserId = req.userId; // Get user ID from the token

  try {
    // Count unread messages
    const number = await chatModel.countDocuments({
      userIDs: { $in: [tokenUserId] },
      seenBy: { $nin: [tokenUserId] },
    });

    res.status(200).json(number); // Return the unread notification count
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get notification count!" });
  }
};





module.exports = { getUsers, getUser, updateUser, deleteUser,savePost,profilePosts ,getNotificationNumber};
