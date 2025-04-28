const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String },
  overview: { type: String },
  features: [{ type: String }],
  liveLink: { type: String, default: null },
  clientRepo: { type: String, default: null },
  serverRepo: { type: String, default: null },
  technologies: [{ type: String }],
});

const skillSchema = new mongoose.Schema({
  backend: [{ type: String }],
  frontend: [{ type: String }],
  others: [{ type: String }],
  comfortable: [{ type: String }],
  experience: [{ type: String }],
  familiar: [{ type: String }],
  softSkills: [{ type: String }],
  tools: [{ type: String }],
});

const resumeInSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String },
    summary: { type: String },
    education: { type: String },
    email: { type: String },
    number: { type: String },
    language: { type: String },
    location: { type: String },
    linkedin: { type: String, default: null },
    portfolio: { type: String, default: null },
    references: { type: String, default: null },
    projects: [projectSchema],
    skills: skillSchema,
  },
  {
    timestamps: true,
  }
);

const resumeIn = mongoose.model("ResumeImport", resumeInSchema);

module.exports = resumeIn;
