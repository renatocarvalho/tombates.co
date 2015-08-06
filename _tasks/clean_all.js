var del = require('del');

module.exports = function () {
  return function (cb) {
    del([
      './build'
    ], cb);
  };
};
