var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Food = require('../models/Food.js');

router.get('/', function(req, res, next) {
  Food.find(function (err, results) {
    if (err) return next(err);
    res.json(results);
  });
});

router.post('/', function(req, res, next) {
  Food.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
