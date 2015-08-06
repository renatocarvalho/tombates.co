var _          = require('lodash');
var fs         = require('fs');

function readAndParseJson (filename) {
  var dir = __dirname + '/../_data/' + filename;
  return JSON.parse(fs.readFileSync(dir))
}

module.exports = function () {
  return function (files, metalsmith, done) {
    var fileNames = _.without(fs.readdirSync(__dirname + '/../_data/'), '.DS_Store');
    var data = {};

    if (fileNames && fileNames.length) {
      for (var i = 0; i < fileNames.length; i++) {
        if (_.endsWith(fileNames[i], '.json')) {
          _.extend(data, readAndParseJson(fileNames[i]))
        }
      }
    }

    _.extend(metalsmith.metadata(), data);

    done();
  }
}
