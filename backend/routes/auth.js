const authRoutes = require("express").Router();
const passport = require("passport");

authRoutes.get("/login/", (req, res) => {});
authRoutes.get("/logout/", (req, res) => {});

authRoutes.get(
  "/google/",
  passport.authenticate("google", (scope = ["profile"])),
  (req, res) => {
    res.send("you are logged in");
  }
);

authRoutes.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.send("you reached the call back function");
  }
);

module.exports = authRoutes;
