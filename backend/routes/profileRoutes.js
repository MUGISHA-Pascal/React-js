const profileRoutes = require("express").Router();

profileRoutes.get("/", (req, res) => {
  res.render("profile", { user: req.user });
});

module.exports = profileRoutes;
