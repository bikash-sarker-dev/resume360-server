const express = require("express");
const mongoose = require("mongoose");
const reviewRouter = express.Router();
const review = require("../model_schemas/reviewSchema");

reviewRouter.post("/", async (req, res) => {
  const userReview = req.body;
  const reviewModel = new review(userReview);
  await reviewModel
    .save()
    .then((result) => {
      console.log("The review save successfully", result);
      res
        .status(200)
        .send({ message: "The review save successfully", status: 200, result });
    })
    .catch((error) => {
      console.log("Error Saving review:", error);
      res.status(500).send({ massage: "Error Saving review:", error });
    });
});

reviewRouter.get("/", async (req, res) => {
  try {
    let result = await review
      .find({ rating: { $gte: 4 } })
      .sort({ createdAt: 1 })
      .limit(5);
    res
      .status(200)
      .send({ message: "the review get successfully ", status: 200, result });
  } catch (err) {
    res.status(500).send({ message: "the review get error ", err });
  }
});

reviewRouter.get("/all", async (req, res) => {
  try {
    let result = await review.find({});
    res.status(200).send({
      message: "the review all get successfully ",
      status: 200,
      result,
    });
  } catch (err) {
    res.status(500).send({ message: "the review get error ", err });
  }
});

reviewRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await review
    .deleteOne({ _id: id })
    .then((result) => {
      res.status(200).send({ message: "The review Delete successfully" });
    })
    .catch((error) => {
      res.status(500).send({ massage: "Error Delete review:", error });
    });
});
module.exports = reviewRouter;
