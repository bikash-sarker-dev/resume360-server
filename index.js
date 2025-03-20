require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.SERVER_PORT || 5000;

// mongodb connection
const dataBaseUrl = process.env.DB_CONNECT_URL;

mongoose
  .connect(dataBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("The mongoDb connection successfully.");
  })
  .catch((error) => {
    console.log("MongoDb connection error:", error);
  });

// middleware use
app.use(cors());
app.use(express.json());

// users route relates working
app.use("/users", userManageHandler);

app.get("/", (req, res) => {
  res.send("the resume 360 server open.");
});

app.listen(port, () => {
  console.log(` The server running port: ${port}`);
});
