<header class="header grid-x grid-container full align-center align-middle">

	<div class="header__logo cell large-6 medium-6 small-6">
		<a href="<?= home_url(); ?>">
			<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/logo-main.png" class="logo-desktop" alt="Credit Fundr Logo">
			<img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/white-logo.png" class="logo-mobile" alt="Credit Fundr Logo">
		</a>
	</div>

	<div class="header__nav cell auto text-right small-6">
		<div class="nav__desktop">
			<nav>
				<?php 
					wp_nav_menu([
						'menu' => 'Main Navigation',
						'menu_class' => '',
						'menu_id' => '',
						'container' => ''
					]);
				?>
			</nav>
		</div>
		<div class="nav__mobile">
			<nav role="navigation">
				<div id="menuToggle">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="nav__slidedown">
					<?php 
						wp_nav_menu([
							'menu' => 'Main Navigation',
							'menu_class' => 'mobile__menu',
							'menu_id' => '',
							'container' => ''
						]);
					?>
				</div>
			</nav>
		</div>
	</div>

</header>