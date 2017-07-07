var express = require("express"),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
bodyParser = require("body-parser");

Quote = require("./models/models");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://GColtrane:test123@ds143221.mlab.com:43221/quotes-db");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));


var routes = require('./routes/routes');
routes(app);



app.listen(port);

console.log("Shoplist initialized.... port: " + port);
