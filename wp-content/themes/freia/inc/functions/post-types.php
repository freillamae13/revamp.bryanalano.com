<?php
/**
 * Custom Post Types
 *
 * @package WordPress
 * @subpackage cebo
 * @since Dream Home 1.0
 */
 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/* CUSTOM POST TYPES -------------------------------------------------------------------------------------*/

// Offer

// add_action('init', 'offers_post_type');

function offers_post_type() {
	$labels = array(
		'name' => _x('Offer', 'post type general name'),
		'singular_name' => _x('Offer', 'post type singular name'),
		'add_new' => _x('Add New', 'Offers'),
		'add_new_item' => __('Add New Offers'),
		'edit_item' => __('Edit Offers'),
		'new_item' => __('New Offers'),
		'view_item' => __('View Offers'),
		'search_items' => __('Search Offers'),
		'not_found' =>  __('No Offers found'),
		'not_found_in_trash' => __('No Offers found in Trash'),
		'parent_item_colon' => ''
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'offers'),
		'taxonomies' => array( 'category' ),
		'capability_type' => 'post',
		'menu_icon' => 'dashicons-admin-page',
		'hierarchical' => true,
		'menu_position' => null,
		'supports' => array('title','custom-fields','editor','author','excerpt','comments','thumbnail','revisions')
	);
	register_post_type('offers',$args);
}


// Location

// add_action( 'init', 'location_post_type' );

function location_post_type() {
	register_post_type( 'locations',
		array(
			'labels' => array(
				'name' => __( 'Locations' ),
				'singular_name' => __( 'Locations' )
			),
			'public' => true,
			'rewrite' => array('slug' => 'locations'),
			'menu_icon' => 'dashicons-location',
			'supports' => array('title','custom-fields','editor','category','author','thumbnail','revisions')
		)
	);
}


// Taxonomy for Location

// location_type_taxonomies();

function location_type_taxonomies() {

	$location_label = array(
		'name' => _x( 'Location Type', 'taxonomy general name' ),
		'singular_name' => _x( 'Location Type', 'taxonomy singular name' ),
		'search_items' =>  __( 'Search Location Types' ),
		'all_items' => __( 'All Location Types' ),
		'parent_item' => __( 'Parent Location Type' ),
		'parent_item_colon' => __( 'Parent Location Type:' ),
		'edit_item' => __( 'Edit Location Type' ),
		'update_item' => __( 'Update Location Type' ),
		'add_new_item' => __( 'Add New Location Type' ),
		'new_item_name' => __( 'New Location Type Name' )
	);

	register_taxonomy('loctype', array('locations'), array(
		'hierarchical' => true,
		'labels' => $location_label,
		'show_ui' => true,
		'query_var' => true,
		'show_admin_column' => true,
		'rewrite' => array( 'slug' => 'location-type' )
	));

	// $person_label = array(
	// 	'name' => _x( 'Person Type', 'taxonomy general name' ),
	// 	'singular_name' => _x( 'Person Type', 'taxonomy singular name' ),
	// 	'search_items' =>  __( 'Search Person Types' ),
	// 	'all_items' => __( 'All Person Types' ),
	// 	'parent_item' => __( 'Parent Person Type' ),
	// 	'parent_item_colon' => __( 'Parent Person Type:' ),
	// 	'edit_item' => __( 'Edit Person Type' ),
	// 	'update_item' => __( 'Update Person Type' ),
	// 	'add_new_item' => __( 'Add New Person Type' ),
	// 	'new_item_name' => __( 'New Person Type Name' )
	// );

	// register_taxonomy('locper', array('locations'), array(
	// 	'hierarchical' => true,
	// 	'labels' => $person_label,
	// 	'show_ui' => true,
	// 	'query_var' => true,
	// 	'rewrite' => array( 'slug' => 'location-per' )
	// ));
}