const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewCreateSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  profession: {
    type: String,
  },
  message: {
    type: String,
  },
  rating: {
    type: String,
  },
});

const reviews = mongoose.model("Reviews", reviewCreateSchema);

module.exports = reviews;
