webpackHotUpdate(5,{

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(399);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _htmlReactParser = __webpack_require__(400);

var _htmlReactParser2 = _interopRequireDefault(_htmlReactParser);

var _isomorphicUnfetch = __webpack_require__(410);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _timers = __webpack_require__(411);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\nxjulian\\Clones\\Github\\juvasquezg\\node-snake-web\\pages\\index.js?entry';


var scoreboard = '|                                              |\n|                  SCORE: 0                    |\n|                                              |\n ---------------------------------------------- ';

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.moveRight = function () {
      if (_this.direction !== 'left') {
        _this.direction = 'right';
        var row = void 0,
            col = void 0;
        // remueve la cola
        var lastPosition = _this.snake[_this.snake.length - 1];
        var board = _this.state.board.map(function (row) {
          return row.slice(0);
        });
        board[lastPosition[0]][lastPosition[1]] = ' ';
        _this.setState({ board: board });
        var currentPosition = _this.snake[0];
        // mueve la cabeza
        row = currentPosition[0];
        col = currentPosition[1];
        _this.snake[0] = [row, col + 1];
        _this.checkCollision();
        // mueve el cuerpo
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
    };

    _this.moveLeft = function () {
      if (_this.direction !== 'right') {
        _this.direction = 'left';
        var row = void 0,
            col = void 0;
        // remueve la cola
        var lastPosition = _this.snake[_this.snake.length - 1];
        var board = _this.state.board.map(function (row) {
          return row.slice(0);
        });
        board[lastPosition[0]][lastPosition[1]] = ' ';
        _this.setState({ board: board });
        var currentPosition = _this.snake[0];
        // mueve la cabeza
        row = currentPosition[0];
        col = currentPosition[1];
        _this.snake[0] = [row, col - 1];
        _this.checkCollision();
        // mueve el cuerpo
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
    };

    _this.moveUp = function () {
      if (_this.direction !== 'down') {
        _this.direction = 'up';
        var row = void 0,
            col = void 0;
        // remueve la cola
        var lastPosition = _this.snake[_this.snake.length - 1];
        var board = _this.state.board.map(function (row) {
          return row.slice(0);
        });
        board[lastPosition[0]][lastPosition[1]] = ' ';
        _this.setState({ board: board });
        var currentPosition = _this.snake[0];
        // mueve la cabeza
        row = currentPosition[0];
        col = currentPosition[1];
        _this.snake[0] = [row - 1, col];
        _this.checkCollision();
        // mueve el cuerpo
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
    };

    _this.moveDown = function () {
      if (_this.direction !== 'up') {
        _this.direction = 'down';
        var row = void 0,
            col = void 0;
        // remueve la cola
        var lastPosition = _this.snake[_this.snake.length - 1];
        var board = _this.state.board.map(function (row) {
          return row.slice(0);
        });
        board[lastPosition[0]][lastPosition[1]] = ' ';
        _this.setState({ board: board });
        var currentPosition = _this.snake[0];
        // mueve la cabeza
        row = currentPosition[0];
        col = currentPosition[1];
        _this.snake[0] = [row + 1, col];
        _this.checkCollision();
        // mueve el cuerpo
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
    };

    _this.checkCollision = function () {
      var row = void 0,
          col = void 0;
      var currentPosition = _this.snake[0];
      row = currentPosition[0];
      col = currentPosition[1];
      if (_this.state.board[row][col] === '-' || _this.state.board[row][col] === '|') {
        _this.setupGame().then(function () {
          _this.putOnTheBoard();
          _this.start();
        });
      }
    };

    _this.snake = [];
    _this.direction = '';
    _this.scoreboard = scoreboard;
    _this.score = 0;
    _this.state = { board: undefined, start: false };
    _this.putOnTheBoard = _this.putOnTheBoard.bind(_this);
    _this.setupGame = _this.setupGame.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setupGame().then(function () {
        _this2.putOnTheBoard();
        _this2.start();
        _this2.setState({ start: true });
      });
    }
  }, {
    key: 'setupGame',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, board;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _isomorphicUnfetch2.default)('/static/board.txt');

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.text();

              case 6:
                board = _context.sent;

                this.setState({ board: board.toString().split('\n').map(function (rb) {
                    return rb.split('');
                  }) });
                this.score = 0;
                this.scoreboard = scoreboard;
                this.snake = [[3, 12], [3, 11], [2, 11]];
                return _context.abrupt('return', _promise2.default.resolve(true));

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', _promise2.default.reject(new Error(_context.t0)));

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function setupGame() {
        return _ref.apply(this, arguments);
      }

      return setupGame;
    }()
  }, {
    key: 'start',
    value: function start() {
      var _this3 = this;

      this.direction = '';
      (0, _timers.clearInterval)(this.interval);
      var cbStart = function cbStart(event) {
        if (event && event.key === 'ArrowRight') {
          if (_this3.direction !== 'ArrowLeft') {
            (0, _timers.clearInterval)(_this3.interval);
            _this3.interval = (0, _timers.setInterval)(function () {
              _this3.moveRight();
            }, 100);
          }
        }
        if (event && event.key === 'ArrowLeft') {
          if (_this3.direction !== 'ArrowRight') {
            (0, _timers.clearInterval)(_this3.interval);
            _this3.interval = (0, _timers.setInterval)(function () {
              _this3.moveLeft();
            }, 100);
          }
        }
        if (event && event.key === 'ArrowUp') {
          if (_this3.direction !== 'ArrowDown') {
            (0, _timers.clearInterval)(_this3.interval);
            _this3.interval = (0, _timers.setInterval)(function () {
              _this3.moveUp();
            }, 150);
          }
        }
        if (event && event.key === 'ArrowDown') {
          if (_this3.direction !== 'ArrowUp') {
            (0, _timers.clearInterval)(_this3.interval);
            _this3.interval = (0, _timers.setInterval)(function () {
              _this3.moveDown();
            }, 150);
          }
        }
      };
      document.removeEventListener('keydown', cbStart);
      document.addEventListener('keydown', cbStart);
    }
  }, {
    key: 'checkApple',
    value: function checkApple() {
      var row = void 0,
          col = void 0;
      var currentPosition = this.snake[0];
      row = currentPosition[0];
      col = currentPosition[1];
      if (this.state.board[row][col] === '.') {
        return true;
      }
      return false;
    }
  }, {
    key: 'putOnTheBoard',
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
      this.setState({ board: board });
    }
  }, {
    key: 'clearBoard',
    value: function clearBoard() {
      process.stdout.write('\x1B[2J\x1B[0f\x1B[0;0H');
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = function Header() {
        return _react2.default.createElement('div', { className: 'header', __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          }
        }, ' ', 'PRESS -> OR <- TO PLAY THE GAME', ' ');
      };

      var TerminalBar = function TerminalBar() {
        return _react2.default.createElement('div', {
          className: 'jsx-3769869511' + ' ' + 'bar',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }, _react2.default.createElement('div', {
          className: 'jsx-3769869511' + ' ' + 'red',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          }
        }), _react2.default.createElement('div', {
          className: 'jsx-3769869511' + ' ' + 'yellow',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }), _react2.default.createElement('div', {
          className: 'jsx-3769869511' + ' ' + 'green',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }), _react2.default.createElement(_style2.default, {
          styleId: '3769869511',
          css: '.header{font-family:monospace;color:#292A2A;margin:auto;padding:15px;font-size:30px;text-align:center;}.bar{text-align:center;width:752px;height:25px;background-color:#DAD9D9;margin:0 auto;font-family:monospace;padding:auto;float:none;border-radius:5px 5px 0 0;}.red{background-color:#E94B35;border-radius:100%;width:15px;height:15px;margin:0 auto;left:-47%;bottom:-20%;position:relative;}.yellow{background-color:#f0f000;border-radius:100%;width:15px;height:15px;margin:0 auto;left:-44%;bottom:40%;position:relative;display:block;}.green{background-color:#1AAF5C;border-radius:100%;width:15px;height:15px;margin:0 auto;left:-41%;bottom:99%;position:relative;display:block;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrUjJCLEFBR21DLEFBUUosQUFXTyxBQVVBLEFBV0Usa0JBL0JmLElBUkUsR0FtQkssQUFVQSxBQVdFLEtBL0JULE1BUkEsTUFTYSxFQVVkLEFBVUEsQUFXRSxJQXZDQSxPQW1CRCxBQVVBLEFBV0UsTUF2Q0MsTUFRRCxBQVdBLEFBVUEsQUFXRSxTQXZDRSxLQVFJLEFBV1osQUFVQSxBQVdFLFVBcEJBLEFBVUQsQUFXRSxHQXhDZixRQThCbUIsQUFXRSxDQWpDTixBQVlJLGFBWE4sSUFzQkcsQUFXRSxDQXJCbEIsTUFYNEIsT0FzQjVCLEFBV0EsbUJBaENBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ueGp1bGlhbi9DbG9uZXMvR2l0aHViL2p1dmFzcXVlemcvbm9kZS1zbmFrZS13ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFyc2VyIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IGNsZWFySW50ZXJ2YWwsIHNldEludGVydmFsIH0gZnJvbSAndGltZXJzJztcblxuY29uc3Qgc2NvcmVib2FyZCA9IGB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICBTQ09SRTogMCAgICAgICAgICAgICAgICAgICAgfFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zbmFrZSA9IFtdXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnJ1xuICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmRcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMuc3RhdGUgPSB7IGJvYXJkOiB1bmRlZmluZWQsIHN0YXJ0OiBmYWxzZSB9XG4gICAgdGhpcy5wdXRPblRoZUJvYXJkID0gdGhpcy5wdXRPblRoZUJvYXJkLmJpbmQodGhpcylcbiAgICB0aGlzLnNldHVwR2FtZSA9IHRoaXMuc2V0dXBHYW1lLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLnNldHVwR2FtZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIHRoaXMuc3RhcnQoKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB0cnVlIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHNldHVwR2FtZSAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zdGF0aWMvYm9hcmQudHh0JylcbiAgICAgIGNvbnN0IGJvYXJkID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IGJvYXJkLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpLm1hcChyYiA9PiByYi5zcGxpdCgnJykpIH0pXG4gICAgICB0aGlzLnNjb3JlID0gMFxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZFxuICAgICAgdGhpcy5zbmFrZSA9IFtbMywgMTJdLCBbMywgMTFdLCBbMiwgMTFdXVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihlcnIpKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICcnXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgIGNvbnN0IGNiU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmVSaWdodCgpXG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdCgpXG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVXAoKVxuICAgICAgICAgIH0sIDE1MClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZURvd24oKVxuICAgICAgICAgIH0sIDE1MClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2JTdGFydClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2JTdGFydClcbiAgfVxuXG4gIG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIC8vIHJlbXVldmUgbGEgY29sYVxuICAgICAgbGV0IGxhc3RQb3NpdGlvbiA9IHRoaXMuc25ha2VbdGhpcy5zbmFrZS5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICAgIH0pXG4gICAgICBib2FyZFtsYXN0UG9zaXRpb25bMF1dW2xhc3RQb3NpdGlvblsxXV0gPSAnICdcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICAgIC8vIG11ZXZlIGxhIGNhYmV6YVxuICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgIHRoaXMuc25ha2VbMF0gPSBbcm93LCBjb2wgKyAxXVxuICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpXG4gICAgICAvLyBtdWV2ZSBlbCBjdWVycG9cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgdGhpcy5zbmFrZVtpXSA9IFtyb3csIGNvbF1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrQXBwbGUoKSkge1xuICAgICAgICB0aGlzLnNuYWtlLnB1c2goW2xhc3RQb3NpdGlvblswXSwgbGFzdFBvc2l0aW9uWzFdXSlcbiAgICAgICAgKyt0aGlzLnNjb3JlXG4gICAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZUxlZnQoKVxuICAgIH1cbiAgfVxuXG4gIG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgLy8gcmVtdWV2ZSBsYSBjb2xhXG4gICAgICBsZXQgbGFzdFBvc2l0aW9uID0gdGhpcy5zbmFrZVt0aGlzLnNuYWtlLmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgICAgfSlcbiAgICAgIGJvYXJkW2xhc3RQb3NpdGlvblswXV1bbGFzdFBvc2l0aW9uWzFdXSA9ICcgJ1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgICAgLy8gbXVldmUgbGEgY2FiZXphXG4gICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgdGhpcy5zbmFrZVswXSA9IFtyb3csIGNvbCAtIDFdXG4gICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKClcbiAgICAgIC8vIG11ZXZlIGVsIGN1ZXJwb1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICB0aGlzLnNuYWtlW2ldID0gW3JvdywgY29sXVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tBcHBsZSgpKSB7XG4gICAgICAgIHRoaXMuc25ha2UucHVzaChbbGFzdFBvc2l0aW9uWzBdLCBsYXN0UG9zaXRpb25bMV1dKVxuICAgICAgICArK3RoaXMuc2NvcmVcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlUmlnaHQoKVxuICAgIH1cbiAgfVxuXG4gIG1vdmVVcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIC8vIHJlbXVldmUgbGEgY29sYVxuICAgICAgbGV0IGxhc3RQb3NpdGlvbiA9IHRoaXMuc25ha2VbdGhpcy5zbmFrZS5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICAgIH0pXG4gICAgICBib2FyZFtsYXN0UG9zaXRpb25bMF1dW2xhc3RQb3NpdGlvblsxXV0gPSAnICdcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICAgIC8vIG11ZXZlIGxhIGNhYmV6YVxuICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgIHRoaXMuc25ha2VbMF0gPSBbcm93IC0gMSwgY29sXVxuICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpXG4gICAgICAvLyBtdWV2ZSBlbCBjdWVycG9cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgdGhpcy5zbmFrZVtpXSA9IFtyb3csIGNvbF1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrQXBwbGUoKSkge1xuICAgICAgICB0aGlzLnNuYWtlLnB1c2goW2xhc3RQb3NpdGlvblswXSwgbGFzdFBvc2l0aW9uWzFdXSlcbiAgICAgICAgKyt0aGlzLnNjb3JlXG4gICAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZURvd24oKVxuICAgIH1cbiAgfVxuXG4gIG1vdmVEb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bidcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgLy8gcmVtdWV2ZSBsYSBjb2xhXG4gICAgICBsZXQgbGFzdFBvc2l0aW9uID0gdGhpcy5zbmFrZVt0aGlzLnNuYWtlLmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgICAgfSlcbiAgICAgIGJvYXJkW2xhc3RQb3NpdGlvblswXV1bbGFzdFBvc2l0aW9uWzFdXSA9ICcgJ1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgICAgLy8gbXVldmUgbGEgY2FiZXphXG4gICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgdGhpcy5zbmFrZVswXSA9IFtyb3cgKyAxLCBjb2xdXG4gICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKClcbiAgICAgIC8vIG11ZXZlIGVsIGN1ZXJwb1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICB0aGlzLnNuYWtlW2ldID0gW3JvdywgY29sXVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tBcHBsZSgpKSB7XG4gICAgICAgIHRoaXMuc25ha2UucHVzaChbbGFzdFBvc2l0aW9uWzBdLCBsYXN0UG9zaXRpb25bMV1dKVxuICAgICAgICArK3RoaXMuc2NvcmVcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlVXAoKVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uID0gKCkgPT4ge1xuICAgIGxldCByb3csIGNvbFxuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID09PSAnLScgfHwgdGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2NvbF0gPT09ICd8Jykge1xuICAgICAgdGhpcy5zZXR1cEdhbWUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgICAgdGhpcy5zdGFydCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQXBwbGUgKCkge1xuICAgIGxldCByb3csIGNvbFxuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID09PSAnLicpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHV0T25UaGVCb2FyZCAoKSB7XG4gICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgfSlcbiAgICBsZXQgcm93UmFuZG9tID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIChib2FyZC5sZW5ndGggLSAyKSkgKyAxKVxuICAgIGxldCBjb2xSYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGJvYXJkWzBdLmxlbmd0aCAtIDIpKSArIDEpXG4gICAgd2hpbGUgKGJvYXJkW3Jvd1JhbmRvbV1bY29sUmFuZG9tXSA9PT0gJy4nKSB7XG4gICAgICByb3dSYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGJvYXJkLmxlbmd0aCAtIDIpKSArIDEpXG4gICAgICBjb2xSYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGJvYXJkWzBdLmxlbmd0aCAtIDIpKSArIDEpXG4gICAgfVxuICAgIGJvYXJkW3Jvd1JhbmRvbV1bY29sUmFuZG9tXSA9ICcuJ1xuICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICB9XG5cbiAgY2xlYXJCb2FyZCAoKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xceDFCWzJKXFx4MUJbMGZcXHUwMDFiWzA7MEgnKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPiB7J1BSRVNTIC0+IE9SIDwtIFRPIFBMQVkgVEhFIEdBTUUnfSA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBUZXJtaW5hbEJhciA9ICgpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInllbGxvd1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZWVuXCI+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgICAgY29sb3I6ICMyOTJBMkE7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA3NTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUQ5RDk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgICBwYWRkaW5nOiBhdXRvO1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTk0QjM1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAtNDclO1xuICAgICAgICAgICAgYm90dG9tOiAtMjAlO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC55ZWxsb3cge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjAwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbGVmdDogLTQ0JTtcbiAgICAgICAgICAgIGJvdHRvbTogNDAlO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyZWVuIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBQUY1QztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGxlZnQ6IC00MSU7XG4gICAgICAgICAgICAgIGJvdHRvbTogOTklO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfWB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5ib2FyZCAmJiB0aGlzLnN0YXRlLnN0YXJ0KSB7XG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFtcXG5dKS9nLCAnPGJyPicpXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFsgXSkvZywgJyZuYnNwOycpXG4gICAgICAvLyBwcmludCB0aGUgc25ha2Ugb24gdGhlIGJvYXJkIGZvciBmaXJzdCB0aW1lXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgICB9KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlW2ldXG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gJy4nXG4gICAgICB9XG4gICAgICBsZXQgYm9hcmRTdHJpbmcgPSBib2FyZC5tYXAocm93ID0+IHJvdy5qb2luKCcnKSkuam9pbignXFxuJylcbiAgICAgIC8vIHVwZGF0ZSBzY29yZVxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UodGhpcy5zY29yZWJvYXJkLm1hdGNoKC8oWzAtOV0pL2cpLmpvaW4oJycpLCBgJHt0aGlzLnNjb3JlfWApXG4gICAgICAvLyBwcmludCBib2FyZFxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UoLyhbXFxuXSkvZywgJzxicj4nKVxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UoLyhbIF0pL2csICcmbmJzcDsnKVxuICAgICAgYm9hcmRTdHJpbmcgPSBib2FyZFN0cmluZy5yZXBsYWNlKC8oW1xcbl0pL2csICc8YnI+JylcbiAgICAgIGJvYXJkU3RyaW5nID0gYm9hcmRTdHJpbmcucmVwbGFjZSgvKFsgXSkvZywgJyZuYnNwOycpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8VGVybWluYWxCYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGVybWluYWwnPlxuICAgICAgICAgICAge1BhcnNlcihib2FyZFN0cmluZyl9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHtQYXJzZXIodGhpcy5zY29yZWJvYXJkKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0ODVFO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
        }));
      };

      if (this.state.board && this.state.start) {
        this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>');
        this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;');
        // print the snake on the board for first time
        var row = void 0,
            col = void 0;
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
        }).join('\n');
        // update score
        this.scoreboard = this.scoreboard.replace(this.scoreboard.match(/([0-9])/g).join(''), '' + this.score);
        // print board
        this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>');
        this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;');
        boardString = boardString.replace(/([\n])/g, '<br>');
        boardString = boardString.replace(/([ ])/g, '&nbsp;');
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          }
        }, _react2.default.createElement(Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          }
        }), _react2.default.createElement(TerminalBar, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          }
        }), _react2.default.createElement('div', {
          className: 'jsx-1717568739' + ' ' + 'terminal',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357
          }
        }, (0, _htmlReactParser2.default)(boardString), _react2.default.createElement('br', {
          className: 'jsx-1717568739',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          }
        }), (0, _htmlReactParser2.default)(this.scoreboard), _react2.default.createElement(_style2.default, {
          styleId: '1717568739',
          css: '.terminal.jsx-1717568739{background-color:#33485E;width:750px;height:350px;border-radius:0 0 5px 5px;margin:0 auto;padding:1px;color:#fff;font-family:monospace;text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3V3dCLEFBRzBDLHlCQUNiLFlBQ0MsYUFDYSwwQkFDWixjQUNGLFlBQ0QsV0FDVyxzQkFDSixrQkFDcEIiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL254anVsaWFuL0Nsb25lcy9HaXRodWIvanV2YXNxdWV6Zy9ub2RlLXNuYWtlLXdlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYXJzZXIgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCwgc2V0SW50ZXJ2YWwgfSBmcm9tICd0aW1lcnMnO1xuXG5jb25zdCBzY29yZWJvYXJkID0gYHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxufCAgICAgICAgICAgICAgICAgIFNDT1JFOiAwICAgICAgICAgICAgICAgICAgICB8XG58ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnNuYWtlID0gW11cbiAgICB0aGlzLmRpcmVjdGlvbiA9ICcnXG4gICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZFxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5zdGF0ZSA9IHsgYm9hcmQ6IHVuZGVmaW5lZCwgc3RhcnQ6IGZhbHNlIH1cbiAgICB0aGlzLnB1dE9uVGhlQm9hcmQgPSB0aGlzLnB1dE9uVGhlQm9hcmQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0dXBHYW1lID0gdGhpcy5zZXR1cEdhbWUuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc2V0dXBHYW1lKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnB1dE9uVGhlQm9hcmQoKVxuICAgICAgdGhpcy5zdGFydCgpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHRydWUgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgc2V0dXBHYW1lICgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3N0YXRpYy9ib2FyZC50eHQnKVxuICAgICAgY29uc3QgYm9hcmQgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZDogYm9hcmQudG9TdHJpbmcoKS5zcGxpdCgnXFxuJykubWFwKHJiID0+IHJiLnNwbGl0KCcnKSkgfSlcbiAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSBzY29yZWJvYXJkXG4gICAgICB0aGlzLnNuYWtlID0gW1szLCAxMl0sIFszLCAxMV0sIFsyLCAxMV1dXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGVycikpXG4gICAgfVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gJydcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgY29uc3QgY2JTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KClcbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmVudCAmJiBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmVMZWZ0KClcbiAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmVudCAmJiBldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmVVcCgpXG4gICAgICAgICAgfSwgMTUwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdBcnJvd1VwJykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRG93bigpXG4gICAgICAgICAgfSwgMTUwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjYlN0YXJ0KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjYlN0YXJ0KVxuICB9XG5cbiAgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgLy8gcmVtdWV2ZSBsYSBjb2xhXG4gICAgICBsZXQgbGFzdFBvc2l0aW9uID0gdGhpcy5zbmFrZVt0aGlzLnNuYWtlLmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgICAgfSlcbiAgICAgIGJvYXJkW2xhc3RQb3NpdGlvblswXV1bbGFzdFBvc2l0aW9uWzFdXSA9ICcgJ1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgICAgLy8gbXVldmUgbGEgY2FiZXphXG4gICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgdGhpcy5zbmFrZVswXSA9IFtyb3csIGNvbCArIDFdXG4gICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKClcbiAgICAgIC8vIG11ZXZlIGVsIGN1ZXJwb1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICB0aGlzLnNuYWtlW2ldID0gW3JvdywgY29sXVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tBcHBsZSgpKSB7XG4gICAgICAgIHRoaXMuc25ha2UucHVzaChbbGFzdFBvc2l0aW9uWzBdLCBsYXN0UG9zaXRpb25bMV1dKVxuICAgICAgICArK3RoaXMuc2NvcmVcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlTGVmdCgpXG4gICAgfVxuICB9XG5cbiAgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgICAgbGV0IHJvdywgY29sXG4gICAgICAvLyByZW11ZXZlIGxhIGNvbGFcbiAgICAgIGxldCBsYXN0UG9zaXRpb24gPSB0aGlzLnNuYWtlW3RoaXMuc25ha2UubGVuZ3RoIC0gMV1cbiAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgICB9KVxuICAgICAgYm9hcmRbbGFzdFBvc2l0aW9uWzBdXVtsYXN0UG9zaXRpb25bMV1dID0gJyAnXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQgfSlcbiAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgICAvLyBtdWV2ZSBsYSBjYWJlemFcbiAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICB0aGlzLnNuYWtlWzBdID0gW3JvdywgY29sIC0gMV1cbiAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKVxuICAgICAgLy8gbXVldmUgZWwgY3VlcnBvXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc25ha2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgICBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlW2ldXG4gICAgICAgIHRoaXMuc25ha2VbaV0gPSBbcm93LCBjb2xdXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0FwcGxlKCkpIHtcbiAgICAgICAgdGhpcy5zbmFrZS5wdXNoKFtsYXN0UG9zaXRpb25bMF0sIGxhc3RQb3NpdGlvblsxXV0pXG4gICAgICAgICsrdGhpcy5zY29yZVxuICAgICAgICB0aGlzLnB1dE9uVGhlQm9hcmQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVSaWdodCgpXG4gICAgfVxuICB9XG5cbiAgbW92ZVVwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCdcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgLy8gcmVtdWV2ZSBsYSBjb2xhXG4gICAgICBsZXQgbGFzdFBvc2l0aW9uID0gdGhpcy5zbmFrZVt0aGlzLnNuYWtlLmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgICAgfSlcbiAgICAgIGJvYXJkW2xhc3RQb3NpdGlvblswXV1bbGFzdFBvc2l0aW9uWzFdXSA9ICcgJ1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgICAgLy8gbXVldmUgbGEgY2FiZXphXG4gICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgdGhpcy5zbmFrZVswXSA9IFtyb3cgLSAxLCBjb2xdXG4gICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKClcbiAgICAgIC8vIG11ZXZlIGVsIGN1ZXJwb1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICB0aGlzLnNuYWtlW2ldID0gW3JvdywgY29sXVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tBcHBsZSgpKSB7XG4gICAgICAgIHRoaXMuc25ha2UucHVzaChbbGFzdFBvc2l0aW9uWzBdLCBsYXN0UG9zaXRpb25bMV1dKVxuICAgICAgICArK3RoaXMuc2NvcmVcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlRG93bigpXG4gICAgfVxuICB9XG5cbiAgbW92ZURvd24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJ1xuICAgICAgbGV0IHJvdywgY29sXG4gICAgICAvLyByZW11ZXZlIGxhIGNvbGFcbiAgICAgIGxldCBsYXN0UG9zaXRpb24gPSB0aGlzLnNuYWtlW3RoaXMuc25ha2UubGVuZ3RoIC0gMV1cbiAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgICB9KVxuICAgICAgYm9hcmRbbGFzdFBvc2l0aW9uWzBdXVtsYXN0UG9zaXRpb25bMV1dID0gJyAnXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQgfSlcbiAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgICAvLyBtdWV2ZSBsYSBjYWJlemFcbiAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICB0aGlzLnNuYWtlWzBdID0gW3JvdyArIDEsIGNvbF1cbiAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKVxuICAgICAgLy8gbXVldmUgZWwgY3VlcnBvXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc25ha2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgICBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlW2ldXG4gICAgICAgIHRoaXMuc25ha2VbaV0gPSBbcm93LCBjb2xdXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0FwcGxlKCkpIHtcbiAgICAgICAgdGhpcy5zbmFrZS5wdXNoKFtsYXN0UG9zaXRpb25bMF0sIGxhc3RQb3NpdGlvblsxXV0pXG4gICAgICAgICsrdGhpcy5zY29yZVxuICAgICAgICB0aGlzLnB1dE9uVGhlQm9hcmQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVVcCgpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb2xsaXNpb24gPSAoKSA9PiB7XG4gICAgbGV0IHJvdywgY29sXG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICBpZiAodGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2NvbF0gPT09ICctJyB8fCB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sXSA9PT0gJ3wnKSB7XG4gICAgICB0aGlzLnNldHVwR2FtZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnB1dE9uVGhlQm9hcmQoKVxuICAgICAgICB0aGlzLnN0YXJ0KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2hlY2tBcHBsZSAoKSB7XG4gICAgbGV0IHJvdywgY29sXG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICBpZiAodGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2NvbF0gPT09ICcuJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdXRPblRoZUJvYXJkICgpIHtcbiAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICB9KVxuICAgIGxldCByb3dSYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGJvYXJkLmxlbmd0aCAtIDIpKSArIDEpXG4gICAgbGV0IGNvbFJhbmRvbSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoYm9hcmRbMF0ubGVuZ3RoIC0gMikpICsgMSlcbiAgICB3aGlsZSAoYm9hcmRbcm93UmFuZG9tXVtjb2xSYW5kb21dID09PSAnLicpIHtcbiAgICAgIHJvd1JhbmRvbSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoYm9hcmQubGVuZ3RoIC0gMikpICsgMSlcbiAgICAgIGNvbFJhbmRvbSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoYm9hcmRbMF0ubGVuZ3RoIC0gMikpICsgMSlcbiAgICB9XG4gICAgYm9hcmRbcm93UmFuZG9tXVtjb2xSYW5kb21dID0gJy4nXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gIH1cblxuICBjbGVhckJvYXJkICgpIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFx4MUJbMkpcXHgxQlswZlxcdTAwMWJbMDswSCcpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+IHsnUFJFU1MgLT4gT1IgPC0gVE8gUExBWSBUSEUgR0FNRSd9IDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IFRlcm1pbmFsQmFyID0gKCkgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieWVsbG93XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JlZW5cIj48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgICBjb2xvcjogIzI5MkEyQTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDc1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RBRDlEOTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOTRCMzU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGxlZnQ6IC00NyU7XG4gICAgICAgICAgICBib3R0b206IC0yMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnllbGxvdyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAtNDQlO1xuICAgICAgICAgICAgYm90dG9tOiA0MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ3JlZW4ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFBRjVDO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgbGVmdDogLTQxJTtcbiAgICAgICAgICAgICAgYm90dG9tOiA5OSU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9YH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGlmICh0aGlzLnN0YXRlLmJvYXJkICYmIHRoaXMuc3RhdGUuc3RhcnQpIHtcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oW1xcbl0pL2csICc8YnI+JylcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oWyBdKS9nLCAnJm5ic3A7JylcbiAgICAgIC8vIHByaW50IHRoZSBzbmFrZSBvbiB0aGUgYm9hcmQgZm9yIGZpcnN0IHRpbWVcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICAgIH0pXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc25ha2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSAnLidcbiAgICAgIH1cbiAgICAgIGxldCBib2FyZFN0cmluZyA9IGJvYXJkLm1hcChyb3cgPT4gcm93LmpvaW4oJycpKS5qb2luKCdcXG4nKVxuICAgICAgLy8gdXBkYXRlIHNjb3JlXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSh0aGlzLnNjb3JlYm9hcmQubWF0Y2goLyhbMC05XSkvZykuam9pbignJyksIGAke3RoaXMuc2NvcmV9YClcbiAgICAgIC8vIHByaW50IGJvYXJkXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFtcXG5dKS9nLCAnPGJyPicpXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFsgXSkvZywgJyZuYnNwOycpXG4gICAgICBib2FyZFN0cmluZyA9IGJvYXJkU3RyaW5nLnJlcGxhY2UoLyhbXFxuXSkvZywgJzxicj4nKVxuICAgICAgYm9hcmRTdHJpbmcgPSBib2FyZFN0cmluZy5yZXBsYWNlKC8oWyBdKS9nLCAnJm5ic3A7JylcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxUZXJtaW5hbEJhciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXJtaW5hbCc+XG4gICAgICAgICAgICB7UGFyc2VyKGJvYXJkU3RyaW5nKX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAge1BhcnNlcih0aGlzLnNjb3JlYm9hcmQpfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAudGVybWluYWwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQ4NUU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages\\index.js?entry */'
        })));
      } else {
        return null;
      }
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBhcnNlciIsImZldGNoIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2NvcmVib2FyZCIsInByb3BzIiwibW92ZVJpZ2h0IiwiZGlyZWN0aW9uIiwicm93IiwiY29sIiwibGFzdFBvc2l0aW9uIiwic25ha2UiLCJsZW5ndGgiLCJib2FyZCIsInN0YXRlIiwibWFwIiwic2xpY2UiLCJzZXRTdGF0ZSIsImN1cnJlbnRQb3NpdGlvbiIsImNoZWNrQ29sbGlzaW9uIiwiaSIsImNoZWNrQXBwbGUiLCJwdXNoIiwic2NvcmUiLCJwdXRPblRoZUJvYXJkIiwibW92ZUxlZnQiLCJtb3ZlVXAiLCJtb3ZlRG93biIsInNldHVwR2FtZSIsInRoZW4iLCJzdGFydCIsInVuZGVmaW5lZCIsImJpbmQiLCJyZXNwb25zZSIsInRleHQiLCJ0b1N0cmluZyIsInNwbGl0IiwicmIiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJpbnRlcnZhbCIsImNiU3RhcnQiLCJldmVudCIsImtleSIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb3dSYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb2xSYW5kb20iLCJwcm9jZXNzIiwic3Rkb3V0Iiwid3JpdGUiLCJIZWFkZXIiLCJUZXJtaW5hbEJhciIsInJlcGxhY2UiLCJib2FyZFN0cmluZyIsImpvaW4iLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFlOzs7Ozs7O0FBRXhCLElBQU0sYUFBTjs7O2tDQU1FOztrQkFBQSxBQUFhLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1o7O1VBRFksQUEwRXBCLFlBQVks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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\nxjulian\\Clones\\Github\\juvasquezg\\node-snake-web\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\nxjulian\\Clones\\Github\\juvasquezg\\node-snake-web\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129), "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40MWJlZGQ4Y2RmNmI4MjVmM2U5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/OTJmNWFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFyc2VyIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IGNsZWFySW50ZXJ2YWwsIHNldEludGVydmFsIH0gZnJvbSAndGltZXJzJztcblxuY29uc3Qgc2NvcmVib2FyZCA9IGB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICBTQ09SRTogMCAgICAgICAgICAgICAgICAgICAgfFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zbmFrZSA9IFtdXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnJ1xuICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmRcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMuc3RhdGUgPSB7IGJvYXJkOiB1bmRlZmluZWQsIHN0YXJ0OiBmYWxzZSB9XG4gICAgdGhpcy5wdXRPblRoZUJvYXJkID0gdGhpcy5wdXRPblRoZUJvYXJkLmJpbmQodGhpcylcbiAgICB0aGlzLnNldHVwR2FtZSA9IHRoaXMuc2V0dXBHYW1lLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLnNldHVwR2FtZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIHRoaXMuc3RhcnQoKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB0cnVlIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHNldHVwR2FtZSAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zdGF0aWMvYm9hcmQudHh0JylcbiAgICAgIGNvbnN0IGJvYXJkID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IGJvYXJkLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpLm1hcChyYiA9PiByYi5zcGxpdCgnJykpIH0pXG4gICAgICB0aGlzLnNjb3JlID0gMFxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZFxuICAgICAgdGhpcy5zbmFrZSA9IFtbMywgMTJdLCBbMywgMTFdLCBbMiwgMTFdXVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihlcnIpKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICcnXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgIGNvbnN0IGNiU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmVSaWdodCgpXG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdCgpXG4gICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVXAoKVxuICAgICAgICAgIH0sIDE1MClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZURvd24oKVxuICAgICAgICAgIH0sIDE1MClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2JTdGFydClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2JTdGFydClcbiAgfVxuXG4gIG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIC8vIHJlbXVldmUgbGEgY29sYVxuICAgICAgbGV0IGxhc3RQb3NpdGlvbiA9IHRoaXMuc25ha2VbdGhpcy5zbmFrZS5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICAgIH0pXG4gICAgICBib2FyZFtsYXN0UG9zaXRpb25bMF1dW2xhc3RQb3NpdGlvblsxXV0gPSAnICdcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICAgIC8vIG11ZXZlIGxhIGNhYmV6YVxuICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgIHRoaXMuc25ha2VbMF0gPSBbcm93LCBjb2wgKyAxXVxuICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpXG4gICAgICAvLyBtdWV2ZSBlbCBjdWVycG9cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgdGhpcy5zbmFrZVtpXSA9IFtyb3csIGNvbF1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrQXBwbGUoKSkge1xuICAgICAgICB0aGlzLnNuYWtlLnB1c2goW2xhc3RQb3NpdGlvblswXSwgbGFzdFBvc2l0aW9uWzFdXSlcbiAgICAgICAgKyt0aGlzLnNjb3JlXG4gICAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZUxlZnQoKVxuICAgIH1cbiAgfVxuXG4gIG1vdmVMZWZ0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgLy8gcmVtdWV2ZSBsYSBjb2xhXG4gICAgICBsZXQgbGFzdFBvc2l0aW9uID0gdGhpcy5zbmFrZVt0aGlzLnNuYWtlLmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgICAgfSlcbiAgICAgIGJvYXJkW2xhc3RQb3NpdGlvblswXV1bbGFzdFBvc2l0aW9uWzFdXSA9ICcgJ1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgICAgLy8gbXVldmUgbGEgY2FiZXphXG4gICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgdGhpcy5zbmFrZVswXSA9IFtyb3csIGNvbCAtIDFdXG4gICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKClcbiAgICAgIC8vIG11ZXZlIGVsIGN1ZXJwb1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICB0aGlzLnNuYWtlW2ldID0gW3JvdywgY29sXVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tBcHBsZSgpKSB7XG4gICAgICAgIHRoaXMuc25ha2UucHVzaChbbGFzdFBvc2l0aW9uWzBdLCBsYXN0UG9zaXRpb25bMV1dKVxuICAgICAgICArK3RoaXMuc2NvcmVcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlUmlnaHQoKVxuICAgIH1cbiAgfVxuXG4gIG1vdmVVcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIC8vIHJlbXVldmUgbGEgY29sYVxuICAgICAgbGV0IGxhc3RQb3NpdGlvbiA9IHRoaXMuc25ha2VbdGhpcy5zbmFrZS5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICAgIH0pXG4gICAgICBib2FyZFtsYXN0UG9zaXRpb25bMF1dW2xhc3RQb3NpdGlvblsxXV0gPSAnICdcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICAgIC8vIG11ZXZlIGxhIGNhYmV6YVxuICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgIHRoaXMuc25ha2VbMF0gPSBbcm93IC0gMSwgY29sXVxuICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpXG4gICAgICAvLyBtdWV2ZSBlbCBjdWVycG9cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgdGhpcy5zbmFrZVtpXSA9IFtyb3csIGNvbF1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrQXBwbGUoKSkge1xuICAgICAgICB0aGlzLnNuYWtlLnB1c2goW2xhc3RQb3NpdGlvblswXSwgbGFzdFBvc2l0aW9uWzFdXSlcbiAgICAgICAgKyt0aGlzLnNjb3JlXG4gICAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZURvd24oKVxuICAgIH1cbiAgfVxuXG4gIG1vdmVEb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bidcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgLy8gcmVtdWV2ZSBsYSBjb2xhXG4gICAgICBsZXQgbGFzdFBvc2l0aW9uID0gdGhpcy5zbmFrZVt0aGlzLnNuYWtlLmxlbmd0aCAtIDFdXG4gICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgICAgfSlcbiAgICAgIGJvYXJkW2xhc3RQb3NpdGlvblswXV1bbGFzdFBvc2l0aW9uWzFdXSA9ICcgJ1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgICAgLy8gbXVldmUgbGEgY2FiZXphXG4gICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgdGhpcy5zbmFrZVswXSA9IFtyb3cgKyAxLCBjb2xdXG4gICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKClcbiAgICAgIC8vIG11ZXZlIGVsIGN1ZXJwb1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICB0aGlzLnNuYWtlW2ldID0gW3JvdywgY29sXVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tBcHBsZSgpKSB7XG4gICAgICAgIHRoaXMuc25ha2UucHVzaChbbGFzdFBvc2l0aW9uWzBdLCBsYXN0UG9zaXRpb25bMV1dKVxuICAgICAgICArK3RoaXMuc2NvcmVcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlVXAoKVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uID0gKCkgPT4ge1xuICAgIGxldCByb3csIGNvbFxuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID09PSAnLScgfHwgdGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2NvbF0gPT09ICd8Jykge1xuICAgICAgdGhpcy5zZXR1cEdhbWUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAgICAgdGhpcy5zdGFydCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQXBwbGUgKCkge1xuICAgIGxldCByb3csIGNvbFxuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID09PSAnLicpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHV0T25UaGVCb2FyZCAoKSB7XG4gICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgfSlcbiAgICBsZXQgcm93UmFuZG9tID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIChib2FyZC5sZW5ndGggLSAyKSkgKyAxKVxuICAgIGxldCBjb2xSYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGJvYXJkWzBdLmxlbmd0aCAtIDIpKSArIDEpXG4gICAgd2hpbGUgKGJvYXJkW3Jvd1JhbmRvbV1bY29sUmFuZG9tXSA9PT0gJy4nKSB7XG4gICAgICByb3dSYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGJvYXJkLmxlbmd0aCAtIDIpKSArIDEpXG4gICAgICBjb2xSYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGJvYXJkWzBdLmxlbmd0aCAtIDIpKSArIDEpXG4gICAgfVxuICAgIGJvYXJkW3Jvd1JhbmRvbV1bY29sUmFuZG9tXSA9ICcuJ1xuICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICB9XG5cbiAgY2xlYXJCb2FyZCAoKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xceDFCWzJKXFx4MUJbMGZcXHUwMDFiWzA7MEgnKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPiB7J1BSRVNTIC0+IE9SIDwtIFRPIFBMQVkgVEhFIEdBTUUnfSA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBUZXJtaW5hbEJhciA9ICgpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInllbGxvd1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZWVuXCI+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgICAgY29sb3I6ICMyOTJBMkE7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA3NTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUQ5RDk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgICBwYWRkaW5nOiBhdXRvO1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTk0QjM1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAtNDclO1xuICAgICAgICAgICAgYm90dG9tOiAtMjAlO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC55ZWxsb3cge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjAwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbGVmdDogLTQ0JTtcbiAgICAgICAgICAgIGJvdHRvbTogNDAlO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyZWVuIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBQUY1QztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGxlZnQ6IC00MSU7XG4gICAgICAgICAgICAgIGJvdHRvbTogOTklO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfWB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5ib2FyZCAmJiB0aGlzLnN0YXRlLnN0YXJ0KSB7XG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFtcXG5dKS9nLCAnPGJyPicpXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFsgXSkvZywgJyZuYnNwOycpXG4gICAgICAvLyBwcmludCB0aGUgc25ha2Ugb24gdGhlIGJvYXJkIGZvciBmaXJzdCB0aW1lXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgICB9KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNuYWtlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlW2ldXG4gICAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gJy4nXG4gICAgICB9XG4gICAgICBsZXQgYm9hcmRTdHJpbmcgPSBib2FyZC5tYXAocm93ID0+IHJvdy5qb2luKCcnKSkuam9pbignXFxuJylcbiAgICAgIC8vIHVwZGF0ZSBzY29yZVxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UodGhpcy5zY29yZWJvYXJkLm1hdGNoKC8oWzAtOV0pL2cpLmpvaW4oJycpLCBgJHt0aGlzLnNjb3JlfWApXG4gICAgICAvLyBwcmludCBib2FyZFxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UoLyhbXFxuXSkvZywgJzxicj4nKVxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UoLyhbIF0pL2csICcmbmJzcDsnKVxuICAgICAgYm9hcmRTdHJpbmcgPSBib2FyZFN0cmluZy5yZXBsYWNlKC8oW1xcbl0pL2csICc8YnI+JylcbiAgICAgIGJvYXJkU3RyaW5nID0gYm9hcmRTdHJpbmcucmVwbGFjZSgvKFsgXSkvZywgJyZuYnNwOycpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8VGVybWluYWxCYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGVybWluYWwnPlxuICAgICAgICAgICAge1BhcnNlcihib2FyZFN0cmluZyl9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHtQYXJzZXIodGhpcy5zY29yZWJvYXJkKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0ODVFO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTVCQTtBQThCQTtBQUNBO0FBMUdBO0FBQ0E7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBNUJBO0FBOEJBO0FBQ0E7QUE1SUE7QUFDQTtBQTZJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE1QkE7QUE4QkE7QUFDQTtBQTlLQTtBQUNBO0FBK0tBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTVCQTtBQThCQTtBQUNBO0FBaE5BO0FBQ0E7QUFpTkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBM05BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBeUpBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQTZEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFGQTtBQW9CQTtBQXBCQTtBQTFCQTtBQWdEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9