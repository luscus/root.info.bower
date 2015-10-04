/*jslint node: true */
"use strict";

// load modules
var Path   = require('path');
var Fs     = require('fs');

module.exports = function bowerInfoRetriever (rootPackageInfo) {
  var bower = null;

  if (rootPackageInfo) {

    try {
      // try to load package.json
      bower = require(rootPackageInfo.path + Path.sep + 'bower.json');

      try {
        // load the custom location of the bower modules
        var file = Fs.readFileSync(rootPackageInfo.path + Path.sep + '.bowerrc');
        var content = JSON.parse(file);

        bower.directory = content.directory;
      }
      catch (ex) {
        // no custom location, add default folder
        bower.directory = 'bower_modules';
      }
    }
    catch (ex) {
      // no package.json found
      // do nothing
    }
  }

  return bower;
};
