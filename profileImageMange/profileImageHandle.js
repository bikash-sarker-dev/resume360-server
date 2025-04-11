const express = require("express");
const profileImageRouter = express.Router();
const profileImage = require("../model_schemas/profileImageSchema");

profileImage.get("/", async (req, res) => {
  res.send({ message: "test profile image route backend" });
});

// post profile related working
// profileImage.post("/", async (req, res) => {
//   const profileInfo = req.body;

//   let profileModel = new profiles(profileInfo);
//   await profileModel
//     .save()
//     .then((result) => {
//       res
//         .status(200)
//         .send({ message: " Successfully profile update", status: 200 });
//     })
//     .catch((err) => {
//       res.status(500).send({ massage: "Error Saving user:", error });
//     });
// });

// update profile working
// profileImage.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   let updateData = req.body;
//   const query = { _id: id };
//   let updateInfo = {
//     $set: {
//       ...updateData,
//     },
//   };
//   await profiles
//     .updateOne(query, updateInfo)
//     .then((result) => {
//       res.status(200).send({
//         message: " successfully profile update and save",
//         status: 200,
//         result,
//       });
//     })
//     .catch((error) => {
//       res
//         .status(500)
//         .send({ message: "profile information update save error", error });
//     });
// });

// get profile
// profileImage.get("/:email", async (req, res) => {
//   try {
//     const email = req.params.email;
//     const query = { email: email };
//     console.log(query);
//     let result = await profiles.findOne(query);
//     res.status(200).send({
//       message: "the profile information ",
//       status: 200,
//       result,
//     });
//   } catch (err) {
//     res.status(500).send({ message: "the resume get single data error ", err });
//   }
// });

module.exports = profileImage;
