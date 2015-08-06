"use strict";

// Require gulp
// Our task files require the other node modules
// needed to build the entire site.
var gulp  = require('gulp');
var argv  = require('yargs').argv;
var spawn = require('child_process').spawn;

// Clean Tasks
gulp.task('clean:all', require('./_tasks/clean_all.js')());
gulp.task('clean:assets', require('./_tasks/clean_assets.js')());

// Process Tasks
gulp.task('process:all', ['process:css', 'process:images', 'process:es6']);
gulp.task('process:css', require('./_tasks/process_css.js')(gulp));
gulp.task('process:images', require('./_tasks/process_images.js')(gulp));
gulp.task('process:es6', require('./_tasks/process_es6.js')(gulp));

// Build Tasks
gulp.task('build:all', ['build:pages', 'build:posts']);
gulp.task('build:pages', require('./_tasks/build_pages.js')(gulp));
// gulp.task('build:posts', require('./_tasks/build_posts.js')(gulp));

// Serving
gulp.task('serve:build',  require('./_tasks/serve_build.js')(gulp, argv));

// Creating

// Deploying
gulp.task('deploy:github', require('./_tasks/deploy_gh_pages.js')(gulp));

// Watching
gulp.task('watch:assets', function () {
  gulp.watch('_assets/css/**/*.css', [ 'process:css' ]);
  gulp.watch('_assets/images/**/*', ['process:images']);
  gulp.watch('_assets/js/**/*', ['process:es6']);
  
  gulp.watch(['_posts/**/*', '_layouts/**/*', '_partials/**/*', '_data/**/*'], ['build:posts']);
});

// Running
gulp.task('run:gulp', ['clean:assets'], function () {
  gulp.start(
    'build:pages',
    'process:css',
    'process:images',
    'process:es6',
    'watch:assets',
    'serve:build'
  );
});

// Default Command
gulp.task('default', ['run:gulp']);
