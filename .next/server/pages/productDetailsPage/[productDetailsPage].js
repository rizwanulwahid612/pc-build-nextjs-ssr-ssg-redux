"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 1275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FproductDetailsPage_2F_5BproductDetailsPage_5D_preferredRegion_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductDetailsPage_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2FproductDetailsPage_2F_5BproductDetailsPage_5D_preferredRegion_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductDetailsPage_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2FproductDetailsPage_2F_5BproductDetailsPage_5D_preferredRegion_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductDetailsPage_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/productDetailsPage/[productDetailsPage].js
var _productDetailsPage_namespaceObject = {};
__webpack_require__.r(_productDetailsPage_namespaceObject);
__webpack_require__.d(_productDetailsPage_namespaceObject, {
  "default": () => (_productDetailsPage_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.js
var _document = __webpack_require__(894);
// EXTERNAL MODULE: ./src/pages/_app.js + 1 modules
var _app = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(3800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(2317);
var card_default = /*#__PURE__*/__webpack_require__.n(card_);
// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(8518);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);
// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7050);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);
// EXTERNAL MODULE: external "antd/lib/space"
var space_ = __webpack_require__(7374);
// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__(9973);
var rate_default = /*#__PURE__*/__webpack_require__.n(rate_);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/component/RootLayout.js
var RootLayout = __webpack_require__(8206);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(3299);
// EXTERNAL MODULE: ./src/redux/hooks.js
var hooks = __webpack_require__(1052);
// EXTERNAL MODULE: ./src/redux/features/productSlice.js
var productSlice = __webpack_require__(4655);
;// CONCATENATED MODULE: ./src/pages/productDetailsPage/[productDetailsPage].js















const { Meta } = (card_default());
const ProductDetailsPage = ({ data })=>{
    console.log(data);
    const { data: session } = (0,react.useSession)();
    const { products } = data;
    console.log(products);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleProductClick = (product)=>{
        dispatch((0,productSlice/* addToCart */.Xq)(product));
    };
    // console.log(selectedProduct)
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx((row_default()), {
            gutter: 6,
            style: {
                marginTop: "20px"
            },
            children: products?.map((alldata)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((col_default()), {
                    xs: 24,
                    sm: 24,
                    md: 12,
                    lg: 8,
                    style: {
                        marginBottom: "20px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: `/singleProductDetails/${alldata?.productName}`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((card_default()), {
                                title: "",
                                hoverable: true,
                                cover: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    alt: "example",
                                    src: alldata?.image,
                                    width: 370,
                                    height: 200
                                }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(Meta, {
                                        title: alldata?.featureProduct,
                                        description: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "Product Name:",
                                                        alldata?.productName
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "Category:",
                                                        data?.featureProduct
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "Price:",
                                                        alldata?.price
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        "Status:",
                                                        alldata?.status
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((rate_default()), {
                                        allowHalf: true,
                                        defaultValue: data?.rating
                                    })
                                ]
                            })
                        }),
                        session?.user?.email && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/pccomponent/pcBuilder/pcBuilder",
                            children: /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
                                style: {
                                    width: "100%"
                                },
                                onClick: ()=>handleProductClick(alldata),
                                type: "primary",
                                children: "Add To Builder"
                            })
                        })
                    ]
                }, alldata?.d))
        })
    });
};
ProductDetailsPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(RootLayout/* default */.Z, {
        children: page
    });
};
/* harmony default export */ const _productDetailsPage_ = (ProductDetailsPage);
const getStaticPaths = async ()=>{
    const res = await fetch("http://localhost:5000/alldata");
    const data = await res.json();
    const paths = data.map((products)=>({
            params: {
                productDetailsPage: products.featureProduct
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const { params } = context;
    const res = await fetch(`http://localhost:5000/alldata/${params.productDetailsPage}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FproductDetailsPage%2F%5BproductDetailsPage%5D&preferredRegion=&absolutePagePath=private-next-pages%2FproductDetailsPage%2F%5BproductDetailsPage%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FproductDetailsPage_2F_5BproductDetailsPage_5D_preferredRegion_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductDetailsPage_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2FproductDetailsPage_2F_5BproductDetailsPage_5D_preferredRegion_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductDetailsPage_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2FproductDetailsPage_2F_5BproductDetailsPage_5D_preferredRegion_absolutePagePath_private_next_pages_2FproductDetailsPage_2F_5BproductDetailsPage_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_productDetailsPage_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/productDetailsPage/[productDetailsPage]",
        pathname: "/productDetailsPage/[productDetailsPage]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _productDetailsPage_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 1052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 1470:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/DownOutlined");

/***/ }),

/***/ 2458:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/MenuOutlined");

/***/ }),

/***/ 1265:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/SmileOutlined");

/***/ }),

/***/ 2127:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/UserOutlined");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 5998:
/***/ ((module) => {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ 3800:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 2317:
/***/ ((module) => {

module.exports = require("antd/lib/card");

/***/ }),

/***/ 8518:
/***/ ((module) => {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 8000:
/***/ ((module) => {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ 1788:
/***/ ((module) => {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 5417:
/***/ ((module) => {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ 274:
/***/ ((module) => {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 628:
/***/ ((module) => {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ 9973:
/***/ ((module) => {

module.exports = require("antd/lib/rate");

/***/ }),

/***/ 7050:
/***/ ((module) => {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 7374:
/***/ ((module) => {

module.exports = require("antd/lib/space");

/***/ }),

/***/ 6653:
/***/ ((module) => {

module.exports = require("antd/lib/theme");

/***/ }),

/***/ 9348:
/***/ ((module) => {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ 4324:
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ 4610:
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [26,664,636,675,939,206], () => (__webpack_exec__(1275)));
module.exports = __webpack_exports__;

})();