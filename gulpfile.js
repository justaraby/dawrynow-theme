var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('packk-js', function () {	
	return gulp.src(['inc/assets/js/popper.min.js','inc/assets/js/bootstrap.min.js'])
		.pipe(concat('inc/assets/js/bundle.js'))
		.pipe(gulp.dest('js'));
});
 gulp.task('g-js', function() {
  return gulp.src(['vendor/**/*.js','vendor/**/js/*.js','vendor/**/src/*.js','assets/js/*.js'])
		.pipe(concat('allscript.js'))
		.pipe(gulp.dest('dist'));
});
gulp.task('packcss', function () {	
	return gulp.src(['inc/assets/css/bootstrap.min.css','inc/assets/css/fontawesome.css'])
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('css'));
});

const minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src(['css/style.min.css'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});
 
gulp.task('default', ['packk-js', 'packcss'], function () {

})
