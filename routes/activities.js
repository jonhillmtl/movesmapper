var express = require('express');
var router = express.Router();

/* GET authenticate redirect */
router.get('/', function(req, res) 
{
    res.render('activities', 
        { 
            title: 'Tokens'
        }
    );
});

module.exports = router;
