const mongoose = require("mongoose");

const { Schema } = mongoose;

const createProfileSchema = new Schema({
  photoURL: {
    type: String,
    required: true,
  },
  name: String,
  role: String,
  location: String,
  work: String,
  address: String,
  skills: [String],
  phone: [Number],
  email: {
    type: String,
    required: true,
  },
  website: String,
  birthday: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const profile = mongoose.model("Profile", createProfileSchema);

module.exports = profile;
