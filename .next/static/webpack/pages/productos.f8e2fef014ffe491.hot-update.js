"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productos",{

/***/ "./src/planes/components/ProductsDisplay.tsx":
/*!***************************************************!*\
  !*** ./src/planes/components/ProductsDisplay.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"./src/planes/components/ProductCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst ComponentList = ()=>{\n    _s();\n    const [components, setComponents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Cambia 'any' por el tipo adecuado\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchComponents = async ()=>{\n            const response = await fetch(\"/api/components\"); // Asegúrate de que esta sea la ruta correcta\n            const data = await response.json();\n            setComponents(data);\n        };\n        fetchComponents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: components.map((component)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                component: {\n                    name: component.name,\n                    description: component.category.name,\n                    price: component.price,\n                    hrefViewMore: \"#\",\n                    hrefSelectPlan: \"#\"\n                }\n            }, component.id, false, {\n                fileName: \"C:\\\\Users\\\\luca_\\\\Documents\\\\VSC\\\\proyecto_blanco\\\\src\\\\planes\\\\components\\\\ProductsDisplay.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luca_\\\\Documents\\\\VSC\\\\proyecto_blanco\\\\src\\\\planes\\\\components\\\\ProductsDisplay.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ComponentList, \"vF3BdGKDjYkDrrylP7LnJ0PydYk=\");\n_c = ComponentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentList);\nvar _c;\n$RefreshReg$(_c, \"ComponentList\");\n\n\n;\n    (function() {\n      var _a, _b;\n      if (typeof self !== \"undefined\" && \"$RefreshHelpers$\" in self) {\n        var currentExports = module.exports, prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n          module.hot.dispose(function(data) {\n            data.prevSignature = self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n          });\n          module.hot.accept();\n          if (prevSignature !== null)\n            if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports)))\n              module.hot.invalidate();\n            else\n              self.$RefreshHelpers$.scheduleUpdate();\n        } else {\n          var isNoLongerABoundary = prevSignature !== null;\n          if (isNoLongerABoundary)\n            module.hot.invalidate();\n        }\n      }\n    })();\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxhbmVzL2NvbXBvbmVudHMvUHJvZHVjdHNEaXNwbGF5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNYO0FBRXhDLE1BQU1JLGdCQUFnQjs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFRLEVBQUUsR0FBRyxvQ0FBb0M7SUFFN0ZELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sa0JBQWtCO1lBQ3RCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQkFBb0IsNkNBQTZDO1lBQzlGLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsY0FBY0k7UUFDaEI7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7a0JBQ0VQLFdBQVdRLEdBQUcsQ0FBQyxDQUFDQywwQkFDZiw4REFBQ1gsb0RBQVdBO2dCQUFvQlcsV0FBVztvQkFDekNDLE1BQU1ELFVBQVVDLElBQUk7b0JBQ3BCQyxhQUFhRixVQUFVRyxRQUFRLENBQUNGLElBQUk7b0JBQ3BDRyxPQUFPSixVQUFVSSxLQUFLO29CQUN0QkMsY0FBYztvQkFDZEMsZ0JBQWdCO2dCQUNsQjtlQU5rQk4sVUFBVU8sRUFBRTs7Ozs7Ozs7OztBQVV0QztHQTFCTWpCO0tBQUFBO0FBNEJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wbGFuZXMvY29tcG9uZW50cy9Qcm9kdWN0c0Rpc3BsYXkudHN4PzYzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuL1Byb2R1Y3RDYXJkJztcclxuXHJcbmNvbnN0IENvbXBvbmVudExpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbXBvbmVudHMsIHNldENvbXBvbmVudHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTsgLy8gQ2FtYmlhICdhbnknIHBvciBlbCB0aXBvIGFkZWN1YWRvXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaENvbXBvbmVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY29tcG9uZW50cycpOyAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSBlc3RhIHNlYSBsYSBydXRhIGNvcnJlY3RhXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldENvbXBvbmVudHMoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoQ29tcG9uZW50cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjb21wb25lbnRzLm1hcCgoY29tcG9uZW50KSA9PiAoXHJcbiAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17Y29tcG9uZW50LmlkfSBjb21wb25lbnQ9e3tcclxuICAgICAgICAgIG5hbWU6IGNvbXBvbmVudC5uYW1lLCAvLyBDYW1iaWFkbyBkZSB0aXRsZSBhIG5hbWVcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjb21wb25lbnQuY2F0ZWdvcnkubmFtZSxcclxuICAgICAgICAgIHByaWNlOiBjb21wb25lbnQucHJpY2UsXHJcbiAgICAgICAgICBocmVmVmlld01vcmU6ICcjJywgLy8gQWp1c3RhIHNlZ8O6biB0dSBsw7NnaWNhXHJcbiAgICAgICAgICBocmVmU2VsZWN0UGxhbjogJyMnLCAvLyBBanVzdGEgc2Vnw7puIHR1IGzDs2dpY2FcclxuICAgICAgICB9fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRMaXN0O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0Q2FyZCIsIkNvbXBvbmVudExpc3QiLCJjb21wb25lbnRzIiwic2V0Q29tcG9uZW50cyIsImZldGNoQ29tcG9uZW50cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImRpdiIsIm1hcCIsImNvbXBvbmVudCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicHJpY2UiLCJocmVmVmlld01vcmUiLCJocmVmU2VsZWN0UGxhbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/planes/components/ProductsDisplay.tsx\n"));

/***/ })

});