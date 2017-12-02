var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({extended: false});

//Connect to the database
//mongoose.connect('mongodb://test:test@ds125896.mlab.com:25896/todo_app');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds125896.mlab.com:25896/todo_app', { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true });

//Create a schema - like a blueprint
var todoSchema = new mongoose.Schema({
	item: String
});

var Todo = mongoose.model('Todo', todoSchema);
//var data = [{item: 'Get milk'}, {item: 'Codeforces'}, {item: 'Todo App'}];

module.exports = function(app)
{
	app.get('/todo', function(req, res)
	{
		//Get data from mongodb and pass it to view
		Todo.find({}, function(err, data)
		{
			if (err) throw err;
			res.render('todo', {todos: data});
		});
	});

	app.post('/todo', urlencodedParser, function(req, res)
	{
		var newTodo = Todo(req.body).save(function(err, data){
			if (err) throw err;
			res.json(data);
		});	
	});

	app.delete('/todo/:item', function(req, res)
	{
		Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
			if (err) throw err;
			res.json(data);
		});
	});
};