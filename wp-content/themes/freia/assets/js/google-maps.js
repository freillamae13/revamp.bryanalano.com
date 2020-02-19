function map_neighborhood() {
	var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

	if(customMapStyles != '') {
		var mapStyles = customMapStyles;
	} else {
		var mapStyles = mapStyles;
	}

	if (php_vars.length === 0 || typeof 'undefined') {
		php_vars = {
			map_center: [
				31.7586719, -106.4908782
			]
		}
	}
	
	map_zoom = (php_vars.map_zoom) ? php_vars.map_zoom : 14.5;
	map_zoom = parseInt(map_zoom, 10);

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: map_zoom,
		center: new google.maps.LatLng(php_vars.map_center[0], php_vars.map_center[1]),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: mapStyles,
		scrollwheel : false,
		mapTypeControl : false,
		streetViewControl : false,
		fullscreenControl: false,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		}
	});

	var storeMarkers = new Array();
	var $infowindow = $('.map__infowindow.map__infowindow--details');

	function categoryMarkers(map, markers, category) {

		var infoWindow = new google.maps.InfoWindow({maxWidth: 210, pixelOffset: new google.maps.Size(0,-20)}), marker;
		var mapBounds = new google.maps.LatLngBounds();

		// clear all markers first
		if ( typeof storeMarkers !== 'undefined' ) {
			for ( var i = 0; i < storeMarkers.length; i++) {
				storeMarkers[i].setMap(null);
			}
			storeMarkers = new Array(); // reset
		}

		// add markers
		for ( var i = 0; i < markers.length; i++) {

			if (
				markers[i]['lat'] != '' &&
				markers[i]['lng'] != ''
			) {												// check if both coordinates are not empty. Prevents errors

				if ( category == 'all' ) { 					// check if category is set to all

					marker = addMarker(map, markers[i]); 	// add marker to map
					storeMarkers.push(marker);				// store marker obj for clearing purposes

					if ( typeof marker != 'undefined' ) {

						google.maps.event.addListener(marker, 'click', (function(marker, i) {
							return function() {
									console.log(markers[i].address_link);

								$infowindow.find('.map__infowindow--anchor.dropanchor').attr('href',markers[i].address_link);
								$infowindow.find('.map__infowindow--address .map__content .map__box').html(markers[i].address);
								// $infowindow.find('.map__infowindow--address span').text(markers[i].category);
								$infowindow.find('.map__infowindow--address h3').text(markers[i].title);
								$infowindow.find('.map__infowindow--property img').attr('src',markers[i].image);
								$infowindow.find('.map__infowindow--property').attr('style','background-image: url(\''+ markers[i].image +'\');');
								$infowindow.addClass('active');

								var iw = $('.gm-style-iw');
								iw.prev().addClass('gm-style-iw-bubble');
								iw.parent().addClass('gm-style-iw-top');
								iw.next().addClass('gm-style-iw-close');
							}
						})(marker, i));

						google.maps.event.addListener(map, 'click', (function(marker, i) {
							$infowindow.removeClass('active');
						}));

					}

				} else {

					if ( markers[i].category == category || markers[i].category == 'hotel') { 	// check if category match with marker
						marker = addMarker(map, markers[i]);	// add marker to map
						storeMarkers.push(marker);			// store marker obj for clearing purposes

						if ( typeof marker != 'undefined' ) {

							google.maps.event.addListener(marker, 'click', (function(marker, i) {
								return function() {
									$infowindow.find('.map__infowindow--anchor.dropanchor').attr('href',markers[i].address_link);
									$infowindow.find('.map__infowindow--address .map__content .map__box').html(markers[i].address);
									// $infowindow.find('.map__infowindow--address span').text(markers[i].category);
									$infowindow.find('.map__infowindow--address h3').text(markers[i].title);
									$infowindow.find('.map__infowindow--property img').attr('src',markers[i].image);
									$infowindow.find('.map__infowindow--property').attr('style','background-image: url(\''+ markers[i].image +'\');');
									$infowindow.addClass('active');

									var iw = $('.gm-style-iw');
									iw.prev().addClass('gm-style-iw-bubble');
									iw.parent().addClass('gm-style-iw-top');
									iw.next().addClass('gm-style-iw-close');
								}
							})(marker, i));

							google.maps.event.addListener(map, 'click', (function(marker, i) {
								$infowindow.removeClass('active');
							}));

						}

					} else if ( markers[i].category == 'ramble-hotel' ) {

						marker = addMarker(map, markers[i]);	// add hotel marker to map if user click the category button
						storeMarkers.push(marker);				// store marker obj for clearing purposes

					}

				}



			}

		}

		if ( !mapBounds.isEmpty() ) { // make sure mapBounds is not empty

			// set zoom and set center based by bounds
			map.fitBounds(mapBounds);

			// Listener Bounds Changed
			// it should be attached to a bounds_changed listener or options wouldn't work

			var listener_boundsChanged = google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
				map.setZoom(map.getZoom() - 1); // zoom out by 1
				// map.setCenter(new google.maps.LatLng(centerLat, centerLng)); // set map center to hotel marker
				google.maps.event.removeListener(listener_boundsChanged);
			});

		}

	}

	function addMarker(map, marker) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(marker.lat, marker.lng),
			map: map,
			icon: marker.icon,
			anchorPoint: new google.maps.Point(0, -30),
		});

		return marker;
	}

	function centerMarker() {
		var center_icon = {
			url: php_vars.map_pin['url'], // url
			scaledSize: new google.maps.Size(55, 55), // scaled size
		};

		marker = new google.maps.Marker({
			position: new google.maps.LatLng(php_vars.coordinates[0], php_vars.coordinates[1]),
			map: map,
			icon: center_icon,
			zIndex: 54,
		});
	}

	function pan_to(latitude, longitude) {
		var latLng = new google.maps.LatLng(latitude, longitude);
		map.panTo(latLng);
	}

	categoryMarkers(map, locations, 'all');

	$('.map__nav button').click(function() {
		var category = $(this).data('category');
		categoryMarkers(map, locations, category);
	});

	$('.map__in-nav .map__infowindow--address').on('click keyup', function(e){
		if(e.keyCode === 13 || (e.type ==='click' && e.clientX !=0 && e.clientY != 0)) {
			var coordinates = $(this).data('coordinates');
			coordinates = coordinates.split(',');
			pan_to(coordinates[0], coordinates[1]);
		}
	});

	// add title attribute to iframe in gmaps
	google.maps.event.addListenerOnce(map, 'idle', function(){
		$('iframe[aria-hidden="true"]').attr('title', 'Intentionally Blank');
	});

}

$('.map__infowindow--close').click(function(){
	$(this).parent().removeClass('active');
});

$('.map__in-nav .map__infowindow--address').click(function(){
	var nav_class = $(this)[0].classList[0];
	$('.' + nav_class).removeClass('active');
	$(this).addClass('active');
	$('.map__infowindow--details').removeClass('active');
});

document.addEventListener("DOMContentLoaded", function () {

	var active_map = false;

	const mapLoad = function () {
		if (active_map === false) {
			active_map = true;
			map_neighborhood();
		}
	}

	document.addEventListener("scroll", mapLoad);
	window.addEventListener("resize", mapLoad);
	window.addEventListener("orientationchange", mapLoad);

});