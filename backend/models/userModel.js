const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 50,
      lowercase: true
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 50,
      lowercase: true
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 25,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 100,
      lowercase: true
    },
    hash: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
    collection: 'Users'
  }
);

module.exports = mongoose.model('User', userSchema);