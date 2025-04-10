const express = require("express");
const coverLetterRouter = express.Router();
const coverLetter = require("../model_schemas/coverLetterSchema");

coverLetterRouter.get("/", async (req, res) => {
  res.send({ message: "the test successfully" });
});
// post resume working
coverLetterRouter.post("/", async (req, res) => {
  const coverLetterData = req.body;
  console.log(coverLetterData);
  const coverLetterModel = new coverLetter(coverLetterData);
  await coverLetterModel
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
  let coverLetterData = req.body;
  const query = { _id: id };
  console.log(coverLetterData, query);
  let updateInfo = {
    $set: {
      ...coverLetterData,
    },
  };
  await coverLetter
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
// coverLetterRouter.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   await resumeInfo
//     .deleteOne({ _id: id })
//     .then((result) => {
//       res
//         .status(200)
//         .send({ message: "The resume Delete successfully", status: 200 });
//     })
//     .catch((error) => {
//       res.status(500).send({ massage: "Error Delete resume:", error });
//     });
// });

// get all resume relate working
// coverLetterRouter.get("/", async (req, res) => {
//   try {
//     let result = await resumeInfo.find({});
//     res
//       .status(200)
//       .send({ message: "the resume get successfully ", status: 200, result });
//   } catch (err) {
//     res.status(500).send({ message: "the resume get error ", err });
//   }
// });

// get single resume relate working
// coverLetterRouter.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const query = { _id: id };
//     console.log(query);
//     let result = await resumeInfo.findOne(query);
//     res.status(200).send({
//       message: "the resume get single data successfully ",
//       status: 200,
//       result,
//     });
//   } catch (err) {
//     res.status(500).send({ message: "the resume get single data error ", err });
//   }
// });

module.exports = coverLetterRouter;
