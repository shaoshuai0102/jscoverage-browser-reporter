var pkg = require('./package.json');

var gulp = require('gulp');
var jade = require('gulp-jade');
var wrapper = require('gulp-wrapper');
var rename = require('gulp-rename');


gulp.task('template', function () {
  gulp.src('./templates/coverage.jade')
      .pipe(jade({
        client: true
      }))
      .pipe(wrapper({
        header: 'var jade = require(\'./jade-runtime.js\');\nmodule.exports = ',
        footer: ''
      }))
      .pipe(rename('template.js'))
      .pipe(gulp.dest('./lib/'))
});