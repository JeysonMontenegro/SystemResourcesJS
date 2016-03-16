var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
console.log('entr');
  res.render('MR.html');
});

module.exports = router;
