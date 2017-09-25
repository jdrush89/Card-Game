'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactBootstrap = require('react-bootstrap');
var ProgressBar = ReactBootstrap.ProgressBar;

var Bar = function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar(props) {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).call(this, props));
  }

  _createClass(Bar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        _react2.default.createElement(
          'div',
          { className: this.props.textStyle },
          this.props.value + "/" + this.props.maxValue
        ),
        _react2.default.createElement(ProgressBar, { bsStyle: this.props.barStyle, now: this.props.maxValue / this.props.value * 100 })
      );
    }
  }]);

  return Bar;
}(_react2.default.Component);

;

Bar.propTypes = {
  'maxValue': _react2.default.PropTypes.number,
  'value': _react2.default.PropTypes.number,
  'barStyle': _react2.default.PropTypes.string,
  'textStyle': _react2.default.PropTypes.string,
  'label': _react2.default.PropTypes.string
};

exports.default = Bar;
//# sourceMappingURL=bar.js.map
