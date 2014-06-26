var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var client_id = '3dM7jup81_5gWa5WrEgVeM162OOHMITX';
    var authenticate_url = 
        "https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id={0}&scope=activity,location".format(client_id);
    res.render('index', { title: 'Moves Mapper', client_id : authenticate_url });
});

module.exports = router;
