var Handlebars = require('handlebars');
var fs         = require('fs');

function readPartial (path) {
  var dir = __dirname + '/../_partials/';
  return fs.readFileSync(dir + path, 'utf-8');
}

module.exports = function (name, path) {
  return Handlebars.registerPartial(name, readPartial(path));
}
