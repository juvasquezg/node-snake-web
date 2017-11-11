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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _htmlReactParser = require('html-react-parser');

var _htmlReactParser2 = _interopRequireDefault(_htmlReactParser);

var _isomorphicUnfetch = require('isomorphic-unfetch');

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