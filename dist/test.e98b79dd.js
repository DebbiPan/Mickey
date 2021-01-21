// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "#Mickey * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #cc3333;\n  height: 100vh;\n}\n#Mickey {\n  position:absolute;\n}\n.ear {\n  width: 280rem;\n  height: 350rem;\n  background-color: #000000;\n  border-radius: 50%;\n}\n.ear.left {\n  position: absolute;\n  top: -200rem;\n  left: -120rem;\n  transform: rotate(20deg);\n}\n.ear.right {\n  position: absolute;\n  top: -200rem;\n  right: -120rem;\n  transform: rotate(-20deg);\n}\n.head {\n  position: relative;\n  width: 510rem;\n  height: 525rem;\n  background-color: #000000;\n  border-radius: 50%;\n  top: 200rem;\n}\n.eyesocket {\n  position: absolute;\n  width: 215rem;\n  height: 380rem;\n  background-color: #fff;\n  border-radius: 50%;\n}\n.face > .eyesocket.left {\n  left: 60rem;\n  top: 40rem;\n}\n.face > .eyesocket.right {\n  right: 60rem;\n  top: 40rem;\n}\n.eyebox {\n  position: absolute;\n  width: 160rem;\n  height: 190rem;\n  left: 175rem;\n  top: 140rem;\n}\n.eye {\n  position: absolute;\n  width: 60rem;\n  height: 180rem;\n  background-color: #fff;\n  border: solid #000;\n  border-radius: 52%;\n  border-width: 3rem 7rem;\n}\n.eye.left {\n  transform: rotate(-5deg);\n  left: 15rem;\n  overflow: hidden;\n}\n.eye.right {\n  transform: rotate(5deg);\n  right: 15rem;\n  overflow: hidden;\n}\n\n.eyelid-top{\n    position: absolute;\n    animation: eyelidtop 5s linear running infinite;\n    border-bottom:4rem solid #000;\n    border-radius:52% 52% 0 0;\n    height:130rem;\n    width: 46rem;\n    top:0;\n    background-color:#f5f5f5;\n}\n.eyelid-bottom{\n    position: absolute;\n    animation: eyelidbottom 5s linear running infinite;\n    border-top:4rem solid #000;\n    border-radius: 0 0 52% 52%;\n    height:45rem;\n    width: 46rem;\n    bottom:0;\n    background-color:#f5f5f5;\n}\n@keyframes eyelidtop{\n    0% {\n    top: -135rem;\n}\n    14% {\n    top: -135rem;\n}\n21% {\n    top: 0;\n}\n28% {\n    top: -135rem;\n}\n100% {\n    top: -135rem;\n}\n}\n@keyframes eyelidbottom{\n    0% {\n    bottom: -45rem;\n}\n7% {\n    bottom: 0;\n}\n14% {\n    bottom: -45rem;\n}\n100% {\n    bottom: -45rem;\n}\n}\n.eyeball {\n  position: absolute;\n  width: 35rem;\n  height: 65rem;\n  background-color: #000;\n  border-radius: 50%;\n  bottom: 1rem;\n}\n.eyeball.left {\n  left: 6rem;\n}\n.eyeball.right {\n  right: 6rem;\n}\n.nosetop {\n  position: absolute;\n  width: 140rem;\n  height: 50rem;\n  border-radius: 50%;\n  background-color: #fff;\n  border-top: 8rem solid #000;\n  left: 185rem;\n  top: 300rem;\n}\n.nose {\n  position: absolute;\n  top: 320rem;\n  left: 177rem;\n  width: 156rem;\n  height: 85rem;\n  border-radius: 50%;\n  background-color: #000;\n}\n.nosebottom {\n  position: absolute;\n  background-color: #ffff;\n  left: 177rem;\n  top: 380rem;\n  width: 156rem;\n  height: 85rem;\n}\n.cheek {\n  position: absolute;\n  width: 150rem;\n  height: 270rem;\n  border: 5rem solid #000;\n  background-color: #fff;\n  border-radius: 50%;\n  bottom: -5rem;\n  border-bottom: 0;\n}\n.cheek.left {\n  bottom: -10rem;\n  left: 20rem;\n  border-right: 0;\n  transform: rotate(-45deg);\n}\n.cheek.right {\n  bottom: -10rem;\n  right: 20rem;\n  border-left: 0;\n  transform: rotate(45deg);\n}\n.chin {\n  position: absolute;\n  left: 165rem;\n  bottom: -25rem;\n  width: 180rem;\n  height: 100rem;\n  border-radius: 50%;\n  background-color: #fff;\n  border-bottom: 5rem solid #000;\n}\n.lipblock {\n  position: absolute;\n  width: 380rem;\n  height: 280rem;\n  border-radius: 50%;\n  background-color: #fff;\n  bottom: 70rem;\n  left: 65rem;\n}\n.lip {\n  position: absolute;\n  width: 380rem;\n  height: 280rem;\n  border-radius: 50%;\n  background-color: #fff;\n  border-bottom: 10rem solid #000;\n  bottom: 70rem;\n  left: 65rem;\n}\n.mouth-wrapper > .mouth {\n  position: absolute;\n  width: 155rem;\n  height: 200rem;\n  border-radius: 50%;\n  border: solid #000;\n  border-width: 5rem 10rem;\n  left: 177.5rem;\n  bottom: 0rem;\n  background-color: #000;\n  overflow: hidden;\n}\n.mouth-wrapper > .mouth > .tongue1{\n    position: absolute;\n    width:100rem;\n    height:100rem;\n    border-radius: 50%;\n    background-color: #FF0000;\n    bottom:-50rem;\n    display:block;\n}\n.mouth-wrapper > .mouth > .tongue2{\n    position: absolute;\n    width:100rem;\n    height:100rem;\n    border-radius: 50%;\n    background-color: #FF0000;\n    bottom:-50rem;\n    right: 0rem;\n    border-top:5rem solid #000;\n    display:block;\n}\n.line{\n    position: absolute;\n    width: 50rem;\n    height: 20rem;\n    border-top: 5rem solid #000;\n    border-radius: 50%;\n    bottom:170rem;\n}\n.line.left{\n    left:45rem;\n    transform: rotate(-20deg);\n}\n.line.right{\n    right:45rem;\n    transform:rotate(20deg);\n}";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    //初始化
    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    //在声明函数时不能使用函数内的函数，先把pause变成字符串
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value]; //[value]让字符串value变成方法
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/17705/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56535" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/17705/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map