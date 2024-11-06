const express = require("express");
const { verifyToken } = require("../middleware/verifyToken");
const { shouldBeAdmin, shouldBeLoggedIn } = require("../controllers/testController");

const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

// router.get("/should-be-admin", shouldBeAdmin);

module.exports = router;
