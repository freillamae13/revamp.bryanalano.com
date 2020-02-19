(function($) {

	$('.column-content__item').matchHeight();

	$(document).ready(function() {
 
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 500);
	 
	});

	$('#menuToggle').on('click', function(){
		$('.nav__slidedown').toggleClass('active');
	});

})(jQuery);