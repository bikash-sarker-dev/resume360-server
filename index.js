require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersManageHandler = require("./users/userAuthHandler");
const resumeManage = require("./resumeHandle/resumeHandler.js");
const profile = require("./profileManage/profileManage");
const secureApp = require("./appSecurity/security");
const coverLetterManage = require("./coverLetter/coverLetterManage");
const profileImage = require("./profileImageMange/profileImageHandle");
const adminRole = require("./adminHandler/adminHander");
const reviewMange = require("./reviewHandler/reviewHandler");
const resumeImportManage = require("./importResumeManage/resumeImportHandle");

const app = express();
const port = process.env.SERVER_PORT || 5000;

const coseOrigin = {
  origin: ["http://localhost:5173", "https://resume360.netlify.app"],
  credentials: true,
  optionalSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
};
// middleware use
app.use(cors(coseOrigin));
app.use(express.json());

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

// app security relate work
app.use("/secure-login", secureApp);

// admin relate work
app.use("/user/role", adminRole);

// users route relates working
app.use("/users", usersManageHandler);

// resume route relates working
app.use("/resume", resumeManage);

// resume route relates working
app.use("/resumeIn", resumeImportManage);

// cover letter route relates working
app.use("/cover-letter", coverLetterManage);

// profile route relates working
app.use("/profile", profile);
// profile route relates working
app.use("/profile-image", profileImage);

// review route relates working
app.use("/reviews", reviewMange);

app.get("/", (req, res) => {
  res.send("the resume 360 server open.");
});

app.listen(port, () => {
  console.log(` The server running port: ${port}`);
});
