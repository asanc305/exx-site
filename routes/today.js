var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Food = require('../models/Food.js');

router.get('/', function(req, res, next) {
  Food.find( {available : "y"}, function (err, results) {
    if (err) return next(err);
    res.json(results);
  });
});

module.exports = router;