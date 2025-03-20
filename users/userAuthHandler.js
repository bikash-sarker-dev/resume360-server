const express = require("express");
const userRouter = express.Router();

// post user working
userRouter.get("/", async (req, res) => {
  const newUser = req.body;
});
