import React from 'react'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='card'>
        {this.props.children}
        <div className='button-row'>
          <Button className='play-button' onClick={() => {this.props.onPlay()}}>Play</Button>
          <Button className='discard-button' onClick={() => {this.props.onDiscard()}}>Discard</Button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  'onDiscard': React.PropTypes.func,
  'onPlay': React.PropTypes.func
};

Card.defaultProps = {
  'onPlay': () => {}
};


export default Card;
