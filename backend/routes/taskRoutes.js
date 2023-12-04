const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getTasks,
  postTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.route("/").get(protect, getTasks).post(protect, postTask);
router.route('/:id').delete(protect, deleteTask).put(protect, updateTask)

module.exports = router;
