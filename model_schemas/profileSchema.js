const mongoose = require("mongoose");
const { Schema } = mongoose;

const progressSchema = new Schema(
  {
    description: { type: String, required: true },
    year: { type: String, required: true },
  },
  { _id: false }
);

const createProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: String,
  location: String,
  work: String,
  address: String,
  skills: [String],
  phone: String,

  website: String,
  birthday: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  progress: [progressSchema],
});

const profiles = mongoose.model("Profile", createProfileSchema);

module.exports = profiles;
