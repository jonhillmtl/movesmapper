var express = require('express');
var router = express.Router();
var util = require('util');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
    var access_token = req.session.moves_access_token;
    var date = '04042014';
    var activities_url = util.format(
        'https://https://api.moves-app.com/api/1.1/user/activities/daily/%s?access_token=%s',
        date,
        access_token);

    request.post(
        activities_url,
        { form: { key: 'value' } },
        function (error, response, body) 
        {
            if (!error && response.statusCode == 200) 
            {
                // var access_token_json = JSON.parse(body);
                res.render('activities', 
                    { 
                        title: 'Authenticate Redirect', 
                        body : body
                    }
                );
            }
            else
            {
                res.render('error', 
                    { 
                        error: error,
                        response : response
                    }
                );
            }
        }
    );
});

module.exports = router;
