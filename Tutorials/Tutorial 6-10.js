/*
var counter = function(arr)
{
    return 'This array contains ' + arr.length + ' elements';
};

console.log(counter([1, 3, 4, 2, 7]));

var stuff = require('./Tutorial\ 1-5');
stuff.saybye();
*/

/*
// ################################################ Tutorial 8
// Events
var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg)
{
    console.log(msg);
});
myEmitter.emit('someEvent', 'Hello World');


var Person = function(name)
{
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' says ' + msg);
    });
});

james.emit('speak', 'Hi!');
*/


// ################################################## Tutorial 9
// Read and write files
/*
var fs = require('fs');
var readme = fs.readFileSync('readme.txt', 'utf8');
console.log(readme);
fs.writeFileSync('writeme.txt', readme);

// Asynchronous - Faster and better, as code after this can execute parallely.
var fs = require('fs');
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writeme.txt', data)
});
console.log('I am still printed first!');
*/


// ################################################ Tutorial 10
// Create and remove directories
/*
//Deleting files
var fs = require('fs');
fs.unlink('writeme.txt');
*/
var fs = require('fs');
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

//Asynchronous
/*
fs.mkdir('stuff', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeme.txt', data);
    });
});*/
fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff');
});
