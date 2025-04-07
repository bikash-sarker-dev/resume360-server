const express = require("express");
const resumeRouter = express.Router();
const resumeInfo = require("../model_schemas/resumeSchema.js");

resumeRouter.get("/", async (req, res) => {
  res.send({ message: "test successfully" });
});

module.exports = resumeRouter;
