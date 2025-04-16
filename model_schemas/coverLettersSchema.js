const mongoose = require("mongoose");
const { Schema } = mongoose;

const createCoverLettersSchema = new Schema({
  personalInfo: {
    userId: {
      type: String,
      index: true,
    },
    fullName: String,
    address: String,
    cityZip: String,
    email: String,
    phone: String,
    linkedIn: String,
    portfolio: String,
    date: String,
  },
  hiringManager: {
    name: String,
    company: String,
    address: String,
    cityZip: String,
  },
  greeting: String,
  introduction: String,
  professionalExperience: String,
  skillsAndQualifications: String,
  goodFit: String,
  closing: String,
  ending: {
    formalClosing: String,
    signature: String,
  },
});

const coverLetterModules = mongoose.model(
  "CoverLetterValue",
  createCoverLettersSchema
);

module.exports = coverLetterModules;
