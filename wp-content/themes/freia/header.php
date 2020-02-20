<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<title>
		<?php wp_title(); ?>
	</title>

	<?php
		echo '<style>';
		require get_stylesheet_directory() . '/assets/css/critical.css.php';
		echo '</style>';
	?>

	<link rel="preload" id="style" href="<?= get_stylesheet_directory_uri(); ?>/assets/css/style.css" as="style" media="screen" crossorigin="anonymous">

	<link rel="shortcut icon" href="<?= get_stylesheet_directory_uri(); ?>/assets/images/favicon.png">
	
	<script src="<?= get_stylesheet_directory_uri(); ?>/assets/js/jquery.min.js"></script>
	<script>
		document.addEventListener("DOMContentLoaded", function () {
			var this_preload = document.querySelectorAll('link[rel="preload"][as="style"]');
			for ( var i = 0; i < this_preload.length; i++ ) {
				var preload = this_preload[i];
				preload.rel = 'stylesheet';
			}
			this_preload.forEach(function(preload) { //IE 11: forEach Object doesn't support this property or method
				preload.rel = 'stylesheet';
			});
		});

		var url_vars = {
			'get_stylesheet_directory_uri': '<?= get_stylesheet_directory_uri(); ?>'
		};
	</script>

	<noscript>
		<link rel="preload" type="text/css" media="screen" href="<?= get_stylesheet_directory_uri(); ?>/assets/css/style.css">
	</noscript>

	<?php 
		wp_head();
	?>
</head>

<body <?php body_class(); ?>>

	<div id="header">
		<div id="logo">
			<a href="/bryanalano.com">
			</a>
		</div>
		<ul class="nav-menu">
			<li><a href="about.html">about</a></li>
			<li><a href="portfolio.html">portfolio</a></li>
			<li><a href="contact.html">contact</a></li>
		</ul>
		<div class="nav-mobile">
			<div class="_1"></div>
			<div class="_2"></div>
			<div class="_3"></div>
		</div>
	</div>
	<div id="nav-menu-mobile" class="nav-menu-mobile slideOutUp faster">
		<div class="row align-middle text-center">
		  	<div class="columns">
		  		<ul class="links">
					<li><a href="about.html">about</a></li>
					<li><a href="#" class="sub-link">portfolio</a>
						<div class="sub-container">
							<ul class="sub">
								<li><a href="lifestyle.html">lifestyle</a></li>
								<li><a href="portfolio.html">portraits</a></li>
								<li><a href="commissions.html">commissions</a></li>
								<li><a href="videos.html">videos</a></li>
							</ul>
						</div>
					</li>
					<li><a href="contact.html">contact</a></li>
				</ul>
				<ul class="socials">
					<li><a href="about.html">Instagram</a></li>
					<li><a href="portfolio.html">Facebook</a></li>
					<li><a href="contact.html">Vimeo</a></li>
				</ul>
			</div>
		</div>
	</div>

	<main class="wrapper">