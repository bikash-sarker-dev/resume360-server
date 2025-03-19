require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 5000;

app.get("/", (req, res) => {
  res.send("the resume 360 server open.");
});

app.listen(port, () => {
  console.log(` The server running port: ${port}`);
});
