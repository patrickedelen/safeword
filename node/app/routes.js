// routes.js - routes for webapp

//require website
var Website = require('./models/website.js');

module.exports = function(app) {
	//allow cross region resource sharing
	app.all('/report', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	  next();
	 });
	
	//report a website
	app.post('/report', function(req, res) {
		console.log('Request ' + req.body.url);
		
		//console.log(Website.find({url: req.body.url}).limit(1).size());

		
			var website = new Website();

			website.url = req.body.url;
			website.date = Date.now();
			website.type = req.body.type;

			website.save(function(err) {
				if(err)
					res.send(err);

				res.send("Website reported!");
			});
		
	});

	//see reported websites
	app.get('/report', function(req, res){
		Website.find(function(err, websites) {
			if(err)
				res.send(err);

			res.json(websites);
			console.log(websites);
		});
	});
}