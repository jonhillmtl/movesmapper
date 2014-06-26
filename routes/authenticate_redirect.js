var express = require('express');
var router = express.Router();

/* GET authenticate redirect */
router.get('/', function(req, res) {
    res.render('authenticate_redirect', { title: 'Authenticate Redirect'});
});

module.exports = router;
