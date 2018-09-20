var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');

var User = require('../models/User.js');

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info){
    var token;
    // If Passport throws/catches an error
    if (err) {
      console.log("error");
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      console.log(info);
      res.status(401).json(info);
    }
  })(req, res);

});

module.exports = router;
