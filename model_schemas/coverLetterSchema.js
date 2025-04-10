const mongoose = require("mongoose");

const { Schema } = mongoose;

const createCoverLetterSchema = new Schema({
  uid: { type: String, required: true, unique: true },
  personalInfo: {
    fullName: {
      type: String,
      required: true,
    },
    address: String,
    cityZip: String,
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    linkedIn: String,
    portfolio: String,
    date: Date,
  },
  hiringManager: {
    name: {
      type: String,
      required: true,
    },
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

const coverLetterModule = mongoose.model(
  "CoverLetter",
  createCoverLetterSchema
);

module.exports = coverLetterModule;
