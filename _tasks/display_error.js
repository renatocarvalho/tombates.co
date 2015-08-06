var util = require('gulp-util');

module.exports = function displayError (error) {
  var string = util.colors.red('Error    ');
      string += "'" + util.colors.cyan(error.plugin) + "'  ";
      string += error.message.split("\n")[0];
      string += util.colors.grey(' in ');
      string += error.fileName;

  util.log(string);
  util.beep();
}
