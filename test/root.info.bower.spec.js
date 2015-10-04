var mock   = require('mock-fs');
var Path   = require('path');
var expect = require('chai').expect;
var plugin = require('../lib/root.info.bower.js');

// mock root package information
function getRootInfo (packageName) {
  return {
    name: packageName,
    path: Path.sep + 'mocked' + Path.sep + 'package' + Path.sep + packageName,
    directory: Path.sep + 'mocked' + Path.sep + 'package'
  };
}

describe('[' + __filename.substring(__filename.indexOf('/test/') + 1) + '] - root.info.bower ', function(){
  var rootPackageInfo;
  var nobowerDir = {};

  before(function(){
    rootPackageInfo= getRootInfo('nobower');

    nobowerDir[rootPackageInfo.path] = {};

    mock(nobowerDir);
  });

  after(function() {

    // remove all mocks
    mock.restore();

  });

  it('should do nothing if no root package information was provided', function () {
    var result = plugin();

    expect(result).to.equal(null);
  });


  describe('on missing bower.json', function() {

    it('should return null', function () {
      var result = plugin(rootPackageInfo);

      expect(result).to.equal(null);
    });

  });

  describe('on bower environment', function() {
    var rootPackageInfo;
    var bowerDirContent = {
      'bower.json': '{"name": "testBowerFile"}'
    };
    var fs = {};

    before(function(){
      rootPackageInfo= getRootInfo('bowerenv');

      fs[rootPackageInfo.path] = bowerDirContent;

      mock(fs);
    });

    it('should read the bower.json file', function bowerTest () {

      var result = plugin(rootPackageInfo);

      expect(result).to.be.an('object');

      expect(result.name).to.be.a('string')
        .and.to.equal('testBowerFile');

      expect(result.directory).to.be.a('string')
        .and.to.equal('bower_modules');
    });

    it('should take .bowerrc directory property into account', function () {

      // mock the filesystem: add bower.json file
      bowerDirContent['.bowerrc'] = '{"directory": "some/path"}';
      mock(fs);

      var result = plugin(rootPackageInfo);

      expect(result).to.be.an('object');

      expect(result.name).to.be.a('string')
        .and.to.equal('testBowerFile');

      expect(result.directory).to.be.a('string')
        .and.to.equal('some/path');
    });

  });

});
