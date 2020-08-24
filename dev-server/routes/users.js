
// var pepe1 = require('../public/images/608.png');
// var pepe2 = require('../public/images/626.jpg');

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    id: 1,
    username: "Джефф Безос",
    password: "Я куплю SpaceX",
    icon: 'https://i.intell4.com/storage/files/images/2020/05/16/jeff-bezos-v4-fhD1.png'
  });
});

module.exports = router;
