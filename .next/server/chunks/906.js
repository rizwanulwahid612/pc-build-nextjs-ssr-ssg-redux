"use strict";
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3029);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2__);



const images = [
    "https://media.istockphoto.com/id/1190641416/photo/streaming-live-esport-event-on-computer-at-home.jpg?s=612x612&w=0&k=20&c=llsUBVdhL9uJHlDCrxbqWu1DD22sUWMSvab88NtXuN8=",
    "https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=612x612&w=0&k=20&c=d_xKRis8Ccy90gbqCjScpuAEVOvpQN0kdnBxA_H9zRs="
];
const Banner = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
        autoplay: true,
        children: images.map((imageUrl, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    background: "#364d79"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: imageUrl,
                    alt: `Image ${index + 1}`,
                    style: {
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "100%",
                        height: "440px",
                        marginTop: "20px"
                    }
                })
            }, index))
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ })

};
;