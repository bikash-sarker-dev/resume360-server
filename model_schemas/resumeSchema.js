const mongoose = require("mongoose");

const { Schema } = mongoose;

const createResumeSchema = new Schema({
  personalInfo: {
    fullName: String,
    phone: {
      type: Number,
      required: true,
    },
    email: String,
    address: String,
    jobTitle: String,
    profileImage: String,
    imageName: String,
    about: String,
    date: {
      type: Date,
    },
    gender: String,
    nationality: String,
  },
  education: [
    {
      school: String,
      degree: String,
      field: String,
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      grade: String,
      description: String,
    },
  ],
  skills: [String],
  socialLinks: [
    {
      platform: String,
      link: String,
    },
  ],
  projects: [
    {
      projectName: String,
      description: String,
      live: String,
      client: String,
      server: String,
      features: [String],
    },
  ],
  experience: [
    {
      company: String,
      position: String,
      startMonth: String,
      endMonth: String,
      description: String,
    },
  ],
  languages: [
    {
      language: String,
      proficiency: String,
    },
  ],
});

const resumeInfo = mongoose.model("ResumeInfo", createResumeSchema);

module.exports = resumeInfo;
