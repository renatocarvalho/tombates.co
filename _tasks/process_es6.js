var babel = require('gulp-babel');

module.exports = function (gulp) {
  return function () {
    gulp.src('./_assets/js/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./build/assets/js'));
  }
}
