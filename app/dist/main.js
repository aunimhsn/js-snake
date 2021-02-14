/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Draw.js":
/*!*********************!*\
  !*** ./src/Draw.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Draw\": () => (/* binding */ Draw)\n/* harmony export */ });\nclass Draw {\r\n\r\n    constructor(canvas) {\r\n        this._canvas = canvas;\r\n        this._ctx = canvas.getContext('2d');\r\n    }\r\n\r\n    Draw(params) {\r\n        this._ctx.beginPath();\r\n        this._ctx.fillStyle = params.color;\r\n        this._ctx.rect(params.x, params.y, params.width, params.height);\r\n        this._ctx.fill();\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/Draw.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ \"./src/Draw.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\n\r\n\r\n\r\nclass Game {\r\n\r\n    constructor() {\r\n        this._Initialize()\r\n        \r\n        this._Draw = new _Draw__WEBPACK_IMPORTED_MODULE_0__.Draw(this._canvas);\r\n        this._Draw.Draw({\r\n            color: '#ffffff', \r\n            x: 0, \r\n            y: 0, \r\n            width: this._canvasWidth, \r\n            height: this._canvasHeight\r\n        });\r\n\r\n        this._Draw.Draw(_Snake__WEBPACK_IMPORTED_MODULE_1__.Snake.GetConfig());\r\n    }\r\n\r\n    _Initialize() {\r\n        this._canvas = document.getElementById('snake');\r\n        this._canvasWidth = this._canvas.width;\r\n        this._canvasHeight = this._canvas.height;\r\n        this._ctx = this._canvas.getContext('2d');\r\n        this._scale = 10;\r\n        this._rows = this._canvasHeight / this._scale;\r\n        this._columns = this._canvasWidth / this._scale;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/Game.js?");

/***/ }),

/***/ "./src/MathHelper.js":
/*!***************************!*\
  !*** ./src/MathHelper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MathHelper\": () => (/* binding */ MathHelper)\n/* harmony export */ });\nclass MathHelper {\r\n\r\n    constructor() {\r\n\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param { Minimum value is inclusive } min \r\n     * @param { Maximum value is exclusive } max \r\n     */\r\n    static GetRandomInt(min, max) {\r\n        min = Math.ceil(min);\r\n        max = Math.floor(max);\r\n\r\n        return Math.floor(Math.random() * (max - min) + min);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/MathHelper.js?");

/***/ }),

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Snake\": () => (/* binding */ Snake)\n/* harmony export */ });\n/* harmony import */ var _MathHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathHelper */ \"./src/MathHelper.js\");\n\r\n\r\nclass Snake {\r\n\r\n    static GetConfig() {\r\n        return {\r\n            color: '#333333', \r\n            x: _MathHelper__WEBPACK_IMPORTED_MODULE_0__.MathHelper.GetRandomInt(0, 40) * 10,\r\n            y: _MathHelper__WEBPACK_IMPORTED_MODULE_0__.MathHelper.GetRandomInt(0, 40) * 10, \r\n            width: 10, \r\n            height: 10\r\n        }\r\n    };\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/Snake.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\r\n\r\nlet _APP = null;\r\n\r\nclass Snake extends _Game__WEBPACK_IMPORTED_MODULE_0__.Game {\r\n\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n}\r\n\r\nfunction _Main() {\r\n    _APP = new Snake();\r\n}\r\n\r\n_Main();\n\n//# sourceURL=webpack://js-snake/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;