const mongoose = require("mongoose");
const { Schema } = mongoose;

const userCreateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 80,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  terms: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
  },
  block: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userCreateSchema);

module.exports = User;
