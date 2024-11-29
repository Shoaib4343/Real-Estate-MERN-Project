const express = require("express");
const { addMessage} = require("../controllers/messageController");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router.post("/:chatId",verifyToken,addMessage)

module.exports = router;