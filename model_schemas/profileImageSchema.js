const mongoose = require("mongoose");
const { Schema } = mongoose;

const createProfileImageSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const profileImageModel = mongoose.model(
  "ProfileImage",
  createProfileImageSchema
);

module.exports = profileImageModel;
