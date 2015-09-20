var fs = require('fs');
var path = require('path');
var merge = require('merge');

/*
 *  Loads all files ending with .config.js and puts them into App.configuration, selecting the currently active environment
 */
exports = module.exports = function(App) {
  if (!App.configuration) App.configuration = {};

  var configDir = App.find('configuration');

  var files = fs.readdirSync(configDir);
  var suffix = '.config.js';

  for (var i in files) {
    var file = files[i];
    if (file.length >= suffix.length && file.indexOf(suffix) === file.length - suffix.length) {
      var configName = file.substr(0, file.indexOf(suffix));

      var config = require(path.join(configDir, file));
      App.configuration[configName] = config.default || {};

      merge(App.configuration[configName], config[App.environment.env] || {});
    }
  }
};
