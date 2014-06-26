var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Moves Mapper', client_id : '3dM7jup81_5gWa5WrEgVeM162OOHMITX' });
});

module.exports = router;
