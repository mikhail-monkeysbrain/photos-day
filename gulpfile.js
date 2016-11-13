var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rigger = require('gulp-rigger');

gulp.task('stylus', function(){
    return gulp.src('app/stylus/style.styl')
        .pipe(stylus({
		      'include css': true
		}))
        .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', function(){
    gulp.watch('app/stylus/**/*.styl', ['stylus']);
});

gulp.task('rigger', function () {
    gulp.src('app/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'));
});