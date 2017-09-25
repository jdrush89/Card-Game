'use strict';

var React = require('react');
var Router = require('react-router');
// var { Route, DefaultRoute, RouteHandler, Link } = Router;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            { to: 'dashboard' },
            'Dashboard'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            Link,
            { to: 'form' },
            'Form'
          )
        )
      ),
      React.createElement(RouteHandler, null)
    );
  }
});

var Home = React.createClass({
  displayName: 'Home',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Home'
    );
  }
});

var Dashboard = React.createClass({
  displayName: 'Dashboard',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Dashboard'
    );
  }
});

var Form = React.createClass({
  displayName: 'Form',

  contextTypes: {
    router: React.PropTypes.func
  },

  statics: {
    willTransitionFrom: function willTransitionFrom(transition, element) {
      if (element.refs.userInput.getDOMNode().value !== '') {
        if (!confirm('You have unsaved information, are you sure you want to leave this page?')) {
          transition.abort();
        }
      }
    }
  },

  handleSubmit: function handleSubmit(event) {
    event.preventDefault();
    this.refs.userInput.getDOMNode().value = '';
    this.context.router.transitionTo('/');
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'p',
          null,
          'Click the dashboard link with text in the input.'
        ),
        React.createElement('input', { type: 'text', ref: 'userInput', defaultValue: 'ohai' }),
        React.createElement(
          'button',
          { type: 'submit' },
          'Go'
        )
      )
    );
  }
});

var routes = React.createElement(
  Route,
  { handler: App },
  React.createElement(DefaultRoute, { handler: Home }),
  React.createElement(Route, { name: 'dashboard', handler: Dashboard }),
  React.createElement(Route, { name: 'form', handler: Form })
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('example'));
});