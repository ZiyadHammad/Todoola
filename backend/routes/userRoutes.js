const express = require("express");
const router = express.Router();
const { signUp, logIn, getUser } = require("../controllers/userController");
const { protect } = require("../middleware/auth");

router.route("/signup").post(signUp);
router.route("/login").post(logIn);
router.route("/getUser").get(protect, getUser);

module.exports = router;
