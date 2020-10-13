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
})({"script/slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(el) {
    _classCallCheck(this, Slider);

    this.el = el;
    this.boxLength = this.el.children.length * 100;
    this.el.style.width = "".concat(this.boxLength, "%");
  }

  _createClass(Slider, [{
    key: "run",
    value: function run() {
      var _this = this;

      var povit = this.el.clientWidth / 6;
      var n = 0;
      var id = setInterval(function () {
        n += 1;
        _this.el.style.transition = 'left 1s cubic-bezier(.35, .79, .77, 1.01)';
        _this.el.style.left = "-".concat(povit * n, "px");

        if (n >= 5) {
          setTimeout(function () {
            _this.el.style.transition = '';
            n = 0;
            _this.el.style.left = "-".concat(povit * n, "px");
          }, 1000);
        }
      }, 1500);
    }
  }]);

  return Slider;
}(); // let sliderImg = document.querySelector('.slider_img')
// //容器长度
// let boxLength = sliderImg.children.length * 100
// sliderImg.style.width = `${boxLength}%`
// let povit = sliderImg.clientWidth / 6;
// let n = 0;
// let id = setInterval(() => {
//   n += 1
//   sliderImg.style.transition = 'left 1s cubic-bezier(.35, .79, .77, 1.01)'
//   sliderImg.style.left = `-${povit * n}px`
//   if (n >= 5) {
//     sliderImg.style.transition = ''
//     n = 0
//     sliderImg.style.left = `-${povit * n}px`
//   }
// }, 1000)


exports.default = Slider;
},{}],"script/ablum_list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ablum = /*#__PURE__*/function () {
  function Ablum(item) {
    _classCallCheck(this, Ablum);

    this.item = item;
  }

  _createClass(Ablum, [{
    key: "render",
    value: function render() {
      var song_list_ul = document.querySelector('.song_list_ul');
      var dom = document.createElement('li');
      dom.innerHTML = "<li >\n      <a href=\"\">\n\n      <img\n      class=\"img_url lazy_load\"\n      data-src=\"".concat(this.item.imgurl, "\"\n      alt=\"\"\n    />\n\n        <p>").concat(this.item.dissname, "</p>\n        <img class=\"img_btn\" alt=\"img\" src='http://qiniu.dreamsakula.top/images/20201009083809.png' />\n      </a>\n    </li>");
      song_list_ul.appendChild(dom);
    }
  }]);

  return Ablum;
}();

exports.default = Ablum;
},{}],"script/lazy_load.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function lazyLoad(images) {
  var imgs = [].slice.call(images); //Array.from(images)转成数组
  //使用api IntersectionObserver 支持不好

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (e) {
      e.forEach(function (img) {
        if (img.intersectionRatio > 0) {
          loadImage(img.target, function () {
            observer.unobserve(img.target);
          });
        }
      });
    }, {
      threshold: 0.01
    });
    imgs.forEach(function (img) {
      return observer.observe(img);
    });
  } else {
    var onscroll = throttle(function () {
      if (imgs.length === 0) {
        window.removeEventListener('scroll', function () {});
        return;
      }

      imgs = imgs.filter(function (img) {
        return img.classList.contains('lazy_load');
      });
      imgs.forEach(function (item) {
        if (inViewport(item)) {
          loadImage(item);
        }
      });
    }, 700);
    window.addEventListener('scroll', onscroll);
    window.dispatchEvent(new Event('scroll'));
  }

  function throttle(func, wait) {
    var prev, timer;
    return function fn() {
      var curr = Date.now();
      var diff = curr - prev;

      if (!prev || diff >= wait) {
        func();
        prev = curr;
      } else if (diff < wait) {
        clearTimeout(timer);
        timer = setTimeout(fn, wait - diff);
      }
    };
  }

  function inViewport(img) {
    var _img$getBoundingClien = img.getBoundingClientRect(),
        top = _img$getBoundingClien.top,
        left = _img$getBoundingClien.left,
        right = _img$getBoundingClien.right,
        bottom = _img$getBoundingClien.bottom; //当前图片距离窗口边界的距离


    var vpWidth = document.documentElement.clientWidth;
    var vpHeight = document.documentElement.clientHeight;
    return (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) && (left > 0 && left < vpWidth || right > 0 && right < vpWidth);
  }

  function loadImage(img) {
    var image = new Image();
    image.src = img.dataset.src;

    image.onload = function () {
      img.src = image.src;
      img.classList.remove('lazyload');
    };

    if (typeof callback === 'function') callback();
  }
}

var _default = lazyLoad;
exports.default = _default;
},{}],"script/rank.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rank = /*#__PURE__*/function () {
  function Rank(item) {
    _classCallCheck(this, Rank);

    this.item = item;
  }

  _createClass(Rank, [{
    key: "render",
    value: function render() {
      var rank_view_ul = document.querySelector('.rank_view_ul');
      var dom = document.createElement('li');
      dom.classList.add('lazy_load');
      dom.innerHTML = "<a href=\"#\">\n        <dl>\n          <dt>".concat(this.item.label, "</dt>\n          <dd><span>1. </span>").concat(this.item.song[0].title + '-' + this.item.song[0].singerName, "</dd>\n          <dd><span>2. </span>").concat(this.item.song[1].title + '-' + this.item.song[1].singerName, "</dd>\n          <dd><span>3. </span>").concat(this.item.song[2].title + '-' + this.item.song[2].singerName, "</dd>\n        </dl>\n        <img src=\"").concat(this.item.picUrl, "\" alt=\"\" />\n      </a>");
      rank_view_ul.appendChild(dom);
    }
  }]);

  return Rank;
}();

exports.default = Rank;
},{}],"script/ajax.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ajax = /*#__PURE__*/function () {
  function Ajax() {
    _classCallCheck(this, Ajax);
  }

  _createClass(Ajax, [{
    key: "req",
    value: function req(method, url, options) {
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(method, url);

        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            if (request.status === 200) {
              resolve(request.response);
            } else if (request.status >= 400) {
              reject(resquest);
            }
          }
        };

        request.send();
      });
    }
  }]);

  return Ajax;
}();

exports.default = Ajax;
},{}],"script/init.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slider = _interopRequireDefault(require("./slider.js"));

var _ablum_list = _interopRequireDefault(require("./ablum_list.js"));

var _lazy_load = _interopRequireDefault(require("./lazy_load.js"));

var _rank = _interopRequireDefault(require("./rank.js"));

var _init;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("./ajax"),
    Ajax = _require.default;

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
    var slider = new _slider.default(document.querySelector('.slider_img'));
    slider.run();
  });
}), _defineProperty(_init, "ablumList", function ablumList() {
  var songList = this.getData.req('GET', 'http://localhost:3300/songlist/list?category=165');
  songList.then(function (res) {
    var songList = JSON.parse(res);
    songList.data.list.map(function (item) {
      var ablumList = new _ablum_list.default(item);
      ablumList.render();
      (0, _lazy_load.default)(document.querySelectorAll('.lazy_load')); //懒加载
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
      var rankRender = new _rank.default(item);
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
exports.default = _default;
},{"./slider.js":"script/slider.js","./ablum_list.js":"script/ablum_list.js","./lazy_load.js":"script/lazy_load.js","./rank.js":"script/rank.js","./ajax":"script/ajax.js"}],"script/tab.js":[function(require,module,exports) {
var input = document.querySelector('.search_form_input');
document.addEventListener('click', function (e) {
  //判断点击是否是tab
  if (e.target.dataset.type !== 'tab') return;

  if (e.target.dataset.view !== '.search-view') {
    input.value = '';
    document.querySelector('.search-view-result').classList.add('hidden');
    document.querySelector('.search-view-result-ul').innerHTML = '';
    document.querySelector('.search-view-hot').classList.remove('hidden');
  }

  [].forEach.call(e.target.parentElement.children, function (item) {
    item.classList.remove('active');
  });
  e.target.classList.add('active');
  var content = document.querySelector(e.target.dataset.view);

  if (content) {
    [].forEach.call(content.parentElement.children, function (item) {
      item.style.display = 'none';
    });
  }

  content.style.display = 'block';
});
},{}],"script/search.js":[function(require,module,exports) {
var input = document.querySelector('.search_form_input');
var search_form_button = document.querySelector('.search_form_button');
input.addEventListener('focus', function (e) {
  if (e.target.dataset.type !== 'search') return;
  search_form_button.style.display = 'block';
});
search_form_button.addEventListener('click', function (e) {
  search_form_button.style.display = 'none';
  input.value = "";
  document.querySelector('.search-view-result').classList.add('hidden');
  document.querySelector('.search-view-result-ul').innerHTML = '';
  document.querySelector('.search-view-hot').classList.remove('hidden');
});
},{}],"script/lyriceClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LyricInit = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("./ajax"),
    Ajax = _require.default;

var LyricInit = /*#__PURE__*/function () {
  function LyricInit(el, audio) {
    _classCallCheck(this, LyricInit);

    this.el = el; //歌词渲染的父节点

    this.lyric = '';
    this.text = '';
    this.time = 0;
    this.index = 0;
    this.audio = audio;
    this.intervalId = null;
    this.LINE_HEIGHT = 42;
    this.getData = new Ajax();
    this.formatText();
  }

  _createClass(LyricInit, [{
    key: "formatText",
    value: function formatText(text) {
      var _this = this;

      // let dom = document.createElement('div')
      // dom.innerHTML = text
      // return dom.innerText
      // 
      this.getData.req('GET', 'http://localhost:3300/lyric?songmid=002OEYa71wMnH3').then(function (res) {
        var dom = document.createElement('div');
        dom.innerHTML = JSON.parse(res).data.lyric;
        _this.lyric = dom.innerText.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm);

        if (_this.lyric !== null) {
          _this.render();
        } else {
          console.error('没有歌词');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var html = this.lyric.map(function (item) {
        return "<div class=\"player-lyrics-line\">".concat(item.slice(10), "</div>");
      }).join('');
      this.el.innerHTML = html;
    }
  }, {
    key: "getSec",
    value: function getSec(lyric) {
      //单句歌词的时间
      return lyric.replace(/^\[(\d{2}):(\d{2}).*/, function (match, p1, p2) {
        return 60 * +p1 + +p2;
      });
    }
  }, {
    key: "updateScroll",
    value: function updateScroll() {
      this.time = Math.round(this.audio ? this.audio.currentTime : this.time + 1);
      if (this.index === this.lyric.length - 1) return;

      for (var i = this.index; i < this.lyric.length; i++) {
        var sec = this.getSec(this.lyric[i]);

        if (this.time === +sec && (!this.lyric[i + 1] || this.time < this.getSec(this.lyric[i + 1]))) {
          this.el.children[this.index].classList.remove('active');
          this.el.children[i].classList.add('active');
          this.index = i;
          break;
        }

        if (this.index > 2) {
          var y = -(this.index - 2) * this.LINE_HEIGHT;
          this.el.style.transform = "translateY(".concat(y, "px)");
        }
      }
    }
  }, {
    key: "startScroll",
    value: function startScroll() {
      this.stopScroll();
      setInterval(this.updateScroll.bind(this), 1000);
    }
  }, {
    key: "stopScroll",
    value: function stopScroll() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "restartScroll",
    value: function restartScroll() {
      this.resetScroll();
      this.startScroll();
    }
  }, {
    key: "resetScroll",
    value: function resetScroll(text) {
      this.stopScroll();
      this.time = 0;
      this.index = 0;
      this.el.style.transform = "translateY(0px)";
      var active = document.querySelector('.active');

      if (active) {
        active.classList.remove('active');
      }

      if (text) {
        this.text = this.formatText(text) || '';
        this.lyric = this.text.match(/^\[\d{2}:\d{2}.\d{2}\](.+)$/gm) || [];
        if (this.lyric.length) this.render();
      }

      if (this.lyric.length) {
        this.el.children[this.index].classList.add('active');
      }
    }
  }]);

  return LyricInit;
}();

exports.LyricInit = LyricInit;
},{"./ajax":"script/ajax.js"}],"script/music_api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var BASE_URL = 'http://localhost:3300';
var api = {
  SongMessage: "".concat(BASE_URL, "/song?songmid="),
  Search: "".concat(BASE_URL, "/search?")
};
var _default = api;
exports.default = _default;
},{}],"script/getMusic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMusic = void 0;

var _music_api = _interopRequireDefault(require("./music_api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("./ajax"),
    Ajax = _require.default;

var GetMusic = /*#__PURE__*/function () {
  function GetMusic(songmid) {
    _classCallCheck(this, GetMusic);

    this.songmid = songmid;
    this.musicData;
    this.ajax = new Ajax();
  }

  _createClass(GetMusic, [{
    key: "getMusicData",
    value: function getMusicData() {
      return this.ajax.req('GET', "".concat(_music_api.default.SongMessage).concat(this.songmid));
    }
  }, {
    key: "getSongmid",
    value: function getSongmid() {}
  }]);

  return GetMusic;
}();

exports.GetMusic = GetMusic;
},{"./ajax":"script/ajax.js","./music_api":"script/music_api.js"}],"script/prograssClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prograss = void 0;

var _music_api = _interopRequireDefault(require("./music_api"));

var _ajax = _interopRequireDefault(require("./ajax.js"));

var _getMusic = require("./getMusic");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Prograss = /*#__PURE__*/function () {
  function Prograss(el) {
    _classCallCheck(this, Prograss);

    this.el = el;
    this.bar_box = document.querySelector('.bar_box');
    this.audio = document.querySelector('audio');
    this.now_time = document.querySelector('.now_time');
    this.progress_bar = document.querySelector('.progress_bar');
    this.api = _music_api.default;
    this.currentTime = 0;
    this.id = '';
    this.getData = new _ajax.default();
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
},{"./music_api":"script/music_api.js","./ajax.js":"script/ajax.js","./getMusic":"script/getMusic.js"}],"script/playClass.js":[function(require,module,exports) {
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

var Play = /*#__PURE__*/function () {
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
},{"./lyriceClass.js":"script/lyriceClass.js","./prograssClass.js":"script/prograssClass.js"}],"script/app.js":[function(require,module,exports) {
"use strict";

var _init = _interopRequireDefault(require("./init.js"));

require("./tab.js");

require("./search.js");

var _playClass = require("./playClass.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  _init.default.slider();

  _init.default.ablumList();

  _init.default.rankList();

  _init.default.hotWord();

  _init.default.search();

  _init.default.scrollLoad();
};

render();
},{"./init.js":"script/init.js","./tab.js":"script/tab.js","./search.js":"script/search.js","./playClass.js":"script/playClass.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51163" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/app.js"], null)
//# sourceMappingURL=/app.25d4b319.js.map