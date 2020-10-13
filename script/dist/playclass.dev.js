"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Play = void 0;

var _lyriceClass = require("./lyriceClass.js");

var _prograssClass = require("./prograssClass.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Play =
/*#__PURE__*/
function () {
  function Play(el) {
    _classCallCheck(this, Play);

    this.el = el;
    this.el.addEventListener('click', this);
    this.bar_box = document.querySelector('.bar_box');
    this.lyric = new _lyriceClass.LyricInit(document.querySelector('.lyrice_move'), this.audio);
    this.audio = this.createAudio();
    this.prograss = new _prograssClass.Prograss(document.querySelector('.bar_prograss'));
    this.go_top = document.querySelector('.go_top');
    this.Event = {
      'bar_box': '.bar_box',
      'go_top': '.go_top',
      'play_view': '.play_view',
      'header_right': '.header_right'
    };
    this.prograss.render();
  }

  _createClass(Play, [{
    key: "createAudio",
    value: function createAudio() {
      var _this = this;

      var audio = document.createElement('audio');
      audio.id = "player-".concat(Math.floor(Math.random() * 100), "-").concat(+new Date());
      audio.autoplay = true; // audio.src = `
      // http://122.226.161.16/amobile.music.tc.qq.com/C4000000NpyS0N53eQ.m4a?guid=2796982635&vkey=897581EF14BBE7548206DD34172383861DCF73621A0F16298E12CB50902820F11B537763DE14FC0C6C2F23A8D6DD2CB6441DE16B7C5C8921&uin=2404&fromtag=66
      // `

      audio.src = 'http://qiniu.dreamsakula.top/C4000000NpyS0N53eQ.mp4';
      audio.addEventListener('ended', function (e) {
        _this.audio.play();

        _this.lyric.restartScroll();

        _this.prograss.restart();
      });
      document.body.appendChild(audio);
      return audio;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var target = event.target;

      switch (true) {
        case target.matches('.bar_play'):
          document.querySelector('.bar_pause').classList.remove('hidden');
          document.querySelector('.bar_play').classList.add('hidden');
          this.onPlay(event);
          break;

        case target.matches('.bar_pause'):
          document.querySelector('.bar_play').classList.remove('hidden');
          document.querySelector('.bar_pause').classList.add('hidden');
          this.onPause(event);
          break;

        case target.matches('.top'):
          this.hide();
          break;
      }
    }
  }, {
    key: "onPlay",
    value: function onPlay(Event) {
      this.audio.play();
      this.lyric.startScroll();
      this.prograss.run();
    }
  }, {
    key: "onPause",
    value: function onPause(event) {
      this.audio.pause();
      this.lyric.stopScroll();
      this.prograss.stop();
    }
  }, {
    key: "show",
    value: function show() {
      this.el.style.transform = 'translateY(0%)';
    }
  }, {
    key: "hidden",
    value: function hidden() {
      this.el.style.transform = 'translateY(-220vw)';
    }
  }]);

  return Play;
}();

exports.Play = Play;