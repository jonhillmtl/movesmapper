var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.get('/', function(req, res) {
    var client_id = process.env['CLIENT_ID'];
    var authenticate_url = util.format(
        "https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=%s&scope=activity%20location", 
        client_id);
    res.render('index', { title: 'Moves Mapper', authenticate_url : authenticate_url });
});

module.exports = router;
