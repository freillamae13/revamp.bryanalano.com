'use strict';

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		cleanCSS = require('gulp-clean-css'),
		replace = require('gulp-replace')

gulp.task('sass', function () {
	return gulp.src('./assets/scss/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('minifycss-components', function () {
	return gulp.src([
		'./assets/css/jquery-ui.min.css',
		'./assets/css/modulobox.min.css',
		'./assets/css/animate.min.css',
		'./assets/css/fullpage.css',
		])
		.pipe(concat('components.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('sass-critical', function () {
	return gulp.src('./assets/scss/critical.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('concat-critical', function () {
	return gulp.src([
		'./assets/css/critical.css',
		'./assets/css/owl.carousel.min.css',
		'./assets/css/swiper.min.css',
	])
	.pipe(replace('../../../', '<?= get_stylesheet_directory_uri(); ?>/'))
	.pipe(concat('critical.css.php'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./assets/css'));
});

gulp.task('build-css', gulp.series(
	'sass-critical',
	'concat-critical',
	'sass'
));

gulp.task('sass:watch', function () {
	gulp.watch('./assets/scss/**/*.scss', gulp.series(
		'build-css'
	));
});

gulp.task('compress-main', function () {
	return gulp.src([
		'./assets/js/main.js',
	])
	.pipe(uglify())
	.pipe(gulp.dest('./assets/js'));
});

gulp.task('concat-main', function () {
	return gulp.src([
		'./assets/js/jquery.min.js',
		'./assets/js/FontAwesome/fontawesome.min.js',
		'./assets/js/jquery-latest.min.js',
		'./assets/js/fullpage.js',
		'./assets/js/common.js'
	])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./assets/js'));
});

gulp.task('build-js', gulp.series(
	'concat-main'
));

gulp.task('js:watch', function () {
	gulp.watch('./assets/js/**/*.js', gulp.series(
		'concat-main'
	));
});