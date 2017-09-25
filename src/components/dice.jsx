import React from 'react'

class Dice extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='dice' onClick={() => {this.props.onRoll()}}>
        <img className='dice' src={this.props.images[this.props.value - 1]} />
      </div>
    );
  }
}

Dice.propTypes = {
  'onRoll': React.PropTypes.func,
  'value': React.PropTypes.number,
  'images': React.PropTypes.arrayOf(React.PropTypes.string)
};

export default Dice;
