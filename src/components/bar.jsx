import React from 'react'

var ReactBootstrap = require('react-bootstrap');
var ProgressBar = ReactBootstrap.ProgressBar;

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className={this.props.textStyle}>{this.props.value + "/" + this.props.maxValue}</div>
        <ProgressBar bsStyle={this.props.barStyle} now={this.props.maxValue / this.props.value * 100} />
      </div>
    );
  }
};

Bar.propTypes = {
  'maxValue': React.PropTypes.number,
  'value': React.PropTypes.number,
  'barStyle': React.PropTypes.string,
  'textStyle': React.PropTypes.string,
  'label': React.PropTypes.string
};

export default Bar;
