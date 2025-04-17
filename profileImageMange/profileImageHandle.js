const express = require("express");
const profileImageRouter = express.Router();
const profileImage = require("../model_schemas/profileImageSchema");

// profileImageRouter.get("/", async (req, res) => {
//   res.send({ message: "test profile image route backend" });
// });

// post profile image related working
profileImageRouter.post("/", async (req, res) => {
  const imageData = req.body;
  let imageModel = new profileImage(imageData);
  await imageModel
    .save()
    .then((result) => {
      res
        .status(200)
        .send({ message: " Successfully profile update", status: 200, result });
    })
    .catch((err) => {
      res.status(500).send({ massage: "Error Saving user:", error });
    });
});

// update profile image related working
profileImageRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  let updateImgData = req.body;
  const query = { _id: id };
  let updateInfo = {
    $set: {
      ...updateImgData,
    },
  };
  await profileImage
    .updateOne(query, updateInfo)
    .then((result) => {
      res.status(200).send({
        message: " successfully profile image update and save",
        status: 200,
        result,
      });
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: "profile image update save error", error });
    });
});

// get profile image
profileImageRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: id };
    let result = await profileImage.findOne(query);
    res.status(200).send({
      message: "the profile image get single successfully ",
      status: 200,
      result,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "the profile data get single data error ", err });
  }
});

module.exports = profileImageRouter;
