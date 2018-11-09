module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_react_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html_react_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_html_react_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_timers__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var scoreboard = "|                                              |\n|                  SCORE: 0                    |\n|                                              |\n ---------------------------------------------- ";

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "moveRight", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.direction !== 'left') {
          _this.direction = 'right';
          var row, col; // remueve la cola

          var lastPosition = _this.snake[_this.snake.length - 1];

          var board = _this.state.board.map(function (row) {
            return row.slice(0);
          });

          board[lastPosition[0]][lastPosition[1]] = ' ';

          _this.setState({
            board: board
          });

          var currentPosition = _this.snake[0]; // mueve la cabeza

          row = currentPosition[0];
          col = currentPosition[1];
          _this.snake[0] = [row, col + 1];

          _this.checkCollision(); // mueve el cuerpo


          for (var i = 1; i < _this.snake.length; i++) {
            row = currentPosition[0];
            col = currentPosition[1];
            currentPosition = _this.snake[i];
            _this.snake[i] = [row, col];
          }

          if (_this.checkApple()) {
            _this.snake.push([lastPosition[0], lastPosition[1]]);

            ++_this.score;

            _this.putOnTheBoard();
          }
        } else {
          _this.moveLeft();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "moveLeft", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.direction !== 'right') {
          _this.direction = 'left';
          var row, col; // remueve la cola

          var lastPosition = _this.snake[_this.snake.length - 1];

          var board = _this.state.board.map(function (row) {
            return row.slice(0);
          });

          board[lastPosition[0]][lastPosition[1]] = ' ';

          _this.setState({
            board: board
          });

          var currentPosition = _this.snake[0]; // mueve la cabeza

          row = currentPosition[0];
          col = currentPosition[1];
          _this.snake[0] = [row, col - 1];

          _this.checkCollision(); // mueve el cuerpo


          for (var i = 1; i < _this.snake.length; i++) {
            row = currentPosition[0];
            col = currentPosition[1];
            currentPosition = _this.snake[i];
            _this.snake[i] = [row, col];
          }

          if (_this.checkApple()) {
            _this.snake.push([lastPosition[0], lastPosition[1]]);

            ++_this.score;

            _this.putOnTheBoard();
          }
        } else {
          _this.moveRight();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "moveUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.direction !== 'down') {
          _this.direction = 'up';
          var row, col; // remueve la cola

          var lastPosition = _this.snake[_this.snake.length - 1];

          var board = _this.state.board.map(function (row) {
            return row.slice(0);
          });

          board[lastPosition[0]][lastPosition[1]] = ' ';

          _this.setState({
            board: board
          });

          var currentPosition = _this.snake[0]; // mueve la cabeza

          row = currentPosition[0];
          col = currentPosition[1];
          _this.snake[0] = [row - 1, col];

          _this.checkCollision(); // mueve el cuerpo


          for (var i = 1; i < _this.snake.length; i++) {
            row = currentPosition[0];
            col = currentPosition[1];
            currentPosition = _this.snake[i];
            _this.snake[i] = [row, col];
          }

          if (_this.checkApple()) {
            _this.snake.push([lastPosition[0], lastPosition[1]]);

            ++_this.score;

            _this.putOnTheBoard();
          }
        } else {
          _this.moveDown();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "moveDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.direction !== 'up') {
          _this.direction = 'down';
          var row, col; // remueve la cola

          var lastPosition = _this.snake[_this.snake.length - 1];

          var board = _this.state.board.map(function (row) {
            return row.slice(0);
          });

          board[lastPosition[0]][lastPosition[1]] = ' ';

          _this.setState({
            board: board
          });

          var currentPosition = _this.snake[0]; // mueve la cabeza

          row = currentPosition[0];
          col = currentPosition[1];
          _this.snake[0] = [row + 1, col];

          _this.checkCollision(); // mueve el cuerpo


          for (var i = 1; i < _this.snake.length; i++) {
            row = currentPosition[0];
            col = currentPosition[1];
            currentPosition = _this.snake[i];
            _this.snake[i] = [row, col];
          }

          if (_this.checkApple()) {
            _this.snake.push([lastPosition[0], lastPosition[1]]);

            ++_this.score;

            _this.putOnTheBoard();
          }
        } else {
          _this.moveUp();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkCollision", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var row, col;
        var currentPosition = _this.snake[0];
        row = currentPosition[0];
        col = currentPosition[1];

        if (_this.state.board[row][col] === '-' || _this.state.board[row][col] === '|') {
          _this.setupGame().then(function () {
            _this.putOnTheBoard();

            _this.start();
          });
        }
      }
    });
    _this.snake = [];
    _this.direction = '';
    _this.scoreboard = scoreboard;
    _this.score = 0;
    _this.state = {
      board: undefined,
      start: false
    };
    _this.putOnTheBoard = _this.putOnTheBoard.bind(_assertThisInitialized(_this));
    _this.setupGame = _this.setupGame.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setupGame().then(function () {
        _this2.putOnTheBoard();

        _this2.start();

        _this2.setState({
          start: true
        });
      });
    }
  }, {
    key: "setupGame",
    value: function () {
      var _setupGame = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var response, board;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('/static/board.txt');

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.text();

              case 6:
                board = _context.sent;
                this.setState({
                  board: board.toString().split('\n').map(function (rb) {
                    return rb.split('');
                  })
                });
                this.score = 0;
                this.scoreboard = scoreboard;
                this.snake = [[3, 12], [3, 11], [2, 11]];
                return _context.abrupt("return", Promise.resolve(true));

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", Promise.reject(new Error(_context.t0)));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      return function setupGame() {
        return _setupGame.apply(this, arguments);
      };
    }()
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      this.direction = '';
      Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(this.interval);

      var cbStart = function cbStart(event) {
        if (event && event.key === 'ArrowRight') {
          if (_this3.direction !== 'ArrowLeft') {
            Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(_this3.interval);
            _this3.interval = Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setInterval"])(function () {
              _this3.moveRight();
            }, 100);
          }
        }

        if (event && event.key === 'ArrowLeft') {
          if (_this3.direction !== 'ArrowRight') {
            Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(_this3.interval);
            _this3.interval = Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setInterval"])(function () {
              _this3.moveLeft();
            }, 100);
          }
        }

        if (event && event.key === 'ArrowUp') {
          if (_this3.direction !== 'ArrowDown') {
            Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(_this3.interval);
            _this3.interval = Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setInterval"])(function () {
              _this3.moveUp();
            }, 150);
          }
        }

        if (event && event.key === 'ArrowDown') {
          if (_this3.direction !== 'ArrowUp') {
            Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearInterval"])(_this3.interval);
            _this3.interval = Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setInterval"])(function () {
              _this3.moveDown();
            }, 150);
          }
        }
      };

      document.removeEventListener('keydown', cbStart);
      document.addEventListener('keydown', cbStart);
    }
  }, {
    key: "checkApple",
    value: function checkApple() {
      var row, col;
      var currentPosition = this.snake[0];
      row = currentPosition[0];
      col = currentPosition[1];

      if (this.state.board[row][col] === '.') {
        return true;
      }

      return false;
    }
  }, {
    key: "putOnTheBoard",
    value: function putOnTheBoard() {
      var board = this.state.board.map(function (row) {
        return row.slice(0);
      });
      var rowRandom = Math.floor(Math.random() * (board.length - 2) + 1);
      var colRandom = Math.floor(Math.random() * (board[0].length - 2) + 1);

      while (board[rowRandom][colRandom] === '.') {
        rowRandom = Math.floor(Math.random() * (board.length - 2) + 1);
        colRandom = Math.floor(Math.random() * (board[0].length - 2) + 1);
      }

      board[rowRandom][colRandom] = '.';
      this.setState({
        board: board
      });
    }
  }, {
    key: "clearBoard",
    value: function clearBoard() {
      process.stdout.write("\x1B[2J\x1B[0f\x1B[0;0H");
    }
  }, {
    key: "render",
    value: function render() {
      var Header = function Header() {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "header"
        }, " ", 'PRESS -> OR <- TO PLAY THE GAME', " ");
      };

      var TerminalBar = function TerminalBar() {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "jsx-3769869511" + " " + "bar"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "jsx-3769869511" + " " + "red"
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "jsx-3769869511" + " " + "yellow"
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "jsx-3769869511" + " " + "green"
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: "3769869511",
          css: ".header{font-family:monospace;color:#292A2A;margin:auto;padding:15px;font-size:30px;text-align:center;}.bar{text-align:center;width:752px;height:25px;background-color:#DAD9D9;margin:0 auto;font-family:monospace;padding:auto;float:none;border-radius:5px 5px 0 0;}.red{background-color:#E94B35;border-radius:100%;width:15px;height:15px;margin:0 auto;left:-47%;bottom:-20%;position:relative;}.yellow{background-color:#f0f000;border-radius:100%;width:15px;height:15px;margin:0 auto;left:-44%;bottom:40%;position:relative;display:block;}.green{background-color:#1AAF5C;border-radius:100%;width:15px;height:15px;margin:0 auto;left:-41%;bottom:99%;position:relative;display:block;}"
        }));
      };

      if (this.state.board && this.state.start) {
        this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>');
        this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;'); // print the snake on the board for first time

        var row, col;
        var board = this.state.board.map(function (row) {
          return row.slice(0);
        });

        for (var i = 0; i < this.snake.length; i++) {
          var currentPosition = this.snake[i];
          row = currentPosition[0];
          col = currentPosition[1];
          board[row][col] = '.';
        }

        var boardString = board.map(function (row) {
          return row.join('');
        }).join('\n'); // update score

        this.scoreboard = this.scoreboard.replace(this.scoreboard.match(/([0-9])/g).join(''), "".concat(this.score)); // print board

        this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>');
        this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;');
        boardString = boardString.replace(/([\n])/g, '<br>');
        boardString = boardString.replace(/([ ])/g, '&nbsp;');
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Header, null), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(TerminalBar, null), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          className: "jsx-1717568739" + " " + 'terminal'
        }, __WEBPACK_IMPORTED_MODULE_3_html_react_parser___default()(boardString), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
          className: "jsx-1717568739"
        }), __WEBPACK_IMPORTED_MODULE_3_html_react_parser___default()(this.scoreboard), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: "1717568739",
          css: ".terminal.jsx-1717568739{background-color:#33485E;width:750px;height:350px;border-radius:0 0 5px 5px;margin:0 auto;padding:1px;color:#fff;font-family:monospace;text-align:center;}"
        })));
      } else {
        return null;
      }
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("timers");

/***/ })
/******/ ]);