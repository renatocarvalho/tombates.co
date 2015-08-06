var del = require('del');

module.exports = function () {
  return function (cb) {
    del([
      './build/assets/images',
      './build/assets/css',
      './build/assets/js'
    ], cb);
  };
};
