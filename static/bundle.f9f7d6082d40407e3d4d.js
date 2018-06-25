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
/******/ 	__webpack_require__.p = "static";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Basket.js":
/*!***********************!*\
  !*** ./src/Basket.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Basket = function () {\n    function Basket() {\n        _classCallCheck(this, Basket);\n\n        this.goods = JSON.parse(localStorage.getItem('cart')) || [];\n        this.state = {\n            count: 0\n        };\n        this.render();\n        this.renderGoods();\n    }\n\n    _createClass(Basket, [{\n        key: 'render',\n        value: function render() {\n            var basket = document.getElementById('basket');\n            var body = document.createElement('div');\n            var header = document.createElement('div');\n            var headerTitle = document.createElement('h4');\n            var basketBody = document.createElement('div');\n            var basketItems = document.createElement('div');\n            var basketText = document.createElement('p');\n\n            body.classList.add('card');\n            header.classList.add('card-header');\n            basketBody.classList.add('card-body');\n            basketItems.classList.add('basket-items');\n            basketText.classList.add('basket-content');\n\n            headerTitle.textContent = 'Cart';\n\n            basket.appendChild(body);\n            body.appendChild(header);\n            header.appendChild(headerTitle);\n            body.appendChild(basketBody);\n            basketBody.appendChild(basketText);\n            basketBody.appendChild(basketItems);\n            basketText.textContent = '\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432: ' + this.goods.length;\n        }\n    }, {\n        key: 'renderGoods',\n        value: function renderGoods() {\n            var _this = this;\n\n            if (this.goods.length === 0) {\n                return;\n            }\n            this.reset();\n            var basketItems = document.querySelector('.basket-items');\n\n            this.goods.forEach(function (value) {\n                var basketItem = document.createElement('div');\n                var close = document.createElement('div');\n\n                basketItem.classList.add('item');\n                close.classList.add('close');\n                close.setAttribute('data-id', '' + (value.id + 1));\n                basketItem.textContent = '' + (value.id + 1);\n                close.textContent = 'x';\n                basketItem.appendChild(close);\n                basketItems.appendChild(basketItem);\n                _this.addEventListener(close);\n            });\n        }\n    }, {\n        key: 'reset',\n        value: function reset() {\n            var basketItems = document.querySelector('.basket-items');\n            var basketText = document.querySelector('.basket-content');\n            basketItems.innerHTML = '';\n            basketText.textContent = '\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432: ' + this.goods.length;\n        }\n    }, {\n        key: 'addGood',\n        value: function addGood(good) {\n            if ((typeof good === 'undefined' ? 'undefined' : _typeof(good)) !== 'object') {\n                return;\n            }\n\n            if (!this.goods.some(function (value) {\n                return value.id === good.id;\n            })) {\n                this.goods.push(good);\n                this.basketStorage(good.id, 'POST');\n                this.state.count++;\n                this.reset();\n                this.renderGoods();\n            }\n        }\n    }, {\n        key: 'deleteGood',\n        value: function deleteGood(id) {\n            if (typeof id !== 'number') {\n                return;\n            }\n            if (this.goods.some(function (val) {\n                return val.id === id;\n            })) {\n                var index = this.goods.findIndex(function (val) {\n                    return val.id === id;\n                });\n                console.log(index);\n                console.log(this.goods);\n                this.goods.splice(index, 1);\n                this.basketStorage(id, 'DELETE');\n                this.state.count--;\n                this.reset();\n                this.renderGoods();\n            }\n        }\n    }, {\n        key: 'addEventListener',\n        value: function addEventListener(elem) {\n            var _this2 = this;\n\n            if (elem instanceof Node) {\n                elem.addEventListener('click', function () {\n                    _this2.deleteGood(+elem.getAttribute('data-id') - 1);\n                });\n            }\n        }\n    }, {\n        key: 'basketStorage',\n        value: function basketStorage(id, method) {\n            var _this3 = this;\n\n            if (typeof id !== 'number' && typeof method !== 'string') {\n                return;\n            }\n\n            var result = null;\n\n            fetch('/my-user', {\n                credentials: 'include'\n            }).then(function (res) {\n                return res.json();\n            }).then(function (data) {\n                result = data;\n                console.log(result.auth);\n                if (result.auth === false) {\n                    localStorage.setItem('cart', JSON.stringify(_this3.goods));\n                } else {\n                    fetch('/cart/0', {\n                        method: method,\n                        body: JSON.stringify({\n                            cart: id + 1\n                        }),\n                        headers: {\n                            'Content-Type': 'application/json'\n                        }\n                    }).then(function (res) {\n                        if (res.status === 200) {\n                            return res;\n                        }\n                        throw new Error(res.statusText);\n                    }).then(function (res) {\n                        return res.json();\n                    }).then(function (data) {\n                        return console.log(data);\n                    }).catch(function (e) {\n                        return console.log(e);\n                    });\n                }\n            }).catch(function (e) {\n                return console.log(e);\n            });\n        }\n    }]);\n\n    return Basket;\n}();\n\nexports.default = Basket;\n\n//# sourceURL=webpack:///./src/Basket.js?");

/***/ }),

/***/ "./src/Good.js":
/*!*********************!*\
  !*** ./src/Good.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _index = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Good = function () {\n    function Good(id, title, price) {\n        _classCallCheck(this, Good);\n\n        this.id = id;\n        this.title = title;\n        this.price = price;\n    }\n\n    _createClass(Good, [{\n        key: 'render',\n        value: function render(container) {\n            var wrapper = document.createElement('div');\n            var good = document.createElement('div');\n            var header = document.createElement('div');\n            var headerTitle = document.createElement('h4');\n            var body = document.createElement('div');\n            var bodyText = document.createElement('p');\n            var buttonGroup = document.createElement('div');\n            var button = document.createElement('button');\n\n            wrapper.classList.add('col-4');\n            good.classList.add('card');\n            header.classList.add('card-header');\n            headerTitle.classList.add('title');\n            body.classList.add('card-body');\n            buttonGroup.classList.add('button-group');\n            button.classList.add('btn');\n            button.classList.add('btn-primary');\n\n            wrapper.id = '' + (this.id + 1);\n            headerTitle.textContent = this.id + 1 + '. ' + this.title;\n            bodyText.textContent = 'Price: ' + this.price + '$';\n            button.textContent = 'Add to cart';\n\n            buttonGroup.appendChild(button);\n            bodyText.appendChild(buttonGroup);\n            body.appendChild(bodyText);\n            good.appendChild(header);\n            header.appendChild(headerTitle);\n            good.appendChild(body);\n            wrapper.appendChild(good);\n            container.appendChild(wrapper);\n\n            this.addEventListener(button);\n        }\n    }, {\n        key: 'addEventListener',\n        value: function addEventListener(button) {\n            var _this = this;\n\n            button.addEventListener('click', function () {\n                _index.basket.addGood({\n                    id: _this.id,\n                    title: _this.title,\n                    price: _this.price\n                });\n            });\n        }\n    }]);\n\n    return Good;\n}();\n\nexports.default = Good;\n\n//# sourceURL=webpack:///./src/Good.js?");

/***/ }),

/***/ "./src/GoodList.js":
/*!*************************!*\
  !*** ./src/GoodList.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Good = __webpack_require__(/*! ./Good */ \"./src/Good.js\");\n\nvar _Good2 = _interopRequireDefault(_Good);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar GoodList = function () {\n    function GoodList() {\n        _classCallCheck(this, GoodList);\n\n        this.render();\n    }\n\n    _createClass(GoodList, [{\n        key: 'getGoodList',\n        value: function getGoodList(url, container) {\n            if (typeof url === 'string' && container instanceof Node) {\n                this.getApi(url).then(function (data) {\n                    console.log(data);\n\n                    data.map(function (value) {\n                        return new _Good2.default(value.id, value.productName, value.price);\n                    }).forEach(function (value) {\n                        return value.render(container);\n                    });\n                }).catch(function (e) {\n                    return container.textContent = e;\n                });\n            }\n        }\n    }, {\n        key: 'getApi',\n        value: function getApi(url) {\n            return fetch(url).then(function (res) {\n                if (res.status === 200) {\n                    return res;\n                }\n                throw new Error('Ошибка');\n            }).then(function (res) {\n                return res.json();\n            }).catch(function (e) {\n                return Promise.reject(e);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var goodContainer = document.querySelector('.goods');\n\n            this.getGoodList('./goods', goodContainer);\n        }\n    }]);\n\n    return GoodList;\n}();\n\nexports.default = GoodList;\n\n//# sourceURL=webpack:///./src/GoodList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.basket = undefined;\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar _GoodList = __webpack_require__(/*! ./GoodList */ \"./src/GoodList.js\");\n\nvar _GoodList2 = _interopRequireDefault(_GoodList);\n\nvar _Basket = __webpack_require__(/*! ./Basket */ \"./src/Basket.js\");\n\nvar _Basket2 = _interopRequireDefault(_Basket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _GoodList2.default();\nvar basket = exports.basket = new _Basket2.default();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });