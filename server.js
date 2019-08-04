var express = require('express');

var path = require('path');

var app = express(); // 
var PORT = process.env.PORT || 3000;


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//starting the server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});