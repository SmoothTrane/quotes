'use strict';
var mongoose = require('mongoose'),
Quote = mongoose.model("quotes");
var path = require('path');
exports.getAllQuotes = function (req,res){
  Item.find({},function(err,item) {
    if(err){
      res.send(err)
    }
    res.json(item);

  });
};

exports.addQuote = function(req,res){
  var newQuote = new Quote(req.body);
  newItem.save(function(err,item){
    if(err){
      res.send(err)
    }
    res.redirect('back');

  });

};


exports.getQuote = function(req,res){
  Item.findById(req.params.itemId, function(err,item){
    if(err){
      res.send(err)
    }
    res.json(item);
  });
};

exports.editQuote = function(req,res){
  Item.findByIdAndUpdate(req.params.itemId, req.body, {new:true}, function(err,item){
    if(err){
      res.send(err)
    }
    res.redirect('back');
  });

};

exports.deleteQuote = function(req,res){
  Item.remove({
    _id: req.params.itemId
  }, function(err,task){
    if(err){
      res.send(err)
    }
    res.json({ message: 'Quote successfully deleted' });

  });
}
