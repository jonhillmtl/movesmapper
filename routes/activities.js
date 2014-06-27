var express = require('express');
var router = express.Router();
var util = require('util');
var request = require('request');

/* GET authenticate redirect */
router.get('/', function(req, res) 
{
    var activities_url = util.format(
        'https://api.moves-app.com/api/1.1/user/activities/daily/%s?access_token=%s',
        '04042014',
        req.session.moves_access_token);

    request.post(
        activities_url,
        { form: { key: 'value' } },
        function (error, response, body) 
        {
            if (!error && response.statusCode == 200) 
            {
                res.render('activities', 
                    { 
                        title: 'Activities'
                    }
                );
            }
            else
            {
                 res.render('api_error', 
                    { 
                        title : 'Error - Activities',
                        error : error,
                        response : response,
                        url : activities_url
                    }
                );
            }
        }
    );
});

module.exports = router;
