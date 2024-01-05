"use strict";
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/api/api.js
var api = __webpack_require__(163);
// EXTERNAL MODULE: ./src/redux/features/productSlice.js
var productSlice = __webpack_require__(4655);
;// CONCATENATED MODULE: ./src/redux/store.js



const store = (0,toolkit_.configureStore)({
    reducer: {
        product: productSlice/* default */.ZP,
        [api/* apiSlice */.gk.reducerPath]: api/* apiSlice */.gk.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api/* apiSlice */.gk.middleware)
});

// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(3299);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/pages/_app.js




function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime.jsx(react.SessionProvider, {
                session: session,
                children: getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                }))
            })
        ]
    });
}


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gk: () => (/* binding */ apiSlice)
/* harmony export */ });
/* unused harmony exports useGetAlldataQuery, useGetProductByIdQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

// Define a service using a base URL and expected endpoints
const apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "api",
    //baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000` }),
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: `${process.env.URL}/`
    }),
    endpoints: (builder)=>({
            getAlldata: builder.query({
                query: ()=>`/alldata`
            }),
            getProductById: builder.query({
                query: (id)=>`/alldata/${id}`
            })
        })
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
const { useGetAlldataQuery, useGetProductByIdQuery } = apiSlice;


/***/ }),

/***/ 4655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LL: () => (/* binding */ clearCart),
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   h2: () => (/* binding */ removeFromCart)
/* harmony export */ });
/* unused harmony export productSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);

//import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    products: []
};
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const existing = state.products.find((product)=>product.productName === action.payload.productName);
            if (existing) {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().error("Already product exist");
            } else {
                state.products.push(action.payload);
                antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success("Product added Successfully");
            }
        },
        removeFromCart: (state, action)=>{
            state.products = state.products.filter((product)=>product.productName !== action.payload.productName);
        },
        clearCart: (state)=>{
            state.products = [];
        }
    }
});
// Action creators are generated for each case reducer function
const { addToCart, removeFromCart, clearCart } = productSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ })

};
;