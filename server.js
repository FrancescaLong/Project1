// Server. js
// REQUIREMENTS //
var express = require("express"),  //npm install express --save
    app = express(),  //npm install ejs --save
    path = require("path"),  //npm install path --save
    bodyParser = require("body-parser"),  //npm install body-parser --save
    wikipedia = require("wikipedia-js"),
    mongoose = require('mongoose'),
    session = require('express-session');


//original connection
//mongoose.connect('mongodb://localhost/simple-login');

//Heroku suggestion on how to connect
mongoURI = 'mongodb://localhost/veggie';
mongoose.connect(process.env.MONGOLAB_URI || mongoURI);

var User = require('./models/user.js');

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




/* RECIPE INFO AND VEGGIE SEARCH  */

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
var recipe;
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





/*  API CALLS FOR THE RECIPE PARTS */

/* Pull the pictures and links for the moreRecipes page*/
app.get('/artichoke/moreRecipes', function(req, res) {
    var query = "artichoke";
    //var query = $(this).("title");
    request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    foods = JSON.parse(body).recipes;
    res.render('moreRecipes.ejs',{foods:foods});
    }
  });
    //console.log(foods);
});


/* Pull the ingredients, photo and source url for the recipe pages */
app.get('/artichoke/recipe1', function(req, res) {
    var recipeId = "72b297";
    //var query = "artichoke";
    //var query = $(this).("title");
    request('http://food2fork.com/api/get?key='+FOOD_API_KEY+'&rId='+recipeId, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    recipe = JSON.parse(body).recipe;
    res.render('recipe1.ejs',{recipe:recipe});
    //console.log({recipe:recipe});
    }
  });
    //console.log(recipe);
});


/* VEGETABLE SEARCH API */
app.post('/api/search', function(req, res) {
    var query = req.body.veggie;
    console.log("this is the query", query);
    //var query = $(this).("title");
    request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    foods = JSON.parse(body).recipes;
    //console.log("foods",foods);

    res.render('moreRecipes.ejs',{foods:foods});
    }
  });
    //console.log(foods);
    //console.log(recipe);
});


/*app.get('/artichoke/moreRecipes', function(req, res) {
    var query = "artichoke";
    //var query = $(this).("title");
    request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    foods = JSON.parse(body).recipes;
    res.render('moreRecipes.ejs',{foods:foods});
    }
  });
    console.log(foods);
});*/









/* Create Users, Login, Logout, Authentication  */

// show the login form
app.get('/login', function (req, res) {
  res.render('login.ejs');
});

app.get('/signup', function (req, res){
    res.render('signup.ejs');
});

app.get('/user-show', function (req, res){
    res.render('user-show.ejs');
});


/*  THIS IS DUPLICATED BELOW
app.get('/logout', function(req, res){
    res.render('logout.ejs');
});
*/

app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  // redirect to login (for now)
  res.redirect('/'); //was taking you back to the login page, change to take to main page
});




// create a user 
app.post('/users', function (req, res) {
  console.log(req.body);
  User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    req.session.userId = newUser._id;
    res.redirect('/profile');
  });
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













/*  Main Listener information - this should be the last thing in the file  */

app.listen(process.env.PORT || 5000, function (){
  console.log("listening on port 5000");
});








