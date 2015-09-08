/* Include Gulp tools */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var noop = function() {};


/* gulp without arguments */
gulp.task('default', ['watch']);

// Lint JavaScript
gulp.task('lint', function() {
  return gulp.src(['sortable-table.html', 'demo/index.html', 'test/index.html'])
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint.extract()) // Extract JS from .html files
    .pipe($.jshint())

  // JSCS has not yet a extract option
  .pipe($.if('*.html', $.htmlExtract()))
    .pipe($.jscs()).on('error', noop)
    .pipe($.jscsStylish.combineWithHintResults())
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', ['lint'], function() {
  gulp.watch(['sortable-table.html', 'demo/index.html', 'test/index.html'], ['lint']);
});
