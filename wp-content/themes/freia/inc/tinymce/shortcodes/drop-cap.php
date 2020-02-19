<?php

	function misfit_sc_drop_cap( $atts, $content = "" ) {
		$atts = shortcode_atts(array(
			'letter' => '',
		), $atts );

		$html = '<span class="dropcap dropcap--gray-1">' . $atts['letter'] . '</span>';

		return $html;
	}
	add_shortcode( 'drop_cap', 'misfit_sc_drop_cap' );

?>