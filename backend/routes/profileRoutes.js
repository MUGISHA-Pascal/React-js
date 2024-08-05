const profileRoutes = require("express").Router();
const authcheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};
profileRoutes.get("/", authcheck, (req, res) => {
  res.render("profile", { user: req.user });
});

module.exports = profileRoutes;
