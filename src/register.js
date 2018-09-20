var express = require('express');

var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var User = require('./models/User.js');
var app = express();
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/foods', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//var User1 = mongoose.model('User1', User);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var BCRYPT_SALT_ROUNDS = 12;

var username = "admin3";
var password = "CaribE45";

bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
  .then(function(hashedPassword) {
    console.log(hashedPassword);
    //var x = ;
    User.create( {name: username, password:hashedPassword} , function (err, post) {
      if (err) return next(err);
      console.log("saved")
    });
  })
  .catch(function(error){
      console.log("Error saving user: ");
      console.log(error);
  });
