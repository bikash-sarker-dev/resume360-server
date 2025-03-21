const express = require("express");
const userRouter = express.Router();
const User = require("../model_schemas/userSchema");

// post user working
userRouter.post("/", async (req, res) => {
  const newUser = req.body;
  const userModel = new User(newUser);
  await userModel
    .save()
    .then((result) => {
      console.log("The user save successfully", result);
      res.status(200).send({ message: "The user save successfully", result });
    })
    .catch((error) => {
      console.log("Error Saving user:", error);
      res.status(500).send({ massage: "Error Saving user:", error });
    });
});

// post user working
userRouter.post("/", async (req, res) => {
  const newUser = req.body;
  const userModel = new User(newUser);
  await userModel
    .save()
    .then((result) => {
      console.log("The user save successfully", result);
      res.status(200).send({ message: "The user save successfully", result });
    })
    .catch((error) => {
      console.log("Error Saving user:", error);
      res.status(500).send({ massage: "Error Saving user:", error });
    });
});
// get user working
userRouter.get("/", async (req, res) => {
  const result = await User.find({});
  res.status(200).send({ message: "the get successfully !", result });
});

module.exports = userRouter;
