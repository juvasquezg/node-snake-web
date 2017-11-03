'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\nxjulian\\Clones\\Github\\juvasquezg\\node-snake-web\\pages\\index.js?entry';


var scoreboard = '|                                              |\n|                  SCORE: 0                    |\n|                                              |\n ----------------------------------------------';

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.board = undefined;
    _this.snake = [];
    _this.direction = '';
    _this.scoreboard = scoreboard;
    _this.score = 0;
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      scoreboard = scoreboard.replace('\n', '<br>');
      scoreboard = scoreboard.replace(/([ ])/g, '&nbsp;');
      console.log(scoreboard);
      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: scoreboard }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      });
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInNjb3JlYm9hcmQiLCJwcm9wcyIsImJvYXJkIiwidW5kZWZpbmVkIiwic25ha2UiLCJkaXJlY3Rpb24iLCJzY29yZSIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQUksYUFBSjs7O2tDQU1FOztrQkFBQSxBQUFhLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1osQUFDTjs7VUFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO1VBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjtVQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtVQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjtVQUFBLEFBQUssUUFOYSxBQU1sQixBQUFhO1dBQ2Q7Ozs7OzZCQUVTLEFBQ1I7bUJBQWEsV0FBQSxBQUFXLFFBQVgsQUFBbUIsTUFBaEMsQUFBYSxBQUF5QixBQUN0QzttQkFBYSxXQUFBLEFBQVcsUUFBWCxBQUFtQixVQUFoQyxBQUFhLEFBQTZCLEFBQzFDO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtvREFBYSx5QkFBeUIsRUFBRSxRQUFoQyxBQUE4QixBQUFVO29CQUF4QztzQkFBUixBQUFRLEFBQ1Q7QUFEUztPQUFBOzs7OztBQWRpQixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL254anVsaWFuL0Nsb25lcy9HaXRodWIvanV2YXNxdWV6Zy9ub2RlLXNuYWtlLXdlYiJ9