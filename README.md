# root.info.bower

[![NPM version](https://img.shields.io/npm/v/root.info.bower.svg?style=flat)](https://www.npmjs.com/package/root.info.bower "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/root.info.bower.svg?style=flat)](https://www.npmjs.com/package/root.info.bower "View this project on NPM")
[![NPM license](https://img.shields.io/npm/l/root.info.bower.svg?style=flat)](https://www.npmjs.com/package/root.info.bower "View this project on NPM")
[![flattr](https://img.shields.io/badge/flattr-donate-yellow.svg?style=flat)](http://flattr.com/thing/3817419/luscus-on-GitHub)

![coverage](https://cdn.rawgit.com/luscus/root.info.bower/master/reports/coverage.svg)
[![David](https://img.shields.io/david/luscus/root.info.bower.svg?style=flat)](https://david-dm.org/luscus/root.info.bower)
[![David](https://img.shields.io/david/dev/luscus/root.info.bower.svg?style=flat)](https://david-dm.org/luscus/root.info.bower#info=devDependencies)

This is a plugin for the [package.root](https://github.com/luscus/package.root) package.

It retrieves the Bower information of the root package (if any are available)
and append the `directory` property to the Bower file properties normally stored in the `.bowerrc` file.


## Installation

### Node Dependency

Execute following line

    npm install root.info.bower --save


### Require module

The plugin will be automatically loaded by `package.root`

## Usage

Returns an Object with following properties:

* All the properties of the regular Bower file, in fact the Bower file content itself
* `directory`: the target directory of the Bower modules with value `bower_modules` or the custom location

The returned object will be available in the rootPackageInfo Object under the property `bower`.

    var bowerDir = rootPackageInfo.bower.directory;


-------------------
Copyright (c) 2015 Luscus (luscus.redbeard@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
