/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Poppins&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Caveat&family=Pacifico&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".title {\\n    text-align: center;\\n    margin-top: 20px;\\n    font-size: 50px;\\n    font-family: 'Poppins', sans-serif;\\n}\\nh1 {\\n    color: #FFCB47;\\n}\\n#special-paragraph {\\n    font-family: 'Noto Sans JP', sans-serif;\\n    font-size: 20px;\\n    text-decoration: underline;\\n}\\nbody {\\n    background-color: black;\\n}\\n#content {\\n    text-align: center;\\n    width: 750px;\\n    margin: auto;\\n}\\n#george-washington {\\n    border-radius: 100%;\\n    margin-top: 20px;\\n    height: 200px;\\n}\\np {\\n    color: white;\\n    font-family: 'Poppins', sans-serif;\\n}\\nfooter {\\n    display: flex;\\n    justify-content: space-around;\\n}\\nfooter p {\\n    color: #FFCB47;\\n    font-weight: bold;\\n}\\na {\\n    color: white;\\n    font-size: 20px;\\n    font-family: 'Poppins', sans-serif;\\n}\\na:hover {\\n    transition: 0.3s;\\n    transform: scale(1.1);\\n    color: #FFCB47;\\n    text-decoration: underline;\\n\\n}\\nnav {\\n    display: flex;\\n    justify-content: space-around;\\n}\\n#current {\\n    color: #FFCB47;\\n}\\n.image-left {\\n    float: left;\\n    height: 200px;\\n}\\n.image-right {\\n    float: right;\\n    height: 200px;\\n}\\n.menu {\\n    height: 200px;\\n    margin-bottom: 50px;\\n}\\n.food-item {\\n    font-size: 30px;\\n    color: #FFCB47;\\n}\\n#menu-footer {\\n    width: 100%;\\n    border-top: 1px solid #FFCB47;\\n}\\n#white-house {\\n    height: 500px;\\n    border-radius: 20px;\\n}\\n#location {\\n    font-size: 30px;\\n    font-weight: bold;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction contact() {\n    let content = document.querySelector('#content');\n\n    content.appendChild(nav);\n    nav.appendChild(homepage);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n\n    let header = document.createElement('h1');\n    let note = document.createElement('p');\n    let location = document.createElement('p');\n    let image = document.createElement('img');\n    let phoneNumber = document.createElement('p');\n    let email = document.createElement('p');\n\n    header.textContent = 'Contact Us';\n    note.textContent = `We truly care about your experience here at Emancipation,\n    so don't hesitate and call us now for any questions that might hinder\n     this truly spectacular experience we will give you, and have fun!`;\n    location.id = 'location';\n    location.textContent = '1600 Pennsylvania Avenue NW Washington, D.C.';\n    image.id = 'white-house';\n    image.src = 'https://scontent.flas1-1.fna.fbcdn.net/v/t1.6435-9/140608661_108562901212562_2964454821707755021_n.png?_nc_cat=1&ccb=1-3&_nc_sid=973b4a&_nc_ohc=SklLCdq0I94AX8GVIuR&_nc_ht=scontent.flas1-1.fna&oh=b4ca9c816c50393c88e6c8e89eb24ea7&oe=60ED6D63';\n    image.alt = 'A picture of the White House';\n    phoneNumber.textContent = '702-IDK-WEST';\n    email.textContent = 'emancipationofproclamation@gmail.com'\n\n    content.appendChild(header);\n    content.appendChild(note);\n    content.appendChild(location);\n    content.appendChild(image);\n    content.appendChild(phoneNumber);\n    content.appendChild(email);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction introduction() {\n    let content = document.querySelector('#content');\n\n    let header = document.createElement('h1');\n    let specialPara = document.createElement('p');\n    let image = document.createElement('img');\n    let biography = document.createElement('p');\n    let description = document.createElement('p');\n    header.textContent = 'Emancipation';\n    header.className = 'title';\n    specialPara.textContent = 'What Freedom Tastes Like';\n    specialPara.className = 'title';\n    specialPara.id = 'special-paragraph'\n    image.id = 'george-washington';\n    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg'\n    image.alt = 'George Washington, Executive Chef';\n    biography.textContent = `George Washington, born Feburary 22, 1732, was most notably known for being the 1st president of the United \n    States of America, freeing America from the British with the Revolutionary War and also making the four year terms for every President.\n    Although George Washington owned slaves, and tried to assimilate Native Americans, in an alternate universe, he is the \n    greatest chef to grace America and free the people. He is most notably known for surpassing french techiniques and liberating food art while oppressing them.`;\n    description.textContent =  `Here at Emancipation, we will take you through the history of America through foods from different times and decades during the United States' life. From slavery and racism\n    against African people to calling Middle Easterns terrorists and Donald's Trump racism against China, this will be a one of a kind experience that everyone must try\n    at least once in their life. You will be seated at the White House's most extravagent chair and will be served food on a golden plate fit for only the richest. Whilst\n    eating to your heart's content, you will have the luxury to look down upon minorities and middle class citizens to flavor your food. Taste freedom and power now.`;\n    let footer = document.createElement('footer');\n    let signature = document.createElement('p');\n    let chefName = document.createElement('p');\n    signature.textContent = 'Signed, The Founding Fathers';\n    chefName.textContent = 'Executive Chef: John Smith';\n    content.appendChild(header);\n    content.appendChild(specialPara);\n    content.appendChild(image);\n    content.appendChild(biography);\n    content.appendChild(description);\n    content.appendChild(footer);\n    footer.appendChild(signature);\n    footer.appendChild(chefName);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (introduction);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nlet nav = document.createElement('nav');\nlet navHomepage = document.createElement('a');\nlet navMenu = document.createElement('a');\nlet navContact = document.createElement('a');\nnavHomepage.textContent = 'Home';\nnavMenu.textContent = 'Menu';\nnavContact.textContent = 'Contact';\n\ncontent.appendChild(nav);\nnav.appendChild(navHomepage);\nnav.appendChild(navMenu);\nnav.appendChild(navContact);\n\nlet navLinks = document.querySelectorAll('a');\n\nnavLinks.forEach((link) => {\n    link.addEventListener('click', () => {\n        console.log('0')\n    })\n})\n;(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction menu() {\n    let content = document.querySelector('#content');\n\n    let nav = document.createElement('nav');\n    let homepage = document.createElement('a');\n    let menu = document.createElement('a');\n    let contact = document.createElement('a');\n    homepage.textContent = 'Home';\n    menu.id = 'current';\n    menu.textContent = 'Menu';\n    contact.textContent = 'Contact';\n\n    content.appendChild(nav);\n    nav.appendChild(homepage);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n\n    let header = document.createElement('h1');\n    let specialPara = document.createElement('p');\n    header.textContent = 'Menu';\n    specialPara.id = 'special-paragraph';\n    specialPara.textContent = 'Taste the Freedom';\n\n    content.appendChild(header);\n    content.appendChild(specialPara)\n\n    const foodItems = (image, alt, name, description, classs) => {\n        const createMenu = () => {\n            let div = document.createElement('div');\n            let foodImage = document.createElement('img');\n            let foodName = document.createElement('p');\n            let foodDescription = document.createElement('p');\n            div.className = 'menu';\n            foodImage.src = image;\n            foodImage.alt = alt;\n            foodImage.className = classs;\n            foodName.textContent = name;\n            foodName.className = 'food-item';\n            foodDescription.textContent = description;\n            content.appendChild(div);\n            div.appendChild(foodImage);\n            div.appendChild(foodName);\n            div.appendChild(foodDescription);\n        }\n        return {createMenu}\n    }\n    let spam = foodItems('https://www.spam.com/wp-content/uploads/2019/09/image-product_spam-classic-12oz-420x420.png', \n    'A picture of a Spam can', 'World War II Spam',\n    `During World War II, over 150 million pounds of spam were used in war,\n    with soldiers using them for their main diet and also using the oil to lubricate guns\n    and waterproof their boots. Spam was also a famous recipe back in the day,\n    especially during the Great Depression when it was easy and cheap to make.`, 'image-left');\n    let jello = foodItems('https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2016/06/22132117/DSC4156-728x509.jpg', \n    'A picture of a Jell-O shrimp', 'Vintage Shrimp Jello',\n    `A classic 1950's recipe, this recipe is just as the name stated, shrimp covered by jello.\n    Jello was definitely a favorite in the 50's as many recipe calls for this flavored gelatin \n     dessert. Not many restaurants will serve it nowadays, so be sure to enjoy this dish in it's most\n      classical form!.`, 'image-right');\n    let bbq = foodItems('https://cdn.vox-cdn.com/thumbor/mtU8UhpI-zsB_kolN7bzFirTB0Q=/0x0:2000x1333/1200x800/filters:focal(395x379:715x699)/cdn.vox-cdn.com/uploads/chorus_image/image/69096232/untitled_6564.0.jpg', \n    'A picture of a beef brisket', 'Texas BBQ Brisket',\n    `Very fatty and unhealthy, the Texas style brisket is the epitome of modern U.S. cuisine.\n    The fat makes the meat feel like that it's melting inside your mouth, and the hours of smoking \n    will make your brisket full of flavor the moment it is ready to be served.`, 'image-left');\n    let applePie = foodItems('https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg', \n    'A picture of a person holding an apple pie', 'Mama\\'s Apple Pie',\n    `A comfort food to many American children, the famous apple pie brings you back into the dining table\n    where you ate most of your childhood meals (hopefully). The apple pie is second to none to soul food,\n     and it brings many comfort when eaten.`, 'image-right');\n    let friedChicken = foodItems('https://www.melissassouthernstylekitchen.com/wp-content/uploads/2019/02/SouthernFriedChicken002.jpg', \n    'A picture of a fried chicken', 'Southern Fried Chicken',\n    `A close rival with your mom's apple pie, Mama's fried chicken is a very fatty and \n    calming food that will make you want your mom's presence again. The crispy and crunchy exterior along with the\n    juicy and flavorful interior will quickly make you a fan of this dish.`, 'image-left');\n    spam.createMenu();\n    jello.createMenu();\n    bbq.createMenu();\n    applePie.createMenu();\n    friedChicken.createMenu();\n\n    let footer = document.createElement('footer');\n    let footerPara = document.createElement('p');\n    footer.id = 'menu-footer';\n    footerPara.textContent = 'More dishes coming soon...';\n\n    content.appendChild(footer);\n    footer.appendChild(footerPara)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;