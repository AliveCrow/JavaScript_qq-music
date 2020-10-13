"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMusic = void 0;

var _music_api = _interopRequireDefault(require("./music_api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("./ajax"),
    Ajax = _require["default"];

var GetMusic =
/*#__PURE__*/
function () {
  function GetMusic(songmid) {
    _classCallCheck(this, GetMusic);

    this.songmid = songmid;
    this.musicData;
    this.ajax = new Ajax();
  }

  _createClass(GetMusic, [{
    key: "getMusicData",
    value: function getMusicData() {
      return this.ajax.req('GET', "".concat(_music_api["default"].SongMessage).concat(this.songmid));
    }
  }, {
    key: "getSongmid",
    value: function getSongmid() {}
  }]);

  return GetMusic;
}();

exports.GetMusic = GetMusic;