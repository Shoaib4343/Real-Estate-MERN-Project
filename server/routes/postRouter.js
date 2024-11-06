const express = require("express");
const { verifyToken } = require("../middleware/verifyToken");
const { getPosts, getPost, addPost, updatePost, deletePost } = require("../controllers/postController");
const router = express.Router();

router.get("/",verifyToken, getPosts)
router.get("/:id",verifyToken,getPost)
router.post("/",verifyToken,addPost)
router.put("/:id",verifyToken,updatePost)
router.delete("/:id",verifyToken,deletePost)

module.exports = router;