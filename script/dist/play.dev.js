"use strict";

var _prograss = _interopRequireDefault(require("./prograss.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bar_box = document.querySelector('.bar_box');
var go_top = document.querySelector('.go_top');
var play_view = document.querySelector('.play_view');
var header_right = document.querySelector('.header_right');
bar_box.addEventListener('click', function (e) {
  var audio = document.querySelector('audio');

  if (audio.paused === false) {
    audio.pause();

    _prograss["default"].pause();

    document.querySelector('.bar_play').classList.remove('hidden');
    document.querySelector('.bar_pause').classList.add('hidden');
  } else {
    audio.play();

    _prograss["default"].run();

    document.querySelector('.bar_pause').classList.remove('hidden');
    document.querySelector('.bar_play').classList.add('hidden');
  }
});
go_top.addEventListener('click', function (e) {
  play_view.style.transform = 'translateY(-120%)';
});
header_right.addEventListener('click', function (e) {
  play_view.style.transform = 'translateY(0%)';
});