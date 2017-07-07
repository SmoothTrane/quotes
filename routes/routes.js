'use strict';
var express = require("express");
var path = require('path');
var mongoose = require('mongoose');

var Quote = mongoose.model("quotes");

module.exports = function(app){
   var quoteController = require("../controllers/QuoteController");

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });

  app.get("/getQuotes", function(req,res){
    quoteController.getAllQuotes(req,res);
  });

  app.use(function(req, res) {
    res.status(404).send("<h1> ERROR 404 NOT FOUND </h1>")
  });




};
