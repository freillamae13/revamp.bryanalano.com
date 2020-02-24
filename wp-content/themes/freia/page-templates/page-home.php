<?php
	/* TEMPLATE NAME: Home */
	get_header();
?>

<div id="content">
	<div class="fullpage">
		<?php if ( have_rows('image_items') ) : while ( have_rows('image_items') ) : the_row(); ?>
			<?php $image = get_sub_field('image'); ?>
			<div class="wow fadeIn">
				<img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
			</div>
		<?php endwhile; endif; ?>
	</div>
</div>

<?php get_footer();