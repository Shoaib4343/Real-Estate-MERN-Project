const express = require("express");
const { getUsers, getUser, deleteUser, updateUser ,savePost,profilePosts,getNotificationNumber} = require("../controllers/userController");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/",verifyToken, getUsers)
// router.get("/:id",verifyToken,getUser)
router.put("/:id",verifyToken,updateUser)
router.delete("/:id",verifyToken,deleteUser)
router.post("/save",verifyToken,savePost)
router.get("/profilePosts",verifyToken,profilePosts)
router.get("/notification", verifyToken, getNotificationNumber);


module.exports = router;