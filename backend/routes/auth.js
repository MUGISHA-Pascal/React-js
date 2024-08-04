const authRoutes = require("express").Router();
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const keys = require("../keys");
authRoutes.get("/login/", (req, res) => {
  res.render("login");
});
authRoutes.get("/logout/", (req, res) => {
  res.logout();
});

authRoutes.get(
  "/google/",
  passport.authenticate("google", { scope: ["profile"] })
);

authRoutes.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.send("you reached the call back function");
  }
);

module.exports = authRoutes;
