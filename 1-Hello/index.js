var express = require('express');
var app = express();

var usersRoutes = require('./router/users.route');

var port = 8008;

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/users', usersRoutes);

// =====================================================

app.get('/', function(request, response) {
    response.render('index', {
        name: 'Nishi'
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});