var mongoose = require('mongoose');

var FoodSchema = new mongoose.Schema({
  name: String,
  spanish: String,
  displayName: String,
  type: String,
  available: String,
  image: String,
  price: Number
});

module.exports = mongoose.model('Food', FoodSchema);
