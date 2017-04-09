var mochify = require('mochify');
var stringify = require('stringify');

mochify('./test/**/*.js', {
  debug: false,
  reporter : 'spec',
  cover    : false
})
.transform( stringify, {
  appliesTo: {includeExtensions: ['.html']}
})
.bundle();

