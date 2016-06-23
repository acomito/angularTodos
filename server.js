var express = require('express');
var app = express();
var routes = require('server/routes');
var path = require('path');
var bodyParser = require('body-parser');
/*var routes = require('./src/server/routes');*/



var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


// Used for production build
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

/*app.all('/*', function(req, res){
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
			<base href="/">\
				<title> MEAN ToDo App</title>\
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">\
			</head>\
			<body>\
				<div ui-view> </div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
		');
});*/


app.listen(PORT, function(){
	console.log('server running on ' + PORT);
});


