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

/***/ "./src/Control.js":
/*!************************!*\
  !*** ./src/Control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Control\": () => (/* binding */ Control)\n/* harmony export */ });\nclass Control {\r\n\r\n    constructor() {\r\n        this._DOWN = { x: 0, y: 10 };\r\n        this._UP = { x: 0, y: -10 };\r\n        this._RIGHT = { x: 10, y: 0 };\r\n        this._LEFT = { x: -10, y: 0 };\r\n        this._currentDirection = this._RIGHT;\r\n    }\r\n\r\n    EventHandler() {\r\n        document.addEventListener('keydown', (event) => {\r\n            switch(event.key) {\r\n                case 'ArrowUp':\r\n                    this._currentDirection = this._UP;\r\n                    break;\r\n                case 'ArrowDown':\r\n                    this._currentDirection = this._DOWN;\r\n                    break;\r\n                case 'ArrowLeft':\r\n                    this._currentDirection = this._LEFT;\r\n                    break;\r\n                case 'ArrowRight':\r\n                    this._currentDirection = this._RIGHT;\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n\r\n    GetCurrentDirection() {\r\n        return this._currentDirection;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/Control.js?");

/***/ }),

/***/ "./src/Draw.js":
/*!*********************!*\
  !*** ./src/Draw.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Draw\": () => (/* binding */ Draw)\n/* harmony export */ });\n/* harmony import */ var _MathHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathHelper */ \"./src/MathHelper.js\");\n\r\n\r\nclass Draw {\r\n\r\n    constructor(canvas) {\r\n        this._canvas = canvas;\r\n        this._ctx = canvas.getContext('2d');\r\n    }\r\n\r\n    DrawRectangle(params) {\r\n        this._ctx.beginPath();\r\n        this._ctx.fillStyle = params.color;\r\n        this._ctx.rect(params.x, params.y, params.width, params.height);\r\n        this._ctx.fill();\r\n        this._ctx.closePath();\r\n    }\r\n\r\n    ClearRectangle(params) {\r\n        this._ctx.beginPath();\r\n        this._ctx.fillStyle = '#ffffff';\r\n        this._ctx.rect(params.x, params.y, params.width, params.height);\r\n        this._ctx.fill();\r\n        this._ctx.closePath();\r\n    }\r\n\r\n    Background() {\r\n        return {\r\n            color: '#ffffff', \r\n            x: 0,\r\n            y: 0, \r\n            width: 400, \r\n            height: 400\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/Draw.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control */ \"./src/Control.js\");\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draw */ \"./src/Draw.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n\r\n    constructor() {\r\n        // Canvas\r\n        this._Draw = new _Draw__WEBPACK_IMPORTED_MODULE_1__.Draw(document.getElementById('snake'));\r\n\r\n        // Background\r\n        this._Draw.DrawRectangle(this._Draw.Background())\r\n\r\n        // Snake\r\n        this._Snake = new _Snake__WEBPACK_IMPORTED_MODULE_2__.Snake();\r\n        this._Draw.DrawRectangle(this._Snake.DrawConfig());\r\n\r\n        // Control\r\n        this._Control = new _Control__WEBPACK_IMPORTED_MODULE_0__.Control();\r\n        this._Control.EventHandler();\r\n    }\r\n\r\n    Game() {\r\n        this._Snake.Move(this._Control.GetCurrentDirection());\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/Game.js?");

/***/ }),

/***/ "./src/MathHelper.js":
/*!***************************!*\
  !*** ./src/MathHelper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MathHelper\": () => (/* binding */ MathHelper)\n/* harmony export */ });\nclass MathHelper {\r\n\r\n    constructor() {\r\n\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {number} min Minimum value is inclusive\r\n     * @param {number} max Maximum Value is exclusive\r\n     */\r\n    static GetRandomInt(min, max) {\r\n        min = Math.ceil(min);\r\n        max = Math.floor(max);\r\n\r\n        return Math.floor(Math.random() * (max - min) + min);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/MathHelper.js?");

/***/ }),

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Snake\": () => (/* binding */ Snake)\n/* harmony export */ });\n/* harmony import */ var _MathHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathHelper */ \"./src/MathHelper.js\");\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draw */ \"./src/Draw.js\");\n\r\n\r\n\r\nclass Snake {\r\n\r\n    constructor() {\r\n        this._x = _MathHelper__WEBPACK_IMPORTED_MODULE_0__.MathHelper.GetRandomInt(0, 40) * 10;\r\n        this._y = _MathHelper__WEBPACK_IMPORTED_MODULE_0__.MathHelper.GetRandomInt(0, 40) * 10;\r\n        this._size = 1;\r\n\r\n        this._Draw = new _Draw__WEBPACK_IMPORTED_MODULE_1__.Draw(document.getElementById('snake'));\r\n    }\r\n\r\n    DrawConfig() {\r\n        return {\r\n            color: '#333333', \r\n            x: this._x,\r\n            y: this._y, \r\n            width: 10, \r\n            height: 10\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Coordinate representing the snake direction\r\n     * @param {object} coord { x: number, y: number }\r\n     * \r\n     */\r\n    Move(coord) {\r\n        this._Draw.ClearRectangle(this.DrawConfig());\r\n\r\n        this._x += coord.x;\r\n        this._y += coord.y;\r\n\r\n        // Allow the snake to go throught the canvas size\r\n        this._x = (this._x === 400) ? 0 : this._x;\r\n        this._y = (this._y === 400) ? 0 : this._y;\r\n        this._x = (this._x === -10) ? 390 : this._x;\r\n        this._y = (this._y === -10) ? 390 : this._y;\r\n        \r\n        this._Draw.DrawRectangle(this.DrawConfig());\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://js-snake/./src/Snake.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\r\n\r\nlet _APP = null;\r\n\r\nclass SnakeJS extends _Game__WEBPACK_IMPORTED_MODULE_0__.Game {\r\n\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n    Play() {\r\n        setInterval(() => {\r\n            this.Game();\r\n        }, 100)\r\n    }\r\n\r\n}\r\n\r\nfunction Main() {\r\n    _APP = new SnakeJS();\r\n    _APP.Play();\r\n}\r\n\r\nMain();\n\n//# sourceURL=webpack://js-snake/./src/index.js?");

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