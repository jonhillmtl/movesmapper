var express = require('express');
var router = express.Router();
var util = require('util');
var request = require('request');

/* GET authenticate redirect */
router.get('/', function(req, res) {
    var access_token_url = util.format(
        'https://api.moves-app.com/oauth/v1/access_token?grant_type=authorization_code&code=%s&client_id=%s&client_secret=%s',
        req.query.code,
        process.env['CLIENT_ID'],
        process.env['CLIENT_SECRET']);

    var access_token_body = '';
    request.post(
        access_token_url,
        { form: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) 
            {
                access_token_body = body
                console.log(body)
            }
        }
    );
    res.render('authenticate_redirect', { title: 'Authenticate Redirect', access_token_body : access_token_body});
});

module.exports = router;
