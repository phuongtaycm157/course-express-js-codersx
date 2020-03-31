var express = require('express');
var app = express();
var port = 8008;

app.get('/', function(request, response) {
	response.send('<h1>Hello World</h1>');
});

app.get('/users', function(request, response) {
	response.send('Users List');
});

app.listen(port, function () {
	console.log('Server listening on port ' + port);
})