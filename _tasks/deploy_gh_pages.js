var ghPages = require('gulp-gh-pages');

module.exports = function (gulp) {
  return function () {
    return gulp.src('./build/**/*')
    .pipe(ghPages());
  };
};
