'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBody = exports.statics = exports.cors = exports.favicon = exports.responseTime = exports.etag = exports.fresh = exports.compress = undefined;

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaFresh = require('koa-fresh');

var _koaFresh2 = _interopRequireDefault(_koaFresh);

var _koaEtag = require('koa-etag');

var _koaEtag2 = _interopRequireDefault(_koaEtag);

var _koaResponseTime = require('koa-response-time');

var _koaResponseTime2 = _interopRequireDefault(_koaResponseTime);

var _koaFavicon = require('koa-favicon');

var _koaFavicon2 = _interopRequireDefault(_koaFavicon);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeConvert = function makeConvert(old) {
  return function () {
    var m = old.apply(this, arguments);
    return (0, _koaConvert2.default)(m);
  };
};

var compress = exports.compress = makeConvert(_koaCompress2.default);
var fresh = exports.fresh = makeConvert(_koaFresh2.default);
var etag = exports.etag = makeConvert(_koaEtag2.default);
var responseTime = exports.responseTime = makeConvert(_koaResponseTime2.default);
var favicon = exports.favicon = makeConvert(_koaFavicon2.default);
var cors = exports.cors = makeConvert(_kcors2.default);
var statics = exports.statics = makeConvert(_koaStatic2.default);
var parseBody = exports.parseBody = makeConvert(_koaBody2.default);

