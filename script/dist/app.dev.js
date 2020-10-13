"use strict";

var _init = _interopRequireDefault(require("./init.js"));

require("./tab.js");

require("./search.js");

var _playClass = require("./playClass.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var header_right = document.querySelector('.header_right');
var go_top = document.querySelector('.go_top');
var play = new _playClass.Play(document.querySelector('.play_view'));
header_right.addEventListener('click', function (e) {
  play.show();
});
go_top.addEventListener('click', function (e) {
  play.hidden();
});
play.onPlay();

var render = function render() {
  _init["default"].slider();

  _init["default"].ablumList();

  _init["default"].rankList();

  _init["default"].hotWord();

  _init["default"].search();

  _init["default"].scrollLoad();
};

render();