const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const Task = require('../models/taskModel')

const getTasks = asyncHandler(async (req, res) => {

  res.status(200).json({message: 'Get Tasks'});
});

const postTask = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Task Posted'})
})

const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Task Deleted'})
})

const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Task Updated'})
})

module.exports = {getTasks, postTask, deleteTask, updateTask}