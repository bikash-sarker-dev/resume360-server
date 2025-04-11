const express = require("express");
const profileRouter = express.Router();
const profiles = require("../model_schemas/profileSchema.js");

// post profile related working
profileRouter.post("/", async (req, res) => {
  const profileInfo = req.body;

  let profileModel = new profiles(profileInfo);
  await profileModel
    .save()
    .then((result) => {
      res
        .status(200)
        .send({ message: " Successfully profile update", status: 200 });
    })
    .catch((err) => {
      res.status(500).send({ massage: "Error Saving user:", error });
    });
});

// update profile working
profileRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  let updateData = req.body;
  const query = { _id: id };
  let updateInfo = {
    $set: {
      ...updateData,
    },
  };
  await profiles
    .updateOne(query, updateInfo)
    .then((result) => {
      res.status(200).send({
        message: " successfully profile update and save",
        status: 200,
        result,
      });
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: "profile information update save error", error });
    });
});

// get profile
profileRouter.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    console.log(query);
    let result = await profiles.findOne(query);
    res.status(200).send({
      message: "the profile information ",
      status: 200,
      result,
    });
  } catch (err) {
    res.status(500).send({ message: "the resume get single data error ", err });
  }
});

module.exports = profileRouter;
