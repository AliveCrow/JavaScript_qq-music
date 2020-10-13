"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BASE_URL = 'http://localhost:3300';
var api = {
  SongMessage: "".concat(BASE_URL, "/song?songmid="),
  Search: "".concat(BASE_URL, "/search?")
};
var _default = api;
exports["default"] = _default;