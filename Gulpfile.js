var gulp = require('gulp'),
	sass = require('gulp-sass'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	minifyCSS = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	del = require('del'),
	runSequence = require('run-sequence');

gulp.task('default', function (callback) {
	runSequence(['sass', 'watch'],
		callback
	)
});

//gulp.task('useref', function(){
//	return gulp.src('app/*.html')
//		.pipe(useref())
//		.pipe(gulpIf('*.css', minifyCSS()))
//		.pipe(gulpIf('*.js', uglify()))
//		.pipe(assets.restore())
//		.pipe(useref())
//		.pipe(gulp.dest('dist'))
//});

gulp.task('useref', function () {
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass') // Gets all files ending with .scss in app/scss and children dirs
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
});

gulp.task('clean', function() {
	del('dist');
});

gulp.task('images', function(){
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('build', function (callback) {
	runSequence('clean',
		['sass', 'useref', 'images', 'fonts'],
		callback
	)
});