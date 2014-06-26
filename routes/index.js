var express = require('express');
var router = express.Router();

String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

/* GET home page. */
router.get('/', function(req, res) {
    var client_id = process.env['CLIENT_ID'];
    var authenticate_url = 
        "https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id={0}&scope=activity%20location".format(client_id);
    res.render('index', { title: 'Moves Mapper', authenticate_url : authenticate_url });
});

module.exports = router;
