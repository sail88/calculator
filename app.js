//Calculator with EJS and forms
//Homework 3-31-15
//I realize this has a bunch of repetitive code
//I could have created a function for each operation that would do the repeated stuff


// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();
// Set the view engine to be "EJS"
app.set('view engine', 'ejs');

// Set up body parser
app.use(bodyParser.urlencoded({extended: true}));

// Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'));

//variables
var a = new Number();
var b = new Number();
var answer = new Number();
var solved = false;
var results = {"solved":solved,"answer":answer, "operation":""};
var operation = "";

//this is ROOT ROUTE
app.get('/', function(req, res) {
	console.log("this is root route");
  	res.render('index', {resultsOut: results});
});

app.post('/add', function(req, res) {
	console.log("This is from /add");
	a = Number(req.body.add1);
	b = Number(req.body.add2);
	answer = a+b;
	solved = true;
	operation = "add";
	results = {"solved":solved, "answer":answer, "operation":operation};
	res.redirect('/');
	//res.send(String(answer)); //If we want results on new page.
});

app.post('/subtract', function(req, res) {
	console.log("This is from /subtract");
	a = Number(req.body.subtract1);
	b = Number(req.body.subtract2);
	answer = a-b;
	console.log(answer);
	solved = true;
	operation = "subtract";
	results = {"solved":solved, "answer":answer, "operation":operation};
	res.redirect('/');
	//res.send(String(answer)); //If we want results on new page.
});

app.post('/multiply', function(req, res) {
	console.log("This is from /multiply");
	a = Number(req.body.multiply1);
	b = Number(req.body.multiply2);
	answer = a*b;
	solved = true;
	operation = "multiply";
	results = {"solved":solved, "answer":answer, "operation":operation};
	res.redirect('/');
	//res.send(String(answer)); //If we want results on new page.
});

app.post('/divide', function(req, res) {
	console.log("This is from /divide");
	a = Number(req.body.divide1);
	b = Number(req.body.divide2);
	answer = a/b;
	solved = true;
	operation = "divide";
	results = {"solved":solved, "answer":answer, "operation":operation};
	res.redirect('/');
	//res.send(String(answer)); //If we want results on new page.
});

// Start the server on port 3000
app.listen(3000);

