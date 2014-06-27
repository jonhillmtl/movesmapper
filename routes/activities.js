var express = require('express');
var router = express.Router();

/* GET authenticate redirect */
router.get('/', function(req, res) 
{
    var activities_url = util.format(
        'https://api.moves-app.com/api/1.1//user/activities/daily/%s?access_token=%s',
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
        }
    );
});

module.exports = router;
