(function($){

	$(document).ready(function() {

		setTimeout(function(){
			$('body').addClass('loaded');
		}, 500);

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
			width : 'full',
			lightboxEnabled : true,
			showCaptions : false
		});

	});

	$(window).load(function() {

		$(".gallery__grid--item img").click(function() {
			$(".lightbox").fadeIn(300);
			$(".lightbox").addClass('open-lightbox');
			$(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
			$("html").css("overflow", "hidden");

			var parent = $(this).parent();
			if ($(parent).is(":last-child")) {
				$(".arrowr").css("display", "none");
				$(".arrowl").css("display", "block");
			} else if ($(parent).is(":first-child")) {
				$(".arrowr").css("display", "block");
				$(".arrowl").css("display", "none");
			} else {
				$(".arrowr").css("display", "block");
				$(".arrowl").css("display", "block");
			}
		});

		$(".close").click(function() {
			$(".lightbox").fadeOut(300);
			$(".lightbox").removeClass('open-lightbox');
			$("h1").remove();
			$(".lightbox img").remove();
			$("html").css("overflow", "auto");
		});

		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
			$(".lightbox").fadeOut(300);
			$(".lightbox img").remove();
			$("html").css("overflow", "auto");
			}
		});

		$(".arrowr").click(function() {
			var imgSrc = $(".lightbox img").attr("src");
			var search = $(".gallery__grid--item").find("img[src$='" + imgSrc + "']");
			
			var newImage = $(search).parent().next().find('img');
			var newImageURL = $(newImage).attr("src");
			$(".lightbox img").attr("src", newImageURL);

			if (!$(search).parent().next().is(":last-child")) {
				$(".arrowl").css("display", "block");
			} else {
				$(".arrowr").css("display", "none");
			}
		});

		$(document).keydown( function(e){
			if (e.keyCode == 39) {
				var imgSrc = $(".lightbox img").attr("src");
				var search = $(".gallery__grid--item").find("img[src$='" + imgSrc + "']");
				
				var newImage = $(search).parent().next().find('img');
				var newImageURL = $(newImage).attr("src");
				$(".lightbox img").attr("src", newImageURL);

				if (!$(search).parent().next().is(":last-child")) {
					$(".arrowl").css("display", "block");
				} else {
					$(".arrowr").css("display", "none");
				}
			}
		});

		$(document).keydown( function(e){
			if (e.keyCode == 37) {
				var imgSrc = $(".lightbox img").attr("src");
				var search = $(".gallery__grid--item").find("img[src$='" + imgSrc + "']");

				var newLeftImage = $(search).parent().prev().find('img');
				var newLeftImageURL = $(newLeftImage).attr("src");

				$(".lightbox img").attr("src", newLeftImageURL);

				if (!$(search).parent().prev().is(":first-child")) {
					$(".arrowr").css("display", "block");
				} else {
					$(".arrowl").css("display", "none");
				}
			}
		});

		$(".arrowl").click(function() {
			var imgSrc = $(".lightbox img").attr("src");
			var search = $(".gallery__grid--item").find("img[src$='" + imgSrc + "']");

			var newLeftImage = $(search).parent().prev().find('img');
			var newLeftImageURL = $(newLeftImage).attr("src");

			$(".lightbox img").attr("src", newLeftImageURL);

			if (!$(search).parent().prev().is(":first-child")) {
				$(".arrowr").css("display", "block");
			} else {
				$(".arrowl").css("display", "none");
			}
		});

		// $(document).click(function(event) {
		// 	//if you click on anything except the modal itself or the "open modal" link, close the modal
		// 	if (!$(event.target).closest(".open-lightbox img").length) {
		// 		console.log('trigger');
		// 		// $(".lightbox").fadeOut(300);
		// 		// $(".lightbox").removeClass('open-lightbox');
		// 		// $("h1").remove();
		// 		// $(".lightbox img").remove();
		// 		// $("html").css("overflow", "auto");
		// 	}
		// });
		

	});

})(jQuery);