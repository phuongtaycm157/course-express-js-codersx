var express = require('express');
var app = express();
var port = 8008;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(request, response) {
	response.render('index', {
		name: 'Nishi'
	});
});

app.get('/users', function(request, response) {
	response.render('users/index', {
		users: [
			{
				firstName: 'John',
				lastName: 'Doe',
				email: 'john@example.com'
			},
			{
				firstName: 'Mary',
				lastName: 'Moe',
				email: 'mary@example.com'
			},
			{
				firstName: 'July',
				lastName: 'Dooley',
				email: 'july@example.com'
			}
		]
	})
});

app.listen(port, function () {
	console.log('Server listening on port ' + port);
})