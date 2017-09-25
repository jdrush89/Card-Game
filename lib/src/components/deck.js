'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

var Deck = function (_React$Component) {
  _inherits(Deck, _React$Component);

  function Deck(props) {
    _classCallCheck(this, Deck);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Deck).call(this, props));
  }

  _createClass(Deck, [{
    key: 'render',
    value: function render() {
      var classes = undefined;

      classes = (0, _classnames2.default)('deck', this.props.className);

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          'div',
          { align: 'center' },
          this.props.count
        ),
        _react2.default.createElement(
          'div',
          { className: 'button-row' },
          _react2.default.createElement(
            Button,
            { className: 'draw-button', onClick: this.onDraw.bind(this) },
            'Draw'
          )
        )
      );
    }
  }, {
    key: 'onDraw',
    value: function onDraw() {
      if (this.props.count) {
        this.props.onDraw();
      }
    }
  }]);

  return Deck;
}(_react2.default.Component);

Deck.propTypes = {
  'cardCount': _react2.default.PropTypes.number,
  'onDraw': _react2.default.PropTypes.func
};

exports.default = Deck;
//# sourceMappingURL=deck.js.map
