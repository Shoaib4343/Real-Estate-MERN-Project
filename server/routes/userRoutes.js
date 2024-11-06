const express = require("express");
const { getUsers, getUser, deleteUser, updateUser } = require("../controllers/userController");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/",verifyToken, getUsers)
router.get("/:id",verifyToken,getUser)
router.put("/:id",verifyToken,updateUser)
router.delete("/:id",verifyToken,deleteUser)

module.exports = router;