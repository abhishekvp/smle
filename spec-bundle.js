/*
 * When testing with webpack and ES6, we have to do some extra
 * things get testing to work right. Because we are gonna write test
 * in ES6 to, we have to compile those as well. That's handled in
 * karma.conf.js with the karma-webpack plugin. This is the entry
 * file for webpack test. Just like webpack will create a bundle.js
 * file for our client, when we run test, it well compile and bundle them
 * all here! Crazy huh. So we need to do some setup
*/
'use strict';
Error.stackTraceLimit = Infinity;
require('phantomjs-polyfill');
require('es6-promise');
require('es6-shim');
require('es7-reflect-metadata/dist/browser');

require('zone.js/dist/zone-microtask.js');
require('zone.js/dist/long-stack-trace-zone.js');
require('zone.js/dist/jasmine-patch.js');


var testing = require('angular2/testing');
throw new Error('9');

var browser = require('angular2/platform/testing/browser');
testing.setBaseTestProviders(
  browser.TEST_BROWSER_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_APPLICATION_PROVIDERS);

/*
  Ok, this is kinda crazy. We can use the the context method on
  require that webpack created in order to tell webpack
  what files we actually want to require or import.
  Below, context will be an function/object with file names as keys.
  using that regex we are saying look in ./src/app and ./test then find
  any file that ends with spec.js and get its path. By passing in true
  we say do this recursively
*/
var testContext = require.context('./src', true, /\.spec\.ts/);

// get all the files, for each file, call the context function
// that will require the file and load it up here. Context will
// loop and require those spec files here
testContext.keys().forEach(testContext);
