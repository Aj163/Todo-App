// ########################################### Tutorial 20
// The Node Package Manager (npm)

// ########################################### Tutorial 21
// Package.json

// ########################################### Tutorial 22
// Installing Nodemon
// npm install nodemon -g

// ########################################### Tutorial 23
// Introduction to Express
/*
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Home Page');
});

app.get('/contact', function(req, res){
    res.send('Contact Page');
});

app.listen(3000);
*/

// ########################################### Tutorial 24
// Route Parameters
/*
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Home Page');
});

app.get('/contact', function(req, res){
    res.send('Contact Page');
});

app.get('/profile/:id', function(req, res){
    res.send('Profile id : ' + req.params.id);
});

app.listen(3000);
*/

// ########################################### Tutorial 25
// Templating Engines

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'ninja'};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);