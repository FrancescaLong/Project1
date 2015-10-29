// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
console.log('sanity check: client-side js APP.JS loaded');
var vegSearch = new veggieSearch();
vegSearch.addEventListeners();

//veggieSearch.prototype.addEventListeners();



/* Carousel snippit */
        $('#myCarousel').carousel({
                interval: 20000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });




/*  Signin and Signup information FROM BRIANNA*/

  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    // select the form and serialize its data
    var signupData = $("#signup-form").serialize();
    console.log(signupData);
    // send POST request to /users with the form data
    $.post('/user-show', signupData, function(response) {
      console.log(response);
    });
  });


  $('#login-form').on('submit', function(e) {
    e.preventDefault();
    // select the form and serialize its data
    // note: this is the form because the event handler
    //   was triggered from the form
    var loginData = $(this).serialize();
    // send POST request to /login with the form data
    $.post('/login', loginData, function(response) {
      console.log(response);
    });
  });












/* ALL incorporated below
VeggieSearch.prototype.addEventListeners = function(){
  // so we have access to 'this', aka our 'app' aka 'MicroBlog'
  // var blog = this;
  this.$submitButton.on('click', function(event){
    event.preventDefault();
    blog.createPost(blog.$post.val());
  });
}
*/







}); // CLOSING TAGS


/* SEARCH FOR ADDITIONAL VEGGIES */

function veggieSearch(){
  this.$submitButton = $('#veggieBtn');
  //console.log($('#veggieBtn')); 
  this.$veggie = $('#veggieSearch');
  //console.log($('#veggieSearch'));
}


//element.addEventListener("click", function(){ alert("Hello World!"); });
//document.getElementById("myBtn").addEventListener("click", function(){
veggieSearch.prototype.addEventListeners = function(){   //VeggieSearch.prototype.addEventListeners
  	console.log('is this happening?');
  // 	this.$submitButton.on('click', function(event) {
  //   event.preventDefault();
  //   console.log('button was clicked');
  //   // select the input box and serialize its data
  //   // note: this is the form because the event handler
  //   //   was triggered from the form
  //   var veggie = {};
  //   veggie.veggie = $('#veggieSearch').val();
  //   console.log("the veggie obj", veggie.veggie);
  //   var url = 'api/search';
  //   // send POST request to /login with the form data
  //   $.ajax({
  //       url: url,
  //       type: 'POST', //we want to return the data, not POST to the API server
  //       dataType: 'json',
  //       data: veggie,
  //       success: function (data) {
  //       	console.log(data)
  //       //alert(JSON.stringify(data));
  //       //console.log({foods:foods});
  //       //res.render('moreRecipes.ejs',{foods:foods});
  //       },
  //       error: function(){
  //         alert("Cannot get data");
  //       }
  //   });
  // });  
};
//});