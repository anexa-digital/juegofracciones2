require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"~/app/consulta/consulta.module": [
		"./app/consulta/consulta.module.ts",
		3
	],
	"~/app/conteo/conteo.module": [
		"./app/conteo/conteo.module.ts",
		"vendor",
		0
	],
	"~/app/home/home.module": [
		"./app/home/home.module.ts",
		4
	],
	"~/app/salida/salida.module": [
		"./app/salida/salida.module.ts",
		"vendor",
		2
	],
	"~/app/transferencia/transferencia.module": [
		"./app/transferencia/transferencia.module.ts",
		"vendor",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-danger {\n  color: #ED473F; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #3A53FF;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #ED473F;\n  color: #fff; }\n\n.action-bar {\n  background-color: #3A53FF;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #3A53FF;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #3A53FF;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #6d80ff; }\n\n.btn-primary {\n  background-color: #3A53FF;\n  border-color: #3A53FF;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #0726ff;\n    border-color: #0726ff; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #3A53FF;\n  color: #3A53FF; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #6d80ff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #3A53FF; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #022734; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #022734; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #022734;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #3A53FF;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #3A53FF; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #FFFFFF; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #3A53FF;\n    background-color: #F8F8F8; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #3A53FF; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #3A53FF; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.action-bar .action-bar-title {\n  font-weight: 500;\n  font-size: 20; }\n\n.action-bar .action-item {\n  android-elevation: 0;\n  background-color: rgba(255, 0, 0, 0);\n  border-color: rgba(255, 0, 0, 0);\n  border-width: 1; }\n\n.btn {\n  font-family: 'Roboto Medium';\n  font-size: 14; }\n\n.btn-primary {\n  border-color: rgba(255, 0, 0, 0); }\n\n.btn-outline {\n  android-elevation: 0;\n  background-color: rgba(255, 0, 0, 0);\n  border-width: 1;\n  border-color: #3A53FF;\n  height: 36;\n  padding: 0; }\n\n.btn-rounded-sm {\n  border-radius: 2;\n  height: 36;\n  padding: 0; }\n\n.btn-rounded-lg {\n  border-radius: 40;\n  height: 36;\n  padding: 0; }\n\n.form {\n  font-family: 'Roboto Regular'; }\n  .form .input {\n    font-size: 16; }\n\n.h1 {\n  font-size: 34; }\n\n.h2 {\n  font-size: 24; }\n\n.h3 {\n  font-size: 16; }\n\n.h5 {\n  font-size: 11;\n  font-weight: bold; }\n\n.body2 {\n  font-size: 14;\n  font-weight: 500; }\n\n.sidedrawer-list-item-icon {\n  margin: 0 16 0 16;\n  padding-top: 14; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #022734; }\n\n.sidedrawer-list-item {\n  font-family: 'Roboto Medium';\n  font-size: 14; }\n\n.slider {\n  color: #3A53FF;\n  margin: 20 16; }\n\n.switch {\n  margin: 14 16;\n  color: #e0e0e0;\n  background-color: #e0e0e0; }\n  .switch[checked=true] {\n    color: #3A53FF; }\n\n.fa {\n  font-family: \"FontAwesome\"; }\n\n.page-content .page-placeholder {\n  color: #D7D7D7;\n  font-size: 20;\n  vertical-align: center;\n  horizontal-align: center; }\n\n.page-content .page-icon {\n  font-size: 72;\n  vertical-align: top;\n  horizontal-align: center;\n  color: #D7D7D7;\n  margin-top: 20%; }\n\nActionBar .action-bar-title {\n  horizontal-align: center; }\n\n.sidedrawer.sidedrawer-left {\n  background-color: #3A53FF; }\n  .sidedrawer.sidedrawer-left .sidedrawer-header-image {\n    color: #F8F8F8;\n    height: 60;\n    width: 60;\n    font-size: 60;\n    padding: 0;\n    margin-bottom: 5;\n    margin-top: 20; }\n  .sidedrawer.sidedrawer-left .footnote {\n    color: rgba(255, 255, 255, 0.5); }\n\n.sidedrawer .sidedrawer-header {\n  background-color: #3A53FF; }\n  .sidedrawer .sidedrawer-header .sidedrawer-header-brand {\n    color: #fff; }\n\n.sidedrawer .sidedrawer-content {\n  background-color: #FFFFFF; }\n  .sidedrawer .sidedrawer-content .sidedrawer-list-item {\n    padding-left: 15; }\n    .sidedrawer .sidedrawer-content .sidedrawer-list-item Label {\n      vertical-align: center;\n      color: #022734; }\n    .sidedrawer .sidedrawer-content .sidedrawer-list-item .fa {\n      width: 20;\n      margin-right: 10; }\n    .sidedrawer .sidedrawer-content .sidedrawer-list-item.selected {\n      background-color: #F8F8F8; }\n      .sidedrawer .sidedrawer-content .sidedrawer-list-item.selected Label {\n        color: #3A53FF; }\n\nActionBar .fa {\n  padding: 40px; }\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/AppSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");

var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings._API_ENDPOINT_GATEWAY = 'https://invapp.mhfly.com/';
    AppSettings._ENDPOINT_QUERY = AppSettings._API_ENDPOINT_GATEWAY + '/web/dataset/search_read';
    AppSettings._ENDPOINT_CREATE_INVENTORY = AppSettings._API_ENDPOINT_GATEWAY +
        '/web/dataset/call_kw/stock.inventory/create';
    AppSettings._ENDPOINT_WRITE_INVENTORY = AppSettings._API_ENDPOINT_GATEWAY +
        '/web/dataset/call_kw/stock.inventory/write';
    AppSettings._ENDPOINT_START_TASK_INVENTORY = AppSettings._API_ENDPOINT_GATEWAY + '/web/dataset/call_button';
    AppSettings._ENDPOINT_LOGIN = AppSettings._API_ENDPOINT_GATEWAY + '/web/session/authenticate';
    AppSettings._ENDPOINT_STAGE = AppSettings._API_ENDPOINT_GATEWAY + '/api/crm.stage';
    AppSettings._ENDPOINT_COUNTRY = AppSettings._API_ENDPOINT_GATEWAY +
        "/api/res.country/search?fields=['id','name','code']";
    AppSettings._ENDPOINT_TAG = AppSettings._API_ENDPOINT_GATEWAY + '/api/crm.lead.tag/search';
    AppSettings._ENDPOINT_LEAD_BY_STAGE = AppSettings._API_ENDPOINT_GATEWAY +
        "/api/crm.lead/search?domain=[('stage_id','in',[_ID_])]";
    AppSettings._ENDPOINT_LEAD_CREATE = AppSettings._API_ENDPOINT_GATEWAY + '/api/crm.lead/create';
    AppSettings._ENDPOINT_LEAD_UPDATE = AppSettings._API_ENDPOINT_GATEWAY + '/api/crm.lead/';
    AppSettings._ENDPOINT_NOTE_SEARCH = AppSettings._API_ENDPOINT_GATEWAY + '/api/mail.message/search';
    AppSettings._ENDPOINT_NOTE_SAVE = AppSettings._API_ENDPOINT_GATEWAY +
        '/web/dataset/call_kw/crm.lead/message_post';
    AppSettings._ENDPOINT_CREATE_PICKING = AppSettings._API_ENDPOINT_GATEWAY +
        '/web/dataset/call_kw/stock.picking/create';
    AppSettings._ENDPOINT_WRITE_PICKING = AppSettings._API_ENDPOINT_GATEWAY +
        '/web/dataset/call_kw/stock.picking/write';
    AppSettings.HEADERS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        Accept: 'application/json',
        'Content-Type': 'application/json'
    });
    AppSettings.HEADERS_API_KEY = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        api_key: 'GFHW4YGDHWQ3QMDT44DSPPZJWGQJBH45'
    });
    return AppSettings;
}());



/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/login/login.component.ts");



var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', loadChildren: '~/app/home/home.module#HomeModule' },
    { path: 'conteo', loadChildren: '~/app/conteo/conteo.module#ConteoModule' },
    { path: 'consulta', loadChildren: '~/app/consulta/consulta.module#ConsultaModule' },
    { path: 'transferencia', loadChildren: '~/app/transferencia/transferencia.module#TransferenciaModule' },
    { path: 'salida', loadChildren: '~/app/salida/salida.module#SalidaModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nRadSideDrawer is a UI component part of the Progress NativeScript UI set of components.\nLearn more about the RadSideDrawer UI component and how it can be customized in this documentation article:\nhttps://docs.nativescript.org/angular/ui/professional-ui-components/ng-SideDrawer/getting-started\n-->\n<RadSideDrawer [drawerTransition]=\"sideDrawerTransition\">\n  <GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\n    <StackLayout row=\"0\" class=\"sidedrawer-header\">\n      <Label class=\"sidedrawer-header-image fa\" text=\"&#xf2bd;\"></Label>\n      <Label\n        class=\"sidedrawer-header-brand\"\n        text=\"{{\n          sessionService.connectedUser\n            ? sessionService.connectedUser.partner_display_name\n            : ''\n        }}\"\n      ></Label>\n      <Label\n        class=\"footnote\"\n        text=\"{{\n          sessionService.connectedUser\n            ? sessionService.connectedUser.username\n            : ''\n        }}\"\n      ></Label>\n    </StackLayout>\n\n    <ScrollView row=\"1\" class=\"sidedrawer-content\">\n      <StackLayout>\n        <GridLayout\n          columns=\"auto, *\"\n          class=\"sidedrawer-list-item\"\n          [class.selected]=\"isComponentSelected('/home')\"\n          (tap)=\"onNavItemTap('/home')\"\n        >\n          <Label col=\"0\" text=\"&#xf015;\" class=\"fa\"></Label>\n          <Label col=\"1\" text=\"Inicio\" class=\"p-r-10\"></Label>\n        </GridLayout>\n\n        <GridLayout\n          columns=\"auto, *\"\n          class=\"sidedrawer-list-item\"\n          [class.selected]=\"isComponentSelected('/stage')\"\n          (tap)=\"onNavItemTap('/conteo')\"\n        >\n          <Label col=\"0\" text=\"&#xf1ec;\" class=\"fa\"></Label>\n          <Label col=\"1\" text=\"Conteo\" class=\"p-r-10\"></Label>\n        </GridLayout>\n\n        <GridLayout\n          columns=\"auto, *\"\n          class=\"sidedrawer-list-item\"\n          [class.selected]=\"isComponentSelected('/stage')\"\n          (tap)=\"onNavItemTap('/transferencia')\"\n        >\n          <Label col=\"0\" text=\"&#xf07e;\" class=\"fa\"></Label>\n          <Label\n            col=\"1\"\n            text=\"Transferencia por Demanda\"\n            class=\"p-r-10\"\n          ></Label>\n        </GridLayout>\n\n        <GridLayout\n          columns=\"auto, *\"\n          class=\"sidedrawer-list-item\"\n          [class.selected]=\"isComponentSelected('/stage')\"\n          (tap)=\"onNavItemTap('/salida')\"\n        >\n          <Label col=\"0\" text=\"&#xf061;\" class=\"fa\"></Label>\n          <Label col=\"1\" text=\"Salida\" class=\"p-r-10\"></Label>\n        </GridLayout>\n\n        <GridLayout\n          columns=\"auto, *\"\n          class=\"sidedrawer-list-item\"\n          [class.selected]=\"isComponentSelected('/stage')\"\n          (tap)=\"onNavItemTap('/consulta')\"\n        >\n          <Label col=\"0\" text=\"&#xf002;\" class=\"fa\"></Label>\n          <Label col=\"1\" text=\"Consulta\" class=\"p-r-10\"></Label>\n        </GridLayout>\n\n        <StackLayout class=\"hr-light\"></StackLayout>\n\n        <GridLayout\n          columns=\"auto, *\"\n          class=\"sidedrawer-list-item\"\n          (tap)=\"logout()\"\n        >\n          <Label col=\"0\" text=\"&#xf00d;\" class=\"fa\"></Label>\n          <Label col=\"1\" text=\"Salir\" class=\"p-r-10\"></Label>\n        </GridLayout>\n      </StackLayout>\n    </ScrollView>\n  </GridLayout>\n\n  <page-router-outlet\n    tkMainContent\n    class=\"page page-content\"\n  ></page-router-outlet>\n</RadSideDrawer>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js");
/* harmony import */ var nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/shared/services/session.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions, sessionService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.sessionService = sessionService;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = '/home';
        this._sideDrawerTransition = new nativescript_ui_sidedrawer__WEBPACK_IMPORTED_MODULE_3__["SlideInOnTopTransition"]();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (event) { return (_this._activatedUrl = event.urlAfterRedirects); });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade'
            }
        });
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__["getRootView"]();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.logout = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__["getRootView"]();
        sideDrawer.closeDrawer();
        this.routerExtensions.navigate([''], {
            clearHistory: true
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-app',
            template: __importDefault(__webpack_require__("./app/app.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/shared/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/shared/services/conteo.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUISideDrawerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
            providers: [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_services_conteo_service__WEBPACK_IMPORTED_MODULE_11__["ConteoService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".page {\n  align-items: center;\n  flex-direction: column;\n}\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.logo {\n  margin-bottom: 12;\n  height: 90;\n  font-weight: bold;\n}\n.header {\n  horizontal-align: center;\n  font-size: 18;\n  font-weight: 600;\n  margin-bottom: 70;\n  text-align: center;\n  color: #d51a1a;\n}\n\n.input-field {\n  margin-bottom: 25;\n}\n.input {\n  font-size: 18;\n  placeholder-color: #a8a8a8;\n}\n.input:disabled {\n  background-color: white;\n  opacity: 0.5;\n}\n\n.btn-primary {\n  margin: 30 5 15 5;\n}\n\n.login-label {\n  horizontal-align: center;\n  color: #a8a8a8;\n  font-size: 16;\n}\n.sign-up-label {\n  margin-bottom: 20;\n}\n.bold {\n  color: #000000;\n}\n"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout class=\"page\">\n    <StackLayout class=\"form\">\n        <Image class=\"logo\" src=\"~/app/images/logo.png\"></Image>\n        <Label class=\"header\" text=\"Inventario de Materias Primas\"></Label>\n\n        <PreviousNextView>\n            <GridLayout rows=\"auto, auto, auto\">\n                <StackLayout row=\"0\" class=\"input-field\">\n                    <TextField class=\"input\" hint=\"Correo Electrónico\" [isEnabled]=\"!processing\"\n                        keyboardType=\"email\" autocorrect=\"false\"\n                        autocapitalizationType=\"none\" [(ngModel)]=\"user.username\"\n                        returnKeyType=\"next\" (returnPress)=\"focusPassword()\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <StackLayout row=\"1\" class=\"input-field\">\n                    <TextField #password class=\"input\" [isEnabled]=\"!processing\"\n                        hint=\"Contraseña\" secure=\"true\" [(ngModel)]=\"user.password\"\n                        [returnKeyType]=\"'done'\"\n                        (returnPress)=\"login()\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <ActivityIndicator rowSpan=\"3\" [busy]=\"processing\"></ActivityIndicator>\n            </GridLayout>\n        </PreviousNextView>\n\n        <Button [text]=\"'Conectarse'\" [isEnabled]=\"!processing\"\n            (tap)=\"login()\" class=\"btn btn-primary m-t-20\"></Button>\n    </StackLayout>\n\n    <Label>\n        <FormattedString>\n          <Span text=\"Versión \"></Span>\n          <Span text=\"1.0.5\" class=\"bold\"></Span>\n        </FormattedString>\n      </Label>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/model/user.model.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/shared/services/session.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, userService, routerExtensions, sessionService) {
        this.page = page;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.sessionService = sessionService;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new _shared_model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.username = 'admin';
        this.user.password = 'Napellus!9754';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.user.username || !this.user.password) {
            this.alert('Usuario o contraseñas obligatorias!');
            this.processing = false;
            return;
        }
        this.processing = true;
        var dbconn = 'mhapp001_test_20210214a';
        this.userService.login(this.user, dbconn).subscribe(function (data) {
            if (data.error) {
                _this.alert('Usuario o contraseñas inválidas!');
                _this.processing = false;
            }
            else {
                _this.sessionService.connectedUser = data.result;
                _this.sessionService.connectedUser.username = _this.sessionService.connectedUser.username + '@' + dbconn;
                _this.routerExtensions.navigate(['/home'], {
                    clearHistory: true
                });
            }
        });
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.alert = function (message) {
        return Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["alert"])({
            title: 'CRM Móvil',
            okButtonText: 'OK',
            message: message
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] },
        { type: _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('password', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__("./app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/shared/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./app/shared/services/conteo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoService", function() { return ConteoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AppSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/AppSettings.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/services/general.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");





var ConteoService = /** @class */ (function (_super) {
    __extends(ConteoService, _super);
    function ConteoService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        return _this;
    }
    ConteoService.prototype.getProcesos = function () {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.inventory.process',
                domain: [],
                fields: ['name', 'stock_warehouse_id', 'status'],
                limit: 80,
                sort: '',
                context: {
                    lang: 'en_US'
                }
            }
        };
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.getTareas = function (inventoryProcessId, locationId) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.inventory',
                domain: [
                    ['inventory_process_id', '=', inventoryProcessId],
                    ['location_id', '=', locationId],
                    ['state', '=', 'confirm']
                ],
                fields: [
                    'inventory_process_id',
                    'name',
                    'date',
                    'state',
                    'location_id'
                ],
                limit: 80,
                sort: '',
                context: {
                    lang: 'en_US'
                }
            }
        };
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.getStockLocation = function (id) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.location',
                domain: [['id', '=', id]],
                fields: ['id', 'name', 'display_name', 'company_id', 'location_id'],
                limit: 80,
                sort: '',
                context: {
                    lang: 'en_US'
                }
            }
        };
        //console.log(AppSettings._ENDPOINT_QUERY);
        //console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.getParentsStockLocation = function (ids) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.location',
                domain: [['id', 'in', ids]],
                fields: ['id', 'location_id'],
                sort: '',
                context: {
                    lang: 'en_US'
                }
            }
        };
        //console.log(AppSettings._ENDPOINT_QUERY);
        //console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.getLote = function (id) {
        var _this = this;
        return this.getLoteById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (response) {
            var lotId = -1;
            if (response['result'].length > 0) {
                var result = response['result'].records[0];
                lotId = result.lot_id;
            }
            return _this.getLoteByLotId(+lotId);
        }));
    };
    ConteoService.prototype.getLoteById = function (id) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'mhapp2.mhlot',
                domain: [['id', '=', id]],
                fields: ['lot_id'],
                limit: 80,
                sort: '',
                context: {
                    lang: 'en_US',
                    tz: 'Europe/Brussels',
                    uid: 2
                }
            }
        };
        //console.log(AppSettings._ENDPOINT_QUERY);
        //console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.getLoteByLotId = function (lotId) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.quant',
                domain: [['lot_id', '=', lotId], ['location_id', '!=', 12], ['quantity', '>=', 0]],
                fields: [
                    'id',
                    'location_id',
                    'lot_id',
                    'product_id',
                    'product_uom_id',
                    'quantity'
                ],
                limit: 80,
                sort: '',
                context: {
                    lang: 'en_US',
                    tz: 'Europe/Brussels',
                    uid: 2
                }
            }
        };
        //console.log(AppSettings._ENDPOINT_QUERY);
        //console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.getLotByName = function (lotName) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.production.lot',
                domain: [['name', '=', lotName]],
                fields: [
                    'id',
                    'location_id',
                    'lot_id',
                    'product_id',
                    'product_uom_id',
                    'quantity'
                ],
                limit: 80,
                sort: '',
                context: {
                    lang: 'en_US',
                    tz: 'Europe/Brussels',
                    uid: 2
                }
            }
        };
        console.log(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY);
        console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.createTarea = function (inventory) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                args: [
                    {
                        location_id: inventory.location_id[0],
                        filter: 'partial',
                        company_id: 1,
                        name: inventory.name,
                        inventory_process_id: inventory.inventory_process_id[0],
                        product_id: false,
                        category_id: false,
                        lot_id: false,
                        partner_id: false,
                        package_id: false,
                        exhausted: false
                    }
                ],
                model: 'stock.inventory',
                method: 'create',
                kwargs: {
                    context: {
                        lang: 'en_US',
                        tz: 'Europe/Brussels',
                        uid: 2
                    }
                }
            }
        };
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_CREATE_INVENTORY, params);
    };
    ConteoService.prototype.startTaskInventary = function (taskId) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                args: [
                    [taskId],
                    {
                        lang: 'en_US',
                        tz: 'Europe/Brussels',
                        uid: 2,
                        params: {
                            id: 1,
                            action: 190,
                            model: 'stock.inventory.process',
                            view_type: 'form',
                            menu_id: 84
                        }
                    }
                ],
                method: 'action_start',
                model: 'stock.inventory'
            }
        };
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_START_TASK_INVENTORY, params);
    };
    ConteoService.prototype.insertInventaryLine = function (taskId, productId, locationId, prodLotId, productQty, productUomId) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                args: [
                    {
                        inventory_id: taskId,
                        product_id: productId,
                        location_id: locationId,
                        prod_lot_id: prodLotId,
                        product_uom_id: productUomId,
                        product_qty: productQty
                    }
                ],
                model: 'stock.inventory.line',
                method: 'create',
                kwargs: {
                    context: {
                        lang: 'en_US'
                    }
                }
            }
        };
        //console.log(AppSettings._ENDPOINT_QUERY);
        //console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_WRITE_INVENTORY, params);
    };
    ConteoService.prototype.updateInventaryLine = function (taskId, lineId, prodLotId, productQty) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                args: [[taskId],
                    {
                        line_ids: [
                            [1,
                                lineId,
                                {
                                    prod_lot_id: prodLotId,
                                    product_qty: productQty
                                }]
                        ]
                    }],
                model: 'stock.inventory', method: 'write',
                kwargs: {
                    context: {
                        lang: 'en_US', tz: false,
                        params: { model: 'stock.inventory' }
                    }
                }
            }
        };
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_WRITE_INVENTORY, params);
    };
    ConteoService.prototype.createPicking = function (locationId, locationDestId, pickingTypeId) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                args: [
                    {
                        is_locked: true,
                        location_id: locationId,
                        location_dest_id: locationDestId,
                        immediate_transfer: false,
                        move_type: 'direct',
                        picking_type_id: pickingTypeId,
                        date_done: this.dateToString(new Date())
                    }
                ],
                model: 'stock.picking',
                method: 'create',
                kwargs: {
                    context: {
                        lang: 'en_US'
                    }
                }
            }
        };
        console.log(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_CREATE_PICKING);
        console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_CREATE_PICKING, params);
    };
    ConteoService.prototype.createPickingDetail = function (pickingId, locationDestId, productId, locationId, prodLotId, productQty, productUomId, productName, pickingTypeId) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                args: [
                    [
                        pickingId
                    ],
                    {
                        move_ids_without_package: [
                            [
                                0,
                                0,
                                {
                                    state: 'done',
                                    picking_type_id: pickingTypeId,
                                    location_id: locationId,
                                    location_dest_id: locationDestId,
                                    additional: false,
                                    product_uom_qty: +productQty,
                                    name: productName,
                                    product_id: productId,
                                    product_uom: productUomId,
                                    move_line_ids: [
                                        [
                                            0,
                                            0,
                                            {
                                                product_id: productId,
                                                location_id: locationId,
                                                location_dest_id: locationDestId,
                                                product_uom_qty: 0,
                                                qty_done: +productQty,
                                                product_uom_id: productUomId,
                                                lot_id: prodLotId,
                                                state: 'done'
                                            }
                                        ]
                                    ]
                                }
                            ]
                        ]
                    }
                ],
                model: 'stock.picking',
                method: 'write',
                kwargs: {
                    context: {
                        lang: 'en_US'
                    }
                }
            }
        };
        console.log(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_WRITE_PICKING);
        console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_WRITE_PICKING, params);
    };
    ConteoService.prototype.getInventoryLine = function (inventoryId) {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.inventory.line',
                domain: [['inventory_id', '=', inventoryId]],
                fields: [],
                sort: 'id',
                context: {
                    lang: 'en_US'
                }
            }
        };
        //console.log(AppSettings._ENDPOINT_QUERY);
        //console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.getBodegaSalida = function () {
        var params = {
            jsonrpc: '2.0',
            method: 'call',
            params: {
                model: 'stock.picking.type',
                domain: [['barcode', '=', 'WH-DELIVERY']],
                fields: [],
                limit: 80,
                sort: '',
                context: {
                    lang: 'en_US'
                }
            }
        };
        console.log(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY);
        console.log(params);
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_QUERY, params);
    };
    ConteoService.prototype.dateToString = function (date) {
        return date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate() +
            ' ' +
            (date.getHours().toString().length === 1 ? '0' + date.getHours().toString() : date.getHours().toString()) +
            ':' +
            (date.getMinutes().toString().length === 1 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()) +
            ':' +
            (date.getSeconds().toString().length === 1 ? '0' + date.getSeconds().toString() : date.getSeconds().toString());
    };
    ConteoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ConteoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConteoService);
    return ConteoService;
}(_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]));



/***/ }),

/***/ "./app/shared/services/general.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/AppSettings.ts");





/**
 * Clase para configurar servicios genericos, esta clase es heredable
 */
var GeneralService = /** @class */ (function () {
    function GeneralService(_http) {
        this._http = _http;
        this.ENDPOINT_LOGIN = _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]._API_ENDPOINT_GATEWAY + '/web/session/authenticate';
        this.contentType = 'application/json';
    }
    /**
     *  Función para obtener datos dado una url
     *
     * @param url path a consultar el servicio web
     */
    GeneralService.prototype.get = function (url) {
        var options = { headers: _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].HEADERS };
        return (this._http
            .get(url, options)
            // .pipe(map(response => response.json()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)));
    };
    /**
     *  Función para obtener datos dado una url y un api key
     *
     * @param url path a consultar el servicio web
     */
    GeneralService.prototype.getWithApiKey = function (url) {
        var options = { headers: _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].HEADERS_API_KEY };
        return this._http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Función para obtener datos dado una url, pero obteniendo el response completo
     * @param url URL a llamar el servicio
     */
    GeneralService.prototype.getFullResponse = function (url) {
        return this._http.get(url, {
            headers: _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].HEADERS,
            observe: 'response'
        });
    };
    /**
     * Función para enviar datos, ya sea edición, crear, etc.
     *
     * @param url path a consultar el servicio web
     * @param params contenido del body a enviar en la URL post
     */
    GeneralService.prototype.post = function (url, params) {
        var options = { headers: _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].HEADERS };
        var body = JSON.stringify(params);
        return this._http
            .post(url, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Función para enviar datos, ya sea edición, crear, etc.
     *
     * @param url path a consultar el servicio web
     * @param params contenido del body a enviar en la URL post
     */
    GeneralService.prototype.postWithApiKey = function (url, params) {
        var options = { headers: _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].HEADERS_API_KEY };
        var body = JSON.stringify(params);
        return this._http
            .post(url, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Función para enviar datos, ya sea edición, crear, etc.
     *
     * @param url path a consultar el servicio web
     * @param params contenido del body a enviar en la URL post
     */
    GeneralService.prototype.putWithApiKey = function (url, params) {
        var options = { headers: _app_AppSettings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].HEADERS_API_KEY };
        var body = JSON.stringify(params);
        console.log(url);
        console.log(params);
        return this._http
            .put(url, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    GeneralService.prototype.handleError = function (error) {
        console.error('An error occurred:', error.error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    GeneralService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./app/shared/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AppSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/AppSettings.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/services/general.service.ts");




var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        return _this;
    }
    UserService.prototype.login = function (user, db1) {
        var params = {
            jsonrpc: '2.0',
            params: {
                context: {},
                db: db1,
                login: user.username,
                password: user.password
            }
        };
        return this.post(_AppSettings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]._ENDPOINT_LOGIN, params);
    };
    UserService.prototype.logout = function () {
        //return this.kinveyUserService.logout().catch(this.handleErrors);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}(_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]));



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvQXBwU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvbW9kZWwvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NlcnZpY2VzL2NvbnRlby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvc2VydmljZXMvZ2VuZXJhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7QUMzQ0EseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLDBSQUEwUixjQUFjLFdBQVcseUJBQXlCLG1CQUFtQixnQkFBZ0IsRUFBRSxpQkFBaUIsMkJBQTJCLEVBQUUsY0FBYyxnQkFBZ0IsRUFBRSxpQkFBaUIsMkJBQTJCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsaUJBQWlCLG1CQUFtQixFQUFFLG9CQUFvQiw4QkFBOEIsRUFBRSxjQUFjLG1CQUFtQixFQUFFLGlCQUFpQiw4QkFBOEIsRUFBRSxlQUFlLG1CQUFtQixFQUFFLGtCQUFrQiw4QkFBOEIsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGdCQUFnQiw4QkFBOEIsRUFBRSxtQkFBbUIsbUJBQW1CLEVBQUUsc0JBQXNCLDhCQUE4QixFQUFFLGtCQUFrQixtQkFBbUIsRUFBRSxxQkFBcUIsOEJBQThCLEVBQUUsZUFBZSxtQkFBbUIsRUFBRSxrQkFBa0IsOEJBQThCLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxpQkFBaUIsOEJBQThCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsZUFBZSxtQkFBbUIsRUFBRSxrQkFBa0IsOEJBQThCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxlQUFlLDhCQUE4QixFQUFFLGlDQUFpQyxnQkFBZ0IsRUFBRSxZQUFZLGVBQWUsRUFBRSxhQUFhLGlCQUFpQixFQUFFLFlBQVksZ0JBQWdCLEVBQUUsc0ZBQXNGLFNBQVMsT0FBTyxhQUFhLE9BQU8sZUFBZSxPQUFPLGdCQUFnQixPQUFPLGNBQWMsT0FBTyxlQUFlLGNBQWMsT0FBTyxhQUFhLGdCQUFnQiwwR0FBMEcsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVC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QztBQXRCdUI7Ozs7Ozs7Ozs7Ozs7O0FDSnhCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGNBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwifi9hcHAvY29uc3VsdGEvY29uc3VsdGEubW9kdWxlXCI6IFtcblx0XHRcIi4vYXBwL2NvbnN1bHRhL2NvbnN1bHRhLm1vZHVsZS50c1wiLFxuXHRcdDNcblx0XSxcblx0XCJ+L2FwcC9jb250ZW8vY29udGVvLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2FwcC9jb250ZW8vY29udGVvLm1vZHVsZS50c1wiLFxuXHRcdFwidmVuZG9yXCIsXG5cdFx0MFxuXHRdLFxuXHRcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGVcIjogW1xuXHRcdFwiLi9hcHAvaG9tZS9ob21lLm1vZHVsZS50c1wiLFxuXHRcdDRcblx0XSxcblx0XCJ+L2FwcC9zYWxpZGEvc2FsaWRhLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2FwcC9zYWxpZGEvc2FsaWRhLm1vZHVsZS50c1wiLFxuXHRcdFwidmVuZG9yXCIsXG5cdFx0MlxuXHRdLFxuXHRcIn4vYXBwL3RyYW5zZmVyZW5jaWEvdHJhbnNmZXJlbmNpYS5tb2R1bGVcIjogW1xuXHRcdFwiLi9hcHAvdHJhbnNmZXJlbmNpYS90cmFuc2ZlcmVuY2lhLm1vZHVsZS50c1wiLFxuXHRcdFwidmVuZG9yXCIsXG5cdFx0MVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gaWRzWzBdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcyNmZmO1xcbiAgICBib3JkZXItY29sb3I6ICMwNzI2ZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjM0E1M0ZGO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogMjtcXG4gIGhlaWdodDogMzY7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uZm9ybSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDM0OyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjQ7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjtcXG4gIHBhZGRpbmctdG9wOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgbWFyZ2luOiAyMCAxNjsgfVxcblxcbi5zd2l0Y2gge1xcbiAgbWFyZ2luOiAxNCAxNjtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gICAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cXG4ucGFnZS1jb250ZW50IC5wYWdlLXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjRDdEN0Q3O1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ucGFnZS1jb250ZW50IC5wYWdlLWljb24ge1xcbiAgZm9udC1zaXplOiA3MjtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0Q3RDdENztcXG4gIG1hcmdpbi10b3A6IDIwJTsgfVxcblxcbkFjdGlvbkJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcbiAgLnNpZGVkcmF3ZXIuc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICAgIGNvbG9yOiAjRjhGOEY4O1xcbiAgICBoZWlnaHQ6IDYwO1xcbiAgICB3aWR0aDogNjA7XFxuICAgIGZvbnQtc2l6ZTogNjA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDU7XFxuICAgIG1hcmdpbi10b3A6IDIwOyB9XFxuICAuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnQgLmZvb3Rub3RlIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1oZWFkZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG4gIC5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcbiAgICAuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSBMYWJlbCB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgICBjb2xvcjogIzAyMjczNDsgfVxcbiAgICAuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuZmEge1xcbiAgICAgIHdpZHRoOiAyMDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwOyB9XFxuICAgIC5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLnNlbGVjdGVkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgICAgLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWQgTGFiZWwge1xcbiAgICAgICAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG5BY3Rpb25CYXIgLmZhIHtcXG4gIHBhZGRpbmc6IDQwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgY2xhc3MgQXBwU2V0dGluZ3Mge1xuICBzdGF0aWMgX0FQSV9FTkRQT0lOVF9HQVRFV0FZID0gJ2h0dHBzOi8vaW52YXBwLm1oZmx5LmNvbS8nO1xuICBzdGF0aWMgX0VORFBPSU5UX1FVRVJZID1cbiAgICBBcHBTZXR0aW5ncy5fQVBJX0VORFBPSU5UX0dBVEVXQVkgKyAnL3dlYi9kYXRhc2V0L3NlYXJjaF9yZWFkJztcbiAgc3RhdGljIF9FTkRQT0lOVF9DUkVBVEVfSU5WRU5UT1JZID1cbiAgICBBcHBTZXR0aW5ncy5fQVBJX0VORFBPSU5UX0dBVEVXQVkgK1xuICAgICcvd2ViL2RhdGFzZXQvY2FsbF9rdy9zdG9jay5pbnZlbnRvcnkvY3JlYXRlJztcbiAgc3RhdGljIF9FTkRQT0lOVF9XUklURV9JTlZFTlRPUlkgPVxuICAgIEFwcFNldHRpbmdzLl9BUElfRU5EUE9JTlRfR0FURVdBWSArXG4gICAgJy93ZWIvZGF0YXNldC9jYWxsX2t3L3N0b2NrLmludmVudG9yeS93cml0ZSc7XG4gIHN0YXRpYyBfRU5EUE9JTlRfU1RBUlRfVEFTS19JTlZFTlRPUlkgPVxuICAgIEFwcFNldHRpbmdzLl9BUElfRU5EUE9JTlRfR0FURVdBWSArICcvd2ViL2RhdGFzZXQvY2FsbF9idXR0b24nO1xuXG4gIHN0YXRpYyBfRU5EUE9JTlRfTE9HSU4gPVxuICAgIEFwcFNldHRpbmdzLl9BUElfRU5EUE9JTlRfR0FURVdBWSArICcvd2ViL3Nlc3Npb24vYXV0aGVudGljYXRlJztcbiAgc3RhdGljIF9FTkRQT0lOVF9TVEFHRSA9IEFwcFNldHRpbmdzLl9BUElfRU5EUE9JTlRfR0FURVdBWSArICcvYXBpL2NybS5zdGFnZSc7XG4gIHN0YXRpYyBfRU5EUE9JTlRfQ09VTlRSWSA9XG4gICAgQXBwU2V0dGluZ3MuX0FQSV9FTkRQT0lOVF9HQVRFV0FZICtcbiAgICBcIi9hcGkvcmVzLmNvdW50cnkvc2VhcmNoP2ZpZWxkcz1bJ2lkJywnbmFtZScsJ2NvZGUnXVwiO1xuICBzdGF0aWMgX0VORFBPSU5UX1RBRyA9XG4gICAgQXBwU2V0dGluZ3MuX0FQSV9FTkRQT0lOVF9HQVRFV0FZICsgJy9hcGkvY3JtLmxlYWQudGFnL3NlYXJjaCc7XG4gIHN0YXRpYyBfRU5EUE9JTlRfTEVBRF9CWV9TVEFHRSA9XG4gICAgQXBwU2V0dGluZ3MuX0FQSV9FTkRQT0lOVF9HQVRFV0FZICtcbiAgICBcIi9hcGkvY3JtLmxlYWQvc2VhcmNoP2RvbWFpbj1bKCdzdGFnZV9pZCcsJ2luJyxbX0lEX10pXVwiO1xuICBzdGF0aWMgX0VORFBPSU5UX0xFQURfQ1JFQVRFID1cbiAgICBBcHBTZXR0aW5ncy5fQVBJX0VORFBPSU5UX0dBVEVXQVkgKyAnL2FwaS9jcm0ubGVhZC9jcmVhdGUnO1xuICBzdGF0aWMgX0VORFBPSU5UX0xFQURfVVBEQVRFID1cbiAgICBBcHBTZXR0aW5ncy5fQVBJX0VORFBPSU5UX0dBVEVXQVkgKyAnL2FwaS9jcm0ubGVhZC8nO1xuICBzdGF0aWMgX0VORFBPSU5UX05PVEVfU0VBUkNIID1cbiAgICBBcHBTZXR0aW5ncy5fQVBJX0VORFBPSU5UX0dBVEVXQVkgKyAnL2FwaS9tYWlsLm1lc3NhZ2Uvc2VhcmNoJztcbiAgc3RhdGljIF9FTkRQT0lOVF9OT1RFX1NBVkUgPVxuICAgIEFwcFNldHRpbmdzLl9BUElfRU5EUE9JTlRfR0FURVdBWSArXG4gICAgJy93ZWIvZGF0YXNldC9jYWxsX2t3L2NybS5sZWFkL21lc3NhZ2VfcG9zdCc7XG4gIHN0YXRpYyBfRU5EUE9JTlRfQ1JFQVRFX1BJQ0tJTkcgPVxuICAgIEFwcFNldHRpbmdzLl9BUElfRU5EUE9JTlRfR0FURVdBWSArXG4gICAgJy93ZWIvZGF0YXNldC9jYWxsX2t3L3N0b2NrLnBpY2tpbmcvY3JlYXRlJztcbiAgc3RhdGljIF9FTkRQT0lOVF9XUklURV9QSUNLSU5HID1cbiAgICBBcHBTZXR0aW5ncy5fQVBJX0VORFBPSU5UX0dBVEVXQVkgK1xuICAgICcvd2ViL2RhdGFzZXQvY2FsbF9rdy9zdG9jay5waWNraW5nL3dyaXRlJztcblxuICBzdGF0aWMgSEVBREVSUyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9KTtcblxuICBzdGF0aWMgSEVBREVSU19BUElfS0VZID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICBhcGlfa2V5OiAnR0ZIVzRZR0RIV1EzUU1EVDQ0RFNQUFpKV0dRSkJINDUnXG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2hvbWUnLCBsb2FkQ2hpbGRyZW46ICd+L2FwcC9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGUnIH0sXG4gIHsgcGF0aDogJ2NvbnRlbycsIGxvYWRDaGlsZHJlbjogJ34vYXBwL2NvbnRlby9jb250ZW8ubW9kdWxlI0NvbnRlb01vZHVsZScgfSxcbiAgeyBwYXRoOiAnY29uc3VsdGEnLCBsb2FkQ2hpbGRyZW46ICd+L2FwcC9jb25zdWx0YS9jb25zdWx0YS5tb2R1bGUjQ29uc3VsdGFNb2R1bGUnIH0sXG4gIHsgcGF0aDogJ3RyYW5zZmVyZW5jaWEnLCBsb2FkQ2hpbGRyZW46ICd+L2FwcC90cmFuc2ZlcmVuY2lhL3RyYW5zZmVyZW5jaWEubW9kdWxlI1RyYW5zZmVyZW5jaWFNb2R1bGUnIH0sXG4gIHsgcGF0aDogJ3NhbGlkYScsIGxvYWRDaGlsZHJlbjogJ34vYXBwL3NhbGlkYS9zYWxpZGEubW9kdWxlI1NhbGlkYU1vZHVsZScgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS1cXG5SYWRTaWRlRHJhd2VyIGlzIGEgVUkgY29tcG9uZW50IHBhcnQgb2YgdGhlIFByb2dyZXNzIE5hdGl2ZVNjcmlwdCBVSSBzZXQgb2YgY29tcG9uZW50cy5cXG5MZWFybiBtb3JlIGFib3V0IHRoZSBSYWRTaWRlRHJhd2VyIFVJIGNvbXBvbmVudCBhbmQgaG93IGl0IGNhbiBiZSBjdXN0b21pemVkIGluIHRoaXMgZG9jdW1lbnRhdGlvbiBhcnRpY2xlOlxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvcHJvZmVzc2lvbmFsLXVpLWNvbXBvbmVudHMvbmctU2lkZURyYXdlci9nZXR0aW5nLXN0YXJ0ZWRcXG4tLT5cXG48UmFkU2lkZURyYXdlciBbZHJhd2VyVHJhbnNpdGlvbl09XFxcInNpZGVEcmF3ZXJUcmFuc2l0aW9uXFxcIj5cXG4gIDxHcmlkTGF5b3V0IHRrRHJhd2VyQ29udGVudCByb3dzPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlciBzaWRlZHJhd2VyLWxlZnRcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1oZWFkZXJcXFwiPlxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2lkZWRyYXdlci1oZWFkZXItaW1hZ2UgZmFcXFwiIHRleHQ9XFxcIiYjeGYyYmQ7XFxcIj48L0xhYmVsPlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kXFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3tcXG4gICAgICAgICAgc2Vzc2lvblNlcnZpY2UuY29ubmVjdGVkVXNlclxcbiAgICAgICAgICAgID8gc2Vzc2lvblNlcnZpY2UuY29ubmVjdGVkVXNlci5wYXJ0bmVyX2Rpc3BsYXlfbmFtZVxcbiAgICAgICAgICAgIDogJydcXG4gICAgICAgIH19XFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgY2xhc3M9XFxcImZvb3Rub3RlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwie3tcXG4gICAgICAgICAgc2Vzc2lvblNlcnZpY2UuY29ubmVjdGVkVXNlclxcbiAgICAgICAgICAgID8gc2Vzc2lvblNlcnZpY2UuY29ubmVjdGVkVXNlci51c2VybmFtZVxcbiAgICAgICAgICAgIDogJydcXG4gICAgICAgIH19XFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICA8U2Nyb2xsVmlldyByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgIDxHcmlkTGF5b3V0XFxuICAgICAgICAgIGNvbHVtbnM9XFxcImF1dG8sICpcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cXFwiaXNDb21wb25lbnRTZWxlY3RlZCgnL2hvbWUnKVxcXCJcXG4gICAgICAgICAgKHRhcCk9XFxcIm9uTmF2SXRlbVRhcCgnL2hvbWUnKVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAxNTtcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiSW5pY2lvXFxcIiBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPEdyaWRMYXlvdXRcXG4gICAgICAgICAgY29sdW1ucz1cXFwiYXV0bywgKlxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVxcXCJpc0NvbXBvbmVudFNlbGVjdGVkKCcvc3RhZ2UnKVxcXCJcXG4gICAgICAgICAgKHRhcCk9XFxcIm9uTmF2SXRlbVRhcCgnL2NvbnRlbycpXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMWVjO1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJDb250ZW9cXFwiIGNsYXNzPVxcXCJwLXItMTBcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICA8R3JpZExheW91dFxcbiAgICAgICAgICBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XFxcImlzQ29tcG9uZW50U2VsZWN0ZWQoJy9zdGFnZScpXFxcIlxcbiAgICAgICAgICAodGFwKT1cXFwib25OYXZJdGVtVGFwKCcvdHJhbnNmZXJlbmNpYScpXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDdlO1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBjb2w9XFxcIjFcXFwiXFxuICAgICAgICAgICAgdGV4dD1cXFwiVHJhbnNmZXJlbmNpYSBwb3IgRGVtYW5kYVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwicC1yLTEwXFxcIlxcbiAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDxHcmlkTGF5b3V0XFxuICAgICAgICAgIGNvbHVtbnM9XFxcImF1dG8sICpcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cXFwiaXNDb21wb25lbnRTZWxlY3RlZCgnL3N0YWdlJylcXFwiXFxuICAgICAgICAgICh0YXApPVxcXCJvbk5hdkl0ZW1UYXAoJy9zYWxpZGEnKVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjA2MTtcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiU2FsaWRhXFxcIiBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPEdyaWRMYXlvdXRcXG4gICAgICAgICAgY29sdW1ucz1cXFwiYXV0bywgKlxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVxcXCJpc0NvbXBvbmVudFNlbGVjdGVkKCcvc3RhZ2UnKVxcXCJcXG4gICAgICAgICAgKHRhcCk9XFxcIm9uTmF2SXRlbVRhcCgnL2NvbnN1bHRhJylcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMDI7XFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkNvbnN1bHRhXFxcIiBjbGFzcz1cXFwicC1yLTEwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgIDxHcmlkTGF5b3V0XFxuICAgICAgICAgIGNvbHVtbnM9XFxcImF1dG8sICpcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgKHRhcCk9XFxcImxvZ291dCgpXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDBkO1xcXCIgY2xhc3M9XFxcImZhXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJTYWxpclxcXCIgY2xhc3M9XFxcInAtci0xMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuICA8L0dyaWRMYXlvdXQ+XFxuXFxuICA8cGFnZS1yb3V0ZXItb3V0bGV0XFxuICAgIHRrTWFpbkNvbnRlbnRcXG4gICAgY2xhc3M9XFxcInBhZ2UgcGFnZS1jb250ZW50XFxcIlxcbiAgPjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxcbjwvUmFkU2lkZURyYXdlcj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBEcmF3ZXJUcmFuc2l0aW9uQmFzZSxcbiAgUmFkU2lkZURyYXdlcixcbiAgU2xpZGVJbk9uVG9wVHJhbnNpdGlvblxufSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL3Nlc3Npb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHB1YmxpYyBzZXNzaW9uU2VydmljZTogU2Vzc2lvblNlcnZpY2VcbiAgKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gJy9ob21lJztcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gKHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICB9XG5cbiAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcbiAgfVxuXG4gIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZSdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIH1cblxuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcblxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJyddLCB7XG4gICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlb1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9jb250ZW8uc2VydmljZSc7XG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIExvZ2luQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbU2Vzc2lvblNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBDb250ZW9TZXJ2aWNlXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybSB7XFxuICBtYXJnaW4tbGVmdDogMzA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgZmxleC1ncm93OiAyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7XFxuICBoZWlnaHQ6IDkwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXIge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxODtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZDUxYTFhO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dCB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNhOGE4YTg7XFxufVxcbi5pbnB1dDpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIG1hcmdpbjogMzAgNSAxNSA1O1xcbn1cXG5cXG4ubG9naW4tbGFiZWwge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNhOGE4YTg7XFxuICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXG59XFxuLmJvbGQge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgIDxJbWFnZSBjbGFzcz1cXFwibG9nb1xcXCIgc3JjPVxcXCJ+L2FwcC9pbWFnZXMvbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhlYWRlclxcXCIgdGV4dD1cXFwiSW52ZW50YXJpbyBkZSBNYXRlcmlhcyBQcmltYXNcXFwiPjwvTGFiZWw+XFxuXFxuICAgICAgICA8UHJldmlvdXNOZXh0Vmlldz5cXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0XFxcIiBoaW50PVxcXCJDb3JyZW8gRWxlY3Ryw7NuaWNvXFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnVzZXJuYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzUGFzc3dvcmQoKVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAjcGFzc3dvcmQgY2xhc3M9XFxcImlucHV0XFxcIiBbaXNFbmFibGVkXT1cXFwiIXByb2Nlc3NpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cXFwiQ29udHJhc2XDsWFcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgW3JldHVybktleVR5cGVdPVxcXCInZG9uZSdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJldHVyblByZXNzKT1cXFwibG9naW4oKVxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cXFwiM1xcXCIgW2J1c3ldPVxcXCJwcm9jZXNzaW5nXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvUHJldmlvdXNOZXh0Vmlldz5cXG5cXG4gICAgICAgIDxCdXR0b24gW3RleHRdPVxcXCInQ29uZWN0YXJzZSdcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAodGFwKT1cXFwibG9naW4oKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICA8TGFiZWw+XFxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJWZXJzacOzbiBcXFwiPjwvU3Bhbj5cXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiMS4wLjVcXFwiIGNsYXNzPVxcXCJib2xkXFxcIj48L1NwYW4+XFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICA8L0xhYmVsPlxcbjwvRmxleGJveExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3Nlc3Npb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgdXNlcjogVXNlcjtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcHJvY2Vzc2luZyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdwYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwYXNzd29yZDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLnVzZXJuYW1lID0gJ2FkbWluJztcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSAnTmFwZWxsdXMhOTc1NCc7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBpZiAoIXRoaXMudXNlci51c2VybmFtZSB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICB0aGlzLmFsZXJ0KCdVc3VhcmlvIG8gY29udHJhc2XDsWFzIG9ibGlnYXRvcmlhcyEnKTtcbiAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICB2YXIgZGJjb25uID0gJ21oYXBwMDAxX3Rlc3RfMjAyMTAyMTRhJztcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlciwgZGJjb25uKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5hbGVydCgnVXN1YXJpbyBvIGNvbnRyYXNlw7FhcyBpbnbDoWxpZGFzIScpO1xuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvblNlcnZpY2UuY29ubmVjdGVkVXNlciA9IGRhdGEucmVzdWx0OyBcbiAgICAgICAgdGhpcy5zZXNzaW9uU2VydmljZS5jb25uZWN0ZWRVc2VyLnVzZXJuYW1lID0gdGhpcy5zZXNzaW9uU2VydmljZS5jb25uZWN0ZWRVc2VyLnVzZXJuYW1lICsgJ0AnICsgZGJjb25uO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7XG4gICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBhbGVydCh7XG4gICAgICB0aXRsZTogJ0NSTSBNw7N2aWwnLFxuICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxuICAgICAgbWVzc2FnZVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICBzZXNzaW9uX2lkOiBzdHJpbmc7XG4gIHBhcnRuZXJfZGlzcGxheV9uYW1lOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBwU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9BcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyBHZW5lcmFsU2VydmljZSB9IGZyb20gJy4vZ2VuZXJhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gJy4uL21vZGVsL3N0b2NrL2ludmVudG9yeS5tb2RlbCc7XG5pbXBvcnQgeyBmbGF0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGVvU2VydmljZSBleHRlbmRzIEdlbmVyYWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50XG4gICkge1xuICAgIHN1cGVyKF9odHRwKTtcbiAgfVxuXG4gIGdldFByb2Nlc29zKCk6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1vZGVsOiAnc3RvY2suaW52ZW50b3J5LnByb2Nlc3MnLFxuICAgICAgICBkb21haW46IFtdLFxuICAgICAgICBmaWVsZHM6IFsnbmFtZScsICdzdG9ja193YXJlaG91c2VfaWQnLCAnc3RhdHVzJ10sXG4gICAgICAgIGxpbWl0OiA4MCxcbiAgICAgICAgc29ydDogJycsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBsYW5nOiAnZW5fVVMnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfUVVFUlksIHBhcmFtcyk7XG4gIH1cblxuICBnZXRUYXJlYXMoaW52ZW50b3J5UHJvY2Vzc0lkOiBudW1iZXIsIGxvY2F0aW9uSWQ6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1vZGVsOiAnc3RvY2suaW52ZW50b3J5JyxcbiAgICAgICAgZG9tYWluOiBbXG4gICAgICAgICAgWydpbnZlbnRvcnlfcHJvY2Vzc19pZCcsICc9JywgaW52ZW50b3J5UHJvY2Vzc0lkXSxcbiAgICAgICAgICBbJ2xvY2F0aW9uX2lkJywgJz0nLCBsb2NhdGlvbklkXSxcbiAgICAgICAgICBbJ3N0YXRlJywgJz0nLCAnY29uZmlybSddXG4gICAgICAgIF0sXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICdpbnZlbnRvcnlfcHJvY2Vzc19pZCcsXG4gICAgICAgICAgJ25hbWUnLFxuICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAnc3RhdGUnLFxuICAgICAgICAgICdsb2NhdGlvbl9pZCdcbiAgICAgICAgXSxcbiAgICAgICAgbGltaXQ6IDgwLFxuICAgICAgICBzb3J0OiAnJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGxhbmc6ICdlbl9VUydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0KEFwcFNldHRpbmdzLl9FTkRQT0lOVF9RVUVSWSwgcGFyYW1zKTtcbiAgfVxuXG4gIGdldFN0b2NrTG9jYXRpb24oaWQ6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1vZGVsOiAnc3RvY2subG9jYXRpb24nLFxuICAgICAgICBkb21haW46IFtbJ2lkJywgJz0nLCBpZF1dLFxuICAgICAgICBmaWVsZHM6IFsnaWQnLCAnbmFtZScsICdkaXNwbGF5X25hbWUnLCAnY29tcGFueV9pZCcsICdsb2NhdGlvbl9pZCddLFxuICAgICAgICBsaW1pdDogODAsXG4gICAgICAgIHNvcnQ6ICcnLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgbGFuZzogJ2VuX1VTJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vY29uc29sZS5sb2coQXBwU2V0dGluZ3MuX0VORFBPSU5UX1FVRVJZKTtcbiAgICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0KEFwcFNldHRpbmdzLl9FTkRQT0lOVF9RVUVSWSwgcGFyYW1zKTtcbiAgfVxuXG4gIGdldFBhcmVudHNTdG9ja0xvY2F0aW9uKGlkczogQXJyYXk8bnVtYmVyPik6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1vZGVsOiAnc3RvY2subG9jYXRpb24nLFxuICAgICAgICBkb21haW46IFtbJ2lkJywgJ2luJywgaWRzXV0sXG4gICAgICAgIGZpZWxkczogWydpZCcsICdsb2NhdGlvbl9pZCddLFxuICAgICAgICBzb3J0OiAnJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGxhbmc6ICdlbl9VUydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvL2NvbnNvbGUubG9nKEFwcFNldHRpbmdzLl9FTkRQT0lOVF9RVUVSWSk7XG4gICAgLy9jb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfUVVFUlksIHBhcmFtcyk7XG4gIH1cblxuICBnZXRMb3RlKGlkOiBudW1iZXIpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldExvdGVCeUlkKGlkKS5waXBlKFxuICAgICAgZmxhdE1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCBsb3RJZCA9IC0xO1xuICAgICAgICBpZiAocmVzcG9uc2VbJ3Jlc3VsdCddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZVsncmVzdWx0J10ucmVjb3Jkc1swXTtcbiAgICAgICAgICBsb3RJZCA9IHJlc3VsdC5sb3RfaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRMb3RlQnlMb3RJZCgrbG90SWQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TG90ZUJ5SWQoaWQ6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1vZGVsOiAnbWhhcHAyLm1obG90JyxcbiAgICAgICAgZG9tYWluOiBbWydpZCcsICc9JywgaWRdXSxcbiAgICAgICAgZmllbGRzOiBbJ2xvdF9pZCddLFxuICAgICAgICBsaW1pdDogODAsXG4gICAgICAgIHNvcnQ6ICcnLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgbGFuZzogJ2VuX1VTJyxcbiAgICAgICAgICB0ejogJ0V1cm9wZS9CcnVzc2VscycsXG4gICAgICAgICAgdWlkOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9jb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5fRU5EUE9JTlRfUVVFUlkpO1xuICAgIC8vY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLnBvc3QoQXBwU2V0dGluZ3MuX0VORFBPSU5UX1FVRVJZLCBwYXJhbXMpO1xuICB9XG5cbiAgZ2V0TG90ZUJ5TG90SWQobG90SWQ6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1vZGVsOiAnc3RvY2sucXVhbnQnLFxuICAgICAgICBkb21haW46IFtbJ2xvdF9pZCcsICc9JywgbG90SWRdLCBbJ2xvY2F0aW9uX2lkJywgJyE9JywgMTJdLCBbJ3F1YW50aXR5JywgJz49JywgMF1dLCBcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAnbG9jYXRpb25faWQnLFxuICAgICAgICAgICdsb3RfaWQnLFxuICAgICAgICAgICdwcm9kdWN0X2lkJyxcbiAgICAgICAgICAncHJvZHVjdF91b21faWQnLFxuICAgICAgICAgICdxdWFudGl0eSdcbiAgICAgICAgXSxcbiAgICAgICAgbGltaXQ6IDgwLFxuICAgICAgICBzb3J0OiAnJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGxhbmc6ICdlbl9VUycsXG4gICAgICAgICAgdHo6ICdFdXJvcGUvQnJ1c3NlbHMnLFxuICAgICAgICAgIHVpZDogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vY29uc29sZS5sb2coQXBwU2V0dGluZ3MuX0VORFBPSU5UX1FVRVJZKTtcbiAgICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0KEFwcFNldHRpbmdzLl9FTkRQT0lOVF9RVUVSWSwgcGFyYW1zKTtcbiAgfVxuXG4gIGdldExvdEJ5TmFtZShsb3ROYW1lOiBTdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xuICAgICAganNvbnJwYzogJzIuMCcsXG4gICAgICBtZXRob2Q6ICdjYWxsJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtb2RlbDogJ3N0b2NrLnByb2R1Y3Rpb24ubG90JyxcbiAgICAgICAgZG9tYWluOiBbWyduYW1lJywgJz0nLCBsb3ROYW1lXV0sICBcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAnbG9jYXRpb25faWQnLFxuICAgICAgICAgICdsb3RfaWQnLFxuICAgICAgICAgICdwcm9kdWN0X2lkJyxcbiAgICAgICAgICAncHJvZHVjdF91b21faWQnLFxuICAgICAgICAgICdxdWFudGl0eSdcbiAgICAgICAgXSxcbiAgICAgICAgbGltaXQ6IDgwLFxuICAgICAgICBzb3J0OiAnJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGxhbmc6ICdlbl9VUycsXG4gICAgICAgICAgdHo6ICdFdXJvcGUvQnJ1c3NlbHMnLFxuICAgICAgICAgIHVpZDogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKEFwcFNldHRpbmdzLl9FTkRQT0lOVF9RVUVSWSk7XG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLnBvc3QoQXBwU2V0dGluZ3MuX0VORFBPSU5UX1FVRVJZLCBwYXJhbXMpO1xuICB9XG5cbiAgY3JlYXRlVGFyZWEoaW52ZW50b3J5OiBJbnZlbnRvcnkpOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xuICAgICAganNvbnJwYzogJzIuMCcsXG4gICAgICBtZXRob2Q6ICdjYWxsJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhcmdzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9jYXRpb25faWQ6IGludmVudG9yeS5sb2NhdGlvbl9pZFswXSxcbiAgICAgICAgICAgIGZpbHRlcjogJ3BhcnRpYWwnLFxuICAgICAgICAgICAgY29tcGFueV9pZDogMSxcbiAgICAgICAgICAgIG5hbWU6IGludmVudG9yeS5uYW1lLFxuICAgICAgICAgICAgaW52ZW50b3J5X3Byb2Nlc3NfaWQ6IGludmVudG9yeS5pbnZlbnRvcnlfcHJvY2Vzc19pZFswXSxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbG90X2lkOiBmYWxzZSxcbiAgICAgICAgICAgIHBhcnRuZXJfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGFja2FnZV9pZDogZmFsc2UsXG4gICAgICAgICAgICBleGhhdXN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBtb2RlbDogJ3N0b2NrLmludmVudG9yeScsXG4gICAgICAgIG1ldGhvZDogJ2NyZWF0ZScsXG4gICAgICAgIGt3YXJnczoge1xuICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIGxhbmc6ICdlbl9VUycsXG4gICAgICAgICAgICB0ejogJ0V1cm9wZS9CcnVzc2VscycsXG4gICAgICAgICAgICB1aWQ6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfQ1JFQVRFX0lOVkVOVE9SWSwgcGFyYW1zKTtcbiAgfVxuXG4gIHN0YXJ0VGFza0ludmVudGFyeSh0YXNrSWQ6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICBbdGFza0lkXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYW5nOiAnZW5fVVMnLFxuICAgICAgICAgICAgdHo6ICdFdXJvcGUvQnJ1c3NlbHMnLFxuICAgICAgICAgICAgdWlkOiAyLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICBhY3Rpb246IDE5MCxcbiAgICAgICAgICAgICAgbW9kZWw6ICdzdG9jay5pbnZlbnRvcnkucHJvY2VzcycsXG4gICAgICAgICAgICAgIHZpZXdfdHlwZTogJ2Zvcm0nLFxuICAgICAgICAgICAgICBtZW51X2lkOiA4NFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgbWV0aG9kOiAnYWN0aW9uX3N0YXJ0JyxcbiAgICAgICAgbW9kZWw6ICdzdG9jay5pbnZlbnRvcnknXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnBvc3QoQXBwU2V0dGluZ3MuX0VORFBPSU5UX1NUQVJUX1RBU0tfSU5WRU5UT1JZLCBwYXJhbXMpO1xuICB9XG5cbiAgaW5zZXJ0SW52ZW50YXJ5TGluZShcbiAgICB0YXNrSWQ6IG51bWJlcixcbiAgICBwcm9kdWN0SWQ6IG51bWJlcixcbiAgICBsb2NhdGlvbklkOiBudW1iZXIsXG4gICAgcHJvZExvdElkOiBudW1iZXIsXG4gICAgcHJvZHVjdFF0eTogbnVtYmVyLFxuICAgIHByb2R1Y3RVb21JZDogbnVtYmVyXG4gICk6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnZlbnRvcnlfaWQ6IHRhc2tJZCxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZCxcbiAgICAgICAgICAgIGxvY2F0aW9uX2lkOiBsb2NhdGlvbklkLFxuICAgICAgICAgICAgcHJvZF9sb3RfaWQ6IHByb2RMb3RJZCxcbiAgICAgICAgICAgIHByb2R1Y3RfdW9tX2lkOiBwcm9kdWN0VW9tSWQsXG4gICAgICAgICAgICBwcm9kdWN0X3F0eTogcHJvZHVjdFF0eVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWw6ICdzdG9jay5pbnZlbnRvcnkubGluZScsXG4gICAgICAgIG1ldGhvZDogJ2NyZWF0ZScsXG4gICAgICAgIGt3YXJnczoge1xuICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIGxhbmc6ICdlbl9VUydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9jb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5fRU5EUE9JTlRfUVVFUlkpO1xuICAgIC8vY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLnBvc3QoQXBwU2V0dGluZ3MuX0VORFBPSU5UX1dSSVRFX0lOVkVOVE9SWSwgcGFyYW1zKTtcbiAgfVxuXG4gIHVwZGF0ZUludmVudGFyeUxpbmUoXG4gICAgdGFza0lkOiBudW1iZXIsXG4gICAgbGluZUlkOiBudW1iZXIsXG4gICAgcHJvZExvdElkOiBudW1iZXIsXG4gICAgcHJvZHVjdFF0eTogbnVtYmVyXG4gICk6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFyZ3M6IFtbdGFza0lkXSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbmVfaWRzOiBbXG4gICAgICAgICAgICBbMSxcbiAgICAgICAgICAgICAgbGluZUlkLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJvZF9sb3RfaWQ6IHByb2RMb3RJZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3F0eTogcHJvZHVjdFF0eVxuICAgICAgICAgICAgICB9XV1cbiAgICAgICAgfV0sXG4gICAgICAgIG1vZGVsOiAnc3RvY2suaW52ZW50b3J5JywgbWV0aG9kOiAnd3JpdGUnLFxuICAgICAgICBrd2FyZ3M6IHtcbiAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBsYW5nOiAnZW5fVVMnLCB0ejogZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgICAgIHsgbW9kZWw6ICdzdG9jay5pbnZlbnRvcnknIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfV1JJVEVfSU5WRU5UT1JZLCBwYXJhbXMpO1xuICB9XG5cbiAgY3JlYXRlUGlja2luZyhcbiAgICBsb2NhdGlvbklkOiBudW1iZXIsXG4gICAgbG9jYXRpb25EZXN0SWQ6IG51bWJlcixcbiAgICBwaWNraW5nVHlwZUlkOiBudW1iZXJcbiAgKTogYW55IHtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgbWV0aG9kOiAnY2FsbCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgYXJnczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzX2xvY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2F0aW9uX2lkOiBsb2NhdGlvbklkLFxuICAgICAgICAgICAgbG9jYXRpb25fZGVzdF9pZDogbG9jYXRpb25EZXN0SWQsXG4gICAgICAgICAgICBpbW1lZGlhdGVfdHJhbnNmZXI6IGZhbHNlLFxuICAgICAgICAgICAgbW92ZV90eXBlOiAnZGlyZWN0JyxcbiAgICAgICAgICAgIHBpY2tpbmdfdHlwZV9pZDogcGlja2luZ1R5cGVJZCxcbiAgICAgICAgICAgIGRhdGVfZG9uZTogdGhpcy5kYXRlVG9TdHJpbmcobmV3IERhdGUoKSlcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsOiAnc3RvY2sucGlja2luZycsXG4gICAgICAgIG1ldGhvZDogJ2NyZWF0ZScsXG4gICAgICAgIGt3YXJnczoge1xuICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIGxhbmc6ICdlbl9VUydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coQXBwU2V0dGluZ3MuX0VORFBPSU5UX0NSRUFURV9QSUNLSU5HKTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfQ1JFQVRFX1BJQ0tJTkcsIHBhcmFtcyk7XG4gIH1cblxuICBjcmVhdGVQaWNraW5nRGV0YWlsKFxuICAgIHBpY2tpbmdJZDogbnVtYmVyLFxuICAgIGxvY2F0aW9uRGVzdElkOiBudW1iZXIsXG4gICAgcHJvZHVjdElkOiBudW1iZXIsXG4gICAgbG9jYXRpb25JZDogbnVtYmVyLFxuICAgIHByb2RMb3RJZDogbnVtYmVyLFxuICAgIHByb2R1Y3RRdHk6IG51bWJlcixcbiAgICBwcm9kdWN0VW9tSWQ6IG51bWJlcixcbiAgICBwcm9kdWN0TmFtZTogc3RyaW5nLFxuICAgIHBpY2tpbmdUeXBlSWQ6IG51bWJlclxuICApOiBhbnkge1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xuICAgICAganNvbnJwYzogJzIuMCcsXG4gICAgICBtZXRob2Q6ICdjYWxsJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgcGlja2luZ0lkXG4gICAgICAgICAgXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb3ZlX2lkc193aXRob3V0X3BhY2thZ2U6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0ZTogJ2RvbmUnLFxuICAgICAgICAgICAgICAgICAgcGlja2luZ190eXBlX2lkOiBwaWNraW5nVHlwZUlkLFxuICAgICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IGxvY2F0aW9uSWQsXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbl9kZXN0X2lkOiBsb2NhdGlvbkRlc3RJZCxcbiAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgcHJvZHVjdF91b21fcXR5OiArcHJvZHVjdFF0eSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3ROYW1lLFxuICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgcHJvZHVjdF91b206IHByb2R1Y3RVb21JZCxcbiAgICAgICAgICAgICAgICAgIG1vdmVfbGluZV9pZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9pZDogbG9jYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX2Rlc3RfaWQ6IGxvY2F0aW9uRGVzdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF91b21fcXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXR5X2RvbmU6ICtwcm9kdWN0UXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF91b21faWQ6IHByb2R1Y3RVb21JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvdF9pZDogcHJvZExvdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICdkb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWw6ICdzdG9jay5waWNraW5nJyxcbiAgICAgICAgbWV0aG9kOiAnd3JpdGUnLFxuICAgICAgICBrd2FyZ3M6IHtcbiAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICBsYW5nOiAnZW5fVVMnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKEFwcFNldHRpbmdzLl9FTkRQT0lOVF9XUklURV9QSUNLSU5HKTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfV1JJVEVfUElDS0lORywgcGFyYW1zKTtcbiAgfVxuXG4gIGdldEludmVudG9yeUxpbmUoaW52ZW50b3J5SWQ6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICBqc29ucnBjOiAnMi4wJyxcbiAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1vZGVsOiAnc3RvY2suaW52ZW50b3J5LmxpbmUnLFxuICAgICAgICBkb21haW46IFtbJ2ludmVudG9yeV9pZCcsICc9JywgaW52ZW50b3J5SWRdXSxcbiAgICAgICAgZmllbGRzOiBbXSxcbiAgICAgICAgc29ydDogJ2lkJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGxhbmc6ICdlbl9VUydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvL2NvbnNvbGUubG9nKEFwcFNldHRpbmdzLl9FTkRQT0lOVF9RVUVSWSk7XG4gICAgLy9jb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfUVVFUlksIHBhcmFtcyk7XG4gIH1cblxuICBnZXRCb2RlZ2FTYWxpZGEoKTogYW55IHtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgbWV0aG9kOiAnY2FsbCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbW9kZWw6ICdzdG9jay5waWNraW5nLnR5cGUnLFxuICAgICAgICBkb21haW46IFtbJ2JhcmNvZGUnLCAnPScsICdXSC1ERUxJVkVSWSddXSxcbiAgICAgICAgZmllbGRzOiBbXSxcbiAgICAgICAgbGltaXQ6IDgwLFxuICAgICAgICBzb3J0OiAnJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIGxhbmc6ICdlbl9VUydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5fRU5EUE9JTlRfUVVFUlkpO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0KEFwcFNldHRpbmdzLl9FTkRQT0lOVF9RVUVSWSwgcGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgZGF0ZVRvU3RyaW5nKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuXG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgICAnLScgK1xuICAgICAgKGRhdGUuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgICctJyArXG4gICAgICBkYXRlLmdldERhdGUoKSArXG4gICAgICAnICcgK1xuICAgICAgKGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLmxlbmd0aCA9PT0gMSA/ICcwJyArIGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpIDogZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkpICtcbiAgICAgICc6JyArXG4gICAgICAoZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5sZW5ndGggPT09IDEgPyAnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpIDogZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSkgK1xuICAgICAgJzonICtcbiAgICAgIChkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLmxlbmd0aCA9PT0gMSA/ICcwJyArIGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkgOiBkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEhlYWRlcnMsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBwU2V0dGluZ3MgfSBmcm9tICd+L2FwcC9BcHBTZXR0aW5ncyc7XG4vKipcbiAqIENsYXNlIHBhcmEgY29uZmlndXJhciBzZXJ2aWNpb3MgZ2VuZXJpY29zLCBlc3RhIGNsYXNlIGVzIGhlcmVkYWJsZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmFsU2VydmljZSB7XG4gIHByb3RlY3RlZCBFTkRQT0lOVF9MT0dJTiA9XG4gICAgQXBwU2V0dGluZ3MuX0FQSV9FTkRQT0lOVF9HQVRFV0FZICsgJy93ZWIvc2Vzc2lvbi9hdXRoZW50aWNhdGUnO1xuXG4gIHByb3RlY3RlZCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgcHJvdGVjdGVkIHJlc3B1ZXN0YUh0dHA6IGFueTtcbiAgcHJvdGVjdGVkIHBhcmFtczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogIEZ1bmNpw7NuIHBhcmEgb2J0ZW5lciBkYXRvcyBkYWRvIHVuYSB1cmxcbiAgICpcbiAgICogQHBhcmFtIHVybCBwYXRoIGEgY29uc3VsdGFyIGVsIHNlcnZpY2lvIHdlYlxuICAgKi9cbiAgZ2V0KHVybCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgaGVhZGVyczogQXBwU2V0dGluZ3MuSEVBREVSUyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2h0dHBcbiAgICAgICAgLmdldCh1cmwsIG9wdGlvbnMpXG4gICAgICAgIC8vIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpKVxuICAgICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogIEZ1bmNpw7NuIHBhcmEgb2J0ZW5lciBkYXRvcyBkYWRvIHVuYSB1cmwgeSB1biBhcGkga2V5XG4gICAqXG4gICAqIEBwYXJhbSB1cmwgcGF0aCBhIGNvbnN1bHRhciBlbCBzZXJ2aWNpbyB3ZWJcbiAgICovXG4gIGdldFdpdGhBcGlLZXkodXJsKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvcHRpb25zID0geyBoZWFkZXJzOiBBcHBTZXR0aW5ncy5IRUFERVJTX0FQSV9LRVkgfTtcblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh1cmwsIG9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gcGFyYSBvYnRlbmVyIGRhdG9zIGRhZG8gdW5hIHVybCwgcGVybyBvYnRlbmllbmRvIGVsIHJlc3BvbnNlIGNvbXBsZXRvXG4gICAqIEBwYXJhbSB1cmwgVVJMIGEgbGxhbWFyIGVsIHNlcnZpY2lvXG4gICAqL1xuICBnZXRGdWxsUmVzcG9uc2UodXJsKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KHVybCwge1xuICAgICAgaGVhZGVyczogQXBwU2V0dGluZ3MuSEVBREVSUyxcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jacOzbiBwYXJhIGVudmlhciBkYXRvcywgeWEgc2VhIGVkaWNpw7NuLCBjcmVhciwgZXRjLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHBhdGggYSBjb25zdWx0YXIgZWwgc2VydmljaW8gd2ViXG4gICAqIEBwYXJhbSBwYXJhbXMgY29udGVuaWRvIGRlbCBib2R5IGEgZW52aWFyIGVuIGxhIFVSTCBwb3N0XG4gICAqL1xuICBwb3N0KHVybCwgcGFyYW1zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvcHRpb25zID0geyBoZWFkZXJzOiBBcHBTZXR0aW5ncy5IRUFERVJTIH07XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLnBvc3QodXJsLCBib2R5LCBvcHRpb25zKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY2nDs24gcGFyYSBlbnZpYXIgZGF0b3MsIHlhIHNlYSBlZGljacOzbiwgY3JlYXIsIGV0Yy5cbiAgICpcbiAgICogQHBhcmFtIHVybCBwYXRoIGEgY29uc3VsdGFyIGVsIHNlcnZpY2lvIHdlYlxuICAgKiBAcGFyYW0gcGFyYW1zIGNvbnRlbmlkbyBkZWwgYm9keSBhIGVudmlhciBlbiBsYSBVUkwgcG9zdFxuICAgKi9cbiAgcG9zdFdpdGhBcGlLZXkodXJsLCBwYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGhlYWRlcnM6IEFwcFNldHRpbmdzLkhFQURFUlNfQVBJX0tFWSB9O1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5wb3N0KHVybCwgYm9keSwgb3B0aW9ucylcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmNpw7NuIHBhcmEgZW52aWFyIGRhdG9zLCB5YSBzZWEgZWRpY2nDs24sIGNyZWFyLCBldGMuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgcGF0aCBhIGNvbnN1bHRhciBlbCBzZXJ2aWNpbyB3ZWJcbiAgICogQHBhcmFtIHBhcmFtcyBjb250ZW5pZG8gZGVsIGJvZHkgYSBlbnZpYXIgZW4gbGEgVVJMIHBvc3RcbiAgICovXG4gIHB1dFdpdGhBcGlLZXkodXJsLCBwYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IGhlYWRlcnM6IEFwcFNldHRpbmdzLkhFQURFUlNfQVBJX0tFWSB9O1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5wdXQodXJsLCBib2R5LCBvcHRpb25zKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IuZXJyb3IubWVzc2FnZSk7XG4gICAgXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vbW9kZWwvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuLi9tb2RlbC90YWcubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuICBjb25uZWN0ZWRVc2VyOiBVc2VyO1xuICBjb3VudHJpZXNBcnJheTogQXJyYXk8Q291bnRyeT47XG4gIHRhZ3NBcnJheTogQXJyYXk8VGFnPjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBwU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9BcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyBHZW5lcmFsU2VydmljZSB9IGZyb20gJy4vZ2VuZXJhbC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgR2VuZXJhbFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICBzdXBlcihfaHR0cCk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcjogVXNlciwgZGIxOiBTdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICAgICAgZGI6IGRiMSwgLy8nbWhhcHAwMDFfdGVzdF8yMDIxMDIxNGEnLFxuICAgICAgICAgICAgICAgIGxvZ2luOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChBcHBTZXR0aW5ncy5fRU5EUE9JTlRfTE9HSU4sIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvL3JldHVybiB0aGlzLmtpbnZleVVzZXJTZXJ2aWNlLmxvZ291dCgpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=