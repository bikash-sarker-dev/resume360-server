const express = require("express");
const jwt = require("jsonwebtoken");
const securityRouter = express.Router();

securityRouter.post("/", async (req, res) => {
  const tokenMail = req.body;
  const secureToken = jwt.sign(tokenMail, process.env.JWT_TOKEN_KEY, {
    expiresIn: "1h",
  });
  res.send({ token: secureToken });
});

securityRouter.get("/", async (req, res) => {
  res.send({ message: "the security route test" });
});

module.exports = securityRouter;
