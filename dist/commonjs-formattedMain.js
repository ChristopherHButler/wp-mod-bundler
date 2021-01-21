var wepback_modules = {
  './src/message.js': (module) => {
    module.exports = 'hi there';
  },
};

function webpack_require(moduleId) {
  // var moduleFn = webpack_modules[moduleId];
  var moduleFn = (module) => module.exports = 'Hi there';
  var module = {
    exports: {}
  };
  // here, the empty module.exports get overwritten with the moduleFn module.exports,
  // which is what the ACTUAL module (./src/message.js) was exporting
  moduleFn(module);

  // so then, module becomes:
  // module {
  //   exports: 'hi there',
  // }

  // and we return module.exports, which is 'hi there';

  return module.exports;
}

const message = webpack_require('./src/message.js');
console.log(message);