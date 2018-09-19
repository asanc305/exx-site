var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
//import {Request, Response} from "express";
// const cookieParser = require('cookie-parser');
// import * as jwt from 'jsonwebtoken';
// import * as fs from "fs";


// var full = require('./routes/full');
// var today = require('./routes/today');
var items = require('./routes/items');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/foods', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname + '/src'));

// app.use('/full', full);
//app.use('/today', today);
app.use('/items', items);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// app.route('/api/login')
//     .post(loginRoute);
//
// const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');
//
// function loginRoute(req: Request, res: Response) {
//
//     const email = req.body.name,
//           password = req.body.pass;
//
//     if (validateEmailAndPassword()) {
//        const userId = findUserIdForEmail(email);
//
//         const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
//                 algorithm: 'RS256',
//                 expiresIn: 120,
//                 subject: userId
//             }
//
//           // send the JWT back to the user
//           //  - multiple options available
//     }
//     else {
//         // send status 401 Unauthorized
//         res.sendStatus(401);
//     }
