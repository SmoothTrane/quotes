'use strict'
var mongoose = require("mongoose"),
dbSchema = mongoose.Schema,
quoteSchema = new dbSchema ({

});


var Quote = mongoose.model("quotes", quoteSchema);
