var rename       = require('gulp-rename');
var plumber      = require('gulp-plumber');
var cssnext      = require('gulp-cssnext');
var displayError = require('./display_error.js');

module.exports = function (gulp) {
  return function () {
    gulp.src('./_assets/css/app.css')
      .pipe(plumber({ errorHandler: displayError }))
      .pipe(cssnext({ compress: true, sourcemap: true }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(plumber.stop())
      .pipe(gulp.dest('./build/assets/css'));
  };
};
