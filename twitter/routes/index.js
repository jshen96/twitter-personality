var express = require('express');
var router = express.Router();

console.log("twitter app is starting");




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        tweets : tweetstext
                      });
});

module.exports = router;
