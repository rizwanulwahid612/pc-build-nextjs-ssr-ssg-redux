"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 9819:
/***/ ((module) => {

module.exports = require("@panva/hkdf");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 1567:
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 7507:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/adapters/headers.js");

/***/ }),

/***/ 2006:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/adapters/request-cookies.js");

/***/ }),

/***/ 8001:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/cookies.js");

/***/ }),

/***/ 1532:
/***/ ((module) => {

module.exports = require("oauth");

/***/ }),

/***/ 6942:
/***/ ((module) => {

module.exports = require("openid-client");

/***/ }),

/***/ 8108:
/***/ ((module) => {

module.exports = require("preact");

/***/ }),

/***/ 2284:
/***/ ((module) => {

module.exports = require("preact-render-to-string");

/***/ }),

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2F_5B_nextauth_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2F_5B_nextauth_5D_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/auth/[...nextauth].js
var _nextauth_namespaceObject = {};
__webpack_require__.r(_nextauth_namespaceObject);
__webpack_require__.d(_nextauth_namespaceObject, {
  authOptions: () => (authOptions),
  "default": () => (_nextauth_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(5413);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/github.js
var github = __webpack_require__(9915);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(4654);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].js



const authOptions = {
    // Configure one or more authentication providers
    providers: [
        (0,github/* default */.Z)({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        (0,google/* default */.Z)({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    pages: {
        signIn: "/login/login"
    }
};
/* harmony default export */ const _nextauth_ = (next_auth_default()(authOptions));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2F_5B_nextauth_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2F_5B_nextauth_5D_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_nextauth_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_nextauth_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/auth/[...nextauth]",
        pathname: "/api/auth/[...nextauth]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: _nextauth_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [589], () => (__webpack_exec__(7881)));
module.exports = __webpack_exports__;

})();