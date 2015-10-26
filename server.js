// Server. js
// REQUIREMENTS //
var express = require("express"),  //npm install express --save
    app = express(),  //npm install ejs --save
    path = require("path"),  //npm install path --save
    bodyParser = require("body-parser");  //npm install body-parser --save
    wikipedia = require("wikipedia-js");


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
//console.log(INFO_API_KEY); - wikipedia doesn't require an API key

//gets API from data
var request = require('request');

//get API data
var foods;
var info;

request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q=artichoke', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    foods = JSON.parse(body).recipes;
  }
});


var query = "artichoke";
//var query = $(this).("h2");

//Wikipedia search query for their API
    var options = {query: query, format: "json", summaryOnly: false}; //set to true for summary only
        wikipedia.searchArticle(options, function(err, jsonWikiText){
    if(err){
      console.log("An error occurred[query=%s, error=%s]", query, err);
      return;
    }
    console.log("Query successful[query=%s, json-formatted-wiki-text=%s]", query, jsonWikiText);
    });






app.get('/', function(req, res) {
    res.render('index',{foods:foods});
});

app.get('/artichoke', function(req, res) {
    res.render('artichoke.ejs');
});

app.get('/asparagus', function(req, res) {
    res.render('asparagus.ejs',{foods:foods});
});

app.get('/eggplant', function(req, res) {
    res.render('eggplant.ejs',{foods:foods});
});

app.get('/kailan', function(req, res) {
    res.render('kailan.ejs',{foods:foods});
});

app.get('/kohlrabi', function(req, res) {
    res.render('kohlrabi.ejs',{foods:foods});
});

app.get('/okra', function(req, res) {
    res.render('okra.ejs',{foods:foods});
});

app.get('/romanesco', function(req, res) {
    res.render('romanesco.ejs',{foods:foods});
});

app.get('/rutabaga', function(req, res) {
    res.render('rutabaga.ejs',{foods:foods});
});

app.get('/spaghettisquash', function(req, res) {
    res.render('spaghettisquash.ejs',{foods:foods});
});

app.get('/sunchoke', function(req, res) {
    res.render('sunchoke.ejs',{foods:foods});
});





app.get('/artichoke/recipe1', function(req, res) {
    res.render('recipe1.ejs',{foods:foods});
});



app.listen(process.env.PORT || 3000, function (){
  console.log("listening on port 3000");
});








