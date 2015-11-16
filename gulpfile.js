var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task('stylus', function() {
	return gulp.src([
			'resources/stylus/index.styl'
		])
		.pipe(stylus())
		.pipe(gulp.dest('public/css'));
});

gulp.task('angular-app', function() {
	return gulp.src([
			'resources/angular/modules/*.js',
			'resources/angular/run.js',
			'resources/angular/config.js',
			'resources/angular/directives/*.js',
			'resources/angular/factories/*.js',
			'resources/angular/services/*.js',
			'resources/angular/controllers/*.js'
		])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('views', function() {
	return gulp.src([
			'resources/angular/views/*.html'
		])
		.pipe(gulp.dest('public/views'));
});

gulp.task('images', function() {
	return gulp.src([
		'resources/images/*'
	])
	.pipe(gulp.dest('public/images'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'resources/js/*.js'
	])
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('public/js'));
});

gulp.task('default', [
	'stylus',
	'angular-app',
	'views',
	'images',
	'scripts'
]);

gulp.task('watch', ['default'], function() {
	gulp.watch(['resources/stylus/*.styl'], ['stylus']);
	gulp.watch(['resources/angular/**/*.js'], ['angular-app']);
	gulp.watch(['resources/angular/views/*.html'], ['views']);
	gulp.watch(['resources/images/*'], ['images']);
	gulp.watch(['resources/js/*.js'], ['scripts']);
});