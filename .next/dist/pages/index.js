'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _htmlReactParser = require('html-react-parser');

var _htmlReactParser2 = _interopRequireDefault(_htmlReactParser);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _timers = require('timers');

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this.setupGame().then(() => {
      //   this.putOnTheBoard()
      //   this.setState({ start: true })
      // })
    }
  }, {
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
      var rowRandom = Math.floor(Math.random() * (board.length - 1 - 1)) + 1;
      var colRandom = Math.floor(Math.random() * (board[0].length - 1 - 1)) + 1;
      while (board[rowRandom][colRandom] === '.') {
        rowRandom = Math.floor(Math.random() * (board.length - 1 - 1)) + 1;
        colRandom = Math.floor(Math.random() * (board[0].length - 1)) + 1;
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
          className: 'jsx-1964969829' + ' ' + 'terminal',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          }
        }, (0, _htmlReactParser2.default)(boardString), _react2.default.createElement('br', {
          className: 'jsx-1964969829',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          }
        }), (0, _htmlReactParser2.default)(this.scoreboard), _react2.default.createElement(_style2.default, {
          styleId: '1964969829',
          css: '.terminal.jsx-1964969829{font-family:monospace;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwU3NCLEFBSVksc0JBQUMiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL254anVsaWFuL0Nsb25lcy9HaXRodWIvanV2YXNxdWV6Zy9ub2RlLXNuYWtlLXdlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYXJzZXIgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgY2xlYXJJbnRlcnZhbCwgc2V0SW50ZXJ2YWwgfSBmcm9tICd0aW1lcnMnO1xuXG5jb25zdCBzY29yZWJvYXJkID0gYHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxufCAgICAgICAgICAgICAgICAgIFNDT1JFOiAwICAgICAgICAgICAgICAgICAgICB8XG58ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnNuYWtlID0gW11cbiAgICB0aGlzLmRpcmVjdGlvbiA9ICcnXG4gICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZFxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5zdGF0ZSA9IHsgYm9hcmQ6IHVuZGVmaW5lZCwgc3RhcnQ6IGZhbHNlIH1cbiAgICB0aGlzLnB1dE9uVGhlQm9hcmQgPSB0aGlzLnB1dE9uVGhlQm9hcmQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0dXBHYW1lID0gdGhpcy5zZXR1cEdhbWUuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICAvLyB0aGlzLnNldHVwR2FtZSgpLnRoZW4oKCkgPT4ge1xuICAgIC8vICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdHJ1ZSB9KVxuICAgIC8vIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zZXR1cEdhbWUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICB0aGlzLnN0YXJ0KClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdHJ1ZSB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBzZXR1cEdhbWUgKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvc3RhdGljL2JvYXJkLnR4dCcpXG4gICAgICBjb25zdCBib2FyZCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBib2FyZC50b1N0cmluZygpLnNwbGl0KCdcXG4nKS5tYXAocmIgPT4gcmIuc3BsaXQoJycpKSB9KVxuICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmRcbiAgICAgIHRoaXMuc25ha2UgPSBbWzMsIDEyXSwgWzMsIDExXSwgWzIsIDExXV1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXJyKSlcbiAgICB9XG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnJ1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICBjb25zdCBjYlN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZUxlZnQoKVxuICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVVwKClcbiAgICAgICAgICB9LCAxNTApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChldmVudCAmJiBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmVEb3duKClcbiAgICAgICAgICB9LCAxNTApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNiU3RhcnQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNiU3RhcnQpXG4gIH1cblxuICBtb3ZlUmlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgICAgbGV0IHJvdywgY29sXG4gICAgICAvLyByZW11ZXZlIGxhIGNvbGFcbiAgICAgIGxldCBsYXN0UG9zaXRpb24gPSB0aGlzLnNuYWtlW3RoaXMuc25ha2UubGVuZ3RoIC0gMV1cbiAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgICB9KVxuICAgICAgYm9hcmRbbGFzdFBvc2l0aW9uWzBdXVtsYXN0UG9zaXRpb25bMV1dID0gJyAnXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQgfSlcbiAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgICAvLyBtdWV2ZSBsYSBjYWJlemFcbiAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICB0aGlzLnNuYWtlWzBdID0gW3JvdywgY29sICsgMV1cbiAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKVxuICAgICAgLy8gbXVldmUgZWwgY3VlcnBvXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc25ha2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgICBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlW2ldXG4gICAgICAgIHRoaXMuc25ha2VbaV0gPSBbcm93LCBjb2xdXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0FwcGxlKCkpIHtcbiAgICAgICAgdGhpcy5zbmFrZS5wdXNoKFtsYXN0UG9zaXRpb25bMF0sIGxhc3RQb3NpdGlvblsxXV0pXG4gICAgICAgICsrdGhpcy5zY29yZVxuICAgICAgICB0aGlzLnB1dE9uVGhlQm9hcmQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVMZWZ0KClcbiAgICB9XG4gIH1cblxuICBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIC8vIHJlbXVldmUgbGEgY29sYVxuICAgICAgbGV0IGxhc3RQb3NpdGlvbiA9IHRoaXMuc25ha2VbdGhpcy5zbmFrZS5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICAgIH0pXG4gICAgICBib2FyZFtsYXN0UG9zaXRpb25bMF1dW2xhc3RQb3NpdGlvblsxXV0gPSAnICdcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICAgIC8vIG11ZXZlIGxhIGNhYmV6YVxuICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgIHRoaXMuc25ha2VbMF0gPSBbcm93LCBjb2wgLSAxXVxuICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpXG4gICAgICAvLyBtdWV2ZSBlbCBjdWVycG9cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgdGhpcy5zbmFrZVtpXSA9IFtyb3csIGNvbF1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrQXBwbGUoKSkge1xuICAgICAgICB0aGlzLnNuYWtlLnB1c2goW2xhc3RQb3NpdGlvblswXSwgbGFzdFBvc2l0aW9uWzFdXSlcbiAgICAgICAgKyt0aGlzLnNjb3JlXG4gICAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZVJpZ2h0KClcbiAgICB9XG4gIH1cblxuICBtb3ZlVXAgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwJ1xuICAgICAgbGV0IHJvdywgY29sXG4gICAgICAvLyByZW11ZXZlIGxhIGNvbGFcbiAgICAgIGxldCBsYXN0UG9zaXRpb24gPSB0aGlzLnNuYWtlW3RoaXMuc25ha2UubGVuZ3RoIC0gMV1cbiAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93LnNsaWNlKDApXG4gICAgICB9KVxuICAgICAgYm9hcmRbbGFzdFBvc2l0aW9uWzBdXVtsYXN0UG9zaXRpb25bMV1dID0gJyAnXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQgfSlcbiAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlWzBdXG4gICAgICAvLyBtdWV2ZSBsYSBjYWJlemFcbiAgICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICB0aGlzLnNuYWtlWzBdID0gW3JvdyAtIDEsIGNvbF1cbiAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oKVxuICAgICAgLy8gbXVldmUgZWwgY3VlcnBvXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc25ha2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgICBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnNuYWtlW2ldXG4gICAgICAgIHRoaXMuc25ha2VbaV0gPSBbcm93LCBjb2xdXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0FwcGxlKCkpIHtcbiAgICAgICAgdGhpcy5zbmFrZS5wdXNoKFtsYXN0UG9zaXRpb25bMF0sIGxhc3RQb3NpdGlvblsxXV0pXG4gICAgICAgICsrdGhpcy5zY29yZVxuICAgICAgICB0aGlzLnB1dE9uVGhlQm9hcmQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVEb3duKClcbiAgICB9XG4gIH1cblxuICBtb3ZlRG93biA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIC8vIHJlbXVldmUgbGEgY29sYVxuICAgICAgbGV0IGxhc3RQb3NpdGlvbiA9IHRoaXMuc25ha2VbdGhpcy5zbmFrZS5sZW5ndGggLSAxXVxuICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cuc2xpY2UoMClcbiAgICAgIH0pXG4gICAgICBib2FyZFtsYXN0UG9zaXRpb25bMF1dW2xhc3RQb3NpdGlvblsxXV0gPSAnICdcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZCB9KVxuICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbMF1cbiAgICAgIC8vIG11ZXZlIGxhIGNhYmV6YVxuICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICBjb2wgPSBjdXJyZW50UG9zaXRpb25bMV1cbiAgICAgIHRoaXMuc25ha2VbMF0gPSBbcm93ICsgMSwgY29sXVxuICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbigpXG4gICAgICAvLyBtdWV2ZSBlbCBjdWVycG9cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgdGhpcy5zbmFrZVtpXSA9IFtyb3csIGNvbF1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrQXBwbGUoKSkge1xuICAgICAgICB0aGlzLnNuYWtlLnB1c2goW2xhc3RQb3NpdGlvblswXSwgbGFzdFBvc2l0aW9uWzFdXSlcbiAgICAgICAgKyt0aGlzLnNjb3JlXG4gICAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZVVwKClcbiAgICB9XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbiA9ICgpID0+IHtcbiAgICBsZXQgcm93LCBjb2xcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgIGlmICh0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sXSA9PT0gJy0nIHx8IHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID09PSAnfCcpIHtcbiAgICAgIHRoaXMuc2V0dXBHYW1lKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucHV0T25UaGVCb2FyZCgpXG4gICAgICAgIHRoaXMuc3RhcnQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjaGVja0FwcGxlICgpIHtcbiAgICBsZXQgcm93LCBjb2xcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVswXVxuICAgIHJvdyA9IGN1cnJlbnRQb3NpdGlvblswXVxuICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgIGlmICh0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sXSA9PT0gJy4nKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHB1dE9uVGhlQm9hcmQgKCkge1xuICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKHJvdykgPT4ge1xuICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgIH0pXG4gICAgbGV0IHJvd1JhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoYm9hcmQubGVuZ3RoIC0gMSkgLSAxKSkgKyAxXG4gICAgbGV0IGNvbFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoYm9hcmRbMF0ubGVuZ3RoIC0gMSkgLSAxKSkgKyAxXG4gICAgd2hpbGUgKGJvYXJkW3Jvd1JhbmRvbV1bY29sUmFuZG9tXSA9PT0gJy4nKSB7XG4gICAgICByb3dSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKGJvYXJkLmxlbmd0aCAtIDEpIC0gMSkpICsgMVxuICAgICAgY29sUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKChib2FyZFswXS5sZW5ndGgpIC0gMSkpICsgMVxuICAgIH1cbiAgICBib2FyZFtyb3dSYW5kb21dW2NvbFJhbmRvbV0gPSAnLidcbiAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQgfSlcbiAgfVxuXG4gIGNsZWFyQm9hcmQgKCkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXHgxQlsySlxceDFCWzBmXFx1MDAxYlswOzBIJylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYm9hcmQgJiYgdGhpcy5zdGF0ZS5zdGFydCkge1xuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UoLyhbXFxuXSkvZywgJzxicj4nKVxuICAgICAgdGhpcy5zY29yZWJvYXJkID0gdGhpcy5zY29yZWJvYXJkLnJlcGxhY2UoLyhbIF0pL2csICcmbmJzcDsnKVxuICAgICAgLy8gcHJpbnQgdGhlIHNuYWtlIG9uIHRoZSBib2FyZCBmb3IgZmlyc3QgdGltZVxuICAgICAgbGV0IHJvdywgY29sXG4gICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5zbGljZSgwKVxuICAgICAgfSlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICcuJ1xuICAgICAgfVxuICAgICAgbGV0IGJvYXJkU3RyaW5nID0gYm9hcmQubWFwKHJvdyA9PiByb3cuam9pbignJykpLmpvaW4oJ1xcbicpXG4gICAgICAvLyB1cGRhdGUgc2NvcmVcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKHRoaXMuc2NvcmVib2FyZC5tYXRjaCgvKFswLTldKS9nKS5qb2luKCcnKSwgYCR7dGhpcy5zY29yZX1gKVxuICAgICAgLy8gcHJpbnQgYm9hcmRcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oW1xcbl0pL2csICc8YnI+JylcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oWyBdKS9nLCAnJm5ic3A7JylcbiAgICAgIGJvYXJkU3RyaW5nID0gYm9hcmRTdHJpbmcucmVwbGFjZSgvKFtcXG5dKS9nLCAnPGJyPicpXG4gICAgICBib2FyZFN0cmluZyA9IGJvYXJkU3RyaW5nLnJlcGxhY2UoLyhbIF0pL2csICcmbmJzcDsnKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rlcm1pbmFsJz5cbiAgICAgICAgICB7UGFyc2VyKGJvYXJkU3RyaW5nKX1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7UGFyc2VyKHRoaXMuc2NvcmVib2FyZCl9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages\\index.js?entry */'
        }));
      } else {
        return null;
      }
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBhcnNlciIsImZldGNoIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2NvcmVib2FyZCIsInByb3BzIiwibW92ZVJpZ2h0IiwiZGlyZWN0aW9uIiwicm93IiwiY29sIiwibGFzdFBvc2l0aW9uIiwic25ha2UiLCJsZW5ndGgiLCJib2FyZCIsInN0YXRlIiwibWFwIiwic2xpY2UiLCJzZXRTdGF0ZSIsImN1cnJlbnRQb3NpdGlvbiIsImNoZWNrQ29sbGlzaW9uIiwiaSIsImNoZWNrQXBwbGUiLCJwdXNoIiwic2NvcmUiLCJwdXRPblRoZUJvYXJkIiwibW92ZUxlZnQiLCJtb3ZlVXAiLCJtb3ZlRG93biIsInNldHVwR2FtZSIsInRoZW4iLCJzdGFydCIsInVuZGVmaW5lZCIsImJpbmQiLCJyZXNwb25zZSIsInRleHQiLCJ0b1N0cmluZyIsInNwbGl0IiwicmIiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJpbnRlcnZhbCIsImNiU3RhcnQiLCJldmVudCIsImtleSIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb3dSYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb2xSYW5kb20iLCJwcm9jZXNzIiwic3Rkb3V0Iiwid3JpdGUiLCJyZXBsYWNlIiwiYm9hcmRTdHJpbmciLCJqb2luIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBZTs7Ozs7OztBQUV4QixJQUFNLGFBQU47OztrQ0FNRTs7a0JBQUEsQUFBYSxPQUFPO3dDQUFBOztzSUFBQSxBQUNaOztVQURZLEFBaUZwQixZQUFZLFlBQU0sQUFDaEI7VUFBSSxNQUFBLEFB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QUFDQTthQUFBLEFBQUssYUFBYSxLQUFBLEFBQUssV0FBTCxBQUFnQixRQUFoQixBQUF3QixXQUExQyxBQUFrQixBQUFtQyxBQUNyRDthQUFBLEFBQUssYUFBYSxLQUFBLEFBQUssV0FBTCxBQUFnQixRQUFoQixBQUF3QixVQUExQyxBQUFrQixBQUFrQyxBQUNwRDtzQkFBYyxZQUFBLEFBQVksUUFBWixBQUFvQixXQUFsQyxBQUFjLEFBQStCLEFBQzdDO3NCQUFjLFlBQUEsQUFBWSxRQUFaLEFBQW9CLFVBQWxDLEFBQWMsQUFBOEIsQUFDNUM7K0JBQ0UsY0FBQTs4Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNHO0FBREg7QUFBQSxTQUFBLGlDQUFBLEFBQ0csQUFBTyxBQUNSO3FCQUFBOztzQkFBQTt3QkFGRixBQUVFLEFBQ0M7QUFERDtBQUFBLDJDQUNRLEtBSFYsQUFHRyxBQUFZO21CQUhmO2VBREYsQUFDRSxBQVdIO0FBWEc7QUF2QkosYUFrQ08sQUFDTDtlQUFBLEFBQU8sQUFDUjtBQUNGOzs7OztBQTFTMEIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ueGp1bGlhbi9DbG9uZXMvR2l0aHViL2p1dmFzcXVlemcvbm9kZS1zbmFrZS13ZWIifQ==