const express = require("express");
const mongoose = require("mongoose");
const reviewRouter = express.Router();
const review = require("../model_schemas/reviewSchema");

reviewRouter.get("/", async (req, res) => {
  res.send({ message: "the review api" });
});

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

module.exports = reviewRouter;
