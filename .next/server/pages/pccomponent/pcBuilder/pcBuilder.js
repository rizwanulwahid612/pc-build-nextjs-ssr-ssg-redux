(() => {
var exports = {};
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 5944:
/***/ ((module) => {

// Exports
module.exports = {
	"ant_table": "PcBuilder_ant_table__JUafy",
	"ant_card": "PcBuilder_ant_card__oDIDD",
	"custom-card-extra-button": "PcBuilder_custom-card-extra-button__5y_fm",
	"expanded-row-content": "PcBuilder_expanded-row-content__uwv7j",
	"complete-build-button": "PcBuilder_complete-build-button__zwFwv"
};


/***/ }),

/***/ 8412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fpccomponent_2FpcBuilder_2FpcBuilder_preferredRegion_absolutePagePath_private_next_pages_2Fpccomponent_2FpcBuilder_2FpcBuilder_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fpccomponent_2FpcBuilder_2FpcBuilder_preferredRegion_absolutePagePath_private_next_pages_2Fpccomponent_2FpcBuilder_2FpcBuilder_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/pccomponent/pcBuilder/pcBuilder.js
var pcBuilder_namespaceObject = {};
__webpack_require__.r(pcBuilder_namespaceObject);
__webpack_require__.d(pcBuilder_namespaceObject, {
  "default": () => (pcBuilder),
  getServerSideProps: () => (getServerSideProps)
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
;// CONCATENATED MODULE: external "antd/lib/float-button"
const float_button_namespaceObject = require("antd/lib/float-button");
// EXTERNAL MODULE: external "antd/lib/space"
var space_ = __webpack_require__(7374);
var space_default = /*#__PURE__*/__webpack_require__.n(space_);
;// CONCATENATED MODULE: external "antd/lib/table"
const table_namespaceObject = require("antd/lib/table");
var table_default = /*#__PURE__*/__webpack_require__.n(table_namespaceObject);
;// CONCATENATED MODULE: external "antd/lib/tag"
const tag_namespaceObject = require("antd/lib/tag");
// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__(5998);
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);
;// CONCATENATED MODULE: external "antd/lib/badge"
const badge_namespaceObject = require("antd/lib/badge");
var badge_default = /*#__PURE__*/__webpack_require__.n(badge_namespaceObject);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: ./src/component/RootLayout.js
var RootLayout = __webpack_require__(8206);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@ant-design/icons/lib/icons/CloseCircleOutlined"
const CloseCircleOutlined_namespaceObject = require("@ant-design/icons/lib/icons/CloseCircleOutlined");
var CloseCircleOutlined_default = /*#__PURE__*/__webpack_require__.n(CloseCircleOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@ant-design/icons/lib/icons/CloseOutlined"
const CloseOutlined_namespaceObject = require("@ant-design/icons/lib/icons/CloseOutlined");
// EXTERNAL MODULE: ./src/redux/api/api.js
var api = __webpack_require__(163);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./src/redux/hooks.js
var hooks = __webpack_require__(1052);
// EXTERNAL MODULE: ./src/redux/features/productSlice.js
var productSlice = __webpack_require__(4655);
// EXTERNAL MODULE: ./src/styles/PcBuilder.module.css
var PcBuilder_module = __webpack_require__(5944);
var PcBuilder_module_default = /*#__PURE__*/__webpack_require__.n(PcBuilder_module);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(3299);
;// CONCATENATED MODULE: ./src/pages/pccomponent/pcBuilder/pcBuilder.js





















const { Column, ColumnGroup } = (table_default());
const CustomBadge = ({ count })=>/*#__PURE__*/ jsx_runtime.jsx((space_default()), {
        style: {
            marginTop: "7px"
        },
        size: "large",
        children: /*#__PURE__*/ jsx_runtime.jsx((badge_default()), {
            count: count,
            children: /*#__PURE__*/ jsx_runtime.jsx((avatar_default()), {
                shape: "square",
                size: "small"
            })
        })
    });
const CustomCardExtra = ({ featureProduct })=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: `/productDetailsPage/${featureProduct}`,
        children: /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
            type: "primary",
            children: "Choose"
        })
    });
const PcBuilder = ({ posts })=>{
    console.log(posts);
    const { data: session } = (0,react.useSession)();
    const { products } = (0,hooks/* useAppSelector */.C)((state)=>state.product);
    console.log(products);
    const [expandedRowKey, setExpandedRowKey] = (0,external_react_.useState)(null);
    const handleRowExpand = (key)=>{
        if (expandedRowKey === key) {
            setExpandedRowKey(null); // Collapse if already expanded
        } else {
            setExpandedRowKey(key); // Expand the clicked row
        }
    };
    const postsWithMatchingProducts = posts?.map((post)=>{
        const matchingProducts = products.filter((product)=>product.id === post.id);
        return {
            key: post.id,
            featureProduct: post.featureProduct,
            featureimage: post.featureimage,
            category: post.category,
            status: post.status,
            price: post.price,
            products: matchingProducts
        };
    });
    console.log(postsWithMatchingProducts);
    const isBuildCompleteDisabled = postsWithMatchingProducts?.some((post)=>post?.products?.length === 0);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    //  const dataStore = postsWithMatchingProducts.filter(datast => datast)
    const handleCompleteBuild = async ()=>{
        console.log("postsWithMatchingProducts:", products);
        const requestData = {
            email: session?.user?.email,
            data: products
        };
        const response = await fetch("http://localhost:5000/storeData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });
        if (response.ok) {
            // message.success('Product added Successfully');
            message_default().success("complect build successfull");
            dispatch((0,productSlice/* clearCart */.LL)(products));
            console.log(products);
            //toast.success('This is a success message');
            const responseData = await response.json();
        //console.log(responseData);
        } else {
            console.error("Failed to store data:", response.statusText);
        }
    };
    // ...
    const columns = [
        {
            title: "Name",
            dataIndex: "featureProduct",
            key: "featureProduct"
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status"
        },
        {
            title: "Chose Quantity",
            dataIndex: "",
            key: "choseQuantity",
            render: (_, record)=>/*#__PURE__*/ jsx_runtime.jsx(CustomBadge, {
                    count: record?.products?.length
                })
        },
        {
            title: "Action",
            dataIndex: "",
            key: "action",
            render: (_, record)=>/*#__PURE__*/ jsx_runtime.jsx(CustomCardExtra, {
                    featureProduct: record?.featureProduct
                })
        }
    ];
    console.log(posts);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((table_default()), {
                className: (PcBuilder_module_default()).ant_table,
                columns: columns,
                expandable: {
                    expandedRowRender: (record)=>/*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                            className: (PcBuilder_module_default()).ant_card,
                            style: {
                                width: "100%"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx((space_default()), {
                                size: "large",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "pc-builder-footer",
                                    children: record?.products?.map((prod)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((card_default()), {
                                                                hoverable: true,
                                                                style: {
                                                                    width: "180vh"
                                                                },
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        gap: "60px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            alt: "example",
                                                                            src: prod?.image,
                                                                            width: 60
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                            children: [
                                                                                "Description:",
                                                                                prod?.description
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                "Name: ",
                                                                                prod?.productName
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                "Price: ",
                                                                                prod?.price
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
                                                                    onClick: ()=>dispatch((0,productSlice/* removeFromCart */.h2)(prod)),
                                                                    type: "primary",
                                                                    danger: true,
                                                                    shape: "circle",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((CloseCircleOutlined_default()), {})
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, prod?.productName)
                                            })
                                        }, prod?.productName))
                                })
                            })
                        }),
                    expandedRowKeys: [
                        expandedRowKey
                    ],
                    onExpand: (expanded, record)=>{
                        if (expanded) {
                            handleRowExpand(record.key); // Expand the clicked row
                        } else {
                            handleRowExpand(null); // Collapse the row
                        }
                    }
                },
                dataSource: postsWithMatchingProducts
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    display: "flex",
                    justifyContent: "end"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    href: "/",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((button_default()), {
                            onClick: ()=>handleCompleteBuild(),
                            type: "primary",
                            danger: true,
                            disabled: isBuildCompleteDisabled,
                            children: "Complete Build"
                        }),
                        " "
                    ]
                })
            })
        ]
    });
};
//export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(RootLayout/* default */.Z, {
        children: page
    });
};
/* harmony default export */ const pcBuilder = (PcBuilder);
async function getServerSideProps() {
    const res = await fetch("http://localhost:5000/alldata");
    const posts = await res.json();
    return {
        props: {
            posts
        }
    };
} // export async function getStaticProps() {
 //     const res = await fetch('http://localhost:5000/alldata')
 //     const posts = await res.json()
 //     return {
 //         props: {
 //             posts,
 //         },
 //     }
 // }

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fpccomponent%2FpcBuilder%2FpcBuilder&preferredRegion=&absolutePagePath=private-next-pages%2Fpccomponent%2FpcBuilder%2FpcBuilder.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fpccomponent_2FpcBuilder_2FpcBuilder_preferredRegion_absolutePagePath_private_next_pages_2Fpccomponent_2FpcBuilder_2FpcBuilder_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "getStaticPaths");
const next_route_loaderkind_PAGES_page_2Fpccomponent_2FpcBuilder_2FpcBuilder_preferredRegion_absolutePagePath_private_next_pages_2Fpccomponent_2FpcBuilder_2FpcBuilder_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pcBuilder_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/pccomponent/pcBuilder/pcBuilder",
        pathname: "/pccomponent/pcBuilder/pcBuilder",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: pcBuilder_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 1052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [26,664,939,206], () => (__webpack_exec__(8412)));
module.exports = __webpack_exports__;

})();