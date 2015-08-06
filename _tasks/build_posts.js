var assign           = require('lodash').assign;
var moment           = require('moment');
var gulpsmith        = require('gulpsmith');
var markdown         = require('metalsmith-markdown');
var templates        = require('metalsmith-templates');
var Handlebars       = require('handlebars');
var permalinks       = require('metalsmith-permalinks');
var handlebars       = require('handlebars');
var collections      = require('metalsmith-collections');
var frontMatter      = require('gulp-front-matter');
var displayError     = require('./display_error.js');
var registerPartials = require('./register_partials.js');
var registerData     = require('./register_data.js');

module.exports = function (gulp) {
  return function () {
    registerPartials('Meta', 'meta.handlebars');
    registerPartials('Scripts', 'scripts.handlebars');

    Handlebars.registerHelper('formatDate', function (value) {
      return moment(value).format('dddd, Do MMMM YYYY');
    });

    gulp.src("./_posts/**/*")
      .pipe(frontMatter()).on('data', function(file) {
        assign(file, file.frontMatter);
        delete file.frontMatter;
      })
      .pipe(
        gulpsmith()
          .use(registerData())
          .use(collections({
            posts: {
              pattern: '*.md',
              sortBy: 'published',
              reverse: true
            }
          }))
          .use(markdown())
          .use(permalinks({
            pattern: ':title',
          }))
          .use(templates({
            engine: 'handlebars',
            directory: './_layouts'
          }))
      )
      .pipe(gulp.dest("./build/blog"));
  }
}
