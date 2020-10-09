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
      dom.innerHTML = "<a href=\"#\">\n        <dl>\n          <dt>".concat(this.item.label, "</dt>\n          <dd><span>1. </span>").concat(this.item.song[0].title + '-' + this.item.song[0].singerName, "</dd>\n          <dd><span>2. </span>$").concat(this.item.song[1].title + '-' + this.item.song[1].singerName, "</dd>\n          <dd><span>3. </span>").concat(this.item.song[2].title + '-' + this.item.song[2].singerName, "</dd>\n        </dl>\n        <img src=\"").concat(this.item.picUrl, "\" alt=\"\" />\n      </a>");
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
}(); // const request = new XMLHttpRequest()
// request.open(method, url)
// request.onreadystatechange = (e) => {
//   if (request.readyState === 4) {
//     if (request.status === 200) {
//       // console.log(JSON.parse(request.response));
//       return JSON.parse(request.response)
//     } else {
//     }
//   }
// }
// request.send()
// }


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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("./ajax"),
    Ajax = _require.default;

var init = {
  getData: new Ajax(),
  page: 1,
  slider: function slider() {
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
  },
  ablumList: function ablumList() {
    var songList = this.getData.req('GET', 'http://localhost:3300/songlist/list?category=165');
    songList.then(function (res) {
      var songList = JSON.parse(res);
      songList.data.list.map(function (item) {
        var ablumList = new _ablum_list.default(item);
        ablumList.render();
        (0, _lazy_load.default)(document.querySelectorAll('.lazy_load')); //懒加载
      });
    });
  },
  rankList: function rankList() {
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
  },
  hotWord: function hotWord() {
    var hotWord = this.getData.req('GET', 'http://localhost:3300/search/hot');
    hotWord.then(function (res) {
      console.log(JSON.parse(res));
      JSON.parse(res).data.map(function (item) {
        var search_view_hot_ul = document.querySelector('.search-view-hot-ul');
        var dom = document.createElement('li');
        dom.innerHTML = "\n      <li>".concat(item.k, "</li>\n      ");
        search_view_hot_ul.appendChild(dom);
      });
    });
  },
  search: function search(page) {
    console.log('run');

    var _this = this;

    var keyContainer = document.querySelector('.search_form_input');
    var search_form = document.querySelector('.search_form');
    var input = document.querySelector('.search_form_input');
    var search_view_hot = document.querySelector('.search-view-hot');
    var search_result = document.querySelector('.search-view-result');
    var search_view_result_ul = document.querySelector('.search-view-result-ul');
    search_form.addEventListener('submit', function (e) {
      e.preventDefault(); //是否是歌手

      _this.getData.req('GET', "http://localhost:3300/search?key=".concat(input.value, "&t=9")).then(function (singer) {
        if (JSON.parse(singer).data.list !== []) {
          var singerName = JSON.parse(singer).data.list[0].singerName;
          var songNum = JSON.parse(singer).data.list[0].songNum;
          var singerPic = JSON.parse(singer).data.list[0].singerPic;
          var albumNum = JSON.parse(singer).data.list[0].albumNum;

          var search = _this.getData.req('GET', "http://localhost:3300/search?key=".concat(input.value, "&t=0&pageSize=20&pageNo=").concat(page || _this.page));

          search.then(function (res) {
            console.log("ryn");
            var list = JSON.parse(res).data.list;
            console.log(list);
            var dom_singer = document.createElement('a');
            dom_singer.classList.add('result');
            dom_singer.innerHTML = "<img src=\"".concat(singerPic, "\" alt=\"\" />\n            <dl>\n              <dt>\u6B4C\u624B: ").concat(singerName, "</dt>\n              <dd>\u6B4C\u66F2:").concat(songNum, " \u4E13\u8F91:").concat(albumNum, "</dd>\n            </dl>\n            ");
            search_result.insertBefore(dom_singer, search_view_result_ul);
            var dom_singList = document.createElement('li');
            list.map(function (list_item) {
              _this.renderList(list_item);
            });
            search_view_hot.classList.add('hidden');
            search_result.classList.remove('hidden');
          });
        } else {}
      });
    });
  },
  renderList: function renderList(item) {
    var search_view_result_ul = document.querySelector('.search-view-result-ul');
    var dom_singList = document.createElement('li');
    dom_singList.innerHTML = "\n      <a href=\"".concat(item.albummid, "\">\n        <dl>\n          <dt>").concat(item.songname, "</dt>\n          <dd>").concat(item.singer[0].name, "</dd>\n        </dl>\n      </a>\n    ");
    search_view_result_ul.appendChild(dom_singList);
  },
  //滚动加载
  scrollLoad: function scrollLoad() {
    var _this = this;

    var page = 1;
    var keyContainer = document.querySelector('.search_form_input');
    var search_form = document.querySelector('.search_form');
    var input = document.querySelector('.search_form_input');
    var search_view_hot = document.querySelector('.search-view-hot');
    var search_result = document.querySelector('.search-view-result');
    var search_view_result_ul = document.querySelector('.search-view-result-ul');
    window.addEventListener('scroll', function (e) {
      if (pageYOffset + document.documentElement.clientHeight > document.body.scrollHeight - 50) {
        page += 1;

        _this.getData.req('GET', "http://localhost:3300/search?key=".concat(input.value, "&t=9")).then(function (singer) {
          if (JSON.parse(singer).data.list !== []) {
            var singerName = JSON.parse(singer).data.list[0].singerName;
            var songNum = JSON.parse(singer).data.list[0].songNum;
            var singerPic = JSON.parse(singer).data.list[0].singerPic;
            var albumNum = JSON.parse(singer).data.list[0].albumNum;

            var search = _this.getData.req('GET', "http://localhost:3300/search?key=".concat(input.value, "&t=0&pageSize=20&pageNo=").concat(page || _this.page));

            search.then(function (res) {
              console.log("ryn");
              var list = JSON.parse(res).data.list;
              console.log(list);
              var dom_singer = document.createElement('a');
              dom_singer.classList.add('result');
              dom_singer.innerHTML = "<img src=\"".concat(singerPic, "\" alt=\"\" />\n              <dl>\n                <dt>\u6B4C\u624B: ").concat(singerName, "</dt>\n                <dd>\u6B4C\u66F2:").concat(songNum, " \u4E13\u8F91:").concat(albumNum, "</dd>\n              </dl>\n              ");
              search_result.insertBefore(dom_singer, search_view_result_ul);
              var dom_singList = document.createElement('li');
              list.map(function (list_item) {
                _this.renderList(list_item);
              });
              search_view_hot.classList.add('hidden');
              search_result.classList.remove('hidden');
            });
          } else {}
        });
      }
    });
  }
};
var _default = init;
exports.default = _default;
},{"./slider.js":"script/slider.js","./ablum_list.js":"script/ablum_list.js","./lazy_load.js":"script/lazy_load.js","./rank.js":"script/rank.js","./ajax":"script/ajax.js"}],"script/tab.js":[function(require,module,exports) {
document.addEventListener('click', function (e) {
  //判断点击是否是tab
  if (e.target.dataset.type !== 'tab') return;
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
hot();
input.addEventListener('focus', function (e) {
  console.log(e.target.dataset.type);
  if (e.target.dataset.type !== 'search') return;
  var content = document.querySelector(e.target.dataset.view);

  if (content) {
    content.style.display = 'block';
  }
});
input.addEventListener('blur', function (e) {
  input.value = "";
  var content = document.querySelector('.search_view');

  if (content) {
    content.style.display = 'none';
  }
}); //热门搜索

function hot(item) {
  var search_view_hot_ul = document.querySelector('.search-view-hot-ul');
  var dom = document.createElement('li');
  dom.innerHTML = "\n  <li>".concat(item, "</li>\n  ");
  search_view_hot_ul.appendChild(dom);
}
},{}],"script/app.js":[function(require,module,exports) {
"use strict";

var _init = _interopRequireDefault(require("./init.js"));

require("./tab.js");

require("./search.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render() {
  _init.default.slider();

  _init.default.ablumList();

  _init.default.rankList();

  _init.default.hotWord();

  _init.default.search();

  _init.default.scrollLoad(); // ablumList() //个单加载

};

render();
},{"./init.js":"script/init.js","./tab.js":"script/tab.js","./search.js":"script/search.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62106" + '/');

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