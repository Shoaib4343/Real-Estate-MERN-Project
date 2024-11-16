const postModel = require("../models/postModel")
const postDetailModel = require("../models/postDetailModel")
const jwt = require('jsonwebtoken'); // For JWT verification
const SavedPost = require('../models/savedPostSchema'); // Assuming your SavedPost schema is here

const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    // Fetch the post from the database, populating user and postDetail
    const post = await postModel.findOne({ _id: id })
      .populate('user', 'username avatar') // Populate user with username and avatar
      .populate('postDetail'); // Populate postDetail

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // JWT token handling
    const token = req.cookies?.token; // Assuming the token is in cookies

    if (token) {
      // Verify the token and check if the user has saved this post
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized' });
        }

        // Find if the current user has saved this post
        const saved = await SavedPost.findOne({
          user: payload.id,
          post: id,
        });

        // Add the isSaved field to the response
        res.status(200).json({ ...post.toObject(), isSaved: saved ? true : false });
      });
    } else {
      // If no token is provided, return post without isSaved info
      res.status(200).json({ ...post.toObject(), isSaved: false });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};


const getPosts = async (req, res) => {
    const query = req.query; // Get query parameters from the request
    
    // Create an empty object to build the querzy
    const filter = {};
    
    // Dynamically build the filter object based on query parameters
    if (query.city) {
      filter.city = query.city;
    }
    if (query.type) {
      filter.type = query.type;
    }
    if (query.property) {
      filter.property = query.property;
    }
    if (query.bedroom) {
      filter.bedroom = parseInt(query.bedroom);
    }
    if (query.minPrice || query.maxPrice) {
      filter.price = {};
      if (query.minPrice) {
        filter.price.$gte = parseInt(query.minPrice); // Greater than or equal to minPrice
      }
      if (query.maxPrice) {
        filter.price.$lte = parseInt(query.maxPrice); // Less than or equal to maxPrice
      }
    }
  
    try {
      // Query posts from MongoDB using Mongoose with the filter
      const posts = await postModel.find(filter);
  
      // Return the posts as a response
      res.status(200).json(posts);
    } catch (err) {
      // Handle any errors that occur during the query
      console.log(err);
      res.status(500).json({ message: 'Failed to get Posts' });
    }
  };
  

// // get Single POst
// const getPost = async (req, res) => {
//     const id = req.params.id;

//     try {
//         const post = await postModel.findOne({ _id: id })
//             .populate('user', 'username avatar') // Populate user with username and avatar
//             .populate('postDetail'); // Populate postDetail

//         if (!post) {
//             return res.status(404).json({ message: "Post not found" });
//         }

//         res.status(200).json(post);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Failed to get post" });
//     }
// };



// add post
const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;

    try {
        // Create the post first
        const newPost = await postModel.create({
            ...body.postData,
            user: tokenUserId,
        });

        // Create PostDetail linked to the new post
        if (body.postDetail) {
            const postDetail = await postDetailModel.create({
                ...body.postDetail,
                post: newPost._id, // Link to the new Post
            });

            // Update the new post to include the postDetail reference
            newPost.postDetail = postDetail._id;
            await newPost.save();
        }

        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create post" });
    }
};




// update Post
const updatePost =async (req,res)=>{
    try{
        res.status(200).json()
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to get Posts"})
    }
}

// delete post
const deletePost = async (req, res) => {
  const id = req.params.id; // Get the post ID from URL parameters
  const tokenUserId = req.userId; // Get the logged-in user's ID from the request (assuming it's set by authentication middleware)

  try {
    // Find the post by ID
    const post = await postModel.findById(id);

    // If no post is found, return an error
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the logged-in user is the owner of the post
    if (post.user.toString() !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    // Delete the post
    await postModel.findByIdAndDelete(id);

    // Return success message
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};




module.exports = {getPosts,getPost,addPost,updatePost,deletePost}