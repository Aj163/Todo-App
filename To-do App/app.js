var express = require('express');
var todoController = require('./controllers/todoController')
var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('./public'));

//Fire Controllers
todoController(app);

//Listen to port
app.listen(3000);
console.log('Listening to port 3000');

//Tutorial 35