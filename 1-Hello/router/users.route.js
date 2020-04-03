var express = require('express');
var router = express.Router();
var controllers = require('../controllers/users.controllers');

router.get('/', controllers.index);

router.get('/view/:id', controllers.view);

router.get('/search', controllers.search);

router.get('/create', controllers.getCreate);

router.post('/create', controllers.postCreate);

module.exports = router;