var ip     = require('ip');
var server = require('gulp-webserver');

module.exports = function (gulp, argv) {
  return function () {
    var options = {};

    if (argv.open)
      options.open = true;

    if (argv.network)
      options.host = ip.address();

    gulp.src('./build')
      .pipe(server(options));
  }
}
