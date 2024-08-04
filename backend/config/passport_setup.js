const googleStrategy = require("passport-google-oauth20");
const passport = require("passport");
const keys = require("../keys");
const user = require("../model/user");

passport.serializeUser((user) => {
  done(null, user.id);
});
passport.deserializeUser((id) => {
  user.findById(id).then((User) => {
    done(null, User);
  });
});

passport.use(
  new googleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      const currentuser = user.findOne({ googleId: profile.id });
      if (currentuser) {
        console.log(currentuser);
      } else {
        user({ username: profile.username, googleId: profile.id }).save();
      }
      // console.log(profile);
    }
  )
);
