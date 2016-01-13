// Server. js
console.log("sanity check - server.js loaded");

// REQUIREMENTS //
var express = require("express"),  //npm install express --save
    app = express(),  //npm install ejs --save
    path = require("path"),  //npm install path --save
    bodyParser = require("body-parser"),  //npm install body-parser --save
    wikipedia = require("wikipedia-js"),
    mongoose = require('mongoose'),
    session = require('express-session'),
    ejs = require('ejs');
var request = require('request');

// require dependencies

//require the module
require('dotenv').load(); //npm install dotenv --save

//keep this in the file only 1 time or the data will be duplicated in the database
//require('./models/seeds.js'); 


//original connection
//mongoose.connect('mongodb://localhost/simple-login');

//Heroku suggestion on how to connect
//mongoURI = 'mongodb://localhost/veggie';
mongoose.connect(process.env.MONGOLAB_URI ||
   process.env.MONGOHQ_URL ||
   'mongodb://localhost/veggie');


var User = require('./models/userModel.js');
var Veggie = require('./models/veggieModel.js');

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
var details;
var recipeIdarray;

var artichoke;





app.get('/', function(req, res) {
    res.render('index',{foods:foods});
});



/*THIS SHOWS THE RESULTS IN THE CONSOLE BUT THE SERVER CRASHES AND HAS AN SyntaxError: Unexpected token / ON LINE 114*/
app.get('/vegetables/:veg_name', function(req, res) {
      //console.log(req.params.veg_name);  // prints out the name of the veggie
      Veggie.findOne({ name: req.params.veg_name })
        .exec(function(err, veggie) {
          if(err){return console.log(err);}
        //console.log(veggie); // prints out the veggie items from the database
        var query = veggie.wikiSearchName;
        console.log(query +" is the api search query");
        request('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&titles='+query, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            // console.log("success");
            // console.log(body);
            wiki = JSON.parse(body);
            basePageID = Object.keys(wiki.query.pages)[0];
            //console.log(basePageID);
            // console.log(wiki.query.pages[1120742].extract); //this is the artichoke page
            var parsedText = wiki.query.pages[basePageID];
            //console.log(parsedText);
            res.render('veggie-show.ejs', { veggie:veggie, parsedText:parsedText} );
          } else {
            callback(error);
          }
        });
  });
});




/*  API CALLS FOR THE RECIPE PARTS */

/* Pull the pictures and links for the moreRecipes page*/
app.get('/vegetables/:veg_name/moreRecipes', function(req, res) {
    Veggie.findOne({ name: req.params.veg_name })
      .exec(function(err, veggie) {
        if(err){return console.log(err);}
    var query = veggie.searchName;
    request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+query, function (error, response, body) {
      if (!error && response.statusCode == 200) {
      // This API sends the data as a string so we need to parse it. This is not typical.
      foods = JSON.parse(body).recipes;
    res.render('moreRecipes.ejs',{foods:foods});
      }
    });
  });
});





/* Pull the ingredients, photo and source url for the 3 specified recipe pages */
app.get('/vegetables/:veg_name/:recipe', function(req, res) {
    console.log(req.params.recipe);  // prints as undefined
    Veggie.findOne({ name: req.params.veg_name })
      .exec(function(err, veggie) {
        if(err){return console.log(err);}
        //console.log(veggie); prints out the veggie items from database!
        var recipeId = req.params.recipe;
        console.log(recipeId);  // prints as undefined
        request('http://food2fork.com/api/get?key='+FOOD_API_KEY+'&rId='+recipeId, function (error, response, body) {
          if (!error && response.statusCode == 200) {
          // This API sends the data as a string so we need to parse it. 
          // This is not typical.
          recipe = JSON.parse(body).recipe;
    res.render('recipe.ejs', { recipe:recipe }); 
      }
    });
  });
});






/* VEGETABLE SEARCH API */
app.post('/api/search', function(req, res) {
    var query = req.body.veggie;
    console.log("this is the search query", query);
    //var query = $(this).("title");
    request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
    // This API sends the data as a string so we need to parse it. This is not typical.
    foods = JSON.parse(body).recipes;
    //console.log("foods",foods);
    res.render('moreRecipes.ejs',{foods:foods, queryveggie:query});
    }
  });
});







/* Create Users, Login, Logout, Authentication  */

// show the login form
app.get('/signup', function (req, res){
    res.render('signup.ejs');
});

app.get('/login', function (req, res) {
  res.render('login.ejs');
});

app.get('/user-show', function (req, res){
    User.find({_id:req.session.userId}, function(err, user){
    res.render('user-show.ejs', {user:user});      
    });
});


app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  // redirect to login (for now)
  res.redirect('/'); //was taking you back to the login page, change to take to main page
});




// create a user 
app.post('/users', function (req, res) {
  console.log(req.body);
  User.createSecure(req.body.userName, req.body.email, req.body.password, function (err, newUser) {
    console.log('newUser', newUser);
    req.session.userId = newUser._id;
    //res.redirect('/profile');
    res.send('logged in');
  console.log("it worked!");
  });
});


// authenticate the user and set the session
app.post('/login', function (req, res) {
  // call authenticate function to check if password user entered is correct
  User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
    if (err){
      console.log('authentication error: ', err);
      res.send({error: 'There was a problem with your email or password. Please try to login again.'});
      //redirect('/login');
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

app.listen(process.env.PORT || 8000, function (){
  console.log("listening on port 8000");
});








