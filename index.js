require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersManageHandler = require("./users/userAuthHandler");
const resumeManage = require("./resumeHandle/resumeHandler.js");

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

const coseOrigin = {
  origin: ["http://localhost:5173", "https://resume360.netlify.app"],
  credentials: true,
  optionalSuccessStatus: 200,
};
// middleware use
app.use(cors(coseOrigin));
app.use(express.json());

// users route relates working
app.use("/users", usersManageHandler);

// resume route relates working
app.use("/resume", resumeManage);

app.get("/", (req, res) => {
  res.send("the resume 360 server open.");
});

app.listen(port, () => {
  console.log(` The server running port: ${port}`);
});
