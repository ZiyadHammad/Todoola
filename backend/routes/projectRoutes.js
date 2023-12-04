const express = require("express");
const router = express.Router();
const {
  getProjects,
  deleteProject,
  updateProject,
  postProject,
} = require("../controllers/projectController");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getProjects).post(protect, postProject);
router.route("/:id").put(protect, updateProject).delete(protect, deleteProject);

module.exports = router;
