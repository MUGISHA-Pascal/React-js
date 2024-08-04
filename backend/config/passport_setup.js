const googleStrategy = require("passport-google-oauth20");
const passport = require("passport");
const keys = require("../keys");
const user = require("../model/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
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
    async (accessToken, refreshToken, profile, done) => {
      await user.findOne({ googleId: profile.id }).then((currentuser) => {
        if (currentuser) {
          console.log(currentuser);
          done(null, currentuser);
        } else {
          const newuser = new user({
            username: profile.displayName,
            googleId: profile.id,
          }).save();
          done(null, newuser);
        }
      });
    }
  )
);
