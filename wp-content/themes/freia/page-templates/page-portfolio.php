<?php
	/* TEMPLATE NAME: Portfolio */
	get_header();
?>

<section class="gallery gallery__wrapper grid-container full">
	<div class="grid-x">
		<div class="gallery__grid--wrapper cell large-12 medium-12 small-12">
			<div class="gallery__grid">
				<div class="gallery__grid--item" id="gallery-item-1">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-1.jpg" alt="1">
				</div>
				<div class="gallery__grid--item" id="gallery-item-2">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-2.jpg" alt="2">
				</div>
				<div class="gallery__grid--item" id="gallery-item-3">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-3.jpg" alt="3">
				</div>
				<div class="gallery__grid--item" id="gallery-item-4">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-4.jpg" alt="4">
				</div>
				<div class="gallery__grid--item" id="gallery-item-5">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-5.jpg" alt="5">
				</div>
				<div class="gallery__grid--item" id="gallery-item-6">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-6.jpg" alt="6">
				</div>
				<div class="gallery__grid--item" id="gallery-item-7">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-7.jpg" alt="7">
				</div>
				<div class="gallery__grid--item" id="gallery-item-8">
					<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/portfolio/portrait-8.jpg" alt="8">
				</div>
			</div>
		</div>
	</div>
</section>

<?php get_footer();