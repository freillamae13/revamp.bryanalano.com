<?php
	/* TEMPLATE NAME: Contact */
	get_header();
?>

<sectin class="contact grid-container" id="footer">
	<div class="contact--grid grid-x">
		<div class="cell large-expand small-order-2 medium-order-2 large-order-1">
			<?php the_field('content'); ?>
		</div>
		<div class="cell large-expand small-order-1 medium-order-1 large-order-2">
			<div class="contact-form">
				<?php the_field('form'); ?>
			</div>
		</div>
	</div>
	<p class="copyright">© Bryan Alano 2019</p>
</sectin>
<?php get_footer('contact');