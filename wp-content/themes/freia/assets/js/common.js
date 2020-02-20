(function($){

	$(document).ready(function(){

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

	});

})(jQuery);