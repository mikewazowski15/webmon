var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res) {
    res.render('first_template');
});

app.listen(3000);