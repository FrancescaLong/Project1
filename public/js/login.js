// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
console.log('sanity check: client-side js LOGIN.JS loaded');



/*  Signin and Signup information FROM BRIANNA*/
/*
  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    // select the form and serialize its data
    var signupData = $("#signup-form").serialize();
    console.log(signupData);
    // send POST request to /users with the form data
    $.post('/user-show.ejs', signupData, function(response) {
      console.log(response);
    });
  });
*/

/* This is now an AJAX call in the scripts.js file

  $('#login-form').on('submit', function(e) {
    e.preventDefault();
    // select the form and serialize its data
    // note: this is the form because the event handler
    //   was triggered from the form
    var loginData = $(this).serialize();
    // send POST request to /login with the form data
    $.post('/login', loginData, function(response) {
      console.log(response);
      if(response.error) {
        alert(response.error);
      } else {}

      });
    });
*/




});  //  CLOSING TAGS



  /* Login snippit */
  /* Holding off on these until I can get the basic functionality working */
/*  $(function(){
    $('.button-checkbox').each(function(){
      var $widget = $(this),
      $button = $widget.find('button'),
      $checkbox = $widget.find('input:checkbox'),
      color = $button.data('color'),
      settings = {
        on: {
          icon: 'glyphicon glyphicon-check'
        },
        off: {
          icon: 'glyphicon glyphicon-unchecked'
        }
      };

      $button.on('click', function () {
        $checkbox.prop('checked', !$checkbox.is(':checked'));
        $checkbox.triggerHandler('change');
        updateDisplay();
      });

      $checkbox.on('change', function () {
        updateDisplay();
      });

      function updateDisplay() {
        var isChecked = $checkbox.is(':checked');
      // Set the button's state
      $button.data('state', (isChecked) ? "on" : "off");

      // Set the button's icon
      $button.find('.state-icon')
      .removeClass()
      .addClass('state-icon ' + settings[$button.data('state')].icon);

      // Update the button's color
      if (isChecked) {
        $button
        .removeClass('btn-default')
        .addClass('btn-' + color + ' active');
      }
      else
      {
        $button
        .removeClass('btn-' + color + ' active')
        .addClass('btn-default');
      }
    }
    function init() {
      updateDisplay();
      // Inject the icon if applicable
      if ($button.find('.state-icon').length === 0) { // changed from == original code to ===
        $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
      }
    }
    init();
  });
});
*/
