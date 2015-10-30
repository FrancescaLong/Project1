$(document).ready(function() {

console.log('sanity check: client-side scripts.js is loaded');


/*  Signin and Signup information  - MOVED TO LOGIN.JS*/

  // select the form and serialize its data
 $('#signup-form').on('submit', function(event) {
  event.preventDefault();
  var signupData = $("#signup-form").serialize();
  console.log(signupData);
  // send POST request to /users with the form data
  $.post('/users', signupData, function(response){
    window.location.assign('/profile');
    console.log(response);
  });
});



function userSignup(){
  // if there is local storage items, get that, otherwise create an empty array
  this.$loginButton = $('#loginBtn');
}




/*LEAVING THE AJAX IN THE CODE FOR NOW so I can meet the requirement. Will remove it 
when I refactor the code.

Update your login.ejs so that the form has a method and action. Remove the AJAX 
call for the login form from your scripts.js. Test your login form again.

We don't want new users to get a JSON or message response when they sign up, either. 
In fact, we probably want to log them in automatically. Modify the POST /users route 
to save a new user's id in the session and then redirect to the profile. Also modify 
your signup form to use method and action.
*/

  $('#loginBtn').on('submit', function(event) {
    event.preventDefault();
    // select the input box and serialize its data
    // note: this is the form because the event handler
    //   was triggered from the form
    // ?? var veggie = $('#veggieSearch').serialize();
    // ?? var url = 'http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+veggie;
    // send POST request to /login with the form data
    $.ajax({
        url: "/sessions",
        type: 'POST', //we want to return the data, not POST to the API server
        dataType: 'json',
        data: $(this).serialize,
        success: function (data) {
        //alert(JSON.stringify(data));
          window.location.assign('/profile');  /* this should redirect to the welcome 
          page since the redirect has stopped working */
          console.log(data);
        },
        error: function(){
          alert("Cannot get login data");
          console.log('Cannot get login data - console.log part');
        }
    }).done(function(data) {
      console.log('got through the ajax just before the redirect');
      if (data.error) {
          window.location.assign('/login');
      }
    });  
  });




});
// CLOSING TAGS


/*$(function(){
  $(function(e){
    $.ajax({
      url: 'match_api.php',
      type: 'post',
      data: $('#request').serialize(),
      dataType: 'json',
      success: function(data) {
          alert($('#request').serialize());
     });
     e.preventDefault();
  });
});*/





/*  Veggie Search */

/* SIMPLIFIED AND MOVED TO APP.JS
function veggieSearch(){
  // if there is local storage items, get that, otherwise create an empty array
  this.$submitButton = $('#veggieBtn');
}




VeggieSearch.prototype.addEventListeners = function(){
  $('#veggieBtn').on('click', function(event) {
    event.preventDefault();
    // select the input box and serialize its data
    // note: this is the form because the event handler
    //   was triggered from the form
    var veggie = $('#veggieSearch').serialize();
    var url = 'http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+veggie;
    // send POST request to /login with the form data
    $.ajax({
        url: url,
        type: 'GET', //we want to return the data, not POST to the API server
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        data: '{"foods":"foods"}',
        success: function (data) {
        //alert(JSON.stringify(data));
        console.log({foods:foods});
        res.render('moreRecipes.ejs',{foods:foods});
        },
        error: function(){
          alert("Cannot get data");
        }
    });
  });  
};
*/






/*VeggieSearch.prototype.addEventListeners = function(){
  // so we have access to 'this', aka our 'app' aka 'MicroBlog'
  // var blog = this;
  this.$submitButton.on('click', function(event){
    event.preventDefault();
    blog.createPost(blog.$post.val());
  });
}*/


 //      '/moreRecipes', loginData, function(response) {
 
/*
$.ajax({
    url: "http://www.example.com/api",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("Authorization", "Basic " + btoa("username:password")); 
    },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: '{"foo":"bar"}',
    success: function (data) {
      alert(JSON.stringify(data));
    },
    error: function(){
      alert("Cannot get data");
    }
});


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
    console.log(foods);
});


//AJAX call for other veggies - will push to moreRecipes page
function App(){
  var query = this.veggie;
  this.url = 'http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q='+veggie;
}

var url = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";




  $.ajax({
    url: url,
    /*data: {
      format: 'json'
    },
    dataType: 'jsonp',*/   /*
    type: 'GET',
  }).done(function(object){
    //parseData(objects.data);
    console.log(object)}
    );



$(document).ready(function(){
  var app = new App();
  app.getTrending();
});



App.prototype.getTrending = function() {
  $.ajax({
    url: this.url,
    method: "GET",
    success: function(data) {
      data.data.forEach(function(gifObject){
        console.log(gifObject.images.fixed_width.url);
        $('#content').append("img src='" + gifObject.images......);
      });
    // dubugger;
    })
  }
})
}



*/








