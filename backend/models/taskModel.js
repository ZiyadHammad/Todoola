const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    projectID: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Projects'
    },
    name: {
      type: 'String',
      required: true,
      maxLength: 20,
      minLength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      maxLength: 20,
      trim: true
    },
    date: {
      type: timestamp,
      required: [true, 'Please enter a due date for this task']
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
    collection: 'Tasks'
  }
)

module.exports = mongoose.model('Tasks', taskSchema)

