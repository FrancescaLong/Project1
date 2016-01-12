$(document).ready(function() {

console.log('sanity check: client-side scripts.js is loaded');




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
          console.log(data);
          window.location.assign('/profile');  
          /* this should redirect to the welcome 
          page since the redirect has stopped working */
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




});   // CLOSING TAGS

