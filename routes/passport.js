var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('user');

passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'pass'
  },
  function(username, password, done) {
    User.findOne({ name: username }, function (err, user) {

      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }

      user.validPassword(password).then(function(value) {
        if(!value){
          return done(null, false, {
            message: 'Password is wrong'
          });
        }

        return done(null, user);
      });

    });
  }
));
