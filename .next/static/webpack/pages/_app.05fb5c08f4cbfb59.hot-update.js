"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/features/productSlice.js":
/*!********************************************!*\
  !*** ./src/redux/features/productSlice.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCart: function() { return /* binding */ addToCart; },\n/* harmony export */   productSlice: function() { return /* binding */ productSlice; },\n/* harmony export */   removeFromCart: function() { return /* binding */ removeFromCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ \"./node_modules/antd/lib/message/index.js\");\n\n//import type { PayloadAction } from '@reduxjs/toolkit'\n\nconst initialState = {\n    products: []\n};\nconst productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"product\",\n    initialState,\n    reducers: {\n        // addToCart: (state, action) => {\n        //     const matchId = state.products.find(product => product?.id === action.payload?.id)\n        //     if (matchId) {\n        //         state.products.push(action.payload)\n        //     } else {\n        //         console.log(\"product id not match\")\n        //     }\n        // }\n        addToCart: (state, action)=>{\n            const existing = state.products.find((product)=>product.productName === action.payload.productName);\n            if (existing) {\n                antd_lib_message__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Already product exist\");\n            } else {\n                state.products.push(action.payload);\n                antd_lib_message__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success(\"Product added Successfully\");\n            }\n        },\n        removeFromCart: (state, action)=>{\n            state.products = state.products.filter((product)=>product.productName !== action.payload.productName);\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { addToCart, removeFromCart } = productSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvZmVhdHVyZXMvcHJvZHVjdFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzhDO0FBQzlDLHVEQUF1RDtBQUN4QjtBQUUvQixNQUFNRSxlQUFlO0lBQ2pCQyxVQUFVLEVBQUU7QUFDaEI7QUFFTyxNQUFNQyxlQUFlSiw2REFBV0EsQ0FBQztJQUNwQ0ssTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ04sa0NBQWtDO1FBQ2xDLHlGQUF5RjtRQUN6RixxQkFBcUI7UUFDckIsOENBQThDO1FBRTlDLGVBQWU7UUFDZiw4Q0FBOEM7UUFDOUMsUUFBUTtRQUVSLElBQUk7UUFDSkMsV0FBVyxDQUFDQyxPQUFPQztZQUNmLE1BQU1DLFdBQVdGLE1BQU1MLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRQyxXQUFXLEtBQUtKLE9BQU9LLE9BQU8sQ0FBQ0QsV0FBVztZQUNsRyxJQUFJSCxVQUFVO2dCQUNWVCw4REFBYSxDQUFDO1lBQ2xCLE9BQU87Z0JBQ0hPLE1BQU1MLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDUCxPQUFPSyxPQUFPO2dCQUNsQ2IsZ0VBQWUsQ0FBQztZQUNwQjtRQUVKO1FBQ0FpQixnQkFBZ0IsQ0FBQ1YsT0FBT0M7WUFDcEJELE1BQU1MLFFBQVEsR0FBR0ssTUFBTUwsUUFBUSxDQUFDZ0IsTUFBTSxDQUNsQyxDQUFDUCxVQUFZQSxRQUFRQyxXQUFXLEtBQUtKLE9BQU9LLE9BQU8sQ0FBQ0QsV0FBVztRQUV2RTtJQUdKO0FBQ0osR0FBRTtBQUVGLCtEQUErRDtBQUN4RCxNQUFNLEVBQUVOLFNBQVMsRUFBRVcsY0FBYyxFQUFFLEdBQUdkLGFBQWFnQixPQUFPO0FBRWpFLCtEQUFlaEIsYUFBYWlCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2ZlYXR1cmVzL3Byb2R1Y3RTbGljZS5qcz8yMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbi8vaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcHJvZHVjdHM6IFtdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3Byb2R1Y3QnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyBhZGRUb0NhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IG1hdGNoSWQgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKHByb2R1Y3QgPT4gcHJvZHVjdD8uaWQgPT09IGFjdGlvbi5wYXlsb2FkPy5pZClcclxuICAgICAgICAvLyAgICAgaWYgKG1hdGNoSWQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHN0YXRlLnByb2R1Y3RzLnB1c2goYWN0aW9uLnBheWxvYWQpXHJcblxyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGlkIG5vdCBtYXRjaFwiKVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBhZGRUb0NhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gc3RhdGUucHJvZHVjdHMuZmluZChwcm9kdWN0ID0+IHByb2R1Y3QucHJvZHVjdE5hbWUgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3ROYW1lKVxyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0FscmVhZHkgcHJvZHVjdCBleGlzdCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnUHJvZHVjdCBhZGRlZCBTdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUZyb21DYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LnByb2R1Y3ROYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0TmFtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgIH0sXHJcbn0pXHJcblxyXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cclxuZXhwb3J0IGNvbnN0IHsgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCB9ID0gcHJvZHVjdFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwibWVzc2FnZSIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIiwicHJvZHVjdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9DYXJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJleGlzdGluZyIsImZpbmQiLCJwcm9kdWN0IiwicHJvZHVjdE5hbWUiLCJwYXlsb2FkIiwiZXJyb3IiLCJwdXNoIiwic3VjY2VzcyIsInJlbW92ZUZyb21DYXJ0IiwiZmlsdGVyIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/features/productSlice.js\n"));

/***/ })

});