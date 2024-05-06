"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CCMP7246%5CwebdevD2__latest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CCMP7246%5CwebdevD2__latest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CCMP7246%5CwebdevD2__latest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CCMP7246%5CwebdevD2__latest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_CMP7246_webdevD2_latest_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\CMP7246\\\\webdevD2__latest\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_CMP7246_webdevD2_latest_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDQ01QNzI0NiU1Q3dlYmRldkQyX19sYXRlc3QlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNDTVA3MjQ2JTVDd2ViZGV2RDJfX2xhdGVzdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQjtBQUNuRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2QyX19lY29tbWVyY2UvP2YxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcQ01QNzI0NlxcXFx3ZWJkZXZEMl9fbGF0ZXN0XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXENNUDcyNDZcXFxcd2ViZGV2RDJfX2xhdGVzdFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CCMP7246%5CwebdevD2__latest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CCMP7246%5CwebdevD2__latest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mongodb_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mongodb/database */ \"(rsc)/./mongodb/database.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/User */ \"(rsc)/./models/User.js\");\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                if (!credentials.email || !credentials.password) {\n                    throw new Error(\"Invalid Email or Password\");\n                }\n                await (0,_mongodb_database__WEBPACK_IMPORTED_MODULE_4__.connectToDB)();\n                /* Check if the user exists */ const user = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"Invalid Email or Password\");\n                }\n                /* Compare password */ const isMatch = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.password);\n                if (!isMatch) {\n                    throw new Error(\"Invalid Email or Password\");\n                }\n                return user;\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session }) {\n            const sessionUser = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                email: session.user.email\n            });\n            session.user.id = sessionUser._id.toString();\n            session.user = {\n                ...session.user,\n                ...sessionUser._doc\n            };\n            return session;\n        },\n        async signIn ({ account, profile }) {\n            if (account.provider === \"google\") {\n                try {\n                    /* connect to db */ await (0,_mongodb_database__WEBPACK_IMPORTED_MODULE_4__.connectToDB)();\n                    /* Check iF the user exist */ let user = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                        email: profile.email\n                    });\n                    if (!user) {\n                        user = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create({\n                            email: profile.email,\n                            username: profile.name,\n                            profileImagePath: profile.picture,\n                            wishlist: [],\n                            cart: [],\n                            order: [],\n                            work: []\n                        });\n                    }\n                    console.log(\"print user:\", user);\n                    return user;\n                } catch (err) {\n                    console.log(\"Error checking if user exists: \", err.message);\n                }\n            }\n            return true;\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ1U7QUFDL0I7QUFFYTtBQUNoQjtBQUVoQyxNQUFNTSxVQUFVTixnREFBUUEsQ0FBQztJQUN2Qk8sV0FBVztRQUNUTixzRUFBY0EsQ0FBQztZQUNiTyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLFFBQVE7b0JBQ1JDLGFBQWE7b0JBQ2JDLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUNBaEIsMkVBQW1CQSxDQUFDO1lBQ2xCaUIsTUFBTTtZQUNOLE1BQU1DLFdBQVVDLFdBQVcsRUFBRUMsR0FBRztnQkFDOUIsSUFBSSxDQUFDRCxZQUFZRSxLQUFLLElBQUksQ0FBQ0YsWUFBWUcsUUFBUSxFQUFFO29CQUMvQyxNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1yQiw4REFBV0E7Z0JBRWpCLDRCQUE0QixHQUM1QixNQUFNc0IsT0FBTyxNQUFNckIsb0RBQUlBLENBQUNzQixPQUFPLENBQUM7b0JBQUVKLE9BQU9GLFlBQVlFLEtBQUs7Z0JBQUM7Z0JBRTNELElBQUksQ0FBQ0csTUFBTTtvQkFDVCxNQUFNLElBQUlELE1BQU07Z0JBQ2xCO2dCQUVBLG9CQUFvQixHQUNwQixNQUFNRyxVQUFVLE1BQU16QixpREFBT0EsQ0FBQ2tCLFlBQVlHLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFFakUsSUFBSSxDQUFDSSxTQUFTO29CQUNaLE1BQU0sSUFBSUgsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0M7WUFDVDtRQUNGO0tBQ0Q7SUFFREcsUUFBUXBCLFFBQVFDLEdBQUcsQ0FBQ29CLGVBQWU7SUFFbkNDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRTtZQUN2QixNQUFNQyxjQUFjLE1BQU01QixvREFBSUEsQ0FBQ3NCLE9BQU8sQ0FBQztnQkFBRUosT0FBT1MsUUFBUU4sSUFBSSxDQUFDSCxLQUFLO1lBQUM7WUFDbkVTLFFBQVFOLElBQUksQ0FBQ1EsRUFBRSxHQUFHRCxZQUFZRSxHQUFHLENBQUNDLFFBQVE7WUFFMUNKLFFBQVFOLElBQUksR0FBRztnQkFBRSxHQUFHTSxRQUFRTixJQUFJO2dCQUFFLEdBQUdPLFlBQVlJLElBQUk7WUFBQztZQUV0RCxPQUFPTDtRQUNUO1FBRUEsTUFBTU0sUUFBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUMvQixJQUFJRCxRQUFRRSxRQUFRLEtBQUssVUFBVTtnQkFDakMsSUFBSTtvQkFDRixpQkFBaUIsR0FDakIsTUFBTXJDLDhEQUFXQTtvQkFFakIsMkJBQTJCLEdBQzNCLElBQUlzQixPQUFPLE1BQU1yQixvREFBSUEsQ0FBQ3NCLE9BQU8sQ0FBQzt3QkFBRUosT0FBT2lCLFFBQVFqQixLQUFLO29CQUFDO29CQUVyRCxJQUFJLENBQUNHLE1BQU07d0JBQ1RBLE9BQU8sTUFBTXJCLG9EQUFJQSxDQUFDcUMsTUFBTSxDQUFDOzRCQUN2Qm5CLE9BQU9pQixRQUFRakIsS0FBSzs0QkFDcEJvQixVQUFVSCxRQUFRckIsSUFBSTs0QkFDdEJ5QixrQkFBa0JKLFFBQVFLLE9BQU87NEJBQ2pDQyxVQUFVLEVBQUU7NEJBQ1pDLE1BQU0sRUFBRTs0QkFDUkMsT0FBTyxFQUFFOzRCQUNUQyxNQUFNLEVBQUU7d0JBQ1Y7b0JBQ0Y7b0JBQ0FDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlekI7b0JBQzNCLE9BQU9BO2dCQUNULEVBQUUsT0FBTzBCLEtBQUs7b0JBQ1pGLFFBQVFDLEdBQUcsQ0FBQyxtQ0FBbUNDLElBQUlDLE9BQU87Z0JBQzVEO1lBQ0o7WUFFSSxPQUFPO1FBQ1g7SUFDRjtBQUNGO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZDJfX2Vjb21tZXJjZS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0VG9EQiB9IGZyb20gXCJAbW9uZ29kYi9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQG1vZGVscy9Vc2VyXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcclxuICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcclxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscy5lbWFpbCB8fCAhY3JlZGVudGlhbHMucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRW1haWwgb3IgUGFzc3dvcmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XHJcblxyXG4gICAgICAgIC8qIENoZWNrIGlmIHRoZSB1c2VyIGV4aXN0cyAqL1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIENvbXBhcmUgcGFzc3dvcmQgKi9cclxuICAgICAgICBjb25zdCBpc01hdGNoID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgIGlmICghaXNNYXRjaCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcblxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xyXG4gICAgICBjb25zdCBzZXNzaW9uVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XHJcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHNlc3Npb25Vc2VyLl9pZC50b1N0cmluZygpO1xyXG5cclxuICAgICAgc2Vzc2lvbi51c2VyID0geyAuLi5zZXNzaW9uLnVzZXIsIC4uLnNlc3Npb25Vc2VyLl9kb2MgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHNpZ25Jbih7IGFjY291bnQsIHByb2ZpbGUgfSkge1xyXG4gICAgICBpZiAoYWNjb3VudC5wcm92aWRlciA9PT0gXCJnb29nbGVcIikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvKiBjb25uZWN0IHRvIGRiICovXHJcbiAgICAgICAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG5cclxuICAgICAgICAgIC8qIENoZWNrIGlGIHRoZSB1c2VyIGV4aXN0ICovXHJcbiAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBwcm9maWxlLmVtYWlsIH0pO1xyXG5cclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICB1c2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgcHJvZmlsZUltYWdlUGF0aDogcHJvZmlsZS5waWN0dXJlLFxyXG4gICAgICAgICAgICAgIHdpc2hsaXN0OiBbXSxcclxuICAgICAgICAgICAgICBjYXJ0OiBbXSxcclxuICAgICAgICAgICAgICBvcmRlcjogW10sXHJcbiAgICAgICAgICAgICAgd29yazogW10sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcmludCB1c2VyOlwiLCB1c2VyKVxyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNoZWNraW5nIGlmIHVzZXIgZXhpc3RzOiBcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImNvbXBhcmUiLCJjb25uZWN0VG9EQiIsIlVzZXIiLCJoYW5kbGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJFcnJvciIsInVzZXIiLCJmaW5kT25lIiwiaXNNYXRjaCIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJzZXNzaW9uVXNlciIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJfZG9jIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlciIsImNyZWF0ZSIsInVzZXJuYW1lIiwicHJvZmlsZUltYWdlUGF0aCIsInBpY3R1cmUiLCJ3aXNobGlzdCIsImNhcnQiLCJvcmRlciIsIndvcmsiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        unique: [\n            true,\n            \"Username already exists\"\n        ],\n        required: [\n            true,\n            \"Username is required\"\n        ]\n    },\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exists\"\n        ],\n        required: [\n            true,\n            \"Email is required\"\n        ]\n    },\n    password: {\n        type: String\n    },\n    profileImagePath: {\n        type: String,\n        required: [\n            true,\n            \"Profile image is required\"\n        ]\n    },\n    wishlist: {\n        type: Array,\n        default: []\n    },\n    cart: {\n        type: Array,\n        default: []\n    },\n    orders: {\n        type: Array,\n        default: []\n    },\n    works: {\n        type: Array,\n        default: []\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFaEQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUUxQkksVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUEwQjtRQUN6Q0MsVUFBVTtZQUFDO1lBQU07U0FBdUI7SUFDMUM7SUFFQUMsT0FBTztRQUNMSixNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF1QjtRQUN0Q0MsVUFBVTtZQUFDO1lBQU07U0FBb0I7SUFDdkM7SUFFQUUsVUFBVTtRQUNSTCxNQUFNQztJQUNSO0lBRUFLLGtCQUFrQjtRQUNoQk4sTUFBTUM7UUFDTkUsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDL0M7SUFFQUksVUFBVTtRQUNSUCxNQUFNUTtRQUNOQyxTQUFTLEVBQUU7SUFDYjtJQUVBQyxNQUFNO1FBQ0pWLE1BQU1RO1FBQ05DLFNBQVMsRUFBRTtJQUNiO0lBRUFFLFFBQVE7UUFDTlgsTUFBTVE7UUFDTkMsU0FBUyxFQUFFO0lBQ2I7SUFFQUcsT0FBTztRQUNMWixNQUFNUTtRQUNOQyxTQUFTLEVBQUU7SUFDYjtBQUVKO0FBRUEsTUFBTUksT0FBT2hCLDRDQUFNQSxDQUFDZ0IsSUFBSSxJQUFJakIsK0NBQUtBLENBQUMsUUFBUUU7QUFFMUMsaUVBQWVlLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kMl9fZWNvbW1lcmNlLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIlxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG5cclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJVc2VybmFtZSBhbHJlYWR5IGV4aXN0c1wiXSxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCJdLFxyXG4gICAgfSxcclxuXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHVuaXF1ZTogW3RydWUsIFwiRW1haWwgYWxyZWFkeSBleGlzdHNcIl0sXHJcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJFbWFpbCBpcyByZXF1aXJlZFwiXSxcclxuICAgIH0sXHJcblxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9maWxlSW1hZ2VQYXRoOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlByb2ZpbGUgaW1hZ2UgaXMgcmVxdWlyZWRcIl0sXHJcbiAgICB9LFxyXG5cclxuICAgIHdpc2hsaXN0OiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICBkZWZhdWx0OiBbXSxcclxuICAgIH0sXHJcblxyXG4gICAgY2FydDoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdDogW10sXHJcbiAgICB9LFxyXG5cclxuICAgIG9yZGVyczoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdDogW10sXHJcbiAgICB9LFxyXG5cclxuICAgIHdvcmtzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICBkZWZhdWx0OiBbXSxcclxuICAgIH1cclxuICAgIFxyXG59KVxyXG5cclxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9maWxlSW1hZ2VQYXRoIiwid2lzaGxpc3QiLCJBcnJheSIsImRlZmF1bHQiLCJjYXJ0Iiwib3JkZXJzIiwid29ya3MiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/database.js":
/*!*****************************!*\
  !*** ./mongodb/database.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false; //Track connection to the db...\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected == true) {\n        console.log(\"MongoDB is connected successfully!\");\n        return;\n    } else {\n        //because it is an async fn, we use both try and catch based on async condition...\n        try {\n            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {\n                //dbName: \"cara\",\n                useNewUrlParser: true,\n                useUnifiedTopology: true\n            });\n            isConnected = true //after connection made with db, isConnected variable is toggled...\n            ;\n            console.log(\"MongoDB connected\");\n        } catch (err) {\n            console.log(err);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2RhdGFiYXNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjLE9BQU8sK0JBQStCO0FBRWpELE1BQU1DLGNBQWM7SUFFdkJGLG1EQUFZLENBQUMsZUFBZTtJQUU1QixJQUFHQyxlQUFlLE1BQUs7UUFDbkJHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0osT0FBTTtRQUNGLGtGQUFrRjtRQUNsRixJQUFHO1lBQ0MsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO2dCQUMxQyxpQkFBaUI7Z0JBQ2pCQyxpQkFBaUI7Z0JBQ2pCQyxvQkFBb0I7WUFDeEI7WUFDQVYsY0FBYyxLQUFLLG1FQUFtRTs7WUFDdEZHLFFBQVFDLEdBQUcsQ0FBQztRQUNoQixFQUNBLE9BQU1PLEtBQUk7WUFDTlIsUUFBUUMsR0FBRyxDQUFDTztRQUNoQjtJQUNKO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2QyX19lY29tbWVyY2UvLi9tb25nb2RiL2RhdGFiYXNlLmpzP2Y2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7IC8vVHJhY2sgY29ubmVjdGlvbiB0byB0aGUgZGIuLi5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EQiA9IGFzeW5jKCkgPT4ge1xyXG5cclxuICAgIG1vbmdvb3NlLnNldCgnc3RyaWN0UXVlcnknLCB0cnVlKVxyXG5cclxuICAgIGlmKGlzQ29ubmVjdGVkID09IHRydWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGlzIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkhJylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgLy9iZWNhdXNlIGl0IGlzIGFuIGFzeW5jIGZuLCB3ZSB1c2UgYm90aCB0cnkgYW5kIGNhdGNoIGJhc2VkIG9uIGFzeW5jIGNvbmRpdGlvbi4uLlxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwsIHtcclxuICAgICAgICAgICAgICAgIC8vZGJOYW1lOiBcImNhcmFcIixcclxuICAgICAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXNDb25uZWN0ZWQgPSB0cnVlIC8vYWZ0ZXIgY29ubmVjdGlvbiBtYWRlIHdpdGggZGIsIGlzQ29ubmVjdGVkIHZhcmlhYmxlIGlzIHRvZ2dsZWQuLi5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3RlZFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CCMP7246%5CwebdevD2__latest%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CCMP7246%5CwebdevD2__latest&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();