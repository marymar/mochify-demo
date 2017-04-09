var mochify = require('mochify');

mochify('./test/**/*.js', {
  reporter : 'tap',
  cover    : true
}).bundle();