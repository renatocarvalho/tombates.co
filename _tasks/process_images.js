var plumber      = require('gulp-plumber');
var imagemin     = require('gulp-imagemin');
var displayError = require('./display_error.js');

module.exports = function (gulp) {
  return function () {
    gulp.src('./_assets/images/**/*')
      .pipe(plumber({ errorHandler: displayError }))
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(plumber.stop())
      .pipe(gulp.dest('./build/assets/images'));
  }
}
