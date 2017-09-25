var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var {Route, IndexRoute, Link} = Router;
var ReactBootstrap = require('react-bootstrap');
var {Grid, Row, Col, ProgressBar} = ReactBootstrap;
var Deck = require('../components/deck').default;
var Card = require('../components/card').default;
var Dice = require('../components/dice').default;
var Reducer = require('../components/reducer').default;
var Bar = require('../components/bar').default;
import { createStore } from 'redux'

let store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(Reducer.reduce, Reducer.initialState);

var App = React.createClass({
  render: function () {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
});

var HomePage = React.createClass({
  handlePlayerDraw: function () {
    store.dispatch({ type: 'PLAYER-DRAW' });
    this.forceUpdate();
  },

  handleLocationDraw: function () {
    store.dispatch({ type: 'LOCATION-DRAW' });
    this.forceUpdate();
  },

  handleLocationDiscard: function (id) {
    store.dispatch({ type: 'DISCARD-LOCATION-CARD', id: id });
    this.forceUpdate();
  },

  handlePlayerDiscard: function (id) {
    store.dispatch({ type: 'DISCARD-PLAYER-CARD', id: id });
    this.forceUpdate();
  },

  rollD10: function () {
    store.dispatch({ type: 'ROLL-D10' });
    this.forceUpdate();
  },

  rollD6: function () {
    store.dispatch({ type: 'ROLL-D6' });
    this.forceUpdate();
  },

  rollD4: function () {
    store.dispatch({ type: 'ROLL-D4' });
    this.forceUpdate();
  },

  getCardTextElements: function (text) {
    var lines, elements, lineCount;

    lines = text.split("\n");
    elements = [];
    lineCount = 0;

    for(var line of lines) {
      elements.push(<p className='card-line' key={lineCount++}>{line}</p>);
    }
    return elements;
  },

  getLocationCards: function () {
    var cards;

    cards = [];
    for (var card of store.getState().locationCards) {
      cards.push(
        <Card onDiscard={this.handleLocationDiscard.bind(this, card.id)} key={card.id}>
          {this.getCardTextElements(card.text)}
        </Card>
      );
    }
    return cards;
  },

  getPlayerCards: function () {
    var cards;

    cards = [];
    for (var card of store.getState().playerHand) {
      cards.push(
        <Card onDiscard={this.handlePlayerDiscard.bind(this, card.id)} onPlay={card.onPlay} key={card.id}>
          {this.getCardTextElements(card.text)}
        </Card>
      );
    }
    return cards;
  },

  getD6Images: function () {
    return [
      'assets/d6-1.gif',
      'assets/d6-2.gif',
      'assets/d6-3.gif',
      'assets/d6-4.gif',
      'assets/d6-5.gif',
      'assets/d6-6.gif'
    ];
  },

  render: function () {
    return (
      <Grid className='board'>
        <Row>
          <Col componentClass={'span'}>
            <Deck className='cell' count={store.getState().locationDeck.length} onDraw={this.handleLocationDraw}/>
          </Col>
          <Col>
            <div className='hand cell'>
              {this.getLocationCards()}
            </div>
          </Col>
        </Row>
        <Row className='row-small'>
          <Col>
            <Dice onRoll={this.rollD6} value={store.getState().d6} images={this.getD6Images()}/>
          </Col>
        </Row>
        <Row className='row-small second-row'>
          <Col>
            <Dice onRoll={this.rollD4} value={store.getState().d4} images={this.getD6Images()}/>
          </Col>
        </Row>
        <Row>
          <Col componentClass={'span'}>
            <Deck className='cell' count={store.getState().playerDeck.length} onDraw={this.handlePlayerDraw}/>
          </Col>
          <Col>
            <div className='hand cell'>
              {this.getPlayerCards()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Bar
              className='health-bar'
              textStyle='health-text'
              barStyle='success'
              label='Health'
              maxValue={store.getState().playerMaxHealth}
              value={store.getState().playerHealth} />
          </Col>
        </Row>
      </Grid>
    );
  }
});

var routes = (
  <Route component={App} path='/'>
    <IndexRoute component={HomePage}/>
  </Route>
);

ReactDOM.render((
  <Router.Router history={Router.hashHistory}>
    {routes}
  </Router.Router>
), document.getElementById('example'));
