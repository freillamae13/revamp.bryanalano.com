<?php
	/* TEMPLATE NAME: Portfolio */
	get_header('portfolio');
?>

<section class="gallery gallery__wrapper grid-container full">
	<div class="grid-x">
		<div class="gallery__grid--wrapper cell large-12 medium-12 small-12">
			<div class="gallery__grid">
				<?php $count = 0; if ( have_rows('image_items') ) : while ( have_rows('image_items') ) : $count++; the_row(); ?>
					<?php $image = get_sub_field('image'); ?>
					<div class="gallery__grid--item" id="gallery-item-<?= $count; ?>">
						<img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
					</div>
				<?php endwhile; endif; ?>
			</div>
		</div>
	</div>
</section>

<?php get_footer();