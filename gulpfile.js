var gulp = require('gulp');

var serve = require('gulp-serve');

gulp.task('default', serve({
	root: ['html'],
	port: 3000
}));