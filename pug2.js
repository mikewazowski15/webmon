var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/info', function(req, res) {
    res.render('me');
});

app.listen(3000);