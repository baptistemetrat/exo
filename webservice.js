    var express = require('express'); // charge ExpressJSr
	
	var router = express.Router();
	
	module.exports = router;
	
	router.get('/s1', function(req, res, next){
		setTimeout(function() {
			next();
		}, 2000);
	});
