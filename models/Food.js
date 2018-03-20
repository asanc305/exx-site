var mongoose = require('mongoose');

var FoodSchema = new mongoose.Schema({
  name: String,
  displayName: String,
  type: String,
  available: String,
  price: Number,
});

module.exports = mongoose.model('Food', FoodSchema);
