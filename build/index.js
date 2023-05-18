/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Banner.js":
/*!***********************!*\
  !*** ./src/Banner.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slide */ "./src/Slide.js");



function Banner() {
  const [slideIndex, setSlideIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [slideComponents, setSlideComponents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const arrow = {
    enabled: {
      bg: 'bg-lightBlue',
      stroke: '#FFF',
      strokeOpacity: '1'
    },
    disabled: {
      bg: 'bg-gray/50',
      stroke: 'rgba(33, 33, 33, 0.65)',
      strokeOpacity: '0.65'
    }
  };
  let API_URL = 'http://cme.kodadesigns.net/wp-json/wp/v2/pages?parent=6&_embed';
  if (true) {
    API_URL = 'http://cme.local/wp-json/wp/v2/pages?parent=6&_embed';
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    try {
      const response = await fetch(API_URL);
      const pagesArray = await response.json();
      setSlideComponents(pagesArray.toSorted((a, b) => a.menu_order - b.menu_order).map(page => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Slide__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: page.id,
        page: page
      })));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `h-12 w-12 rounded-full ${slideIndex > 0 ? arrow.enabled.bg : arrow.disabled.bg} absolute top-1/2 left-16 -translate-y-1/2`,
    onClick: () => {
      if (slideIndex > 0) {
        setSlideIndex(slideIndex - 1);
      }
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "13",
    height: "21",
    viewBox: "0 0 13 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "translate-x-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.5 19.5L3.48522 13.3068C1.95826 12.1268 1.92633 9.83301 3.41985 8.61103L11.5 2",
    stroke: slideIndex > 0 ? arrow.enabled.stroke : arrow.disabled.stroke,
    "stroke-opacity": slideIndex > 0 ? arrow.enabled.strokeOpacity : arrow.disabled.strokeOpacity,
    "stroke-width": "3",
    "stroke-linecap": "round"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex"
  }, slideComponents[slideIndex]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `h-12 w-12 rounded-full ${slideIndex < slideComponents?.length - 1 ? arrow.enabled.bg : arrow.disabled.bg} absolute top-1/2 right-16 -translate-y-1/2`,
    onClick: () => {
      if (slideIndex < slideComponents?.length - 1) {
        setSlideIndex(slideIndex + 1);
      }
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "13",
    height: "21",
    viewBox: "0 0 13 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "translate-x-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1.5 2L9.51478 8.19324C11.0417 9.37316 11.0737 11.667 9.58015 12.889L1.5 19.5",
    stroke: slideIndex < slideComponents?.length - 1 ? arrow.enabled.stroke : arrow.disabled.stroke,
    "stroke-opacity": slideIndex < slideComponents?.length - 1 ? arrow.enabled.strokeOpacity : arrow.disabled.strokeOpacity,
    "stroke-width": "3",
    "stroke-linecap": "round"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2"
  }, slideComponents?.map((slideComponent, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: slideComponent.key,
    className: `h-3 w-3 border-white rounded-full border-2 ${slideIndex === i ? 'bg-darkGray' : 'bg-white'}`
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./src/Slide.js":
/*!**********************!*\
  !*** ./src/Slide.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slide)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Slide(_ref) {
  let {
    page
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-[700px] w-screen bg-cover bg-center grow shrink-0",
    style: {
      backgroundImage: `linear-gradient(rgba(27, 33, 52, 0.5), rgba(27, 33, 52, 0.5)), url(${page._embedded['wp:featuredmedia'] && page._embedded['wp:featuredmedia'][0].source_url}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mx-44 text-white w-full"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute top-1/2 -translate-y-1/2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "max-w-5xl font-forum text-6xl mb-8",
    dangerouslySetInnerHTML: {
      __html: page.excerpt.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: page.link,
    className: "mb-8"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "h-12 w-48 bg-white/100 text-darkBlue font-medium rounded-full"
  }, "Learn more")))));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner */ "./src/Banner.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);




if (document.querySelector('#render-react-slider')) {
  react_dom__WEBPACK_IMPORTED_MODULE_3___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.querySelector('#render-react-slider'));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map