// app.js
var express = require('express');
var app = express();
var db = require('./db/db');
var DummyController = require('./controller/DummyController');
app.use('/dummies', DummyController);

module.exports = app;