// ########################################### Tutorial 16
// Pipes
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made : ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
*/

// ########################################### Tutorial 17
// Serving HTML Pages
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made : ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});

    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
*/

// ########################################### Tutorial 18
// Serving JSON
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request was made : ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
*/

// ########################################### Tutorial 19
// Basic Routing

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res)
{
    console.log('Request was made : ' + req.url);
    if(req.url === '/home' || req.url === '/')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/ninjas')
    {
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
