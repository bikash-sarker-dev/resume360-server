const express = require("express");
const mongoose = require("mongoose");
const reviewRouter = express.Router();

reviewRouter.get("/", async (req, res) => {
  res.send({ message: "the review api" });
});

module.exports = reviewRouter;
