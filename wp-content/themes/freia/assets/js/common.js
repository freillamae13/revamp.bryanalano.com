(function($){

	$(document).ready(function() {

		if ($('#fullpage').length) {
			$('#fullpage').fullpage({
				autoScrolling: false,
				fitToSection:false,
				css3: true
			});
		}

		$('.nav-mobile').on('click', function() {
			$('#header').addClass("opa0");
			$('#nav-menu-mobile').addClass('animated');
			$('#nav-menu-mobile').toggleClass('slideInDown');
			$('#nav-menu-mobile').toggleClass('slideOutUp');
			$('body').toggleClass('nav-is-active');
		});

		$('.sub-link').on('click', function() {
			var el = $(this.nextElementSibling);
			if (!$(this).hasClass('_open')) {
				el.slideDown();
			}else{
				el.slideUp();
			}
			$(this).toggleClass('_open');
		});

		$('#nav-menu-mobile').get(0).addEventListener('animationend', function() {
			$('#header').removeClass("opa0");
		});

		var gallery = $('.gallery__grid').masonry({
			itemSelector: '.gallery__grid--item',
			gutter: 30,
			numColumns: 3,
		});

		$('.gallery__grid--item img').on('click', function() {
			var element = $(this).parent().attr('id');
			$('.gallery__grid--item').toggleClass('expanded');
			var clicked_gallery = gallery.masonry({
				itemSelector: '.gallery__grid--item',
			});
			clicked_gallery.masonry( 'on', 'layoutComplete', function() {
				offset = $('#' + element).offset().top - 140;
				$('html,body').animate({
					scrollTop: offset
				});
			});
		});
	});

})(jQuery);