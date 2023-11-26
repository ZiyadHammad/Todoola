const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, userName, password } = req.body;

  if (!firstName || !lastName || !email || !userName || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Check if User Exists
  const userDoesExist = await User.findOne({ email });

  if (userDoesExist) {
    res.status(400);
    throw new Error("User Already Exists.");
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    firstName,
    lastName,
    email,
    userName,
    hash: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: genToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const logIn = asyncHandler(async (req, res) => {
  const { userName, password, email } = req.body;

  const user = await User.findOne({ email, userName });

  if (user && (await bcrypt.compare(password, user.hash))) {
    res.status(200).json({
      id: user.id,
      username: user.userName,
      name: `${user.firstName} ${user.lastName}`,
      token: genToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = { signUp, logIn, getUser };