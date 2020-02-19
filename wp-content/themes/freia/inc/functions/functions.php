<?php

if(
	$_SERVER['ENV'] === 'production' ||
	$_SERVER['ENV'] === 'development'
){
	add_filter('acf/settings/show_admin', '__return_false');
}

	// ACF PLUGIN INIT

	add_filter('acf/settings/path', 'acf_settings_path');
	function acf_settings_path( $path ) {
		$path = get_stylesheet_directory_uri() . '/acf/';
		return $path;
	}

	add_filter('acf/settings/dir', 'acf_settings_dir');
	function acf_settings_dir( $dir ) {
		$dir = get_stylesheet_directory_uri() . '/acf/';
		return $dir;
	}

	// ACF JSON SAVE/LOAD POINT

	add_filter('acf/settings/save_json', 'acf_json_save_point');
	function acf_json_save_point( $path ) {
		$path = get_stylesheet_directory() . '/inc/acf';
		return $path;
	}

	add_filter('acf/settings/load_json', 'acf_json_load_point');
	function acf_json_load_point( $path ) {
		unset( $path[0] );
		$path[] = get_stylesheet_directory() . '/inc/acf';
		return $path;
	}


	// ACF OPTION

	if ( function_exists('acf_add_options_page') ) {

		$options_page_parent = acf_add_options_page(array(
			'page_title' 	=> 'Theme Settings',
			'menu_title' 	=> 'Theme Settings',
			'redirect' 		=> false
		));
	}


	// ACF: HTML TAG

	function acf_html_tag($value, $default = 'div') {
		if ( $value ) :
			if ( $value == 'default' ) :
				$value = $default;
			endif;
		else :
			$value = $default;
		endif;

		return $value;
	}


	function acf_link( $link_type, $internal, $external, $new_tab) {
		$link = array();
		if( $link_type == 'internal' ) :
			$link['url'] = $internal;
		elseif( $link_type == 'external' ) :
			$link['url'] = $external;
		endif;

		if($new_tab)
			$link['target'] = 'target="_blank"';
		else
			$link['target'] = '';

		return $link;
	}

	// REMOVE GUTENBURG VISUAL/TEXT EDITOR?

	if ( is_admin() ) {
		add_filter('use_block_editor_for_post', '__return_false', 10);
		add_filter('use_block_editor_for_post_type', '__return_false', 10);
	}

	// ADD PHP VARS SCRIPT VARIABLE

	function php_vars() {
		$php_vars = array(
			'admin_ajax_url' => admin_url('admin-ajax.php'),
			'get_bloginfo_url' => get_bloginfo('url'),
			'get_stylesheet_directory' => get_stylesheet_directory(),
			'get_stylesheet_directory_uri' => get_stylesheet_directory_uri(),
			'get_template_directory' => get_template_directory(),
			'get_template_directory_uri' => get_template_directory_uri(),
		);
		echo '<script type="text/javascript">var php_vars =' . json_encode($php_vars) . ';</script>';
	}
	add_action('wp_head', 'php_vars');

	function sc_anti_wpautop($content) {
		$array = array (
			'<p>[' => '[',
			']</p>' => ']',
			']<br />' => ']'
		);
		$content = strtr( $content, $array );

		$get_first_string = substr($content, 0, 4);
		$get_last_string = substr($content, -3);

		// check if $content starts with </p>
		if ( preg_match('/<\/p>/', $get_first_string) ) :
			$content = substr($content, 4);
		endif;

		// check if $content ends with <p>
		if ( preg_match('/<p>/', $get_last_string) ) :
			$content = substr($content, 0, -3);
		endif;

		// var_dump($content);

		return $content;
	}

	function instagram_item($instagram_type) {
		$insta_item = array();
		if( $instagram_type ) : foreach( $instagram_type as $insta ) :
			if( $insta['acf_fc_layout'] == 'custom' ) :

				if( $insta['instagram_item'] ) : foreach( $insta['instagram_item'] as $item ) :
					$title_html = acf_html_tag($item['html_tag'], 'h3');
					$style = '';

						if( $item['image'] )
							$style = 'style="background-image: url(\'' . $item['image']['sizes']['large-xxl']. '\')"';

					$insta_item[] = array(
										'image' => $item['image']['sizes']['large-xxl'],
										'image_alt' => $item['image']['alt'],
										'style' => $style,
										'url' => $item['link'],
										'title_html' => $title_html,
										'title' => $item['title_text']
									);

				endforeach; endif;
			endif;
		endforeach; endif;

		return $insta_item;

	}

	add_filter('show_admin_bar', '__return_false');

	function get_excerpt($limit, $source = null) {

		if($source == "content" ? ($excerpt = get_the_content()) : ($excerpt = get_the_excerpt()));
		$excerpt = preg_replace(" (\[.*?\])",'',$excerpt);
		$excerpt = strip_shortcodes($excerpt);
		$excerpt = strip_tags($excerpt);
		$excerpt = substr($excerpt, 0, $limit);
		$excerpt = substr($excerpt, 0, strripos($excerpt, " "));
		$excerpt = trim(preg_replace( '/\s+/', ' ', $excerpt));
		$excerpt = $excerpt . ' ...';
		return $excerpt;
	
	}
?>