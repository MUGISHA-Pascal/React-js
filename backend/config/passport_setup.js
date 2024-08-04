const googleStrategy = require("passport-google-oauth20");
const passport = require("passport");
const keys = require("../keys");

passport.use(
  new googleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
