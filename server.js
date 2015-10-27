// Server. js
// REQUIREMENTS //
var express = require("express"),  //npm install express --save
    app = express(),  //npm install ejs --save
    path = require("path"),  //npm install path --save
    bodyParser = require("body-parser"),  //npm install body-parser --save
    wikipedia = require("wikipedia-js"),
    mongoose = require('mongoose'),
    session = require('express-session');


mongoose.connect('mongodb://localhost/simple-login');
var User = require('./models/user');

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 30 * 60 * 1000 }  // 30 (minutes) * 60 (seconds) * 1000 (milliseconds)
}));



// create a user 
app.post('/users', function (req, res) {
  console.log(req.body);
  User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    req.session.userId = newUser._id;
    res.redirect('/profile');
  });
});



// show the login form
app.get('/login', function (req, res) {
  res.render('login');
});


// authenticate the user and set the session
app.post('/sessions', function (req, res) {
  // call authenticate function to check if password user entered is correct
  User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
    if (err){
      console.log('authentication error: ', err);
      res.status(500).send();
    } else {
      console.log('setting session user id ', loggedInUser._id);
      req.session.userId = loggedInUser._id;
      res.redirect('/profile');
    }
  });
});


// show user profile page
app.get('/profile', function (req, res) {
  console.log('session user id: ', req.session.userId);
  // find the user currently logged in
  User.findOne({_id: req.session.userId}, function (err, currentUser) {
    if (err){
      console.log('database error: ', err);
      res.redirect('/login');
    } else {
      // render profile template with user's data
      console.log('loading profile of logged in user');
      res.render('user-show.ejs', {user: currentUser});
    }
  });
});


app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  // redirect to login (for now)
  res.redirect('/login');
});



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



/*

//Wikipedia search query for their API
    var options = {query: query, format: "html", summaryOnly: false}; //set to true for summary only
        wikipedia.searchArticle(options, function(err, htmlWikiText){
    if(err){
      console.log("An error occurred[query=%s, error=%s]", query, err);
      return;
    }
    console.log("Query successful[query=%s, html-formatted-wiki-text=%s]", query, htmlWikiText);
    });

*/




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
    var query = "artichoke";
    //var query = $(this).("title");
    request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    foods = JSON.parse(body).recipes;
    res.render('recipe1.ejs',{foods:foods});

    }
  });
    console.log(foods);
});



// signup route with placeholder response
app.get('/signup', function (req, res) {
  res.send('signup coming soon');
});

// login route with placeholder response
app.get('/login', function (req, res) {
  res.send('login coming soon');
});



app.listen(process.env.PORT || 3000, function (){
  console.log("listening on port 3000");
});








