const mongoose = require("mongoose");

const { Schema } = mongoose;

const createProfileSchema = new Schema({});

const profile = mongoose.model("Profile", createProfileSchema);

module.exports = profile;
