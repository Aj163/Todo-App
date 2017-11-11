// ########################################### Tutorial 26
// Templating Engines (part 2)
/*
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
	var data = {age: 29, job: 'ninja', hobbies: ['eat', 'sleep', 'code']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
*/

// ########################################### Tutorial 27
// Partial Views
/*
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja', hobbies: ['eat', 'sleep', 'code']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
*/

// ########################################### Tutorial 28
// Serving Static Files (& Middleware)
/*
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja', hobbies: ['eat', 'sleep', 'code']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
*/

// ########################################### Tutorial 29
// Query Strings

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/contact', function(req, res){
	console.log({qs: req.query});
	res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja', hobbies: ['eat', 'sleep', 'code']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);