const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Projects = require("../models/projectModel");

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Projects.find({ userID: req.user.ID });

  res.status(200).json(projects);
});

const postProject = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Project Posted'})
})

const deleteProject = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Project Deleted'})
})

const updateProject = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Project Updated'})
})

module.exports = { getProjects, deleteProject, postProject, updateProject };
