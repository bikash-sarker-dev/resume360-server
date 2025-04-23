const express = require("express");
const mongoose = require("mongoose");
const reviewRouter = express.Router();
const review = require("../model_schemas/reviewSchema");

reviewRouter.get("/", async (req, res) => {
  res.send({ message: "the review api" });
});

module.exports = reviewRouter;
