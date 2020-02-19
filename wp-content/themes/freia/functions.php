<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// Load on Admin and Non-admin
require( get_stylesheet_directory() . '/inc/functions/theme-support.php');
require( get_stylesheet_directory() . '/inc/functions/image-sizes.php');
// require( get_stylesheet_directory() . '/inc/functions/post-types.php');
// require( get_stylesheet_directory() . '/inc/functions/custom-navigation.php');


// Shortcodes
// require( get_stylesheet_directory() . '/inc/tinymce/shortcodes.php');


// Enqueue Scripts & Styles

// if ( !is_admin() ) add_action( 'wp_enqueue_scripts', 'enqueue_scripts_styles', 11 );

function enqueue_scripts_styles() {
	wp_deregister_script( 'jquery' );
	wp_enqueue_script( 'common-js' );

	if(is_home() || is_front_page()) {
		wp_enqueue_script( 'scripts-js-home' );
	} else {
		wp_enqueue_script( 'scripts-js' );
	}

}

require( get_stylesheet_directory() . '/inc/functions/wpml.php' );
require( get_stylesheet_directory() . '/inc/functions/functions.php' );
// require( get_stylesheet_directory() . '/inc/functions/instagram.php' );

include_once(WP_PLUGIN_DIR.'/advanced-custom-fields-pro/acf.php');