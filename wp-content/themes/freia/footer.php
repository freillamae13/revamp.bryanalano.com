	</main>

	<div class="grid-container" id="footer">
		<div class="row">
			<div class="columns">
				<ul class="social-items">
					<li class="block-title">Socials</li>
					<?php if (is_front_page()) : ?>
						<li><a href="http://instagram.com/bryan.alano" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-ig-white.png" alt="Instagram Icon"></a></li>
						<li><a href="http://www.facebook.com/bryanalanophotography" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-fb-white.png" alt="Facebook Icon"></a></li>
						<li><a href="http://vimeo.com/bryanalano" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-vimeo-white.png" alt="Vimeo Icon"></a></li>
						<li><a href="http://www.twitter.com/bryanalano" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-twitter-white.png" alt="Twitter Icon"></a></li>
						<li><a href="https://www.linkedin.com/in/bryanalano/" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-linkedin-white.png" alt="Linkedin Icon"></a></li>
					<?php else : ?>
						<li><a href="http://instagram.com/bryan.alano" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-ig.png" alt="Instagram Icon"></a></li>
						<li><a href="http://www.facebook.com/bryanalanophotography" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-fb.png" alt="Facebook Icon"></a></li>
						<li><a href="http://vimeo.com/bryanalano" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-vimeo.png" alt="Vimeo Icon"></a></li>
						<li><a href="http://www.twitter.com/bryanalano" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-twitter.png" alt="Twitter Icon"></a></li>
						<li><a href="https://www.linkedin.com/in/bryanalano/" target="_blank"><img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/icon-linkedin.png" alt="Linkedin Icon"></a></li>
					<?php endif; ?>
				</ul>

				<ul>
					<li class="block-title">Los Angeles Studio</li>
					<li>+1 323.479.1119</li>
					<li>201 N. Westmoreland Ave</li>
					<li>Los Angeles CA, 90004</li>
					<li>bryan@bryanalano.com</li>
				</ul>

				<ul>
					<li class="block-title">Asia Bookings</li>
					<li><a href="https://www.artistsandcomanila.com/">Artists & Company (Manila)</a></li>
					<li>Shao Trinidad</li>
					<li>shao@artistsandcomanila.com</li>
				</ul>

				<ul>
					<li class="block-title">Project Inquiries</li>
					<li>Mark Quest</li>
					<li>Studio Manager/ Producer</li>
					<li>production@bryanalano.com</li>
				</ul>
			</div>
		</div>
		<p class="copyright">© Bryan Alano 2019</p>
	</div>

	<script src="<?= get_stylesheet_directory_uri(); ?>/assets/js/main.js" async></script>

</body>
</html>