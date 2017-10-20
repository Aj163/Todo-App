/*console.log('Hey Ninjas');

setTimeout(function()
{
	console.log('1 second has passed.');
}, 3000);

var time = 0;
setInterval(function()
{
	time += 1;
	console.log('Time : ' + time);
}, 500);


var time = 6;
var timer = setInterval(function()
{
	time -= 1;
	if(time == 0)
		clearInterval(timer);

	console.log('Time : ' + time);
}, 1000);

console.log(__dirname);
console.log(__filename);
*/

function sayhi()
{
    console.log('Hi');
}

//sayhi();

module.exports.saybye = function()
{
    console.log('Bye');
};

//saybye();

function callFunction(fun)
{
    fun();
}

//callFunction(saybye);

module.exports.sayhi = sayhi;


/*
module.exports =
{
    sayhi: sayhi,
    saybye: saybye
};
