var express = require('express');
var router = express.Router();
var shortid = require('shortid');

var db = require('../db');


router.get('/', function(request, response) {
    response.render('users/index', { users: db.get('users').value() });
});

router.get('/view/:id', function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {user: user});
});

router.get('/search', function(req, res) {
    var q = req.query.q;
    var matchUsers = db.get('users').value().filter(function(user) {
        return user.firstName.toLowerCase().indexOf(q.toLowerCase()) !== -1 || user.lastName.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', { users: matchUsers, q: q });
});

router.get('/create', function(req, res) {
	res.render('users/create');
});

router.post('/create', function(req, res) {
    user = req.body;
    user.id = shortid.generate()
	db.get('users').push(user).write();
	res.redirect('/users');
});

module.exports = router;