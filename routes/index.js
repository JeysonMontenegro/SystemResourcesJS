
var express = require('express');
var router = express.Router();

 
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
 


//exports.index=function(req,res){
  //   res.render('index.html');
//};


module.exports = router;
