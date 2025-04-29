const express = require("express");
const resumeInRouter = express.Router();
const resumeIn = require("../model_schemas/resumeImportSchema");

// post resume import working
resumeInRouter.post("/", async (req, res) => {
  const resumeInformation = req.body;
  const resumeImportModel = new resumeIn(resumeInformation);
  await resumeImportModel
    .save()
    .then((result) => {
      console.log("resume save");
      res.status(200).send({
        message: "resume import file information save",
        status: 200,
        result,
      });
    })
    .catch((error) => {
      console.log("resume ", error);
      res.status(500).send({ message: "resume information save error", error });
    });
});

// update resume working
resumeInRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  let updateInformation = req.body;
  const query = { _id: id };
  console.log(updateInformation, query);
  let updateInfo = {
    $set: {
      ...updateInformation,
    },
  };
  await resumeIn
    .updateOne(query, updateInfo)
    .then((result) => {
      res.status(200).send({
        message: "resume import file information update save",
        status: 200,
        result,
      });
    })
    .catch((error) => {
      console.log("resume ", error);
      res
        .status(500)
        .send({ message: "resume information update save error", error });
    });
});

// delete user working
resumeInRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await resumeIn
    .deleteOne({ _id: id })
    .then((result) => {
      res.status(200).send({
        message: "The resume import file Delete successfully",
        status: 200,
      });
    })
    .catch((error) => {
      res.status(500).send({ massage: "Error Delete resume:", error });
    });
});

// get all resume relate working
resumeInRouter.get("/", async (req, res) => {
  try {
    let result = await resumeIn.find({});
    res.status(200).send({
      message: "the resume import file get successfully ",
      status: 200,
      result,
    });
  } catch (err) {
    res.status(500).send({ message: "the resume get error ", err });
  }
});

// get single resume relate working
resumeInRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    let result = await resumeIn.findOne(query);
    res.status(200).send({
      message: "the resume import file get single data successfully ",
      status: 200,
      result,
    });
  } catch (err) {
    res.status(500).send({ message: "the resume get single data error ", err });
  }
});

module.exports = resumeInRouter;
