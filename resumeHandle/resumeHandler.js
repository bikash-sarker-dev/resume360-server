const express = require("express");
const resumeRouter = express.Router();
const resumeInfo = require("../model_schemas/resumeSchema.js");

// post resume working
resumeRouter.post("/", async (req, res) => {
  const resumeInformation = req.body;
  const resumeModel = new resumeInfo(resumeInformation);
  await resumeModel
    .save()
    .then((result) => {
      console.log("resume save");
      res.status(200).send({ message: "resume information save", result });
    })
    .catch((error) => {
      console.log("resume ", error);
      res.status(500).send({ message: "resume information save error", error });
    });
});

resumeRouter.get("/", async (req, res) => {
  res.send({ message: "test successfully" });
});

module.exports = resumeRouter;
