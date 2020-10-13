"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prograss = void 0;

var _music_api = _interopRequireDefault(require("./music_api"));

var _ajax = _interopRequireDefault(require("./ajax.js"));

var _getMusic = require("./getMusic");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Prograss =
/*#__PURE__*/
function () {
  function Prograss(el) {
    _classCallCheck(this, Prograss);

    this.el = el;
    this.bar_box = document.querySelector('.bar_box');
    this.audio = document.querySelector('audio');
    this.now_time = document.querySelector('.now_time');
    this.progress_bar = document.querySelector('.progress_bar');
    this.api = _music_api["default"];
    this.currentTime = 0;
    this.id = '';
    this.getData = new _ajax["default"]();
  }

  _createClass(Prograss, [{
    key: "run",
    value: function run() {
      this.id = setInterval(this.update.bind(this), 50);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.id);
    }
  }, {
    key: "update",
    value: function update() {
      var allTime = this.audio.duration;
      if (this.currentTime >= allTime) this.reset();
      this.currentTime += 0.05;
      var percent = this.currentTime / allTime * 100 - 100;
      this.el.style.transform = "translateX(".concat(percent, "%)");
      this.now_time.innerHTML = this.formatTime(this.n);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.stop();
      this.currentTime = 0;
      this.id = null;
      this.el.style.transform = "translateX(".concat(0, "%)");
      this.now_time.innerHTML = this.formatTime(this.n);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.reset();
      this.run();
    }
  }, {
    key: "formatTime",
    value: function formatTime() {
      var min = Math.floor(this.currentTime / 60);
      var sec = Math.floor(this.currentTime % 60);
      if (min < 10) min = '0' + min;
      if (sec < 10) sec = '0' + sec;
      return "".concat(min, ":").concat(sec);
    }
  }, {
    key: "render",
    value: function render(songmid) {
      var a = this.api.SongMessage + '12312';
      var getMusic = new _getMusic.GetMusic('0039MnYb0qxYhV');
      var result = getMusic.getMusicData();
      result.then(function (res) {
        console.log(JSON.parse(res).data);
      });
    }
  }]);

  return Prograss;
}();

exports.Prograss = Prograss;