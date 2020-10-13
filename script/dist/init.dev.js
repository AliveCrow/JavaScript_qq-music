"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slider = _interopRequireDefault(require("./slider.js"));

var _ablum_list = _interopRequireDefault(require("./ablum_list.js"));

var _lazy_load = _interopRequireDefault(require("./lazy_load.js"));

var _rank = _interopRequireDefault(require("./rank.js"));

var _init;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("./ajax"),
    Ajax = _require["default"];

var init = (_init = {
  getData: new Ajax(),
  page: 1,
  singer: {
    'singerName': '',
    'songNum': '',
    'singerPic': '',
    'albumNum': ''
  }
}, _defineProperty(_init, "page", 1), _defineProperty(_init, "keyContainer", document.querySelector('.search_form_input')), _defineProperty(_init, "search_form", document.querySelector('.search_form')), _defineProperty(_init, "input", document.querySelector('.search_form_input')), _defineProperty(_init, "search_view_hot", document.querySelector('.search-view-hot')), _defineProperty(_init, "search_result", document.querySelector('.search-view-result')), _defineProperty(_init, "search_view_result_ul", document.querySelector('.search-view-result-ul')), _defineProperty(_init, "slider", function slider() {
  var banner = this.getData.req('GET', 'http://localhost:3300/recommend/banner'); //加载轮播图

  banner.then(function (res) {
    var song = JSON.parse(res);
    var sliderImg = document.querySelector('.slider').firstElementChild;
    song.data.push(song.data[0]);
    sliderImg.innerHTML = song.data.map(function (item) {
      return "<a href=\"".concat(item.h5Url, "\">\n            <img src=\"").concat(item.picUrl, "\" alt=\"\" />\n          </a>");
    }).join("");
    var slider = new _slider["default"](document.querySelector('.slider_img'));
    slider.run();
  });
}), _defineProperty(_init, "ablumList", function ablumList() {
  var songList = this.getData.req('GET', 'http://localhost:3300/songlist/list?category=165');
  songList.then(function (res) {
    var songList = JSON.parse(res);
    songList.data.list.map(function (item) {
      var ablumList = new _ablum_list["default"](item);
      ablumList.render();
      (0, _lazy_load["default"])(document.querySelectorAll('.lazy_load')); //懒加载
    });
  });
}), _defineProperty(_init, "rankList", function rankList() {
  var rankList = this.getData.req('GET', 'http://localhost:3300/top/category?showDetail=1');
  rankList.then(function (res) {
    var newArray = [];
    var resData = JSON.parse(res);
    [].slice.call(resData.data);
    resData.data.forEach(function (item) {
      item.list.forEach(function (listItem) {
        newArray.push(listItem);
      });
    });
    newArray.map(function (item) {
      var rankRender = new _rank["default"](item);
      rankRender.render();
    });
  });
}), _defineProperty(_init, "hotWord", function hotWord() {
  var hotWord = this.getData.req('GET', 'http://localhost:3300/search/hot');
  hotWord.then(function (res) {
    JSON.parse(res).data.map(function (item) {
      var search_view_hot_ul = document.querySelector('.search-view-hot-ul');
      var dom = document.createElement('li');
      dom.innerHTML = "\n      <li>".concat(item.k, "</li>\n      ");
      search_view_hot_ul.appendChild(dom);
    });
  });
}), _defineProperty(_init, "search", function search() {
  var _this = this;

  window.addEventListener('keyup', function (e) {
    if (e.code !== 'Enter') return; //是否是歌手

    var search = _this.getData.req('GET', "http://localhost:3300/search?key=".concat(_this.input.value, "&t=0&pageSize=20&pageNo=").concat(_this.page));

    search.then(function (res) {
      var list = JSON.parse(res).data.list;
      var dom_singList = document.createElement('li');
      list.map(function (list_item) {
        _this.renderList(list_item);
      });

      _this.search_view_hot.classList.add('hidden');

      _this.search_result.classList.remove('hidden');
    });
  });
}), _defineProperty(_init, "renderList", function renderList(item) {
  var search_view_result_ul = document.querySelector('.search-view-result-ul');
  var dom_singList = document.createElement('li');
  dom_singList.innerHTML = "\n      <a href=\"".concat(item.albummid, "\">\n        <dl>\n          <dt>").concat(item.songname, "</dt>\n          <dd>").concat(item.singer[0].name, "</dd>\n        </dl>\n      </a>\n    ");
  search_view_result_ul.appendChild(dom_singList);
}), _defineProperty(_init, "scrollLoad", function scrollLoad() {
  var _this = this;

  window.addEventListener('scroll', function (e) {
    if (pageYOffset + document.documentElement.clientHeight > document.body.scrollHeight - 50) {
      _this.page += 1;

      var search = _this.getData.req('GET', "http://localhost:3300/search?key=".concat(_this.input.value, "&t=0&pageSize=20&pageNo=").concat(_this.page));

      search.then(function (res) {
        var list = JSON.parse(res).data.list;
        var dom_singList = document.createElement('li');
        list.map(function (list_item) {
          _this.renderList(list_item);
        });

        _this.search_view_hot.classList.add('hidden');

        _this.search_result.classList.remove('hidden');
      });
    }
  });
}), _init);
var _default = init;
exports["default"] = _default;