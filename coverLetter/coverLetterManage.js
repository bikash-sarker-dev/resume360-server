const express = require("express");
const coverLetterRouter = express.Router();
const coverLetters = require("../model_schemas/coverLettersSchema");

// post resume working
coverLetterRouter.post("/", async (req, res) => {
  const coverLettersData = req.body;
  console.log(coverLettersData);
  const coverLettersModel = new coverLetters(coverLettersData);
  await coverLettersModel
    .save()
    .then((result) => {
      console.log("cover letter save");
      res.status(200).send({
        message: "Cover letter successfully save.",
        status: 200,
        result,
      });
    })
    .catch((error) => {
      console.log("resume ", error);
      res.status(500).send({ message: "cover letter error", error });
    });
});

// update resume working
coverLetterRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  let coverLettersData = req.body;
  const query = { _id: id };
  console.log(coverLettersData, query);
  let updateInfo = {
    $set: {
      ...coverLettersData,
    },
  };
  await coverLetters
    .updateOne(query, updateInfo)
    .then((result) => {
      console.log(" update cover letter save");
      res.status(200).send({
        message: "cover letter successfully update save.",
        status: 200,
        result,
      });
    })
    .catch((error) => {
      console.log("cover letter ", error);
      res.status(500).send({ message: "cover letter error", error });
    });
});

// delete user working
coverLetterRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await coverLetters
    .deleteOne({ _id: id })
    .then((result) => {
      res
        .status(200)
        .send({ message: "The cover letter Delete successfully", status: 200 });
    })
    .catch((error) => {
      res.status(500).send({ massage: "Error Delete cover letter:", error });
    });
});

// get all resume relate working
coverLetterRouter.get("/", async (req, res) => {
  try {
    let result = await coverLetters.find({});
    res.status(200).send({
      message: "the cover letter get successfully ",
      status: 200,
      result,
    });
  } catch (err) {
    res.status(500).send({ message: "the cover letter get error ", err });
  }
});

// get single resume relate working
coverLetterRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    let result = await coverLetters.findOne(query);
    res.status(200).send({
      message: "the cover letter get successfully ",
      status: 200,
      result,
    });
  } catch (err) {
    res.status(500).send({ message: "the cover letter error ", err });
  }
});

module.exports = coverLetterRouter;
