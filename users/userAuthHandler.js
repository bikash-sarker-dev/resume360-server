const express = require("express");
const mongoose = require("mongoose");
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
      res.status(200).send({ message: "The user save successfully" });
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

userRouter.get("/:email", async (req, res) => {
  try {
    const id = req.params.email;
    const query = { email: id };
    let result = await User.findOne(query);
    res.status(200).send({
      message: "the user block find successfully ",
      status: 200,
      result,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "the user data get single data error ", err });
  }
});

// delete user working
userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).send({ message: "The user Delete successfully" });
    })
    .catch((error) => {
      res.status(500).send({ massage: "Error Delete user:", error });
    });
});

module.exports = userRouter;
