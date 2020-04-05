var express = require('express');
var router = express.Router();
var controllers = require('../controllers/users.controllers');
var validate = require('../validate/users.validate');

router.get('/', controllers.setCookie, controllers.index);

router.get('/cookie', controllers.setCookie);

router.get('/view/:id', controllers.setCookie, controllers.view);

router.get('/search', controllers.setCookie, controllers.search);

router.get('/create', controllers.setCookie, controllers.getCreate);

router.post('/create',controllers.setCookie, validate.postCreate, controllers.postCreate);

module.exports = router;