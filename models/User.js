var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  name: String,
  password: String
});

userSchema.methods.validPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('user', userSchema);
