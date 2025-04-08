const express = require("express");
const profileRouter = express.Router();
const profile = require("../model_schemas/profileSchema.js");

profileRouter.get("/", async (req, res) => {
  res.send("test profile route backend");
});

module.exports = profileRouter;
