const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  username: String,
  googleId: String,
});

const User = mongoose.model("User", userschema);

module.exports = User;
