/**
 * Created by TOSHIBA on 10.10.2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/try', function (req, res, next) {
    var username  = req.body.username;
    var password = req.body.password;
    res.send("username : "+username + ", password:" + password);
});

module.exports = router;
