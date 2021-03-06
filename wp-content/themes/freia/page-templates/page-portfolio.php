<?php
	/* TEMPLATE NAME: Portfolio */
	get_header('portfolio');
?>

<section class="gallery gallery__wrapper grid-container full">
	<div class="grid-x">
		<div class="gallery__grid--wrapper cell large-12 medium-12 small-12">
			<div class="gallery__grid">
				<?php $count = 0; if ( have_rows('list_items') ) : while ( have_rows('list_items') ) : $count++; the_row(); ?>
					<?php if ( get_row_layout() == 'image') : ?>
						<?php $image = get_sub_field('image'); ?>
						<div class="gallery__grid--item" id="gallery-item-<?= $count; ?>">
							<img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
						</div>
					<?php elseif ( get_row_layout() == 'video') : ?>
						<?php $image = get_sub_field('image_poster'); ?>
						<div class="gallery__grid--item" id="gallery-item-<?= $count; ?>" video-link="<?php the_sub_field('video_link'); ?>">
							<img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
						</div>
					<?php endif; ?>
				<?php endwhile; endif; ?>
			</div>
		</div>
	</div>
	<div class="lightbox">
		<div class="title"></div>
		<div class="filter"></div>
		<div class="arrowr"></div>
		<div class="arrowl"></div>
		<div class="close"></div>
	</div>
</section>

<?php get_footer();