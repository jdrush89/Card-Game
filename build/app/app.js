'use strict';

var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
require('src/components/nav_bar');

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
      React.createElement(MainNavBar, null),
      React.createElement(RouteHandler, null)
    );
  }
});

var HomePage = React.createClass({
  displayName: 'HomePage',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement('iframe', { className: 'home-video', src: 'https://www.youtube.com/v/WWZHI90km_c' }),
      React.createElement(
        ReactBootstrap.Pager,
        null,
        React.createElement(
          ReactBootstrap.PageItem,
          { href: '#' },
          'Previous'
        ),
        ' ',
        React.createElement(
          ReactBootstrap.PageItem,
          { href: '#' },
          'Next'
        )
      )
    );
  }
});

var MusicPage = React.createClass({
  displayName: 'MusicPage',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'Music'
    );
  }
});

var VideosPage = React.createClass({
  displayName: 'VideosPage',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row video-row' },
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/xnFPxQZU7Dc' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/3xzCb4YDnwU' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/I8kLDGohL50' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row video-row' },
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/lTkj46_YJ-E' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/ptoheCVhhdk' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/IQ_fkWeuGLA' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row video-row' },
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/q2uYlEFQ15w' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/tSfKs1sudDk' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/5c18CcEx1bg' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row video-row' },
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/6Z7LrCWj4k0' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/8TphcpU4OP8' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('iframe', { src: 'https://www.youtube.com/v/bPGMqnwIsow' })
          )
        )
      )
    );
  }
});

var routes = React.createElement(
  Route,
  { handler: App, path: '/' },
  React.createElement(DefaultRoute, { handler: HomePage }),
  React.createElement(Route, { name: 'music', path: 'music', handler: MusicPage }),
  React.createElement(Route, { name: 'videos', path: 'videos', handler: VideosPage })
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('example'));
});