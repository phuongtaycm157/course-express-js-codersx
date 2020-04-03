var express = require('express');
var router = express.Router();
var controllers = require('../controllers/users.controllers');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));

router.get('/', controllers.index);

router.get('/view/:id', controllers.view);

router.get('/search', controllers.search);

router.get('/create', controllers.getCreate);

router.post('/create', controllers.postCreate);

module.exports = router;