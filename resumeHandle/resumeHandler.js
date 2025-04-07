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

// update resume working
resumeRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  let updateInformation = req.body;
  const resumeModel = new resumeInfo();
  const query = { _id: id };
  console.log(updateInformation, query);
  let updateInfo = {
    $set: {
      ...updateInformation,
    },
  };
  await resumeInfo
    .updateOne(query, updateInfo)
    .then((result) => {
      console.log(" update resume save");
      res
        .status(200)
        .send({ message: "resume information update save", result });
    })
    .catch((error) => {
      console.log("resume ", error);
      res
        .status(500)
        .send({ message: "resume information update save error", error });
    });
});

// delete user working
resumeRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await resumeInfo
    .deleteOne({ _id: id })
    .then((result) => {
      res.status(200).send({ message: "The resume Delete successfully" });
    })
    .catch((error) => {
      res.status(500).send({ massage: "Error Delete resume:", error });
    });
});

module.exports = resumeRouter;
