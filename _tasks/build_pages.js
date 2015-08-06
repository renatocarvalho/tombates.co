var _                = require('lodash');
var assign           = _.assign;
var fs               = require('fs');
var gulpsmith        = require('gulpsmith');
var templates        = require('metalsmith-templates');
var permalinks       = require('metalsmith-permalinks');
var collections      = require('metalsmith-collections');
var frontMatter      = require('gulp-front-matter');
var displayError     = require('./display_error.js');
var registerPartials = require('./register_partials.js');
var registerData     = require('./register_data.js');

module.exports = function (gulp) {
  return function () {
    registerPartials('Meta', 'meta.handlebars');
    registerPartials('Scripts', 'scripts.handlebars');

    gulp.src("./_pages/**/*")
      .pipe(frontMatter()).on('data', function(file) {
        assign(file, file.frontMatter);
        delete file.frontMatter;
      })
      .pipe(
        gulpsmith()
          .use(registerData())
          .use(collections({
            pages: {
              pattern: '*'
            }
          }))
          .use(permalinks({ pattern: ':title' }))
          .use(templates({
            engine: 'handlebars',
            directory: './_layouts'
          }))
      )
      .pipe(gulp.dest("./build"));
  }
}
