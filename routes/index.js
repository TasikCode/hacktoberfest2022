var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tasikcode', message: 'Tasikmalaya Hacktoberfest 2020' });
});

module.exports = router;
