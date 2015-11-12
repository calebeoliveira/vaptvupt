var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('css', function() {
	return gulp.src([
			'resources/css/*.css'
		])
		.pipe(concat('resources.css'))
		.pipe(gulp.dest('public/css'));
});

gulp.task('angular-app', function() {
	return gulp.src([
			'resources/angular/run.js',
			'resources/angular/config.js',
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

gulp.task('default', [
	'css',
	'angular-app',
	'views'
]);

gulp.task('watch', ['default'], function() {
	gulp.watch(['resources/css/*.css'], ['css']);
	gulp.watch(['resources/angular/**/*.js'], ['angular-app']);
	gulp.watch(['resources/angular/views/*.html'], ['views']);
});