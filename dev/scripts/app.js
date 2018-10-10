/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/router */ \"./src/scripts/utils/router.js\");\n/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/home */ \"./src/scripts/controllers/home.js\");\n/* harmony import */ var _controllers_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/position */ \"./src/scripts/controllers/position.js\");\n/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/search */ \"./src/scripts/controllers/search.js\");\n/* harmony import */ var _controllers_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/profile */ \"./src/scripts/controllers/profile.js\");\n\r\n// 总入口文件\r\n// asnyc - await 内部用的是import导入模块\r\n// 在向ES5转化时不能与CommenJS的module.export混用\r\n// 所以统一使用 ES6的 import\r\n\r\n// const homeController = require('./controllers/home')\r\n// const positionController = require(\"./controllers/position\")\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_controllers_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render()\r\n\r\n// positionController.render()\r\n\r\nconst router = new _utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\nrouter.init()\r\nrouter.route(\"#position\", _controllers_position__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render)\r\nrouter.route(\"#search\", _controllers_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render)\r\nrouter.route(\"#profile\", _controllers_profile__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render)\r\n\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/controllers/home.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/scripts/views/home.html\");\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_home_html__WEBPACK_IMPORTED_MODULE_0__);\n// 获取模板文件\r\n\r\n\r\n// 页面插入模板文件的变量(函数)\r\nconst render = () => {\r\n    document.querySelector(\"#root\").innerHTML = _views_home_html__WEBPACK_IMPORTED_MODULE_0___default.a\r\n    changeTab()\r\n}\r\n\r\n// 事件委托 选项卡\r\nconst changeTab = () => {\r\n    $('nav li').on('tap', function() {\r\n        let hashs = ['#position', '#search', '#profile']\r\n        location.hash = hashs[$(this).index()]\r\n        $(this).addClass('active').siblings().removeClass('active')\r\n    })\r\n}\r\n\r\n\r\n// 导出 插入模板的变量(函数)，在app.js中获取\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    // ES6新增简写方法，当对象中的 key 与 value 相一致时，可以只写一个\r\n    render\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/controllers/home.js?");

/***/ }),

/***/ "./src/scripts/controllers/position.js":
/*!*********************************************!*\
  !*** ./src/scripts/controllers/position.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_position_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/position.html */ \"./src/scripts/views/position.html\");\n/* harmony import */ var _views_position_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_position_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_position_list_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/position-list.html */ \"./src/scripts/views/position-list.html\");\n/* harmony import */ var _views_position_list_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_position_list_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/position */ \"./src/scripts/models/position.js\");\n\r\n\r\n\r\n\r\n\r\n// const render = () => {\r\n//     document.querySelector(\"main\").innerHTML = positionTpl\r\n// }\r\n\r\n// 异步 等待所有数据获取后才渲染\r\n// const render = async () => {\r\n//     let result = await positionModel.list()\r\n//     let list = result.content.data.page.result\r\n//     let template = Handlebars.compile(positionTpl)\r\n//     let html = template({ list })\r\n//     $('main').html(html)\r\n// }\r\n\r\n// export default {\r\n//     render\r\n// }\r\n\r\n// 当页面加载更多时保存当前页面的数据\r\nvar pageNo = 1\r\nvar dataSource = []\r\n\r\n// 插入包含list的模板\r\nconst render = async () => {\r\n    $('main').html(_views_position_html__WEBPACK_IMPORTED_MODULE_0___default.a)\r\n    // 异步等到 数据传过来时才声明、赋值\r\n    let list = dataSource = (await _models_position__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list()).content.data.page.result\r\n    // 等到list插入到ul后才执行 scroll()\r\n    await renderList(list)\r\n    scroll()\r\n}\r\n\r\nconst scroll = () => {\r\n    // better-scroll,一款解决移动端屏幕的插件\r\n    let posScroll = new BScroll('main',{\r\n        // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件\r\n        probeType: 2,\r\n        startY : -40\r\n    })\r\n\r\n    let head = $('.head img'),\r\n        foot = $('.foot img')\r\n\r\n    //  委托屏幕滚动事件\r\n    posScroll.on('scroll', function() {\r\n        // scroll 纵轴坐标\r\n        // 从 main 顶部往下 是负值，越往下，负值越大\r\n        // 当滚动距离大于 main 的实际高度，则会大于0\r\n        let y = this.y,\r\n        // scroll 最大纵向滚动位置。\r\n        // 备注：scroll 纵向滚动的位置区间是 0 - maxScrollY，并且 maxScrollY 是负值。\r\n            maxY = this.maxScrollY - y\r\n\r\n        // 当拉出 ‘下拉刷新’ ，旋转箭头\r\n        if( y>= 0){\r\n            head.addClass('up')\r\n        }\r\n\r\n        // 当拉出 ‘下拉刷新’，旋转箭头\r\n        if(maxY >= 0){\r\n            foot.addClass('down')\r\n        }\r\n    })\r\n\r\n    // 委托 当滚动停止，即滑动屏幕、手指离开屏幕后触发\r\n    posScroll.on('scrollEnd', async function() {\r\n        let y = this.y,\r\n            maxY = this.maxScrollY - y;\r\n\r\n\r\n        // 下拉刷新\r\n\r\n        // 未滑出 下拉刷新 即取消了刷新\r\n        if(y >= -40 && y <0){\r\n            // 滚动到指定位置 x y time 动画类型\r\n            this.scrollTo(0, -40, 400, 'bounce')\r\n        // 滑出 下拉刷新 即刷新\r\n        }else if(y >=0){\r\n            // 替换成 loading 的img\r\n            head.attr('src','/images/ajax-loader.gif')\r\n\r\n            // 执行 refresh()方法，即获取新数据\r\n            let result = await _models_position__WEBPACK_IMPORTED_MODULE_2__[\"default\"].refresh()\r\n            let list = dataSource = [\r\n                // 扩展运算\r\n                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，\r\n                ...result.content.data.page.result,\r\n                ...dataSource\r\n            ]\r\n\r\n            // 重新传入list，渲染页面\r\n            renderList(list)\r\n\r\n            // 刷新\r\n            this.refresh()\r\n\r\n            // 重新 传入 箭头 img\r\n            head.attr('src', 'images/arrow.png')\r\n                .removeClass('.up')\r\n            // 回滚\r\n            this.scrollTo(0,-40)\r\n        }    \r\n\r\n        // 上拉刷新\r\n        if(maxY >= -40 && maxY <0){\r\n            this.scrollTo(0,this.maxScrollY+40,300,'swipe')\r\n            \r\n        }else if(maxY >=0){\r\n            foot.attr('src','/images/ajax-loader.gif')\r\n\r\n             // 执行 loadMore()方法，即获取新数据\r\n            let result = await _models_position__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadMore(++pageNo)\r\n            let list = dataSource = [\r\n                // 扩展运算\r\n                // 将老数组内的数据 和 刚刷新的得到的数据 数组序列化 组成新数组，\r\n                ...dataSource,\r\n                ...result.content.data.page.result,\r\n            ]\r\n\r\n            // 重新传入list，渲染页面\r\n            renderList(list)\r\n\r\n            // 刷新\r\n            this.refresh()\r\n\r\n            // 重新 传入 箭头 img\r\n            foot.attr('src', 'images/arrow.png')\r\n                .removeClass('.down')\r\n            // 回滚\r\n            this.scrollTo(0,this.maxScrollY+40)\r\n        }\r\n    })\r\n}\r\n\r\nconst renderList = async (list) => {\r\n    // 运用Handlesbars第三方渲染模板\r\n    let template = Handlebars.compile(_views_position_list_html__WEBPACK_IMPORTED_MODULE_1___default.a)\r\n    let html = template({ list })\r\n    // ul插入模板\r\n    $('#listUl').html(html)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/controllers/position.js?");

/***/ }),

/***/ "./src/scripts/controllers/profile.js":
/*!********************************************!*\
  !*** ./src/scripts/controllers/profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_profile_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/profile.html */ \"./src/scripts/views/profile.html\");\n/* harmony import */ var _views_profile_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_profile_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst render = () => {\r\n    $('main').html(_views_profile_html__WEBPACK_IMPORTED_MODULE_0___default.a)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/profile.js?");

/***/ }),

/***/ "./src/scripts/controllers/search.js":
/*!*******************************************!*\
  !*** ./src/scripts/controllers/search.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_search_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/search.html */ \"./src/scripts/views/search.html\");\n/* harmony import */ var _views_search_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_search_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst render = () => {\r\n    $('main').html(_views_search_html__WEBPACK_IMPORTED_MODULE_0___default.a)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/search.js?");

/***/ }),

/***/ "./src/scripts/models/position.js":
/*!****************************************!*\
  !*** ./src/scripts/models/position.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst list = () => {\r\n    // $.ajax本身就是一个promise\r\n    return $.ajax({\r\n        url: '/api/position/list',\r\n        // url: \"/api/listmore.json?pageNo=2&pageSize=15\",\r\n        success: (result) => {\r\n            // console.log(result)\r\n            return result\r\n        }\r\n    })\r\n}\r\n\r\nconst refresh = () => {\r\n    return $.ajax({\r\n        url: '/api/position/refresh',\r\n        success: (result) => {\r\n            return result\r\n        }\r\n    })\r\n}\r\n\r\nconst loadMore = (pageNo) => {\r\n    return $.ajax({\r\n        url: '/lagou/listmore.json?pageNo='+ pageNo +'&pageSize=5',\r\n        success: (result) => {\r\n            return result\r\n        }\r\n    })\r\n}\r\n\r\n// 导出\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    list,\r\n    refresh,\r\n    loadMore\r\n});\r\n\n\n//# sourceURL=webpack:///./src/scripts/models/position.js?");

/***/ }),

/***/ "./src/scripts/utils/router.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/router.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n// 路由\r\nfunction Router() {\r\n    this.routes = {}\r\n    this.currentHash = ''\r\n}\r\n\r\nvar noop = function(){}\r\n//                  #position等的hash  所对应的渲染页面的回调，调用时会传入\r\nRouter.prototype.route = function(hash, cb) {\r\n    this.currentHash = hash\r\n    this.routes[this.currentHash] = cb || function(){}\r\n}\r\n\r\n\r\n// 路由/局部刷新\r\nRouter.prototype.refresh = function() {\r\n    // 获取当前的hash   ||  文档第一次加载完成，做一个默认值\r\n    let hash = location.hash || \"#position\"\r\n    this.currentHash = hash;\r\n    this.routes[this.currentHash]();\r\n    this.switchTabbar()\r\n}\r\n\r\n// tabbar switch\r\nRouter.prototype.switchTabbar = function() {\r\n    let hashs = ['#position', '#search', '#profile'];\r\n    // 利用 indexOf 取得下标\r\n    let index = hashs.indexOf(this.currentHash)\r\n    $('nav li')\r\n        .eq(index)\r\n        .addClass(\"active\")\r\n        .siblings()\r\n        .removeClass('active')\r\n}\r\n\r\n// 路由切换监听\r\nRouter.prototype.init = function() {\r\n    // 第一次加载的时候\r\n    window.addEventListener('load', this.refresh.bind(this))\r\n    // 监听url的hash值的变化(#后的部分)-->局部刷新\r\n    window.addEventListener('hashchange', this.refresh.bind(this))\r\n}\r\n\r\n// 导出\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/scripts/utils/router.js?");

/***/ }),

/***/ "./src/scripts/views/home.html":
/*!*************************************!*\
  !*** ./src/scripts/views/home.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"home-container\\\">    <header>拉勾网</header>    <main></main>    <nav>        <ul>            <li class=\\\"active\\\">                <i class=\\\"yo-ico\\\">&#xe6b8;</i>                <b>职位</b>            </li>            <li>                <i class=\\\"yo-ico\\\">&#xe65c;</i>                <b>搜索</b>            </li>            <li>                <i class=\\\"yo-ico\\\">&#xe7d5;</i>                <b>我的</b>            </li>        </ul>    </nav></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/home.html?");

/***/ }),

/***/ "./src/scripts/views/position-list.html":
/*!**********************************************!*\
  !*** ./src/scripts/views/position-list.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each list}}<li>    <div>        <img src=\\\"//www.lgstatic.com/{{companyLogo}}\\\" alt=\\\"\\\">    </div>    <div>        <h1>{{companyName}}</h1>        <h2>{{positionName}} [{{city}}]</h2>        <h3>{{createTime}}</h3>    </div>    <div>{{salary}}</div></li>{{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/position-list.html?");

/***/ }),

/***/ "./src/scripts/views/position.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/position.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>  <div class=\\\"head\\\">    <img src=\\\"/images/arrow.png\\\" />    <b>下拉刷新...</b>  </div>  <div>    <span>十秒钟定制职位</span>    <span>去登录</span>  </div>  <ul id=\\\"listUl\\\"></ul>  <div class=\\\"foot\\\">    <img src=\\\"/images/arrow.png\\\" />    <b>上拉加载更多...</b>  </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/position.html?");

/***/ }),

/***/ "./src/scripts/views/profile.html":
/*!****************************************!*\
  !*** ./src/scripts/views/profile.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    profile.........</div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/profile.html?");

/***/ }),

/***/ "./src/scripts/views/search.html":
/*!***************************************!*\
  !*** ./src/scripts/views/search.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    search....</div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/search.html?");

/***/ })

/******/ });