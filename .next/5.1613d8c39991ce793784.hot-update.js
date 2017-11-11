webpackHotUpdate(5,{

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/admin/Clones/Github/juvasquezg/node-snake-web/pages/index.js?entry';


var scoreboard = '|                                              |\n|                  SCORE: 0                    |\n|                                              |\n ---------------------------------------------- ';

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

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
      var _this2 = this;

      this.setupGame().then(function () {
        return _this2.setState({ start: true });
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
                _context.next = 2;
                return (0, _isomorphicUnfetch2.default)('/static/board.txt');

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.text();

              case 5:
                board = _context.sent;

                this.setState({ board: board.toString().split('\n').map(function (rb) {
                    return rb.split('');
                  }) });
                this.score = 0;
                this.scoreboard = scoreboard;
                this.snake = [[3, 12], [3, 11], [2, 11]];
                this.putOnTheBoard();
                return _context.abrupt('return', _promise2.default.resolve(true));

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setupGame() {
        return _ref.apply(this, arguments);
      }

      return setupGame;
    }()
  }, {
    key: 'putOnTheBoard',
    value: function putOnTheBoard() {
      var board = this.state.board.slice();
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
    key: 'render',
    value: function render() {
      if (this.state.board && this.state.start) {
        console.log('Entro a pintar el board');
        this.scoreboard = this.scoreboard.replace(/([\n])/g, '<br>');
        this.scoreboard = this.scoreboard.replace(/([ ])/g, '&nbsp;');
        var row = void 0,
            col = void 0;
        // print the snake on the board
        console.log(this.state);
        for (var i = 0; i < this.snake.length; i++) {
          var currentPosition = this.snake[i];
          row = currentPosition[0];
          col = currentPosition[1];
          this.state.board[row][col] = '.';
        }
        var boardString = this.state.board.map(function (row) {
          return row.join('');
        }).join('\n');
        console.log(boardString);
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
            lineNumber: 73
          }
        }, (0, _htmlReactParser2.default)(boardString), _react2.default.createElement('br', {
          className: 'jsx-1964969829',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }), (0, _htmlReactParser2.default)(this.scoreboard), _react2.default.createElement(_style2.default, {
          styleId: '1964969829',
          css: '.terminal.jsx-1964969829{font-family:monospace;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFc0IsQUFJWSxzQkFBQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRtaW4vQ2xvbmVzL0dpdGh1Yi9qdXZhc3F1ZXpnL25vZGUtc25ha2Utd2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhcnNlciBmcm9tICdodG1sLXJlYWN0LXBhcnNlcidcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IHNjb3JlYm9hcmQgPSBgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG58ICAgICAgICAgICAgICAgICAgU0NPUkU6IDAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc25ha2UgPSBbXVxuICAgIHRoaXMuZGlyZWN0aW9uID0gJydcbiAgICB0aGlzLnNjb3JlYm9hcmQgPSBzY29yZWJvYXJkXG4gICAgdGhpcy5zY29yZSA9IDBcbiAgICB0aGlzLnN0YXRlID0geyBib2FyZDogdW5kZWZpbmVkLCBzdGFydDogZmFsc2UgfVxuICAgIHRoaXMucHV0T25UaGVCb2FyZCA9IHRoaXMucHV0T25UaGVCb2FyZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXR1cEdhbWUgPSB0aGlzLnNldHVwR2FtZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMuc2V0dXBHYW1lKCkudGhlbigoKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHRydWUgfSkpXG4gIH1cblxuICBhc3luYyBzZXR1cEdhbWUgKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zdGF0aWMvYm9hcmQudHh0JylcbiAgICBjb25zdCBib2FyZCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBib2FyZDogYm9hcmQudG9TdHJpbmcoKS5zcGxpdCgnXFxuJykubWFwKHJiID0+IHJiLnNwbGl0KCcnKSkgfSlcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmRcbiAgICB0aGlzLnNuYWtlID0gW1szLCAxMl0sIFszLCAxMV0sIFsyLCAxMV1dXG4gICAgdGhpcy5wdXRPblRoZUJvYXJkKClcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gIH1cblxuICBwdXRPblRoZUJvYXJkICgpIHtcbiAgICBjb25zdCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQuc2xpY2UoKVxuICAgIGxldCByb3dSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKGJvYXJkLmxlbmd0aCAtIDEpIC0gMSkpICsgMVxuICAgIGxldCBjb2xSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKGJvYXJkWzBdLmxlbmd0aCAtIDEpIC0gMSkpICsgMVxuICAgIHdoaWxlIChib2FyZFtyb3dSYW5kb21dW2NvbFJhbmRvbV0gPT09ICcuJykge1xuICAgICAgcm93UmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKChib2FyZC5sZW5ndGggLSAxKSAtIDEpKSArIDFcbiAgICAgIGNvbFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoYm9hcmRbMF0ubGVuZ3RoKSAtIDEpKSArIDFcbiAgICB9XG4gICAgYm9hcmRbcm93UmFuZG9tXVtjb2xSYW5kb21dID0gJy4nXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmJvYXJkICYmIHRoaXMuc3RhdGUuc3RhcnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRybyBhIHBpbnRhciBlbCBib2FyZCcpXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFtcXG5dKS9nLCAnPGJyPicpXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFsgXSkvZywgJyZuYnNwOycpXG4gICAgICBsZXQgcm93LCBjb2xcbiAgICAgIC8vIHByaW50IHRoZSBzbmFrZSBvbiB0aGUgYm9hcmRcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc25ha2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc25ha2VbaV1cbiAgICAgICAgcm93ID0gY3VycmVudFBvc2l0aW9uWzBdXG4gICAgICAgIGNvbCA9IGN1cnJlbnRQb3NpdGlvblsxXVxuICAgICAgICB0aGlzLnN0YXRlLmJvYXJkW3Jvd11bY29sXSA9ICcuJ1xuICAgICAgfVxuICAgICAgbGV0IGJvYXJkU3RyaW5nID0gdGhpcy5zdGF0ZS5ib2FyZC5tYXAocm93ID0+IHJvdy5qb2luKCcnKSkuam9pbignXFxuJylcbiAgICAgIGNvbnNvbGUubG9nKGJvYXJkU3RyaW5nKVxuICAgICAgLy8gdXBkYXRlIHNjb3JlXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSh0aGlzLnNjb3JlYm9hcmQubWF0Y2goLyhbMC05XSkvZykuam9pbignJyksIGAke3RoaXMuc2NvcmV9YClcbiAgICAgIC8vIHByaW50IGJvYXJkXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFtcXG5dKS9nLCAnPGJyPicpXG4gICAgICB0aGlzLnNjb3JlYm9hcmQgPSB0aGlzLnNjb3JlYm9hcmQucmVwbGFjZSgvKFsgXSkvZywgJyZuYnNwOycpXG4gICAgICBib2FyZFN0cmluZyA9IGJvYXJkU3RyaW5nLnJlcGxhY2UoLyhbXFxuXSkvZywgJzxicj4nKVxuICAgICAgYm9hcmRTdHJpbmcgPSBib2FyZFN0cmluZy5yZXBsYWNlKC8oWyBdKS9nLCAnJm5ic3A7JylcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXJtaW5hbCc+XG4gICAgICAgICAge1BhcnNlcihib2FyZFN0cmluZyl9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge1BhcnNlcih0aGlzLnNjb3JlYm9hcmQpfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC50ZXJtaW5hbCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
        }));
      } else {
        return null;
      }
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGFyc2VyIiwiZmV0Y2giLCJzY29yZWJvYXJkIiwicHJvcHMiLCJzbmFrZSIsImRpcmVjdGlvbiIsInNjb3JlIiwic3RhdGUiLCJib2FyZCIsInVuZGVmaW5lZCIsInN0YXJ0IiwicHV0T25UaGVCb2FyZCIsImJpbmQiLCJzZXR1cEdhbWUiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXNwb25zZSIsInRleHQiLCJ0b1N0cmluZyIsInNwbGl0IiwibWFwIiwicmIiLCJyZXNvbHZlIiwic2xpY2UiLCJyb3dSYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjb2xSYW5kb20iLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsInJvdyIsImNvbCIsImkiLCJjdXJyZW50UG9zaXRpb24iLCJib2FyZFN0cmluZyIsImpvaW4iLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGFBQU47OztrQ0FNRTs7a0JBQUEsQUFBYSxPQUFPO3dDQUFBOztzSUFBQSxBQUNaLEFBQ047O1VBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjtVQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtVQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjtVQUFBLEFBQUssUUFBTCxBQUFhLEFBQ2I7VUFBQSxBQUFLLFFBQVEsRUFBRSxPQUFGLEFBQVMsV0FBVyxPQUFqQyxBQUFhLEFBQTJCLEFBQ3hDO1VBQUEsQUFBSyxnQkFBZ0IsTUFBQSxBQUFLLGNBQUwsQUFBbUIsS0FBeEMsQUFDQTtVQUFBLEFBQUssWUFBWSxNQUFBLEFBQUssVUFBTCxBQUFlLEtBUmQsQUFRbEI7V0FDRDs7Ozs7eUNBRXFCO21CQUNwQjs7V0FBQSxBQUFLLFlB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WjtBQUNBO2FBQUEsQUFBSyxhQUFhLEtBQUEsQUFBSyxXQUFMLEFBQWdCLFFBQVEsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsTUFBaEIsQUFBc0IsWUFBdEIsQUFBa0MsS0FBMUQsQUFBd0IsQUFBdUMsVUFBUSxLQUF6RixBQUFrQixBQUE0RSxBQUM5RjtBQUNBO2FBQUEsQUFBSyxhQUFhLEtBQUEsQUFBSyxXQUFMLEFBQWdCLFFBQWhCLEFBQXdCLFdBQTFDLEFBQWtCLEFBQW1DLEFBQ3JEO2FBQUEsQUFBSyxhQUFhLEtBQUEsQUFBSyxXQUFMLEFBQWdCLFFBQWhCLEFBQXdCLFVBQTFDLEFBQWtCLEFBQWtDLEFBQ3BEO3NCQUFjLFlBQUEsQUFBWSxRQUFaLEFBQW9CLFdBQWxDLEFBQWMsQUFBK0IsQUFDN0M7c0JBQWMsWUFBQSxBQUFZLFFBQVosQUFBb0IsVUFBbEMsQUFBYyxBQUE4QixBQUM1QzsrQkFDRSxjQUFBOzhDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ0c7QUFESDtBQUFBLFNBQUEsaUNBQUEsQUFDRyxBQUFPLEFBQ1I7cUJBQUE7O3NCQUFBO3dCQUZGLEFBRUUsQUFDQztBQUREO0FBQUEsMkNBQ1EsS0FIVixBQUdHLEFBQVk7bUJBSGY7ZUFERixBQUNFLEFBV0g7QUFYRztBQXZCSixhQWtDTyxBQUNMO2VBQUEsQUFBTyxBQUNSO0FBQ0Y7Ozs7O0FBN0UwQixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9DbG9uZXMvR2l0aHViL2p1dmFzcXVlemcvbm9kZS1zbmFrZS13ZWIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/admin/Clones/Github/juvasquezg/node-snake-web/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/admin/Clones/Github/juvasquezg/node-snake-web/pages/index.js"); } } })();
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
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xNjEzZDhjMzk5OTFjZTc5Mzc4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmE4NTRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFyc2VyIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3Qgc2NvcmVib2FyZCA9IGB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgICAgICAgICAgICAgICAgICBTQ09SRTogMCAgICAgICAgICAgICAgICAgICAgfFxufCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zbmFrZSA9IFtdXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnJ1xuICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmRcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMuc3RhdGUgPSB7IGJvYXJkOiB1bmRlZmluZWQsIHN0YXJ0OiBmYWxzZSB9XG4gICAgdGhpcy5wdXRPblRoZUJvYXJkID0gdGhpcy5wdXRPblRoZUJvYXJkLmJpbmQodGhpcylcbiAgICB0aGlzLnNldHVwR2FtZSA9IHRoaXMuc2V0dXBHYW1lLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgdGhpcy5zZXR1cEdhbWUoKS50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdHJ1ZSB9KSlcbiAgfVxuXG4gIGFzeW5jIHNldHVwR2FtZSAoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3N0YXRpYy9ib2FyZC50eHQnKVxuICAgIGNvbnN0IGJvYXJkID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBib2FyZC50b1N0cmluZygpLnNwbGl0KCdcXG4nKS5tYXAocmIgPT4gcmIuc3BsaXQoJycpKSB9KVxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZFxuICAgIHRoaXMuc25ha2UgPSBbWzMsIDEyXSwgWzMsIDExXSwgWzIsIDExXV1cbiAgICB0aGlzLnB1dE9uVGhlQm9hcmQoKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIHB1dE9uVGhlQm9hcmQgKCkge1xuICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5zbGljZSgpXG4gICAgbGV0IHJvd1JhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoYm9hcmQubGVuZ3RoIC0gMSkgLSAxKSkgKyAxXG4gICAgbGV0IGNvbFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgoYm9hcmRbMF0ubGVuZ3RoIC0gMSkgLSAxKSkgKyAxXG4gICAgd2hpbGUgKGJvYXJkW3Jvd1JhbmRvbV1bY29sUmFuZG9tXSA9PT0gJy4nKSB7XG4gICAgICByb3dSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKGJvYXJkLmxlbmd0aCAtIDEpIC0gMSkpICsgMVxuICAgICAgY29sUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKChib2FyZFswXS5sZW5ndGgpIC0gMSkpICsgMVxuICAgIH1cbiAgICBib2FyZFtyb3dSYW5kb21dW2NvbFJhbmRvbV0gPSAnLidcbiAgICB0aGlzLnNldFN0YXRlKHsgYm9hcmQgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYm9hcmQgJiYgdGhpcy5zdGF0ZS5zdGFydCkge1xuICAgICAgY29uc29sZS5sb2coJ0VudHJvIGEgcGludGFyIGVsIGJvYXJkJylcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oW1xcbl0pL2csICc8YnI+JylcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oWyBdKS9nLCAnJm5ic3A7JylcbiAgICAgIGxldCByb3csIGNvbFxuICAgICAgLy8gcHJpbnQgdGhlIHNuYWtlIG9uIHRoZSBib2FyZFxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zbmFrZVtpXVxuICAgICAgICByb3cgPSBjdXJyZW50UG9zaXRpb25bMF1cbiAgICAgICAgY29sID0gY3VycmVudFBvc2l0aW9uWzFdXG4gICAgICAgIHRoaXMuc3RhdGUuYm9hcmRbcm93XVtjb2xdID0gJy4nXG4gICAgICB9XG4gICAgICBsZXQgYm9hcmRTdHJpbmcgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcChyb3cgPT4gcm93LmpvaW4oJycpKS5qb2luKCdcXG4nKVxuICAgICAgY29uc29sZS5sb2coYm9hcmRTdHJpbmcpXG4gICAgICAvLyB1cGRhdGUgc2NvcmVcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKHRoaXMuc2NvcmVib2FyZC5tYXRjaCgvKFswLTldKS9nKS5qb2luKCcnKSwgYCR7dGhpcy5zY29yZX1gKVxuICAgICAgLy8gcHJpbnQgYm9hcmRcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oW1xcbl0pL2csICc8YnI+JylcbiAgICAgIHRoaXMuc2NvcmVib2FyZCA9IHRoaXMuc2NvcmVib2FyZC5yZXBsYWNlKC8oWyBdKS9nLCAnJm5ic3A7JylcbiAgICAgIGJvYXJkU3RyaW5nID0gYm9hcmRTdHJpbmcucmVwbGFjZSgvKFtcXG5dKS9nLCAnPGJyPicpXG4gICAgICBib2FyZFN0cmluZyA9IGJvYXJkU3RyaW5nLnJlcGxhY2UoLyhbIF0pL2csICcmbmJzcDsnKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rlcm1pbmFsJz5cbiAgICAgICAgICB7UGFyc2VyKGJvYXJkU3RyaW5nKX1cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7UGFyc2VyKHRoaXMuc2NvcmVib2FyZCl9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFGQTtBQVdBO0FBWEE7QUF2QkE7QUFvQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==