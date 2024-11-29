const express = require("express");
const { getChats, getChat, addChat, readChat,deleteChat } = require("../controllers/chatController");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);
router.delete("/:id",verifyToken, deleteChat);


module.exports = router;