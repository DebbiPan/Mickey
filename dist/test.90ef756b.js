parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="#Mickey * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #cc3333;\n  height: 100vh;\n}\n#Mickey {\n  position:absolute;\n}\n.ear {\n  width: 280rem;\n  height: 350rem;\n  background-color: #000000;\n  border-radius: 50%;\n}\n.ear.left {\n  position: absolute;\n  top: -200rem;\n  left: -120rem;\n  transform: rotate(20deg);\n}\n.ear.right {\n  position: absolute;\n  top: -200rem;\n  right: -120rem;\n  transform: rotate(-20deg);\n}\n.head {\n  position: relative;\n  width: 510rem;\n  height: 525rem;\n  background-color: #000000;\n  border-radius: 50%;\n  top: 200rem;\n}\n.eyesocket {\n  position: absolute;\n  width: 215rem;\n  height: 380rem;\n  background-color: #fff;\n  border-radius: 50%;\n}\n.face > .eyesocket.left {\n  left: 60rem;\n  top: 40rem;\n}\n.face > .eyesocket.right {\n  right: 60rem;\n  top: 40rem;\n}\n.eyebox {\n  position: absolute;\n  width: 160rem;\n  height: 190rem;\n  left: 175rem;\n  top: 140rem;\n}\n.eye {\n  position: absolute;\n  width: 60rem;\n  height: 180rem;\n  background-color: #fff;\n  border: solid #000;\n  border-radius: 52%;\n  border-width: 3rem 7rem;\n}\n.eye.left {\n  transform: rotate(-5deg);\n  left: 15rem;\n  overflow: hidden;\n}\n.eye.right {\n  transform: rotate(5deg);\n  right: 15rem;\n  overflow: hidden;\n}\n\n.eyelid-top{\n    position: absolute;\n    animation: eyelidtop 5s linear running infinite;\n    border-bottom:4rem solid #000;\n    border-radius:52% 52% 0 0;\n    height:130rem;\n    width: 46rem;\n    top:0;\n    background-color:#f5f5f5;\n}\n.eyelid-bottom{\n    position: absolute;\n    animation: eyelidbottom 5s linear running infinite;\n    border-top:4rem solid #000;\n    border-radius: 0 0 52% 52%;\n    height:45rem;\n    width: 46rem;\n    bottom:0;\n    background-color:#f5f5f5;\n}\n@keyframes eyelidtop{\n    0% {\n    top: -135rem;\n}\n    14% {\n    top: -135rem;\n}\n21% {\n    top: 0;\n}\n28% {\n    top: -135rem;\n}\n100% {\n    top: -135rem;\n}\n}\n@keyframes eyelidbottom{\n    0% {\n    bottom: -45rem;\n}\n7% {\n    bottom: 0;\n}\n14% {\n    bottom: -45rem;\n}\n100% {\n    bottom: -45rem;\n}\n}\n.eyeball {\n  position: absolute;\n  width: 35rem;\n  height: 65rem;\n  background-color: #000;\n  border-radius: 50%;\n  bottom: 1rem;\n}\n.eyeball.left {\n  left: 6rem;\n}\n.eyeball.right {\n  right: 6rem;\n}\n.nosetop {\n  position: absolute;\n  width: 140rem;\n  height: 50rem;\n  border-radius: 50%;\n  background-color: #fff;\n  border-top: 8rem solid #000;\n  left: 185rem;\n  top: 300rem;\n}\n.nose {\n  position: absolute;\n  top: 320rem;\n  left: 177rem;\n  width: 156rem;\n  height: 85rem;\n  border-radius: 50%;\n  background-color: #000;\n}\n.nosebottom {\n  position: absolute;\n  background-color: #ffff;\n  left: 177rem;\n  top: 380rem;\n  width: 156rem;\n  height: 85rem;\n}\n.cheek {\n  position: absolute;\n  width: 150rem;\n  height: 270rem;\n  border: 5rem solid #000;\n  background-color: #fff;\n  border-radius: 50%;\n  bottom: -5rem;\n  border-bottom: 0;\n}\n.cheek.left {\n  bottom: -10rem;\n  left: 20rem;\n  border-right: 0;\n  transform: rotate(-45deg);\n}\n.cheek.right {\n  bottom: -10rem;\n  right: 20rem;\n  border-left: 0;\n  transform: rotate(45deg);\n}\n.chin {\n  position: absolute;\n  left: 165rem;\n  bottom: -25rem;\n  width: 180rem;\n  height: 100rem;\n  border-radius: 50%;\n  background-color: #fff;\n  border-bottom: 5rem solid #000;\n}\n.lipblock {\n  position: absolute;\n  width: 380rem;\n  height: 280rem;\n  border-radius: 50%;\n  background-color: #fff;\n  bottom: 70rem;\n  left: 65rem;\n}\n.lip {\n  position: absolute;\n  width: 380rem;\n  height: 280rem;\n  border-radius: 50%;\n  background-color: #fff;\n  border-bottom: 10rem solid #000;\n  bottom: 70rem;\n  left: 65rem;\n}\n.mouth-wrapper > .mouth {\n  position: absolute;\n  width: 155rem;\n  height: 200rem;\n  border-radius: 50%;\n  border: solid #000;\n  border-width: 5rem 10rem;\n  left: 177.5rem;\n  bottom: 0rem;\n  background-color: #000;\n  overflow: hidden;\n}\n.mouth-wrapper > .mouth > .tongue1{\n    position: absolute;\n    width:100rem;\n    height:100rem;\n    border-radius: 50%;\n    background-color: #FF0000;\n    bottom:-50rem;\n    display:block;\n}\n.mouth-wrapper > .mouth > .tongue2{\n    position: absolute;\n    width:100rem;\n    height:100rem;\n    border-radius: 50%;\n    background-color: #FF0000;\n    bottom:-50rem;\n    right: 0rem;\n    border-top:5rem solid #000;\n    display:block;\n}\n.line{\n    position: absolute;\n    width: 50rem;\n    height: 20rem;\n    border-top: 5rem solid #000;\n    border-radius: 50%;\n    bottom:170rem;\n}\n.line.left{\n    left:45rem;\n    transform: rotate(-20deg);\n}\n.line.right{\n    right:45rem;\n    transform:rotate(20deg);\n}",e=n;exports.default=e;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=n(require("./css.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t={id:void 0,n:1,time:100,ui:{demo1:document.querySelector("#demo1"),demo2:document.querySelector("#demo2 style")},init:function(){t.ui.demo1.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.play(),t.bindEvents()},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},bindEvents:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,t.n>e.default.length?window.clearInterval(t.id):(t.ui.demo1.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.ui.demo1.scrollTop=t.ui.demo1.scrollHeight)},play:function(){t.id=setInterval(t.run,t.time)},pause:function(){window.clearInterval(t.id)},slow:function(){t.pause(),t.time=300,t.play()},normal:function(){t.pause(),t.time=100,t.play()},fast:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.90ef756b.js.map