<?php get_header('dark'); ?>

	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

		<?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full') ? get_the_post_thumbnail_url(get_the_ID(),'full') : get_template_directory_uri().'/assets/images/blog-1.png'; ?>

		<section class="blog-single__banner grid-container full">
			<div class="grid-x align-middle align-center">
				<div class="cell large-5 medium-5 small-12">
					<div class="blog-single__banner--img-box">
						<img src="<?=  $featured_img_url; ?>" alt="<?php the_title(); ?>">
					</div>
				</div>
				<div class="cell large-7 medium-7 small-12">
					<div class="blog-single__banner--title">
						<h1><?php the_title(); ?></h1>
						<div class="blog-single__banner--meta">
							<span class="date"><?= get_the_date( 'M d, Y'); ?></span>
							<span class="author"><?= get_author_name(); ?></span>
						</div>
						<div class="blog-single__banner--share">
							<a class="share--icons" href="http://www.facebook.com/sharer.php?s= 100&amp;p[title]=<?php the_title(); ?>&amp;p[url]=<?php echo urlencode(get_permalink()); ?>&amp;p[images][0]=<?php echo urlencode($featured_img_url); ?>&amp;p[summary]=<?= get_excerpt(80); ?>" target="_blank">
								<img src="<?php bloginfo('template_url'); ?>/assets/images/icon-fb.png" alt="fb icon">
							</a>
							<a class="share--icons" href="https://twitter.com/share?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" target="_blank" >
								<img src="<?php bloginfo('template_url'); ?>/assets/images/icon-twitter.png" alt="twitter icon">
							</a>
							<a class="share--icons" href="https://www.linkedin.com/cws/share?url=<?php echo urlencode(get_permalink()); ?>" target="_blank" >
								<img src="<?php bloginfo('template_url'); ?>/assets/images/icon-linkedin.png" alt="linkedin icon">
							</a>
						</div>
					</div>
				</div>
			</div>
			<img class="vector__bottom-right" src="<?= get_stylesheet_directory_uri(); ?>/assets/images/vector-dots.png" alt="">
		</section>

		<section class="blog-single__content grid-container">
			<div class="grid-x align-center align-middle">
				<div class="cell large-8 medium-10 small-12">
					<?php the_content(); ?>
				</div>
			</div>
		</section>

	<?php endwhile; endif; wp_reset_query(); ?>

	<div class="flexspace desktop" style="margin-top: 100px;"></div>
	<div class="flexspace tablet" style="margin-top: 50px;"></div>
	<div class="flexspace mobile" style="margin-top: 50px;"></div>

	<section class="hero grid-container full">
		<div class="grid-container">
			<div class="grid-x align-center text-center">
				<div class="cell large-12">
					<h2>Get started today!</h2>
					<p>Get Pre-Qualified today and hear back from us within 2 business days.</p>
					<p>&nbsp;</p>
					<?= do_shortcode('[contact-form-7 id="72" title="Banner Form"]'); ?>
				</div>
			</div>
		<img class="vector__top-right" src="https://creditfundr.com/wp-content/themes/freia/assets/images/vector-dots.png" alt="">
	</section>
		

<?php get_footer();