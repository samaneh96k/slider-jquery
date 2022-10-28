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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\nconst container = $(\".slide-container\");\nconst nextBtn = $(\".next-btn\");\nconst prevBtn = $(\".prev-btn\");\n// if length is 1 hide buttons\nif (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length === 1) {\n  nextBtn.style.display = \"none\";\n  prevBtn.style.display = \"none\";\n}\n// if length is 2, add copies of slides\nlet people = [..._data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\nif (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length === 2) {\n  people = [..._data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], ..._data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n}\nconsole.log(people);\ncontainer.html(\n  people\n    .map((person, index) => {\n      const { img, name, job, text } = person;\n      let position = \"next\";\n      if (index === 0) {\n        position = \"active\";\n      }\n      if (index === people.length - 1) {\n        position = \"last\";\n      }\n      if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length <= 1) {\n        position = \"active\";\n      }\n      return `<article class=\"slide ${position}\">\n  <img src=${img} class=\"img\" alt=\"${name}\"/>\n  <h4>${name}</h4>\n  <p class=\"title\">${job}</p>\n  <p class=\"text\">\n   ${text}\n  </p>\n<div class=\"quote-icon\">\n<i class=\"fas fa-quote-right\"></i>\n</div>\n </article>`;\n    })\n    .join(\"\")\n);\n\nconst startSlider = type => {\n  // get all three slides active,last next\n  const active = $(\".active\");\n  const last = $(\".last\");\n  let next = active.next();\n  console.log(next);\n  if (next.length == 0) {\n    next = container.children(\":first\");\n    console.log(next);\n  }\n  active.removeClass(\"active\");\n  last.removeClass(\"last\");\n  next.removeClass(\"next\");\n\n  if (type === \"prev\") {\n    active.addClass(\"next\");\n    last.addClass(\"active\");\n    next = last.prev();\n    if (!next) {\n      next = container.children(\":last-child\");\n    }\n    next.removeClass(\"next\");\n    next.addClass(\"last\");\n    return;\n  }\n  active.addClass(\"last\");\n  last.addClass(\"next\");\n  next.addClass(\"active\");\n};\nnextBtn.click(startSlider);\nprevBtn.click(() => startSlider(\"prev\"));\n\n\n//# sourceURL=webpack://final/./src/app.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_69767_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/69767.png */ \"./src/img/69767.png\");\n/* harmony import */ var _img_102792_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/102792.png */ \"./src/img/102792.png\");\n/* harmony import */ var _img_57497_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/57497.png */ \"./src/img/57497.png\");\n\n\n\nconst people = [\n  {\n    img:\n     _img_69767_png__WEBPACK_IMPORTED_MODULE_0__,\n    name: \" علی\",\n    job: \" مدیر پروژه\",\n    text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.    `,\n  },\n  {\n    img:\n      _img_102792_png__WEBPACK_IMPORTED_MODULE_1__,\n    name: \"سعید \",\n    job: \"توسعه دهنده\",\n    text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. `,\n  },\n  {\n    img:\n      _img_57497_png__WEBPACK_IMPORTED_MODULE_2__,\n    name: \" دنیا\",\n    job: \"طراح\",\n    text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.    `,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (people);\n\n\n//# sourceURL=webpack://final/./src/data.js?");

/***/ }),

/***/ "./src/img/102792.png":
/*!****************************!*\
  !*** ./src/img/102792.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/146758f80f01738af9fb.png\";\n\n//# sourceURL=webpack://final/./src/img/102792.png?");

/***/ }),

/***/ "./src/img/57497.png":
/*!***************************!*\
  !*** ./src/img/57497.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/3b9d66d3db2b080fa573.png\";\n\n//# sourceURL=webpack://final/./src/img/57497.png?");

/***/ }),

/***/ "./src/img/69767.png":
/*!***************************!*\
  !*** ./src/img/69767.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/2fa189e608d4524fa95a.png\";\n\n//# sourceURL=webpack://final/./src/img/69767.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;