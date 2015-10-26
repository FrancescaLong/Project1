// Server. js
// REQUIREMENTS //
var express = require("express"),  //npm install express --save
    app = express(),  //npm install ejs --save
    path = require("path"),  //npm install path --save
    bodyParser = require("body-parser");  //npm install body-parser --save



// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//require the module
require('dotenv').load(); //npm install dotenv --save

var FOOD_API_KEY = process.env.FOOD_API_KEY;
var INFO_API_KEY = process.env.INFO_API_KEY;

//this should log your secret key!
console.log(FOOD_API_KEY);
console.log(INFO_API_KEY);

//gets API from data
var request = require('request');

//get API data
var foods;
var info;

request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q=romanesco', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    foods = JSON.parse(body).recipes;
  }
});

app.get('/', function(req, res) {
    res.render('index',{foods:foods});
});

app.get('/artichoke.html', function(req, res) {
    res.render('artichoke.ejs');
});

app.get('/asparagus', function(req, res) {
    res.render('asparagus.ejs',{foods:foods});
});


app.listen(process.env.PORT || 3000, function (){
  console.log("listening on port 3000");
});








