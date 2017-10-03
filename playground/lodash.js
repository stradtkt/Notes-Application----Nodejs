const _ = require('underscore');
const fs = require('fs');
const path = require('path');
const express = require('express');
const request = require('request');
const pug = require('pug');
const app = express();
app.set('views','./views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));
app.get('/', function(req,res) {
    res.send('Hello World');
});

app.get('/views', function(req,res) {
        res.render('index');
});



app.listen(3000, function() {
    console.log('App running on port 3000');
});
