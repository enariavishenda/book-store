
// var pepe1 = require('../public/images/608.png');
// var pepe2 = require('../public/images/626.jpg');

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    id: 1,
    username: "Тензор Антонович",
    password: "Луна в небе"
    // icon: pepe1
  });
});

module.exports = router;
