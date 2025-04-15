const express = require("express");
const AdminRoleRouter = express.Router();
const User = require("../model_schemas/userSchema");

AdminRoleRouter.get("/", async (req, res) => {
  const result = await User.find({});
  res.status(200).send({ message: "the get successfully !", result });
});

AdminRoleRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  console.log(query);

  const updateRole = {
    $set: {
      role: "organizer",
    },
  };
  const result = await User.findByIdAndUpdate(query, {
    $set: {
      role: "organizer",
    },
  });
  res.send(result);
});

AdminRoleRouter.get("/:email", async (req, res) => {
  const email = req.params.email;
  const query = { email: email };

  const user = await User.findOne(query);
  let organizer = false;
  if (user) {
    organizer = user?.role === "organizer";
  }
  res.send({ organizer });
});

module.exports = AdminRoleRouter;
