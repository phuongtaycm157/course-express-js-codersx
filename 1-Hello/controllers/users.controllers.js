var shortid = require('shortid');
var db = require('../db');

module.exports = {
    index: function(request, response) {
        response.render('users/index', { users: db.get('users').value() });
    },
    view: function(req, res) {
        var id = req.params.id;
        var user = db.get('users').find({ id: id }).value();
        res.render('users/view', { user: user });
    },
    search: function(req, res) {
        var q = req.query.q;
        var matchUsers = db.get('users').value().filter(function(user) {
            return user.firstName.toLowerCase().indexOf(q.toLowerCase()) !== -1 || user.lastName.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
        res.render('users/index', { users: matchUsers, q: q });
    },
    getCreate: function(req, res) {
        res.render('users/create',{user: {}});
    },
    postCreate: function(req, res) {
        var user = req.body;
        user.id = shortid.generate()
        db.get('users').push(user).write();
        res.redirect('/users');
    }
}