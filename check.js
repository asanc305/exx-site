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

var username = "admin";
var password = "Car8ibE45";
var user;

User.find( {name : username}, function (err, results) {
  if (err) return next(err);
  //console.log(results);

  bcrypt.compare(password, results[0].password, function(err, res) {
    console.log(res);
  });

});
