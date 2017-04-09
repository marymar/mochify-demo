var mochify = require('mochify');

mochify('./test/unit/*.js', {
  debuug: true,
  reporter : 'spec',
  cover    : true
}).bundle();