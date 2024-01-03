(() => {
var exports = {};
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 2382:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "singleProductDetails_container__i30td"
};


/***/ }),

/***/ 7869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FsingleProductDetails_2F_5BsingleProductDetails_5D_preferredRegion_absolutePagePath_private_next_pages_2FsingleProductDetails_2F_5BsingleProductDetails_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2FsingleProductDetails_2F_5BsingleProductDetails_5D_preferredRegion_absolutePagePath_private_next_pages_2FsingleProductDetails_2F_5BsingleProductDetails_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2FsingleProductDetails_2F_5BsingleProductDetails_5D_preferredRegion_absolutePagePath_private_next_pages_2FsingleProductDetails_2F_5BsingleProductDetails_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/singleProductDetails/[singleProductDetails].js
var _singleProductDetails_namespaceObject = {};
__webpack_require__.r(_singleProductDetails_namespaceObject);
__webpack_require__.d(_singleProductDetails_namespaceObject, {
  "default": () => (_singleProductDetails_),
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
// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(2317);
var card_default = /*#__PURE__*/__webpack_require__.n(card_);
// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(8518);
// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7050);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);
// EXTERNAL MODULE: external "antd/lib/rate"
var rate_ = __webpack_require__(9973);
var rate_default = /*#__PURE__*/__webpack_require__.n(rate_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/component/RootLayout.js
var RootLayout = __webpack_require__(8206);
// EXTERNAL MODULE: ./src/pages/singleProductDetails/singleProductDetails.module.css
var singleProductDetails_module = __webpack_require__(2382);
var singleProductDetails_module_default = /*#__PURE__*/__webpack_require__.n(singleProductDetails_module);
;// CONCATENATED MODULE: ./src/pages/singleProductDetails/[singleProductDetails].js










const { Meta } = (card_default());

const SingleProductDetailsPage = ({ data })=>{
    console.log(data);
    const { productName, image, status, price, description, averageRating, individualRating, keyFeatures, review } = data;
    return /*#__PURE__*/ jsx_runtime.jsx((row_default()), {
        gutter: 6,
        style: {
            margin: "20px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (singleProductDetails_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    alt: "example",
                    src: image,
                    width: "100%",
                    height: 500
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Meta, {
                    title: productName,
                    description: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: productName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                children: [
                                    " ",
                                    description
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                children: [
                                    "Price: ",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                children: [
                                    "Status: ",
                                    status
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "key Features:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Brand: ",
                                    keyFeatures.brand
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Model: ",
                                    keyFeatures.model
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Port: ",
                                    keyFeatures.port
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Type: ",
                                    keyFeatures.type
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Voltage: ",
                                    keyFeatures.voltage
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: "Average Rating:"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((rate_default()), {
                                allowHalf: true,
                                defaultValue: averageRating
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: "Individual Rating:"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((rate_default()), {
                                allowHalf: true,
                                defaultValue: individualRating
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                children: [
                                    "Review: ",
                                    review
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
SingleProductDetailsPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(RootLayout/* default */.Z, {
        children: page
    });
};
/* harmony default export */ const _singleProductDetails_ = (SingleProductDetailsPage);
async function getStaticPaths() {
    const res = await fetch(`http://localhost:5000/allProducts`);
    const products = await res.json();
    const paths = products.map((product)=>({
            params: {
                singleProductDetails: product?.productName
            }
        }));
    return {
        paths,
        fallback: false
    }; // fallback: false means that pages that don't have pre-generated static versions will result in a 404 page
}
async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/allProducts/${params?.singleProductDetails}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
} // import React from 'react'
 // import { Button, Card, Col, Row } from 'antd';
 // import Link from 'next/link';
 // import Image from 'next/image';
 // import RootLayout from '@/component/RootLayout';
 // const { Meta } = Card;
 // const SingleProductDetailsPage = ({ data }) => {
 //     console.log(data)
 //     const { id, productName, image, status, price, description, avarageRating, individualRating, keyFeatures, review } = data
 //     return (
 //         <div xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'space-between', gap: "50px", marginTop: '20px' }}>
 //             <img alt="example" src={image} width={370} height={200} />
 //             <Meta title={productName} description={<><p>description:{description}</p><p>Price:{price}</p><p>Status:{status}</p><p>Review:{review}</p></>} />
 //         </div>
 //     )
 // }
 // SingleProductDetailsPage.getLayout = function getLayout(page) {
 //     return (
 //         <RootLayout>
 //             {page}
 //         </RootLayout>
 //     )
 // }
 // export default SingleProductDetailsPage
 // export const getServerSideProps = async (context) => {
 //     const { params } = context;
 //     const res = await fetch(`http://localhost:5000/getProductByName/${params.singleProductDetails}`);
 //     const data = await res.json();
 //     return {
 //         props: {
 //             data,
 //         }
 //     }
 // }

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FsingleProductDetails%2F%5BsingleProductDetails%5D&preferredRegion=&absolutePagePath=private-next-pages%2FsingleProductDetails%2F%5BsingleProductDetails%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FsingleProductDetails_2F_5BsingleProductDetails_5D_preferredRegion_absolutePagePath_private_next_pages_2FsingleProductDetails_2F_5BsingleProductDetails_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2FsingleProductDetails_2F_5BsingleProductDetails_5D_preferredRegion_absolutePagePath_private_next_pages_2FsingleProductDetails_2F_5BsingleProductDetails_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2FsingleProductDetails_2F_5BsingleProductDetails_5D_preferredRegion_absolutePagePath_private_next_pages_2FsingleProductDetails_2F_5BsingleProductDetails_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_singleProductDetails_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/singleProductDetails/[singleProductDetails]",
        pathname: "/singleProductDetails/[singleProductDetails]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _singleProductDetails_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 1470:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons/lib/icons/DownOutlined");

/***/ }),

/***/ 2458:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons/lib/icons/MenuOutlined");

/***/ }),

/***/ 1265:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons/lib/icons/SmileOutlined");

/***/ }),

/***/ 2127:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons/lib/icons/UserOutlined");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 5998:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/avatar");

/***/ }),

/***/ 3800:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/button");

/***/ }),

/***/ 2317:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/card");

/***/ }),

/***/ 8518:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/col");

/***/ }),

/***/ 8000:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/drawer");

/***/ }),

/***/ 1788:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 5417:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/layout");

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 628:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popover");

/***/ }),

/***/ 9973:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/rate");

/***/ }),

/***/ 7050:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/row");

/***/ }),

/***/ 7374:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/space");

/***/ }),

/***/ 6653:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/theme");

/***/ }),

/***/ 9348:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ 4324:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ 4610:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 830:
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [26,664,636,675,939,206], () => (__webpack_exec__(7869)));
module.exports = __webpack_exports__;

})();