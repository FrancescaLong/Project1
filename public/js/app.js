// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){


	/* Login snippit */
	$(function(){
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
			if ($button.find('.state-icon').length == 0) {
				$button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
			}
		}
		init();
	});
});


/* Carousel snippit */
        $('#myCarousel').carousel({
                interval: 5000
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




});