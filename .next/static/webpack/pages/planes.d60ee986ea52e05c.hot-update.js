"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/planes",{

/***/ "./src/planes/components/PlansSection.tsx":
/*!************************************************!*\
  !*** ./src/planes/components/PlansSection.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardPlanSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardPlanSection */ \"./src/planes/components/CardPlanSection.tsx\");\n// src/components/ComponentList.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst ComponentList = ()=>{\n    _s();\n    const [components, setComponents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Cambia 'any' por el tipo adecuado\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchComponents = async ()=>{\n            const response = await fetch(\"/api\");\n            const data = await response.json();\n            setComponents(data);\n        };\n        fetchComponents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: components.map((component)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardPlanSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: {\n                    title: component.name,\n                    description: component.category.name,\n                    price: component.price,\n                    hrefViewMore: \"#\",\n                    hrefSelectPlan: \"#\"\n                }\n            }, component.id, false, {\n                fileName: \"C:\\\\Users\\\\luca_\\\\Documents\\\\VSC\\\\proyecto_blanco\\\\src\\\\planes\\\\components\\\\PlansSection.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luca_\\\\Documents\\\\VSC\\\\proyecto_blanco\\\\src\\\\planes\\\\components\\\\PlansSection.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ComponentList, \"vF3BdGKDjYkDrrylP7LnJ0PydYk=\");\n_c = ComponentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentList);\nvar _c;\n$RefreshReg$(_c, \"ComponentList\");\n\n\n;\n    (function() {\n      var _a, _b;\n      if (typeof self !== \"undefined\" && \"$RefreshHelpers$\" in self) {\n        var currentExports = module.exports, prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n          module.hot.dispose(function(data) {\n            data.prevSignature = self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n          });\n          module.hot.accept();\n          if (prevSignature !== null)\n            if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports)))\n              module.hot.invalidate();\n            else\n              self.$RefreshHelpers$.scheduleUpdate();\n        } else {\n          var isNoLongerABoundary = prevSignature !== null;\n          if (isNoLongerABoundary)\n            module.hot.invalidate();\n        }\n      }\n    })();\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxhbmVzL2NvbXBvbmVudHMvUGxhbnNTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUM7OztBQUVnQjtBQUNIO0FBRWhELE1BQU1JLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFRLEVBQUUsR0FBRyxvQ0FBb0M7SUFFN0ZELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sa0JBQWtCO1lBQ3RCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLGNBQWNJO1FBQ2hCO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO2tCQUNFUCxXQUFXUSxHQUFHLENBQUMsQ0FBQ0MsMEJBQ2YsOERBQUNYLHdEQUFlQTtnQkFBb0JZLE1BQU07b0JBQ3hDQyxPQUFPRixVQUFVRyxJQUFJO29CQUNyQkMsYUFBYUosVUFBVUssUUFBUSxDQUFDRixJQUFJO29CQUNwQ0csT0FBT04sVUFBVU0sS0FBSztvQkFDdEJDLGNBQWM7b0JBQ2RDLGdCQUFnQjtnQkFDbEI7ZUFOc0JSLFVBQVVTLEVBQUU7Ozs7Ozs7Ozs7QUFVMUM7R0ExQk1uQjtLQUFBQTtBQTRCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGxhbmVzL2NvbXBvbmVudHMvUGxhbnNTZWN0aW9uLnRzeD81ZTExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL0NvbXBvbmVudExpc3QudHN4XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmRQbGFuU2VjdGlvbiBmcm9tICcuL0NhcmRQbGFuU2VjdGlvbic7XHJcblxyXG5jb25zdCBDb21wb25lbnRMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb21wb25lbnRzLCBzZXRDb21wb25lbnRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7IC8vIENhbWJpYSAnYW55JyBwb3IgZWwgdGlwbyBhZGVjdWFkb1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDb21wb25lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldENvbXBvbmVudHMoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoQ29tcG9uZW50cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjb21wb25lbnRzLm1hcCgoY29tcG9uZW50KSA9PiAoXHJcbiAgICAgICAgPENhcmRQbGFuU2VjdGlvbiBrZXk9e2NvbXBvbmVudC5pZH0gaXRlbT17e1xyXG4gICAgICAgICAgdGl0bGU6IGNvbXBvbmVudC5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNvbXBvbmVudC5jYXRlZ29yeS5uYW1lLFxyXG4gICAgICAgICAgcHJpY2U6IGNvbXBvbmVudC5wcmljZSxcclxuICAgICAgICAgIGhyZWZWaWV3TW9yZTogJyMnLCAvLyBBanVzdGEgc2Vnw7puIHR1IGzDs2dpY2FcclxuICAgICAgICAgIGhyZWZTZWxlY3RQbGFuOiAnIycsIC8vIEFqdXN0YSBzZWfDum4gdHUgbMOzZ2ljYVxyXG4gICAgICAgIH19IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZFBsYW5TZWN0aW9uIiwiQ29tcG9uZW50TGlzdCIsImNvbXBvbmVudHMiLCJzZXRDb21wb25lbnRzIiwiZmV0Y2hDb21wb25lbnRzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGl2IiwibWFwIiwiY29tcG9uZW50IiwiaXRlbSIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJwcmljZSIsImhyZWZWaWV3TW9yZSIsImhyZWZTZWxlY3RQbGFuIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/planes/components/PlansSection.tsx\n"));

/***/ })

});