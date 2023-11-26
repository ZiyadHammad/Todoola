const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    name: {
      type: 'String',
      required: true,
      maxLength: 20,
      minLength: 1
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
    collection: 'Projects'
  }
)

module.exports = mongoose.model('Projects', projectSchema)