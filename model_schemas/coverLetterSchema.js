const mongoose = require("mongoose");
const { Schema } = mongoose;

const createCoverLetterSchema = new Schema({
  name: String,
});

const coverLetterModule = mongoose.model(
  "CoverLetter",
  createCoverLetterSchema
);

module.exports = coverLetterModule;
