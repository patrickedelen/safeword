var mongoose = require('mongoose');

//website model
module.exports = mongoose.model('Website', {
	url: {type: String, unique: true},
	date: {type: Date, default: '1/1/2016'},
	type: {type: String}
});