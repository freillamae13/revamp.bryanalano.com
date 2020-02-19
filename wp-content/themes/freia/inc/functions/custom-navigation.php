<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

add_filter( 'show_admin_bar', '__return_false' );

register_nav_menus(array(
	'hamburger_nav' => __( 'Hamburger Nav', 'misfit' ),
	'footer_nav' => __( 'Footer Nav', 'misfit' ),
));