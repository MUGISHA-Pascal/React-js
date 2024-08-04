const mongoose = require("mongoose");
const express = require("express");
const Task = require("./model/Task");
const keys = require("./keys");
const app = express();
const bodyparser = require("body-parser");
const cookieSession = require("cookie-session");
const taskflow = require("./routes/taskflow");
const passport = require("passport");
const authRoutes = require("./routes/auth");
const passportsetup = require("./config/passport_setup");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/auth/", authRoutes);

app.use(
  cookieSession({
    keys: [keys.secret_key],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.json());
mongoose.connect(keys.mongodb_url);

app.use("/taskflow", taskflow);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
