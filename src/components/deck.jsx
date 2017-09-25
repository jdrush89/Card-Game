import React from 'react'
import classNames from 'classnames'
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

class Deck extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let classes;

    classes = classNames(
      'deck',
      this.props.className
    );

    return (
      <div className={classes}>
        <div align='center'>
          {this.props.count}
        </div>
        <div className='button-row'>
          <Button className='draw-button' onClick={this.onDraw.bind(this)}>Draw</Button>
        </div>
      </div>
    );
  }

  onDraw () {
    if (this.props.count) {
      this.props.onDraw();
    }
  }
}

Deck.propTypes = {
  'cardCount': React.PropTypes.number,
  'onDraw': React.PropTypes.func
};

export default Deck;
