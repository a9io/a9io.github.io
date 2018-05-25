module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(33);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _libLocation = __webpack_require__(14);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(8);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(15);
    }, '/500': function _() {
      return __webpack_require__(16);
    }, '/blog': function blog() {
      return __webpack_require__(17);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(18);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(19);
    }, '/': function _() {
      return __webpack_require__(20);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _libLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready
    // and page content is loaded
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', run);
    } else {
      window.attachEvent('onload', run);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(22);

  var Footer = (function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
      _classCallCheck(this, Footer);

      _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Footer, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'footer',
          { className: 'Footer' },
          _react2['default'].createElement(
            'h1',
            null,
            'a9'
          ),
          _react2['default'].createElement(
            'p',
            null,
            new Date().getFullYear()
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        title: _react.PropTypes.string
      },
      enumerable: true
    }]);

    return Footer;
  })(_react.Component);

  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  var BigText = (function (_Component) {
    _inherits(BigText, _Component);

    function BigText() {
      _classCallCheck(this, BigText);

      _get(Object.getPrototypeOf(BigText.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BigText, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'BigText' },
          this.props.children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return BigText;
  })(_react.Component);

  exports['default'] = BigText;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(23);

  var Grid = (function (_Component) {
    _inherits(Grid, _Component);

    function Grid() {
      _classCallCheck(this, Grid);

      _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Grid, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Grid' },
          _react2['default'].createElement(
            'h1',
            null,
            this.props.title
          ),
          _react2['default'].createElement(
            'div',
            { className: 'gridContainer row around-xs' },
            this.props.children
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }]);

    return Grid;
  })(_react.Component);

  exports['default'] = Grid;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(24);

  var _MoxBox = __webpack_require__(10);

  var _MoxBox2 = _interopRequireDefault(_MoxBox);

  var Header = (function (_Component) {
    _inherits(Header, _Component);

    function Header() {
      _classCallCheck(this, Header);

      _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Header, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'header',
          { className: 'row center-xs' },
          _react2['default'].createElement(_MoxBox2['default'], null)
        );
      }
    }], [{
      key: 'propTypes',
      value: {},
      enumerable: true
    }]);

    return Header;
  })(_react.Component);

  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(25);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Layout' },
          this.props.children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(26);

  var _Footer = __webpack_require__(3);

  var _Footer2 = _interopRequireDefault(_Footer);

  var Modal = (function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
      _classCallCheck(this, Modal);

      _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Modal, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Modal' + ' ' + (this.props.show ? 'Show' : 'Hide') },
          _react2['default'].createElement(
            'div',
            { className: 'row between-xs' },
            _react2['default'].createElement(
              'div',
              { className: '' },
              _react2['default'].createElement(
                'div',
                { className: 'backBtn', onClick: this.props.back },
                _react2['default'].createElement('i', { className: 'fa fa-chevron-circle-left' })
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: '' },
              _react2['default'].createElement(
                'div',
                { className: 'MoxBoxSmall', onClick: this.props.back },
                'Max Krieger'
              )
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement('div', null)
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row center-xs start-sm' },
            _react2['default'].createElement(
              'h1',
              null,
              this.props.title
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row content' },
            this.props.children
          ),
          _react2['default'].createElement(_Footer2['default'], null)
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        back: _react.PropTypes.element.func,
        title: _react.PropTypes.string,
        show: _react.PropTypes.bool
      },
      enumerable: true
    }]);

    return Modal;
  })(_react.Component);

  exports['default'] = Modal;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(27);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'MoxBox' },
          'Max Krieger'
        );
      }
    }], [{
      key: 'propTypes',
      value: {},
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(28);

  var ProjectBox = (function (_Component) {
    _inherits(ProjectBox, _Component);

    function ProjectBox() {
      _classCallCheck(this, ProjectBox);

      _get(Object.getPrototypeOf(ProjectBox.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProjectBox, [{
      key: 'render',
      value: function render() {
        var _this = this;

        return _react2['default'].createElement(
          'a',
          { href: '#', onClick: function () {
              return _this.props.clicked(_this.props.title);
            } },
          _react2['default'].createElement(
            'div',
            { className: 'ProjectBox', style: { backgroundImage: 'url(' + this.props.image + ')', backgroundSize: 'cover' } },
            _react2['default'].createElement(
              'div',
              { className: 'Overlay row center-xs middle-xs' },
              _react2['default'].createElement(
                'div',
                { className: 'Title' },
                this.props.title
              )
            )
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        clicked: _react2['default'].PropTypes.func,
        name: _react.PropTypes.string,
        image: _react.PropTypes.string,
        title: _react.PropTypes.string
      },
      enumerable: true
    }]);

    return ProjectBox;
  })(_react.Component);

  exports['default'] = ProjectBox;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(29);

  var Section = (function (_Component) {
    _inherits(Section, _Component);

    function Section() {
      _classCallCheck(this, Section);

      _get(Object.getPrototypeOf(Section.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Section, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Section' },
          _react2['default'].createElement(
            'h1',
            null,
            this.props.title
          ),
          _react2['default'].createElement(
            'div',
            null,
            this.props.children
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }]);

    return Section;
  })(_react.Component);

  exports['default'] = Section;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(30);

  var SocialMedia = (function (_Component) {
    _inherits(SocialMedia, _Component);

    function SocialMedia() {
      _classCallCheck(this, SocialMedia);

      _get(Object.getPrototypeOf(SocialMedia.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SocialMedia, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'SocialMedia row center-xs end-sm' },
          _react2['default'].createElement(
            'a',
            { href: 'https://twitter.com/a9_io' },
            _react2['default'].createElement('i', { className: 'fa fa-twitter' })
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://www.linkedin.com/in/max-krieger' },
            _react2['default'].createElement('i', { className: 'fa fa-linkedin' })
          ),
          _react2['default'].createElement(
            'a',
            { href: 'https://github.com/maxkrieger' },
            _react2['default'].createElement('i', { className: 'fa fa-github' })
          ),
          _react2['default'].createElement(
            'a',
            { href: 'mailto:themaxaxis+418@gmail.com' },
            _react2['default'].createElement('i', { className: 'fa fa-envelope' })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        title: _react.PropTypes.string
      },
      enumerable: true
    }]);

    return SocialMedia;
  })(_react.Component);

  exports['default'] = SocialMedia;
  module.exports = exports['default'];
  /*<a href="https://www.last.fm/user/a9_io"><i className="fa fa-lastfm"></i></a>*/

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(31);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(32);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsHeader = __webpack_require__(7);

  var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

  var _componentsBigText = __webpack_require__(5);

  var _componentsBigText2 = _interopRequireDefault(_componentsBigText);

  var _componentsSocialmedia = __webpack_require__(13);

  var _componentsSocialmedia2 = _interopRequireDefault(_componentsSocialmedia);

  var _componentsGrid = __webpack_require__(6);

  var _componentsGrid2 = _interopRequireDefault(_componentsGrid);

  var _componentsProjectBox = __webpack_require__(11);

  var _componentsProjectBox2 = _interopRequireDefault(_componentsProjectBox);

  var _componentsModal = __webpack_require__(9);

  var _componentsModal2 = _interopRequireDefault(_componentsModal);

  var _componentsSection = __webpack_require__(12);

  var _componentsSection2 = _interopRequireDefault(_componentsSection);

  var _componentsFooter = __webpack_require__(3);

  var _componentsFooter2 = _interopRequireDefault(_componentsFooter);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default(props) {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
      this.state = {
        show: ''
      };
    }

    _createClass(_default, [{
      key: 'showProject',
      value: function showProject(project) {
        this.setState({ show: project });
      }
    }, {
      key: 'hideProject',
      value: function hideProject() {
        this.setState({ show: '' });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        return _react2['default'].createElement(
          'div',
          { className: 'page' },
          _react2['default'].createElement(
            'div',
            { className: 'showing' },
            _react2['default'].createElement(_componentsHeader2['default'], null),
            _react2['default'].createElement(
              _componentsBigText2['default'],
              null,
              'Cognitive Architect. Student. Developer. Designer.'
            ),
            _react2['default'].createElement(_componentsSocialmedia2['default'], null),
            _react2['default'].createElement(
              _componentsGrid2['default'],
              { title: 'Projects' },
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'LiquidTime', image: 'liquidtime.png' }),
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'Spotify Offline', image: 'spotify-offline.png' }),
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'A-Frame Components', image: 'aframe.png' }),
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'alienbox', image: 'alienbox.png' })
            ),
            _react2['default'].createElement(
              _componentsGrid2['default'],
              { title: 'Experience' },
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'Formlabs', image: 'formlabs.png' }),
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'MAHacks', image: 'mahacks.png' }),
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'MIT Racecar', image: 'racecar.png' }),
              _react2['default'].createElement(_componentsProjectBox2['default'], { clicked: function (item) {
                  return _this.showProject(item);
                }, title: 'CabinetCloud', image: 'cabinet.png' })
            ),
            _react2['default'].createElement(
              _componentsSection2['default'],
              { title: 'About' },
              _react2['default'].createElement(
                'div',
                { className: 'row' },
                _react2['default'].createElement(
                  'div',
                  { className: 'col-sm-6 col-xs-12' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'I\'m a designer & developer from the Boston area studying at Carnegie Mellon. I\'m particularly interested in cognitive and dynamic media; tools that facilitate thought and creativity in new ways.'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'col-sm-6 col-xs-12' },
                  _react2['default'].createElement(
                    'p',
                    null,
                    'Some other interests of mine include programming language theory, artificial intelligence, and communication design.'
                  ),
                  _react2['default'].createElement(
                    'p',
                    null,
                    'You can view my resume ',
                    _react2['default'].createElement(
                      'a',
                      { href: 'resume.pdf' },
                      'here'
                    ),
                    '.'
                  )
                )
              )
            ),
            _react2['default'].createElement(_componentsFooter2['default'], null)
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'alienbox', back: function () {
                return _this.hideProject();
              }, title: 'alienbox' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'alienbox is a menubar app for checking your reddit inbox.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'it was built from the ground up with Electron, VueJS, and the Reddit API.'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'a',
                  { href: '/alienbox' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'visitButton', style: { backgroundColor: '#FF6600' } },
                    'Check it out!'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'alienbox.png' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'LiquidTime', back: function () {
                return _this.hideProject();
              }, title: 'LiquidTime' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'I developed and designed a time management and tracking app.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'It has an emphasis on making every plan fit, with easy rescheduling and pomodoro-style timing.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'It reached the top of ',
                _react2['default'].createElement(
                  'a',
                  { style: { textDecoration: 'underline' }, href: 'https://news.ycombinator.com' },
                  'Hacker News'
                ),
                ' and ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://producthunt.com', style: { textDecoration: 'underline' } },
                  'Product Hunt'
                ),
                '. To date, ',
                _react2['default'].createElement(
                  'a',
                  { style: { textDecoration: 'underline' }, href: 'https://liquidti.me/about' },
                  'thousands of hours'
                ),
                ' of productivity have been logged by thousands of users.'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://liquidti.me' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'visitButton', style: { backgroundColor: '#5850ff' } },
                    'Check it out!'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'liquidtime.png' })
                ),
                _react2['default'].createElement('iframe', { style: { border: 'none' }, src: 'https://cards.producthunt.com/cards/posts/80262?v=1', width: '100%', height: '405', frameBorder: '0', scrolling: 'no', allowFullScreen: true })
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'CabinetCloud', back: function () {
                return _this.hideProject();
              }, title: 'CabinetCloud' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'I remotely interned at a local Boston-based startup called CabinetCloud with a team of 5 to develop a CRM product for local governments. The product would leverage smart government for local municipalities, aiding in their communication, organization, and analyzing with constituents. It received a microgrant from the Santander Urban Impact program, and had the endorsement of multiple local legislators.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'My main work was to design user workflows and layouts for the web-based product. I kept the users, mainly local legislators in mind with my designs. A few months in, I was tasked with developing a full mobile implementation of the product.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'To accomplish the mobile implementation, I sought for new technologies which would allow me to rapidly work on a cross-platform app solo. I came across a relatively new technology, called React Native, which allowed me to make UI elements composable and reusable, keeping design patterns consistent and understandable.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Unfortunately, the product\'s development is currently on-hold, but images of my work are available.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'cabinet.png' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'Formlabs', back: function () {
                return _this.hideProject();
              }, title: 'Formlabs' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'Over the Summer of 2017, I helped the ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://formlabs.com' },
                  'Formlabs'
                ),
                ' web team build internal and user-facing systems for the company\'s (awesome) 3D printers.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '50%', src: 'magnitude.png' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'A-Frame Components', back: function () {
                return _this.hideProject();
              }, title: 'A-Frame Components' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'I developed several open source components for Mozilla\'s ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://aframe.io' },
                  'A-Frame'
                ),
                ' VR platform, a framework which aims to make WebVR development more accessible.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'They focus on implementation of the HTML5 canvas API on a flat VR surface, opening potential for 2d interfaces, text, images, and graphics within a virtual world.'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/maxkrieger/aframe-draw-component' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'visitButton', style: { backgroundColor: '#ef2d5e' } },
                    'Check it out!'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'aframe-text.png' }),
                  _react2['default'].createElement(
                    'a',
                    { href: 'https://aframe.io/blog/aframe-v0.2.0/' },
                    _react2['default'].createElement('img', { width: '100%', src: 'aframe-post.png' })
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'MAHacks', back: function () {
                return _this.hideProject();
              }, title: 'MAHacks' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'I developed the brand identity, materials, and website of a series of Massachusetts high school hackathons with over one hundred attendees.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'The events were hosted at the MIT Stata Center in Cambridge and Canopy City Coworking in Somerville.'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'a',
                  { href: 'http://mahacks.com' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'visitButton', style: { backgroundColor: '#14ADC2' } },
                    'Check it out!'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'mahacks.png' }),
                  _react2['default'].createElement('img', { width: '100%', src: 'mascreen.png' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'MIT Racecar', back: function () {
                return _this.hideProject();
              }, title: 'MIT Beaverworks Racecar' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'In the summer of 2016, I participated in MIT/Lincoln Laboratories\' first institute for high schoolers. We were tasked with an engineering project - automating a remote control car with multiple sensors and an Nvidia Jetson GPU.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'I had the privilege of seeing countless lecturers visit to talk about working in the field of mobile robotics and automation. In addition, MIT professors and colleagues of Lincoln Laboratories conducted seminars on developing control systems, localization, and computer vision for mobile robots'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'I collaborated with ',
                _react2['default'].createElement(
                  'a',
                  { href: 'http://august.codes/' },
                  'August Trollbäck'
                ),
                ' on writing a report following the program.'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'a',
                  { href: 'http://a9.io/bwsi-report/' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'visitButton', style: { backgroundColor: '#0351B9' } },
                    'View Report'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'racecar.png' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'Tabmaster', back: function () {
                return _this.hideProject();
              }, title: 'Tabmaster' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'Tabmaster is a chrome extension allowing for easier management of stray tabs.'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://chrome.google.com/webstore/detail/tabmaster/pojgemmobcnjmnpodjmgeofdgojpkepn' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'visitButton', style: { backgroundColor: '#03B941' } },
                    'Check it out!'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'tabmaster.png' })
                )
              )
            )
          ),
          _react2['default'].createElement(
            _componentsModal2['default'],
            { show: this.state.show === 'Spotify Offline', back: function () {
                return _this.hideProject();
              }, title: 'Spotify Offline' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'p',
                null,
                'I explored how one can better manage their disk space with their Spotify offline music. What resulted was a concept that expanded upon Spotify\'s existing style.'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'a',
                  { href: 'https://www.behance.net/gallery/40743493/Spotify-Offline-Concept-Experience' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'visitButton', style: { backgroundColor: '#1ED760' } },
                    'Check it out!'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2['default'].createElement(
                'div',
                { className: 'row center-xs' },
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement('img', { width: '100%', src: 'spotify-offline.png' })
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.BigText {\n\tfont-weight: 100;\n\tfont-style: italic;\n\tfont-size: 3em;\n\tpadding-top: 0.5em;\n\tpadding-left: 2vw;\n\tpadding-right: 2vw;\n  text-align: center;\n}\n\n@media (max-width: 500px) {\n  .BigText {\n    font-size: 2em;\n  }\n}\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Footer {\n\ttext-align: center;\n\topacity: 0.6;\n\tpadding-top: 2em;\n\tpadding-bottom: 1.5em;\n}\n\n.Footer h1 {\n\tcursor: pointer;\n\tfont-weight: 200;\n\tfont-size: 3em;\n\tmargin: 0;\n}\n\n.Footer p {\n\tfont-size: 0.8em;\n\tmargin: 0;\n}\n", ""]);

  // exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Grid {\n\tpadding: 0.2em 2em;\n}\n\n.Grid h1 {\n\tfont-size: 2.5em;\n\tfont-weight: 200;\n}\n\n.Grid .gridContainer {\n\t-webkit-transition: 0.5s;\n\t-o-transition: 0.5s;\n\ttransition: 0.5s;\n}\n", ""]);

  // exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nheader {\n}\n", ""]);

  // exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n.container-fluid, .container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container-fluid {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.row {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  -webkit-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n\n.row.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.col.reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  -webkit-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\n.col-xs, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-offset-0, .col-xs-offset-1, .col-xs-offset-2, .col-xs-offset-3, .col-xs-offset-4, .col-xs-offset-5, .col-xs-offset-6, .col-xs-offset-7, .col-xs-offset-8, .col-xs-offset-9, .col-xs-offset-10, .col-xs-offset-11, .col-xs-offset-12 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  -webkit-flex-basis: 0;\n          flex-basis: 0;\n  max-width: 100%;\n}\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.33333333%;\n  -webkit-flex-basis: 8.33333333%;\n          flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.66666667%;\n  -webkit-flex-basis: 16.66666667%;\n          flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  -webkit-flex-basis: 25%;\n          flex-basis: 25%;\n  max-width: 25%;\n}\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.33333333%;\n  -webkit-flex-basis: 33.33333333%;\n          flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  -webkit-flex-basis: 41.66666667%;\n          flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  -webkit-flex-basis: 50%;\n          flex-basis: 50%;\n  max-width: 50%;\n}\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.33333333%;\n  -webkit-flex-basis: 58.33333333%;\n          flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.66666667%;\n  -webkit-flex-basis: 66.66666667%;\n          flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  -webkit-flex-basis: 75%;\n          flex-basis: 75%;\n  max-width: 75%;\n}\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.33333333%;\n  -webkit-flex-basis: 83.33333333%;\n          flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.66666667%;\n  -webkit-flex-basis: 91.66666667%;\n          flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  -webkit-flex-basis: 100%;\n          flex-basis: 100%;\n  max-width: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  text-align: start;\n}\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  text-align: end;\n}\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  -webkit-align-items: flex-start;\n              -ms-grid-row-align: flex-start;\n          align-items: flex-start;\n}\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n              -ms-grid-row-align: center;\n          align-items: center;\n}\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  -webkit-align-items: flex-end;\n              -ms-grid-row-align: flex-end;\n          align-items: flex-end;\n}\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n}\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  -webkit-order: -1;\n          order: -1;\n}\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  -webkit-order: 1;\n          order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 49rem;\n  }\n\n  .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-offset-0, .col-sm-offset-1, .col-sm-offset-2, .col-sm-offset-3, .col-sm-offset-4, .col-sm-offset-5, .col-sm-offset-6, .col-sm-offset-7, .col-sm-offset-8, .col-sm-offset-9, .col-sm-offset-10, .col-sm-offset-11, .col-sm-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    -webkit-flex-basis: 0;\n            flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    -webkit-flex-basis: 8.33333333%;\n            flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    -webkit-flex-basis: 16.66666667%;\n            flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    -webkit-flex-basis: 25%;\n            flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    -webkit-flex-basis: 33.33333333%;\n            flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    -webkit-flex-basis: 41.66666667%;\n            flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    -webkit-flex-basis: 50%;\n            flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    -webkit-flex-basis: 58.33333333%;\n            flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    -webkit-flex-basis: 66.66666667%;\n            flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    -webkit-flex-basis: 75%;\n            flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    -webkit-flex-basis: 83.33333333%;\n            flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    -webkit-flex-basis: 91.66666667%;\n            flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    -webkit-flex-basis: 100%;\n            flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    text-align: center;\n  }\n\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -webkit-align-items: flex-start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n  }\n\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n  }\n\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -webkit-align-items: flex-end;\n                -ms-grid-row-align: flex-end;\n            align-items: flex-end;\n  }\n\n  .around-sm {\n    -ms-flex-pack: distribute;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n  }\n\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n  }\n\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n            order: -1;\n  }\n\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    -webkit-order: 1;\n            order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .container {\n    width: 65rem;\n  }\n\n  .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-offset-0, .col-md-offset-1, .col-md-offset-2, .col-md-offset-3, .col-md-offset-4, .col-md-offset-5, .col-md-offset-6, .col-md-offset-7, .col-md-offset-8, .col-md-offset-9, .col-md-offset-10, .col-md-offset-11, .col-md-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    -webkit-flex-basis: 0;\n            flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    -webkit-flex-basis: 8.33333333%;\n            flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    -webkit-flex-basis: 16.66666667%;\n            flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    -webkit-flex-basis: 25%;\n            flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    -webkit-flex-basis: 33.33333333%;\n            flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    -webkit-flex-basis: 41.66666667%;\n            flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    -webkit-flex-basis: 50%;\n            flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    -webkit-flex-basis: 58.33333333%;\n            flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    -webkit-flex-basis: 66.66666667%;\n            flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    -webkit-flex-basis: 75%;\n            flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    -webkit-flex-basis: 83.33333333%;\n            flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    -webkit-flex-basis: 91.66666667%;\n            flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    -webkit-flex-basis: 100%;\n            flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    text-align: center;\n  }\n\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -webkit-align-items: flex-start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n  }\n\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n  }\n\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -webkit-align-items: flex-end;\n                -ms-grid-row-align: flex-end;\n            align-items: flex-end;\n  }\n\n  .around-md {\n    -ms-flex-pack: distribute;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n  }\n\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n  }\n\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n            order: -1;\n  }\n\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    -webkit-order: 1;\n            order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 76rem;\n  }\n\n  .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-offset-0, .col-lg-offset-1, .col-lg-offset-2, .col-lg-offset-3, .col-lg-offset-4, .col-lg-offset-5, .col-lg-offset-6, .col-lg-offset-7, .col-lg-offset-8, .col-lg-offset-9, .col-lg-offset-10, .col-lg-offset-11, .col-lg-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    -webkit-flex-basis: 0;\n            flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    -webkit-flex-basis: 8.33333333%;\n            flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    -webkit-flex-basis: 16.66666667%;\n            flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    -webkit-flex-basis: 25%;\n            flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    -webkit-flex-basis: 33.33333333%;\n            flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    -webkit-flex-basis: 41.66666667%;\n            flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    -webkit-flex-basis: 50%;\n            flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    -webkit-flex-basis: 58.33333333%;\n            flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    -webkit-flex-basis: 66.66666667%;\n            flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    -webkit-flex-basis: 75%;\n            flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    -webkit-flex-basis: 83.33333333%;\n            flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    -webkit-flex-basis: 91.66666667%;\n            flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    -webkit-flex-basis: 100%;\n            flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    text-align: center;\n  }\n\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -webkit-align-items: flex-start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n  }\n\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n  }\n\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -webkit-align-items: flex-end;\n                -ms-grid-row-align: flex-end;\n            align-items: flex-end;\n  }\n\n  .around-lg {\n    -ms-flex-pack: distribute;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n  }\n\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n  }\n\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n            order: -1;\n  }\n\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    -webkit-order: 1;\n            order: 1;\n  }\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #171717;\n  color: #FFFFFF;\n  font-family: 'Roboto',sans-serif;\n  position: relative;\n}\n\na {\n  text-decoration: none;\n\tcolor: inherit;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Modal {\n\tposition: absolute;\n\tz-index: 10;\n\tbackground-color: #FFFFFF;\n\tcolor: #171717;\n\tpadding-top: 2em;\n}\n\n.Modal h1 {\n\tfont-weight: 200;\n\tmargin-left: 5vw;\n\tmargin-bottom: 0;\n\tfont-size: 4.5em;\n}\n\n.Modal .MoxBoxSmall {\n\tborder: 1px solid #171717;\n\tpadding: 6px 18px;\n\tfont-weight: 100;\n\tfont-style: italic;\n\tfont-size: 1.8em;\n\tcursor: pointer;\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n}\n\n.Modal .MoxBoxSmall:hover {\n\tbackground-color: #171717;\n\tcolor: #FFFFFF;\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n}\n\n.Modal .backBtn {\n\tmargin-left: 3vw;\n\tfont-size: 2em;\n\tcolor: #171717;\n\topacity: 0.8;\n\tcursor: pointer;\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n}\n\n.Modal .backBtn:hover {\n\topacity: 1;\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n}\n\n.Modal .content {\n\tpadding-left: 3em;\n\tpadding-right: 3em;\n}\n\n.Modal .content p {\n\tfont-size: 1.2em;\n}\n\n.Modal .content .visitButton {\n\tpadding: 0.5em;\n\ttext-decoration: none;\n\twidth: 150px;\n\ttext-align: center;\n\tcolor: #FFFFFF;\n\tfont-size: 1.5em;\n\tborder-radius: 10px;\n}\n\n.Modal .content img {\n\tmargin-top: 1em;\n}\n\n.Modal p a {\n\ttext-decoration: underline;\n}\n.Modal.Show {\n\tdisplay: \"\";\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\t-webkit-animation: slidein 0.5s;\n\t     -o-animation: slidein 0.5s;\n\t        animation: slidein 0.5s;\n}\n.Modal.Hide {\n\tdisplay: none;\n}\n\n@-webkit-keyframes slidein {\n\t0% {\n\t\ttop: 200%;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 200%;\n\t}\n\t100% {\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t}\n}\n\n@-o-keyframes slidein {\n\t0% {\n\t\ttop: 200%;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 200%;\n\t}\n\t100% {\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t}\n}\n\n@keyframes slidein {\n\t0% {\n\t\ttop: 200%;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 200%;\n\t}\n\t100% {\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t}\n}\n", ""]);

  // exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.MoxBox {\n\tborder: 1px solid #FFFFFF;\n\tmargin-top: 2em;\n\tpadding: 8px 20px;\n\tdisplay: inline-block;\n\tfont-weight: 100;\n\tfont-style: italic;\n\tfont-size: 2em;\n\tcursor: pointer;\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n}\n.MoxBox:hover {\n\tbackground-color: #FFFFFF;\n\tcolor: #171717;\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n}\n", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.ProjectBox {\n\twidth: 300px;\n\theight: 200px;\n\tbackground-color: #FFFFFF;\n  border-radius: 6px;\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n\t-webkit-box-shadow: 3px 3px 15px -2px rgba(0,0,0,0.5);\n\t        box-shadow: 3px 3px 15px -2px rgba(0,0,0,0.5);\n\tmargin: 10px;\n\toverflow: hidden;\n}\n\n.ProjectBox .Overlay {\n\tbackground-color: rgba(255, 255, 255, 1);\n\twidth: 300px;\n\theight: 200px;\n\tcolor: #171717;\n\topacity: 0;\n\t-webkit-transition: 0.2s;\n\t-o-transition: 0.2s;\n\ttransition: 0.2s;\n\tmargin: 0;\n}\n\n.ProjectBox .Overlay .Title {\n\tfont-weight: 200;\n\tfont-family: \"Roboto Slab\", sans-serif;\n\tfont-size: 2.5em;\n\tmargin: 20px;\n}\n.ProjectBox:hover {\n\t-webkit-transition: 0.3s;\n\t-o-transition: 0.3s;\n\ttransition: 0.3s;\n\t-webkit-box-shadow: 3px 3px 50px -2px rgba(0,0,0,0.7);\n\t        box-shadow: 3px 3px 50px -2px rgba(0,0,0,0.7);\n}\n.ProjectBox:hover .Overlay {\n\t-webkit-transition: 0.2s;\n\t-o-transition: 0.2s;\n\ttransition: 0.2s;\n\topacity: 0.9;\n}\n", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Section {\n\tpadding: 0.2em 2em;\n}\n\n.Section h1 {\n\tfont-size: 2.5em;\n\tfont-weight: 200;\n\tmargin-bottom: 0.2em;\n}\n\n.Section p {}\n\n.Section a {\n\ttext-decoration: underline;\n}\n", ""]);

  // exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.SocialMedia a {\n\n    padding: 10px;\n\n    font-size: 1.5em;\n\n    -webkit-transition: 0.3s;\n\n    -o-transition: 0.3s;\n\n    transition: 0.3s;\n}\n\n.SocialMedia a:hover {\n\n    background-color: #FFFFFF;\n\n    color: #171717;\n\n    -webkit-transition: 0.3s;\n\n    -o-transition: 0.3s;\n\n    transition: 0.3s;\n}\n", ""]);

  // exports


/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);