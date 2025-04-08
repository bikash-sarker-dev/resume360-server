const mongoose = require("mongoose");
const express = require("express");
const profileRouter = express.Router();

profileRouter.get("/", async (req, res) => {
  res.send("test profile route backend");
});

module.exports = profileRouter;
