var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var ghPages = require('gulp-gh-pages');

gulp.task('default', ['watch', 'lint', 'sassify']);

gulp.task('watch', function() {
  gulp.watch('../js/**/*.js', ['lint']);
  gulp.watch('../sass/**/*.scss', ['sassify']);
});

gulp.task('lint', function() {
  return gulp.src('../js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sassify', function () {
  return gulp.src('../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});