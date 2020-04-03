var express = require('express');
var app = express();
var port = 8008;

var bodyParser = require('body-parser');

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
var shortid = require('shortid');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// =====================================================

app.get('/', function(request, response) {
    response.render('index', {
        name: 'Nishi'
    });
});

app.get('/users', function(request, response) {
    response.render('users/index', { users: db.get('users').value() });
});

app.get('/users/view/:id', function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {user: user});
});

app.get('/users/search', function(req, res) {
    var q = req.query.q;
    var matchUsers = db.get('users').value().filter(function(user) {
        return user.firstName.toLowerCase().indexOf(q.toLowerCase()) !== -1 || user.lastName.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', { users: matchUsers, q: q });
});

app.get('/users/create', function(req, res) {
	res.render('users/create');
});

app.post('/users/create', function(req, res) {
    user = req.body;
    user.id = shortid.generate()
	db.get('users').push(user).write();
	res.redirect('/users');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});