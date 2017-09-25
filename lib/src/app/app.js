'use strict';

var _redux = require('redux');

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var Link = Router.Link;

var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var ProgressBar = ReactBootstrap.ProgressBar;

var Deck = require('../components/deck').default;
var Card = require('../components/card').default;
var Dice = require('../components/dice').default;
var Reducer = require('../components/reducer').default;
var Bar = require('../components/bar').default;

var store = (window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore)(Reducer.reduce, Reducer.initialState);

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'App' },
      this.props.children
    );
  }
});

var HomePage = React.createClass({
  displayName: 'HomePage',

  handlePlayerDraw: function handlePlayerDraw() {
    store.dispatch({ type: 'PLAYER-DRAW' });
    this.forceUpdate();
  },

  handleLocationDraw: function handleLocationDraw() {
    store.dispatch({ type: 'LOCATION-DRAW' });
    this.forceUpdate();
  },

  handleLocationDiscard: function handleLocationDiscard(id) {
    store.dispatch({ type: 'DISCARD-LOCATION-CARD', id: id });
    this.forceUpdate();
  },

  handlePlayerDiscard: function handlePlayerDiscard(id) {
    store.dispatch({ type: 'DISCARD-PLAYER-CARD', id: id });
    this.forceUpdate();
  },

  rollD10: function rollD10() {
    store.dispatch({ type: 'ROLL-D10' });
    this.forceUpdate();
  },

  rollD6: function rollD6() {
    store.dispatch({ type: 'ROLL-D6' });
    this.forceUpdate();
  },

  rollD4: function rollD4() {
    store.dispatch({ type: 'ROLL-D4' });
    this.forceUpdate();
  },

  getCardTextElements: function getCardTextElements(text) {
    var lines, elements, lineCount;

    lines = text.split("\n");
    elements = [];
    lineCount = 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var line = _step.value;

        elements.push(React.createElement(
          'p',
          { className: 'card-line', key: lineCount++ },
          line
        ));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return elements;
  },

  getLocationCards: function getLocationCards() {
    var cards;

    cards = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = store.getState().locationCards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var card = _step2.value;

        cards.push(React.createElement(
          Card,
          { onDiscard: this.handleLocationDiscard.bind(this, card.id), key: card.id },
          this.getCardTextElements(card.text)
        ));
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return cards;
  },

  getPlayerCards: function getPlayerCards() {
    var cards;

    cards = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = store.getState().playerHand[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var card = _step3.value;

        cards.push(React.createElement(
          Card,
          { onDiscard: this.handlePlayerDiscard.bind(this, card.id), onPlay: card.onPlay, key: card.id },
          this.getCardTextElements(card.text)
        ));
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return cards;
  },

  getD6Images: function getD6Images() {
    return ['assets/d6-1.gif', 'assets/d6-2.gif', 'assets/d6-3.gif', 'assets/d6-4.gif', 'assets/d6-5.gif', 'assets/d6-6.gif'];
  },

  render: function render() {
    return React.createElement(
      Grid,
      { className: 'board' },
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { componentClass: 'span' },
          React.createElement(Deck, { className: 'cell', count: store.getState().locationDeck.length, onDraw: this.handleLocationDraw })
        ),
        React.createElement(
          Col,
          null,
          React.createElement(
            'div',
            { className: 'hand cell' },
            this.getLocationCards()
          )
        )
      ),
      React.createElement(
        Row,
        { className: 'row-small' },
        React.createElement(
          Col,
          null,
          React.createElement(Dice, { onRoll: this.rollD6, value: store.getState().d6, images: this.getD6Images() })
        )
      ),
      React.createElement(
        Row,
        { className: 'row-small second-row' },
        React.createElement(
          Col,
          null,
          React.createElement(Dice, { onRoll: this.rollD4, value: store.getState().d4, images: this.getD6Images() })
        )
      ),
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { componentClass: 'span' },
          React.createElement(Deck, { className: 'cell', count: store.getState().playerDeck.length, onDraw: this.handlePlayerDraw })
        ),
        React.createElement(
          Col,
          null,
          React.createElement(
            'div',
            { className: 'hand cell' },
            this.getPlayerCards()
          )
        )
      ),
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          null,
          React.createElement(Bar, {
            className: 'health-bar',
            textStyle: 'health-text',
            barStyle: 'success',
            label: 'Health',
            maxValue: store.getState().playerMaxHealth,
            value: store.getState().playerHealth })
        )
      )
    );
  }
});

var routes = React.createElement(
  Route,
  { component: App, path: '/' },
  React.createElement(IndexRoute, { component: HomePage })
);

ReactDOM.render(React.createElement(
  Router.Router,
  { history: Router.hashHistory },
  routes
), document.getElementById('example'));
//# sourceMappingURL=app.js.map
