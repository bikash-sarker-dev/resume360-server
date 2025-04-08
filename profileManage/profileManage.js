const express = require("express");
const profileRouter = express.Router();
const profiles = require("../model_schemas/profileSchema.js");

profileRouter.get("/", async (req, res) => {
  res.send({ message: "test profile route backend" });
});

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

module.exports = profileRouter;
