const mongoose = require("mongoose");
const express = require("express");
const Task = require("./model/Task");
const keys = require("./keys");
const app = express();
const bodyparser = require("body-parser");
const taskflow = require("./routes/taskflow");
const passport = require("passport");
const authRoutes = require("./routes/auth");

app.set("view engine", "ejs");
app.use("/auth/", authRoutes);

app.use(bodyparser.json());
mongoose.connect(keys.mongodb_url);

app.use("/taskflow", taskflow);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
