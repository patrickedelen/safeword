var express  = require('express');
var app      = express();
var port     = process.env.PORT || 9000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

//morgan for logging
var morgan   = require('morgan');

var configDB = require('./db.js');
// start up mongodb
mongoose.connect(configDB.url, function(err) {
//log database status
	if(err) {
		console.log(err);
	} else {
		console.log("DB connected...");
	}
});

//setup app
app.use(morgan('dev'));
app.use(bodyParser());

// route file
require('./app/routes.js')(app);

// node startup
app.listen(port, function(err) {
// log status
	if(err) {
		console.log(err);
	} else {
		console.log("Server active on " + port);
	}
});