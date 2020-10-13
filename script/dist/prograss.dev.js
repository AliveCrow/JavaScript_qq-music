"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var prograss = {
  bar_box: document.querySelector('.bar_box'),
  bar_prograss: document.querySelector('.bar_prograss'),
  audio: '',
  now_time: '',
  n: 0,
  id: null,
  run: function run() {
    var _this = this;

    console.log('run');
    this.pause();
    this.audio = document.querySelector('audio');
    this.now_time = document.querySelector('.now_time');
    this.id = setInterval(function () {
      _this.update();
    }, 50);
  },
  update: function update() {
    // this.audio.addEventListener('canplay', (e) => {
    var time = this.audio.duration;
    if (this.n >= time) this.reset();
    this.n = this.n + 0.05;
    var vr = this.n / time * 100 - 100;
    this.bar_prograss.style.transform = "translateX(".concat(vr, "%)");
    this.now_time.innerHTML = this.formatTime(this.n); // })
  },
  reset: function reset() {
    this.pause();
    this.n = 0;
    this.bar_prograss.style.transform = "translateX(-100%)";
    this.now_time.innerHTML = this.formatTime(this.n);
  },
  formatTime: function formatTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds % 60);
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    return "".concat(min, ":").concat(sec);
  },
  pause: function pause() {
    clearInterval(this.id);
  }
};
var _default = prograss;
exports["default"] = _default;