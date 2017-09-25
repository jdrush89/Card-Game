'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navigation = require('react-router').Navigation;

var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;

window.MainNavBar = React.createClass({
  displayName: 'MainNavBar',

  mixins: [Navigation],

  render: function render() {
    return React.createElement(
      Navbar,
      { inverse: true },
      React.createElement(
        Nav,
        { right: true },
        React.createElement(
          NavItem,
          { href: '#', onClick: function (e) {
              this._clickTransition(e, 'home');
            }.bind(this) },
          'Home'
        ),
        React.createElement(
          NavItem,
          { href: '#', onClick: function (e) {
              this._clickTransition(e, 'videos');
            }.bind(this) },
          'Videos'
        ),
        React.createElement(
          NavItem,
          { href: '#', onClick: function (e) {
              this._clickTransition(e, 'music');
            }.bind(this) },
          'Music'
        ),
        React.createElement(
          NavItem,
          { href: 'Resume.pdf' },
          'Resume'
        )
      )
    );
  },

  _clickTransition: function _clickTransition(e, name) {
    this.transitionTo(name);
    e.preventDefault();
  }
});