const mongoose = require("mongoose");

const { Schema } = mongoose;

const createResumeSchema = new Schema({});

const resumeInfo = mongoose.model("ResumeInfo", createResumeSchema);

module.exports = resumeInfo;
