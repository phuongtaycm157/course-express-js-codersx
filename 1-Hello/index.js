var express = require('express');
var app = express();
var port = 8008;

var bodyParser = require('body-parser');

var users = [{
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
];

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function(request, response) {
    response.render('index', {
        name: 'Nishi'
    });
});

app.get('/users', function(request, response) {
    response.render('users/index', { users: users });
});

app.get('/users/search', function(req, res) {
    var q = req.query.q;
    var matchUsers = users.filter(function(user) {
        return user.firstName.toLowerCase().indexOf(q.toLowerCase()) !== -1 || user.lastName.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', { users: matchUsers, q: q });
});

app.get('/users/create', function(req, res) {
	res.render('users/create');
});

app.post('/users/create', function(req, res) {
	users.push(req.body);
	res.redirect('/users');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});