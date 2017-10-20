// ########################################### Tutorial 11
// Clients and Servers

// ########################################### Tutorial 12
// Creating a Server
/*
var http = require('http');
var server = http.createServer(function(req, res){
    console.log('Request was made : ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Ninjas!');
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
*/

// ########################################### Tutorial 13
// Streams and Buffers

// ########################################### Tutorial 14
// Readable Streams
/*
var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('Received : ' + chunk);
});
*/

// ########################################### Tutorial 15
// Writable Streams

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk){
    //Read and written bit by bit (in chunks)
    //Doesnt have to wait untill entire file is read.
    console.log('New chunk received.');
    myWriteStream.write(chunk);
});
