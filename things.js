var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET route on things\n');
});

router.get('/:id', function(req, res) {
    res.send("You requested with id:" + req.params.id);
});

router.get('/:id/:name', function(req, res) {
    res.send("You requested with id:" + req.params.id + " and name:" + req.params.name);
});


module.exports = router;