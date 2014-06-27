var express = require('express');
var router = express.Router();

/* GET authenticate redirect */
router.get('/', function(req, res) 
{
    res.render('tokens', 
        { 
            title: 'Tokens', 
            moves_access_token : req.session.moves_access_token,
            moves_refresh_token : req.session.moves_refresh_token,
            moves_user_id : req.session.moves_user_id
        }
    );
});

module.exports = router;
