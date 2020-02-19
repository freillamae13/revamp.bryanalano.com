$(document).ready(function() {
	$(window).on('load', function() {
		if (!sessionStorage.isVisited) {
			sessionStorage.isVisited = 'true'
			$('.preloader-wrapper').delay(3000).fadeOut(500);
		} else {
			$ ('.preloader, .preloader-wrapper').hide();
		}
	});
});