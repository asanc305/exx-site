var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Food = require('../models/Food.js');
var jwt = require('express-jwt');

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

//get all
router.get('/', function(req, res, next) {
  Food.find(function (err, results) {
    if (err) return next(err);
    res.json(results);
  });
});

//create new item
router.post('/', auth, function(req, res, next) {
  Food.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//get today's items
router.get('/today', function(req, res, next) {
  Food.find( {available : "y"}, function (err, results) {
    if (err) return next(err);
    res.json(results);
  });
});

//get single item
router.get('/:id', function(req, res, next) {
  Food.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//update item
router.put('/:id', auth, function(req, res, next) {
  Food.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//delete item
router.delete('/:id', auth, function(req, res, next) {
  Food.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
