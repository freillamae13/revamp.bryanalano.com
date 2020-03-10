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

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="loader-wrapper">
		<div id="loader"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/BryanAlano_Logo_o.svg" alt="Bryan Alano Logo"></div>
	</div>

	<div id="header">
		<div id="logo">
			<a href="/">
			</a>
		</div>
		<?php 
			wp_nav_menu([
				'menu' => 'Main Navigation',
				'menu_class' => 'nav-menu',
				'menu_id' => '',
				'container' => ''
			]);
		?>
		<div class="nav-mobile">
			<!-- <div class="_1"></div>
			<div class="_2"></div>
			<div class="_3"></div> -->
		</div>
	</div>
	<div id="nav-menu-mobile" class="nav-menu-mobile faster slideInDown">
		<div class="row align-middle text-center">
			<div class="columns">
				<div class="menu-mobile-nav-container">
					<ul id="menu-mobile-nav" class="links">
						<li id="menu-item-18120" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18120"><a href="/about/">About</a></li>
						<li id="menu-item-18115" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-menu-ancestor current-menu-parent current-page-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-18115 current-menu-ancestor"><a href="/portfolio/">portfolio</a>
						<ul class="sub-menu">
								<li id="menu-item-18119" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-18090 current_page_item menu-item-18119"><a href="/portfolio/lifestyle/" aria-current="page">lifestyle</a></li>
								<li id="menu-item-18118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18118"><a href="/portfolio/portraits/">portraits</a></li>
								<li id="menu-item-18117" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18117"><a href="/portfolio/commissions/">commissions</a></li>
								<li id="menu-item-18116" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18116"><a href="/portfolio/videos/">videos</a></li>
							</ul>
						</li>
						<li id="menu-item-18121" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18121"><a href="/contact/">CONTACT</a></li>
					</ul>
				</div>
				<ul class="socials">
					<li><a href="https://www.instagram.com/bryan.alano/" target="_blank" title="Instagram - Bryan Alano">Instagram</a></li>
					<li><a href="https://www.linkedin.com/in/bryanalano" target="_blank" title="LinkedIn - Bryan Alano">LinkedIn</a></li>
					<li><a href="https://vimeo.com/bryanalano" target="_blank" title="Vimeo - Bryan Alano">Vimeo</a></li>
				</ul>
			</div>
		</div>
	</div>

	<main class="wrapper">